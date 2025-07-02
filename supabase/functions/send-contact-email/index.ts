
import { serve } from "https://deno.land/std@0.168.0/http/server.ts"
import { createClient } from 'https://esm.sh/@supabase/supabase-js@2'

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
}

serve(async (req) => {
  if (req.method === 'OPTIONS') {
    return new Response('ok', { headers: corsHeaders })
  }

  try {
    const { firstName, lastName, email, company, projectType, message } = await req.json()

    // Create email content
    const emailContent = `
      New Contact Form Submission
      
      Name: ${firstName} ${lastName}
      Email: ${email}
      Company: ${company}
      Project Type: ${projectType}
      
      Message:
      ${message}
      
      ---
      This message was sent from the Astravance AI website contact form.
    `

    // Here you would integrate with an email service like Resend, SendGrid, etc.
    // For now, we'll log the email and return success
    console.log('Email to send:', {
      to: ['vinat@astravance.ai', 'info@astravance.ai'],
      subject: `New Contact Form Submission from ${firstName} ${lastName}`,
      content: emailContent
    })

    // You can also store the submission in Supabase database
    const supabase = createClient(
      Deno.env.get('SUPABASE_URL') ?? '',
      Deno.env.get('SUPABASE_SERVICE_ROLE_KEY') ?? ''
    )

    const { error } = await supabase
      .from('contact_submissions')
      .insert([
        {
          first_name: firstName,
          last_name: lastName,
          email: email,
          company: company,
          project_type: projectType,
          message: message,
          created_at: new Date().toISOString()
        }
      ])

    if (error) {
      console.error('Database error:', error)
    }

    return new Response(
      JSON.stringify({ success: true, message: 'Contact form submitted successfully' }),
      {
        headers: { ...corsHeaders, 'Content-Type': 'application/json' },
        status: 200,
      },
    )
  } catch (error) {
    console.error('Error:', error)
    return new Response(
      JSON.stringify({ error: 'Failed to process contact form' }),
      {
        headers: { ...corsHeaders, 'Content-Type': 'application/json' },
        status: 500,
      },
    )
  }
})
