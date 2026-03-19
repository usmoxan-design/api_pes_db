'use client';

import React, { useEffect, useState } from 'react';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import DataSection from '@/components/DataSection';
import HubAdvertisement from '@/components/HubAdvertisement';
import Features from '@/components/Features';
import Endpoints from '@/components/Endpoints';
import Footer from '@/components/Footer';
import { translations, Language } from '@/components/translations';

interface Player {
  id: string;
  name: string;
  club: string;
  nationality: string;
  position: string;
  ovr: string;
  imageUrl: string;
}

interface Category {
  name: string;
  url: string;
}

export default function LandingPage() {
  const [lang, setLang] = useState<Language>('uz'); // Default to Uzbek
  const [players, setPlayers] = useState<Player[]>([]);
  const [categories, setCategories] = useState<Category[]>([]);
  const [loading, setLoading] = useState(true);

  const t = translations[lang];

  useEffect(() => {
    const fetchData = async () => {
      try {
        const [playersRes, categoriesRes] = await Promise.all([
          fetch('/api/players?page=1'),
          fetch('/api/categories')
        ]);
        const playersData = await playersRes.json();
        const categoriesData = await categoriesRes.json();
        setPlayers(playersData.slice(0, 20)); // Show only first 20 players on homepage
        setCategories(categoriesData);
      } catch (error) {
        console.error('Error fetching data:', error);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, []);

  const handleCategoryClick = (category: Category) => {
    window.open(`/category/${encodeURIComponent(category.name)}`, '_blank');
  };

  return (
    <div className="min-h-screen bg-[#0A0A0A] text-white selection:bg-cyan-500/30 font-sans">
      {/* Background Glow */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-cyan-500/10 blur-[120px] rounded-full"></div>
        <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-purple-500/10 blur-[120px] rounded-full"></div>
      </div>

      <Navbar t={t} lang={lang} setLang={setLang} />

      <main className="relative z-10">
        <Hero t={t} />
        <DataSection 
          t={t} 
          lang={lang}
          players={players} 
          categories={categories} 
          loading={loading}
          onCategoryClick={handleCategoryClick}
        />
        <HubAdvertisement t={t} />
        <Features t={t} />
        <Endpoints t={t} />
        <Footer t={t} />
      </main>
    </div>
  );
}
