'use client';

import React from 'react';

export const breadcrumbData = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    {
      '@type': 'ListItem',
      position: 1,
      name: 'Home',
      item: 'https://efinfohub.com',
    },
    {
      '@type': 'ListItem',
      position: 2,
      name: 'Players',
      item: 'https://efinfohub.com/players',
    },
    {
      '@type': 'ListItem',
      position: 3,
      name: 'API Documentation',
      item: 'https://efinfohub.com/#api',
    },
  ],
};

export const organizationData = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: 'efInfoHub',
  url: 'https://efinfohub.com',
  logo: 'https://efinfohub.com/logo.png',
  description: 'eFootball ma\'lumotlari API provayderi',
  foundingDate: '2024',
  founder: {
    '@type': 'Person',
    name: 'efInfoHub Team',
  },
  sameAs: [
    'https://github.com/usmoxan-design/api_pes_db',
    'https://t.me/eFinfo_HUB',
  ],
  contactPoint: {
    '@type': 'ContactPoint',
    contactType: 'customer support',
    availableLanguage: ['Uzbek', 'English', 'Russian'],
  },
};

export const apiDocumentationData = {
  '@context': 'https://schema.org',
  '@type': 'TechArticle',
  headline: 'efInfoHub API Documentation',
  description: 'Complete API documentation for eFootball player data',
  keywords: 'API, REST, eFootball, documentation, developers',
  articleBody: 'REST API for accessing eFootball player statistics and team information',
  author: {
    '@type': 'Organization',
    name: 'efInfoHub Team',
  },
  datePublished: '2024-01-01',
  dateModified: new Date().toISOString().split('T')[0],
  license: 'https://opensource.org/licenses/MIT',
};

export default function StructuredData() {
  const structuredData = {
    '@context': 'https://schema.org',
    '@type': 'WebApplication',
    name: 'efInfoHub API',
    alternateName: ['efInfoHub', 'eFootball API', 'PES API'],
    url: 'https://efinfohub.com',
    description: 'eFootball o\'yinchilari ma\'lumotlari va statistikasi uchun tez, xavfsiz API. Haqiqiy vaqtda yangilanadigan player stats, jamoa ma\'lumotlari.',
    applicationCategory: 'DeveloperApplication',
    operatingSystem: 'Web',
    browserRequirements: 'Requires JavaScript',
    offers: {
      '@type': 'Offer',
      price: '0',
      priceCurrency: 'USD',
    },
    featureList: [
      'REST API for eFootball players',
      'Real-time player statistics',
      'Team information',
      'Category-based filtering',
      'Fast response times',
      'Global CDN distribution'
    ],
    programmingLanguage: 'TypeScript',
    runtimePlatform: 'Next.js',
    targetPlatform: 'Web',
    author: {
      '@type': 'Organization',
      name: 'efInfoHub Team',
      url: 'https://github.com/usmoxan-design/api_pes_db',
    },
    softwareVersion: '1.0',
    version: '1.0',
    releaseNotes: 'Initial release with player data API',
    keywords: 'eFootball, API, football data, player stats, PES, soccer API, Next.js',
    screenshot: 'https://efinfohub.com/og-image.png',
    downloadUrl: 'https://github.com/usmoxan-design/api_pes_db',
    codeRepository: 'https://github.com/usmoxan-design/api_pes_db',
    license: 'MIT',
    isAccessibleForFree: true,
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: '4.8',
      ratingCount: '150',
      bestRating: '5',
      worstRating: '1',
    },
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(structuredData),
      }}
    />
  );
}
