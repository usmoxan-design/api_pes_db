import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: {
    default: 'efInfoHub API | eFootball O\'yinchilari Ma\'lumotlari API',
    template: '%s | efInfoHub API'
  },
  description: 'eFootball o\'yinchilari ma\'lumotlari va statistikasi uchun tez, xavfsiz API. Haqiqiy vaqtda yangilanadigan player stats, jamoa ma\'lumotlari va ko\'p boshqa funksiyalar.',
  keywords: [
    'eFootball',
    'eFootball API',
    'PES API',
    'eFootball players',
    'eFootball o\'yinchilar',
    'football API',
    'soccer API',
    'player stats',
    'eFootball statistics',
    'efInfoHub',
    'API provider',
    'Next.js API',
    'football data',
    'eFootball 2024',
    'eFootball 2025'
  ],
  authors: [{ name: 'efInfoHub Team', url: 'https://api-pes-db.vercel.app/' }],
  creator: 'efInfoHub',
  publisher: 'efInfoHub',
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  openGraph: {
    type: 'website',
    locale: 'uz_UZ',
    alternateLocale: ['en_US', 'ru_RU'],
    url: 'https://api-pes-db.vercel.app/',
    siteName: 'efInfoHub API',
    title: 'efInfoHub API | eFootball O\'yinchilari Ma\'lumotlari',
    description: 'eFootball o\'yinchilari ma\'lumotlari va statistikasi uchun tez, xavfsiz API. Haqiqiy vaqtda yangilanadigan player stats.',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'efInfoHub API Banner',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'efInfoHub API | eFootball O\'yinchilari Ma\'lumotlari',
    description: 'eFootball o\'yinchilari ma\'lumotlari va statistikasi uchun tez, xavfsiz API.',
    images: ['/og-image.png'],
    creator: '@efInfoHub',
  },
  icons: {
    icon: '/favicon.ico',
    shortcut: '/favicon-16x16.png',
    apple: '/apple-touch-icon.png',
  },
  manifest: '/site.webmanifest',
  alternates: {
    canonical: 'https://api-pes-db.vercel.app/',
    languages: {
      'uz-UZ': 'https://api-pes-db.vercel.app/',
      'en-US': 'https://api-pes-db.vercel.app/en',
      'ru-RU': 'https://api-pes-db.vercel.app/ru',
    },
  },
  verification: {
    google: 'your-google-verification-code',
    yandex: 'your-yandex-verification-code',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="uz" className="scroll-smooth">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link rel="dns-prefetch" href="https://pesdb.net" />
        <link rel="dns-prefetch" href="https://t.me" />
      </head>
      <body className={inter.className}>{children}</body>
    </html>
  );
}
