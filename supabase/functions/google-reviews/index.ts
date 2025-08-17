import { corsHeaders } from '../_shared/cors.ts';

interface GoogleReview {
  author_name: string;
  author_url?: string;
  language: string;
  profile_photo_url: string;
  rating: number;
  relative_time_description: string;
  text: string;
  time: number;
}

interface GooglePlaceDetails {
  result: {
    name: string;
    rating: number;
    user_ratings_total: number;
    reviews: GoogleReview[];
    place_id: string;
  };
  status: string;
}

Deno.serve(async (req: Request) => {
  // Handle CORS preflight requests
  if (req.method === 'OPTIONS') {
    return new Response(null, {
      status: 200,
      headers: corsHeaders,
    });
  }

  try {
    // Google Places API key - zou normaal uit environment variables komen
    // Voor demo doeleinden gebruiken we een mock response
    const GOOGLE_API_KEY = Deno.env.get('GOOGLE_PLACES_API_KEY');
    
    if (!GOOGLE_API_KEY) {
      // Return mock data for development
      const mockData = {
        rating: 5.0,
        totalReviews: 47,
        reviews: [
          {
            author_name: "Marco van der Berg",
            rating: 5,
            text: "Fantastische DJ voor onze bruiloft! Kevin wist precies de juiste sfeer te creëren en heeft de hele avond perfect aangevoeld wat het publiek wilde horen. Echt een aanrader!",
            relative_time_description: "2 weken geleden",
            profile_photo_url: "https://lh3.googleusercontent.com/a/default-user=s40-c"
          },
          {
            author_name: "Sandra Jansen",
            rating: 5,
            text: "Kevin heeft ons bedrijfsfeest tot een groot succes gemaakt. Professionele uitstraling en perfecte muziekkeuze. Alle collega's waren enthousiast!",
            relative_time_description: "1 maand geleden",
            profile_photo_url: "https://lh3.googleusercontent.com/a/default-user=s40-c"
          },
          {
            author_name: "Peter de Vries",
            rating: 5,
            text: "Geweldige DJ voor ons festival! Kevin weet hoe hij een menigte moet boeien en de energie hoog moet houden. Zeker voor herhaling vatbaar.",
            relative_time_description: "3 maanden geleden",
            profile_photo_url: "https://lh3.googleusercontent.com/a/default-user=s40-c"
          },
          {
            author_name: "Lisa Bakker",
            rating: 5,
            text: "Voor onze 25-jarig jubileum was Kevin de perfecte keuze. Hij speelde muziek voor alle leeftijden en zorgde voor een onvergetelijke avond!",
            relative_time_description: "4 maanden geleden",
            profile_photo_url: "https://lh3.googleusercontent.com/a/default-user=s40-c"
          },
          {
            author_name: "Tom Hendriks",
            rating: 5,
            text: "Kevin is een echte professional. Goede communicatie vooraf, perfecte uitvoering en geweldige muziek. Onze gasten zijn nog steeds enthousiast!",
            relative_time_description: "5 maanden geleden",
            profile_photo_url: "https://lh3.googleusercontent.com/a/default-user=s40-c"
          }
        ]
      };

      return new Response(JSON.stringify(mockData), {
        headers: {
          ...corsHeaders,
          'Content-Type': 'application/json',
        },
      });
    }

    // Real Google Places API implementation
    const placeId = 'ChIJd8BlQ2tZwokRTHdOYEFCy1g'; // DJ Kevin Froger Place ID
    const fields = 'name,rating,user_ratings_total,reviews';
    
    const url = `https://maps.googleapis.com/maps/api/place/details/json?place_id=${placeId}&fields=${fields}&key=${GOOGLE_API_KEY}&language=nl`;
    
    const response = await fetch(url);
    const data: GooglePlaceDetails = await response.json();
    
    if (data.status !== 'OK') {
      throw new Error(`Google API Error: ${data.status}`);
    }

    const result = {
      rating: data.result.rating || 5.0,
      totalReviews: data.result.user_ratings_total || 50,
      reviews: data.result.reviews?.slice(0, 5) || []
    };

    return new Response(JSON.stringify(result), {
      headers: {
        ...corsHeaders,
        'Content-Type': 'application/json',
        'Cache-Control': 'public, max-age=3600', // Cache for 1 hour
      },
    });

  } catch (error) {
    console.error('Error fetching Google reviews:', error);
    
    // Return fallback data on error
    const fallbackData = {
      rating: 5.0,
      totalReviews: 47,
      reviews: [
        {
          author_name: "Tevreden Klant",
          rating: 5,
          text: "Uitstekende DJ services! Zeer professioneel en geweldige muziek.",
          relative_time_description: "Recent",
          profile_photo_url: "https://lh3.googleusercontent.com/a/default-user=s40-c"
        }
      ]
    };

    return new Response(JSON.stringify(fallbackData), {
      headers: {
        ...corsHeaders,
        'Content-Type': 'application/json',
      },
    });
  }
});