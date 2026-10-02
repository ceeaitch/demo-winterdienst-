/**
 * Schema.org-Bausteine (JSON-LD). Alle Seiten geben einen gemeinsamen @graph aus,
 * in dem sich die Objekte per @id referenzieren – so versteht Google (und jede KI),
 * dass Website, Firma und Leistungen zusammengehören.
 */
import { company } from '../data/company';
import { orte } from '../data/orte';
import { absoluteUrl } from './site';

type Json = Record<string, unknown>;

export const ids = {
  org: absoluteUrl('/#organization'),
  website: absoluteUrl('/#website'),
};

export function organizationSchema(): Json {
  return {
    '@type': 'LocalBusiness',
    '@id': ids.org,
    name: company.name,
    description: company.description,
    slogan: company.slogan,
    url: absoluteUrl('/'),
    telephone: company.phone,
    email: company.email,
    image: absoluteUrl('/og-image.jpg'),
    logo: absoluteUrl('/favicon.svg'),
    priceRange: '€€',
    address: {
      '@type': 'PostalAddress',
      streetAddress: company.address.street,
      postalCode: company.address.zip,
      addressLocality: company.address.city,
      addressRegion: company.address.region,
      addressCountry: company.address.country,
    },
    geo: { '@type': 'GeoCoordinates', latitude: company.geo.lat, longitude: company.geo.lng },
    // Einsatzgebiet maschinenlesbar: Kreis mit 20 km Radius + konkrete Orte
    areaServed: [
      {
        '@type': 'GeoCircle',
        geoMidpoint: { '@type': 'GeoCoordinates', latitude: company.geo.lat, longitude: company.geo.lng },
        geoRadius: company.radiusKm * 1000,
      },
      ...orte.map((o) => ({ '@type': 'Place', name: o.name })),
    ],
    openingHoursSpecification: {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'],
      opens: '00:00',
      closes: '23:59',
      validFrom: '2026-11-01',
      validThrough: '2027-03-31',
    },
    knowsAbout: [
      'Winterdienst',
      'Räum- und Streupflicht',
      'Verkehrssicherungspflicht',
      'Glättebekämpfung',
      'Straßenreinigungssatzung Krefeld',
    ],
    hasOfferCatalog: {
      '@type': 'OfferCatalog',
      name: 'Winterdienst-Leistungen',
      itemListElement: [
        'Schneeräumung für Gehwege, Zufahrten und Parkplätze',
        'Glättebekämpfung mit satzungskonformen Streumitteln',
        '24/7-Wetterüberwachung und Bereitschaft',
        'Digitales Räumprotokoll als Haftungsnachweis',
        'Schneeabtransport',
      ].map((name) => ({ '@type': 'Offer', itemOffered: { '@type': 'Service', name } })),
    },
  };
}

export function websiteSchema(): Json {
  return {
    '@type': 'WebSite',
    '@id': ids.website,
    url: absoluteUrl('/'),
    name: company.name,
    inLanguage: 'de-DE',
    publisher: { '@id': ids.org },
  };
}

export function breadcrumbSchema(items: { name: string; path: string }[]): Json {
  return {
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, i) => ({
      '@type': 'ListItem',
      position: i + 1,
      name: item.name,
      item: absoluteUrl(item.path),
    })),
  };
}

export function faqSchema(faqs: readonly { q: string; a: string }[]): Json {
  return {
    '@type': 'FAQPage',
    mainEntity: faqs.map((f) => ({
      '@type': 'Question',
      name: f.q,
      acceptedAnswer: { '@type': 'Answer', text: f.a },
    })),
  };
}

export function serviceSchema(opts: { name: string; description: string; path: string; area?: string }): Json {
  return {
    '@type': 'Service',
    '@id': absoluteUrl(`${opts.path}#service`),
    name: opts.name,
    serviceType: 'Winterdienst',
    description: opts.description,
    url: absoluteUrl(opts.path),
    provider: { '@id': ids.org },
    areaServed: opts.area
      ? { '@type': 'City', name: opts.area }
      : {
          '@type': 'GeoCircle',
          geoMidpoint: { '@type': 'GeoCoordinates', latitude: company.geo.lat, longitude: company.geo.lng },
          geoRadius: company.radiusKm * 1000,
        },
    audience: { '@type': 'BusinessAudience', name: 'Unternehmen, Handel, Hausverwaltungen' },
  };
}

export function articleSchema(opts: {
  headline: string;
  description: string;
  path: string;
  datePublished: string;
  dateModified: string;
  image: string;
}): Json {
  return {
    '@type': 'Article',
    '@id': absoluteUrl(`${opts.path}#article`),
    headline: opts.headline,
    description: opts.description,
    url: absoluteUrl(opts.path),
    image: opts.image,
    datePublished: opts.datePublished,
    dateModified: opts.dateModified,
    inLanguage: 'de-DE',
    author: { '@id': ids.org },
    publisher: { '@id': ids.org },
    mainEntityOfPage: absoluteUrl(opts.path),
  };
}

export function graph(...nodes: Json[]): string {
  return JSON.stringify({ '@context': 'https://schema.org', '@graph': nodes });
}
