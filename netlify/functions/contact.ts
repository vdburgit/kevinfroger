import { Handler } from '@netlify/functions';

interface ContactFormData {
  name: string;
  email: string;
  phone?: string;
  eventType: string;
  eventDate?: string;
  location?: string;
  guestCount?: string;
  budget?: string;
  message?: string;
}

const handler: Handler = async (event, context) => {
  // Only allow POST requests
  if (event.httpMethod !== 'POST') {
    return {
      statusCode: 405,
      headers: {
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Headers': 'Content-Type',
        'Access-Control-Allow-Methods': 'POST, OPTIONS',
      },
      body: JSON.stringify({ error: 'Method not allowed' }),
    };
  }

  // Handle CORS preflight
  if (event.httpMethod === 'OPTIONS') {
    return {
      statusCode: 200,
      headers: {
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Headers': 'Content-Type',
        'Access-Control-Allow-Methods': 'POST, OPTIONS',
      },
      body: '',
    };
  }

  try {
    const formData: ContactFormData = JSON.parse(event.body || '{}');

    // Validate required fields
    if (!formData.name || !formData.email || !formData.eventType) {
      return {
        statusCode: 400,
        headers: {
          'Access-Control-Allow-Origin': '*',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ error: 'Verplichte velden ontbreken' }),
      };
    }

    // Create email content
    const emailSubject = `Nieuwe booking aanvraag van ${formData.name} - ${formData.eventType}`;
    
    const emailBody = `
Nieuwe booking aanvraag via kevinfroger.nl

CONTACTGEGEVENS:
- Naam: ${formData.name}
- Email: ${formData.email}
- Telefoon: ${formData.phone || 'Niet opgegeven'}

EVENEMENT DETAILS:
- Type evenement: ${formData.eventType}
- Datum: ${formData.eventDate || 'Niet opgegeven'}
- Locatie: ${formData.location || 'Niet opgegeven'}
- Aantal gasten: ${formData.guestCount || 'Niet opgegeven'}
- Budget indicatie: ${formData.budget || 'Niet opgegeven'}

BERICHT:
${formData.message || 'Geen aanvullende informatie'}

---
Deze aanvraag is verzonden via het contactformulier op kevinfroger.nl
Datum: ${new Date().toLocaleString('nl-NL')}
    `.trim();

    // For now, we'll use a simple email service like EmailJS or Formspree
    // Since we can't use external email services directly in Netlify Functions without API keys,
    // we'll use the Netlify Forms feature instead by creating a form submission

    // Create a form submission that Netlify can handle
    const formSubmission = new URLSearchParams({
      'form-name': 'contact',
      'name': formData.name,
      'email': formData.email,
      'phone': formData.phone || '',
      'eventType': formData.eventType,
      'eventDate': formData.eventDate || '',
      'location': formData.location || '',
      'guestCount': formData.guestCount || '',
      'budget': formData.budget || '',
      'message': formData.message || '',
      'subject': emailSubject,
      'body': emailBody
    });

    // Use environment URL instead of hardcoded production URL
    const siteUrl = process.env.URL || 'http://localhost:8888';
    
    // Submit to Netlify Forms
    const netlifyResponse = await fetch(siteUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
      },
      body: formSubmission.toString()
    });

    if (!netlifyResponse.ok) {
      throw new Error('Failed to submit form');
    }

    return {
      statusCode: 200,
      headers: {
        'Access-Control-Allow-Origin': '*',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ 
        success: true, 
        message: 'Aanvraag succesvol verzonden naar mail@kevinfroger.nl' 
      }),
    };

  } catch (error) {
    console.error('Error processing contact form:', error);
    
    return {
      statusCode: 500,
      headers: {
        'Access-Control-Allow-Origin': '*',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ 
        error: 'Er is een fout opgetreden bij het verzenden van je bericht' 
      }),
    };
  }
};

export { handler };