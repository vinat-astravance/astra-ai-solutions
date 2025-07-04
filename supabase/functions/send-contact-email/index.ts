
import { serve } from "https://deno.land/std@0.168.0/http/server.ts"
import { createClient } from 'https://esm.sh/@supabase/supabase-js@2'

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
  'Access-Control-Allow-Methods': 'POST, OPTIONS',
}

serve(async (req) => {
  // Handle CORS preflight requests
  if (req.method === 'OPTIONS') {
    return new Response('ok', { 
      headers: corsHeaders,
      status: 200
    })
  }

  if (req.method !== 'POST') {
    return new Response(
      JSON.stringify({ error: 'Method not allowed' }),
      {
        headers: { ...corsHeaders, 'Content-Type': 'application/json' },
        status: 405,
      }
    )
  }

  try {
    console.log('Received request:', req.method, req.url)
    
    const { firstName, lastName, email, company, projectType, message } = await req.json()
    console.log('Form data received:', { firstName, lastName, email, company, projectType })

    // Validate required fields
    if (!firstName || !lastName || !email || !message) {
      return new Response(
        JSON.stringify({ error: 'Missing required fields' }),
        {
          headers: { ...corsHeaders, 'Content-Type': 'application/json' },
          status: 400,
        }
      )
    }

    // Send email using Resend
    const resendApiKey = Deno.env.get('RESEND_API_KEY')
    
    if (!resendApiKey) {
      console.error('RESEND_API_KEY not found in environment variables')
      return new Response(
        JSON.stringify({ error: 'Email service not configured' }),
        {
          headers: { ...corsHeaders, 'Content-Type': 'application/json' },
          status: 500,
        }
      )
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

    console.log('Sending email via Resend...')
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
      return new Response(
        JSON.stringify({ error: `Failed to send email: ${resendResponse.status}` }),
        {
          headers: { ...corsHeaders, 'Content-Type': 'application/json' },
          status: 500,
        }
      )
    }

    const resendResult = await resendResponse.json()
    console.log('Email sent successfully:', resendResult)

    // Store the submission in Supabase database (optional)
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
      // Don't fail the request if database insert fails
    }

    return new Response(
      JSON.stringify({ success: true, message: 'Contact form submitted successfully' }),
      {
        headers: { ...corsHeaders, 'Content-Type': 'application/json' },
        status: 200,
      }
    )
  } catch (error) {
    console.error('Error in function:', error)
    return new Response(
      JSON.stringify({ 
        error: 'Failed to process contact form', 
        details: error.message 
      }),
      {
        headers: { ...corsHeaders, 'Content-Type': 'application/json' },
        status: 500,
      }
    )
  }
})
