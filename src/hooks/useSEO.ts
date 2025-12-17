import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

export interface SEOConfig {
  title: string;
  description: string;
  keywords?: string;
  canonical?: string;
  ogType?: string;
  ogImage?: string;
  ogImageAlt?: string;
  twitterCard?: 'summary' | 'summary_large_image' | 'app' | 'player';
  jsonLd?: Record<string, any> | Record<string, any>[];
  noindex?: boolean;
}

const BASE_URL = 'https://kevinfroger.nl';
const DEFAULT_OG_IMAGE = `${BASE_URL}/images/kevin-portrait.png`;
const DEFAULT_OG_IMAGE_ALT = 'DJ Kevin Froger - Professioneel DJ voor bruiloften en evenementen';

/**
 * Custom hook for managing SEO meta tags, Open Graph, Twitter Cards, and JSON-LD structured data
 * Provides a centralized, consistent way to set SEO data across all pages
 */
export const useSEO = (config: SEOConfig) => {
  const location = useLocation();

  useEffect(() => {
    const {
      title,
      description,
      keywords,
      canonical,
      ogType = 'website',
      ogImage = DEFAULT_OG_IMAGE,
      ogImageAlt = DEFAULT_OG_IMAGE_ALT,
      twitterCard = 'summary_large_image',
      jsonLd,
      noindex = false
    } = config;

    // Set document title
    document.title = title;

    // Get or create canonical URL
    const canonicalUrl = canonical || `${BASE_URL}${location.pathname}`;

    // Helper function to set or update meta tags
    const setMetaTag = (selector: string, content: string, isProperty = false) => {
      const attribute = isProperty ? 'property' : 'name';
      let element = document.querySelector(selector) as HTMLMetaElement;

      if (!element) {
        element = document.createElement('meta');
        element.setAttribute(attribute, selector.match(/\["?(.+?)"?\]/)?.[1] || '');
        document.head.appendChild(element);
      }

      element.setAttribute('content', content);
    };

    // Set basic meta tags
    setMetaTag('meta[name="description"]', description);
    if (keywords) {
      setMetaTag('meta[name="keywords"]', keywords);
    }

    // Set robots meta tag
    if (noindex) {
      setMetaTag('meta[name="robots"]', 'noindex, nofollow');
    } else {
      setMetaTag('meta[name="robots"]', 'index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1');
    }

    // Set canonical link
    let canonicalLink = document.querySelector('link[rel="canonical"]') as HTMLLinkElement;
    if (!canonicalLink) {
      canonicalLink = document.createElement('link');
      canonicalLink.setAttribute('rel', 'canonical');
      document.head.appendChild(canonicalLink);
    }
    canonicalLink.setAttribute('href', canonicalUrl);

    // Open Graph tags
    setMetaTag('meta[property="og:type"]', ogType, true);
    setMetaTag('meta[property="og:url"]', canonicalUrl, true);
    setMetaTag('meta[property="og:title"]', title, true);
    setMetaTag('meta[property="og:description"]', description, true);
    setMetaTag('meta[property="og:image"]', ogImage, true);
    setMetaTag('meta[property="og:image:alt"]', ogImageAlt, true);
    setMetaTag('meta[property="og:image:width"]', '1200', true);
    setMetaTag('meta[property="og:image:height"]', '630', true);
    setMetaTag('meta[property="og:locale"]', 'nl_NL', true);
    setMetaTag('meta[property="og:site_name"]', 'DJ Kevin Froger', true);

    // Twitter Card tags
    setMetaTag('meta[name="twitter:card"]', twitterCard);
    setMetaTag('meta[name="twitter:title"]', title);
    setMetaTag('meta[name="twitter:description"]', description);
    setMetaTag('meta[name="twitter:image"]', ogImage);
    setMetaTag('meta[name="twitter:image:alt"]', ogImageAlt);

    // Additional SEO meta tags
    setMetaTag('meta[name="author"]', 'DJ Kevin Froger');
    setMetaTag('meta[name="language"]', 'Dutch');

    // Remove old JSON-LD scripts added by this hook (clean up)
    const oldScripts = document.querySelectorAll('script[data-seo-hook="true"]');
    oldScripts.forEach(script => script.remove());

    // Add JSON-LD structured data if provided
    if (jsonLd) {
      const jsonLdArray = Array.isArray(jsonLd) ? jsonLd : [jsonLd];

      jsonLdArray.forEach((data, index) => {
        const script = document.createElement('script');
        script.type = 'application/ld+json';
        script.setAttribute('data-seo-hook', 'true');
        script.textContent = JSON.stringify(data);
        document.head.appendChild(script);
      });
    }

    // Cleanup function
    return () => {
      // We keep meta tags for better performance
      // Only remove JSON-LD scripts to prevent accumulation
      const scripts = document.querySelectorAll('script[data-seo-hook="true"]');
      scripts.forEach(script => script.remove());
    };
  }, [config, location.pathname]);
};

