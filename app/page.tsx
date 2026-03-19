'use client';

import React, { useEffect, useState } from 'react';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import DataSection from '@/components/DataSection';
import HubAdvertisement from '@/components/HubAdvertisement';
import Features from '@/components/Features';
import Endpoints from '@/components/Endpoints';
import Footer from '@/components/Footer';
import StructuredData from '@/components/StructuredData';
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
  const [lang, setLang] = useState<Language>('uz');
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
        setPlayers(playersData.slice(0, 20));
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
    <>
      <StructuredData />
      <div className="min-h-screen bg-[#0A0A0A] text-white selection:bg-cyan-500/30 font-sans">
        <div className="fixed inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-cyan-500/10 blur-[120px] rounded-full"></div>
          <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-purple-500/10 blur-[120px] rounded-full"></div>
        </div>

        <Navbar t={t} lang={lang} setLang={setLang} />

        <main className="relative z-10">
          <Hero t={t} />
          
          {/* SEO Content Section */}
          <section className="py-16 px-6 border-t border-white/5">
            <div className="max-w-4xl mx-auto">
              <article className="prose prose-invert prose-lg">
                <h2 className="text-3xl font-bold mb-6 text-center">
                  eFootball API - Tezkor va Ishonchli Ma'lumotlar Manbai
                </h2>
                <div className="grid md:grid-cols-2 gap-6 text-white/60">
                  <div>
                    <h3 className="text-xl font-semibold text-white mb-3">
                      🎮 eFootball O'yinchilari Bazasi
                    </h3>
                    <p className="text-sm leading-relaxed">
                      Bizning API orqali eFootball o'yinchilarining to'liq ma'lumotlar bazasiga ega bo'ling. 
                      Haqiqiy vaqtda yangilanadigan statistika, reytinglar va jamoa ma'lumotlari.
                    </p>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-white mb-3">
                      ⚡ Tezkor API Responses
                    </h3>
                    <p className="text-sm leading-relaxed">
                      Global CDN tarmog'i orqali optimallashtirilgan API javoblari. 
                      Minimal kechikish va maksimal tezlik.
                    </p>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-white mb-3">
                      📊 Real-Time Statistika
                    </h3>
                    <p className="text-sm leading-relaxed">
                      O'yinchilarning eng so'nggi ko'rsatkichlari va jamoa yangiliklari. 
                      PESDB ma'lumotlar bazasi bilan integratsiya.
                    </p>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-white mb-3">
                      🔒 Xavfsiz va Ishonchli
                    </h3>
                    <p className="text-sm leading-relaxed">
                      HTTPS himoyasi va zamonaviy xavfsizlik standartlari. 
                      99.9% uptime kafolati.
                    </p>
                  </div>
                </div>
              </article>
            </div>
          </section>

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
    </>
  );
}
