import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Barcha eFootball O\'yinchilari | efInfoHub API',
  description: 'eFootball o\'yinchilarining to\'liq ro\'yxati. Haqiqiy vaqtda yangilanadigan statistika, reytinglar, jamoa ma\'lumotlari va ko\'p boshqa funksiyalar.',
  keywords: [
    'eFootball players',
    'eFootball o\'yinchilar',
    'football players list',
    'PES players',
    'eFootball stats',
    'player ratings',
    'eFootball database',
    'football statistics'
  ],
  openGraph: {
    title: 'Barcha eFootball O\'yinchilari | efInfoHub API',
    description: 'eFootball o\'yinchilarining to\'liq ro\'yxati. Haqiqiy vaqtda yangilanadigan statistika.',
    type: 'website',
  },
};

export default function PlayersPageLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