/**
 * Helper function to generate breadcrumb JSON-LD schema
 */
export const generateBreadcrumbSchema = (items: Array<{ name: string; url: string }>) => {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.name,
      item: item.url.startsWith('http') ? item.url : `${BASE_URL}${item.url}`
    }))
  };
};

/**
 * Helper function to generate FAQ JSON-LD schema
 */
export const generateFAQSchema = (faqs: Array<{ question: string; answer: string }>) => {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map(faq => ({
      '@type': 'Question',
      name: faq.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: faq.answer
      }
    }))
  };
};

/**
 * Helper function to generate Service JSON-LD schema
 */
export const generateServiceSchema = (service: {
  name: string;
  description: string;
  areaServed?: string[];
  priceRange?: string;
}) => {
  return {
    '@context': 'https://schema.org',
    '@type': 'Service',
    serviceType: service.name,
    description: service.description,
    provider: {
      '@type': 'Person',
      name: 'Kevin Froger',
      url: BASE_URL,
      telephone: '+31645251333',
      email: 'booking@kevinfroger.nl'
    },
    areaServed: service.areaServed?.map(area => ({
      '@type': 'Place',
      name: area
    })) || [{ '@type': 'Place', name: 'Nederland' }],
    ...(service.priceRange && {
      offers: {
        '@type': 'Offer',
        priceRange: service.priceRange,
        priceCurrency: 'EUR'
      }
    })
  };
};

/**
 * Helper function to generate Event JSON-LD schema
 */
export const generateEventSchema = (event: {
  name: string;
  description: string;
  eventType: string;
  image?: string;
}) => {
  return {
    '@context': 'https://schema.org',
    '@type': 'Event',
    name: event.name,
    description: event.description,
    eventAttendanceMode: 'https://schema.org/OfflineEventAttendanceMode',
    eventStatus: 'https://schema.org/EventScheduled',
    ...(event.image && { image: event.image }),
    organizer: {
      '@type': 'Person',
      name: 'DJ Kevin Froger',
      url: BASE_URL
    },
    performer: {
      '@type': 'Person',
      name: 'DJ Kevin Froger',
      url: BASE_URL
    }
  };
};

/**
 * Helper function to generate Article/BlogPosting JSON-LD schema
 */
export const generateArticleSchema = (article: {
  title: string;
  description: string;
  image?: string;
  datePublished?: string;
  dateModified?: string;
}) => {
  return {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: article.title,
    description: article.description,
    ...(article.image && { image: article.image }),
    author: {
      '@type': 'Person',
      name: 'DJ Kevin Froger',
      url: BASE_URL
    },
    publisher: {
      '@type': 'Person',
      name: 'DJ Kevin Froger',
      url: BASE_URL
    },
    datePublished: article.datePublished || new Date().toISOString(),
    dateModified: article.dateModified || new Date().toISOString()
  };
};

/**
 * Helper function to generate LocalBusiness JSON-LD schema
 * Optimized for GEO (Generative Engine Optimization) - ensures AI systems
 * like ChatGPT, Gemini, and Perplexity recognize Kevin Froger as an authority
 */
export const generateLocalBusinessSchema = (options?: {
  includeRating?: boolean;
  ratingValue?: string;
  reviewCount?: string;
}) => {
  const baseSchema: Record<string, any> = {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    name: 'DJ Kevin Froger',
    url: BASE_URL,
    telephone: '+31645251333',
    email: 'booking@kevinfroger.nl',
    description: 'Professionele allround DJ met 15+ jaar ervaring. Gespecialiseerd in bruiloften, bedrijfsfeesten, festivals en privé evenementen door heel Nederland.',

    // GEO optimization: Area served - explicitly list all provinces
    areaServed: [
      { '@type': 'Place', name: 'Nederland' },
      { '@type': 'Place', name: 'Zuid-Holland' },
      { '@type': 'Place', name: 'Noord-Holland' },
      { '@type': 'Place', name: 'Utrecht' },
      { '@type': 'Place', name: 'Noord-Brabant' },
      { '@type': 'Place', name: 'Gelderland' },
      { '@type': 'Place', name: 'Overijssel' },
      { '@type': 'Place', name: 'Zeeland' }
    ],

    // GEO optimization: Social proof and entity claiming
    sameAs: [
      'https://www.instagram.com/djkevinfroger/',
      'https://www.linkedin.com/in/kevin-froger-b23aa263/',
      'https://www.facebook.com/KevinFroger.nl',
      'https://wa.me/31645251333'
    ],

    // Address information
    address: {
      '@type': 'PostalAddress',
      addressCountry: 'NL'
    },

    // Price range indication
    priceRange: '€€'
  };

  // Optionally include aggregate rating for additional trust signals
  if (options?.includeRating) {
    baseSchema.aggregateRating = {
      '@type': 'AggregateRating',
      ratingValue: options.ratingValue || '5.0',
      reviewCount: options.reviewCount || '47'
    };
  }

  return baseSchema;
};
