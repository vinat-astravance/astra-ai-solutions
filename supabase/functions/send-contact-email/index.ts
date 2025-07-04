
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

    // Send email using Resend
    const resendApiKey = Deno.env.get('RESEND_API_KEY')
    
    if (!resendApiKey) {
      console.error('RESEND_API_KEY not found in environment variables')
      throw new Error('Email service not configured')
    }

    const emailContent = `
      <h2>New Contact Form Submission</h2>
      
      <p><strong>Name:</strong> ${firstName} ${lastName}</p>
      <p><strong>Email:</strong> ${email}</p>
      <p><strong>Company:</strong> ${company || 'Not provided'}</p>
      <p><strong>Project Type:</strong> ${projectType || 'Not specified'}</p>
      
      <h3>Message:</h3>
      <p>${message}</p>
      
      <hr>
      <p><em>This message was sent from the Astravance AI website contact form.</em></p>
    `

    const resendResponse = await fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${resendApiKey}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        from: 'Contact Form <noreply@astravance.ai>',
        to: ['vinat@astravance.ai', 'info@astravance.ai'],
        subject: `New Contact Form Submission from ${firstName} ${lastName}`,
        html: emailContent,
        reply_to: email
      }),
    })

    if (!resendResponse.ok) {
      const errorText = await resendResponse.text()
      console.error('Resend API error:', errorText)
      throw new Error(`Failed to send email: ${resendResponse.status}`)
    }

    const resendResult = await resendResponse.json()
    console.log('Email sent successfully:', resendResult)

    // Store the submission in Supabase database
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
