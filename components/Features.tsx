'use client';

import React from 'react';
import { Cpu, Database, Server } from 'lucide-react';

interface FeaturesProps {
  t: any;
}

export default function Features({ t }: FeaturesProps) {
  return (
    <section id="api" className="py-32 bg-white/[0.02]">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">{t.features}</h2>
          <p className="text-white/60 max-w-2xl mx-auto">{t.docsDesc}</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="p-8 rounded-3xl bg-white/5 border border-white/10 hover:border-cyan-500/30 transition-all group">
            <div className="w-12 h-12 rounded-2xl bg-cyan-500/10 flex items-center justify-center text-cyan-400 mb-6 group-hover:scale-110 transition-transform">
              <Cpu size={24} />
            </div>
            <h3 className="text-xl font-bold mb-4">{t.restApi}</h3>
            <code className="block text-xs text-white/40 mb-4 font-mono bg-white/5 p-3 rounded-xl">
              GET /api/players
            </code>
            <p className="text-white/50 text-sm leading-relaxed">
              {t.restApiDesc}
            </p>
          </div>

          <div className="p-8 rounded-3xl bg-white/5 border border-white/10 hover:border-blue-500/30 transition-all group">
            <div className="w-12 h-12 rounded-2xl bg-blue-500/10 flex items-center justify-center text-blue-400 mb-6 group-hover:scale-110 transition-transform">
              <Database size={24} />
            </div>
            <h3 className="text-xl font-bold mb-4">{t.scraping}</h3>
            <code className="block text-xs text-white/40 mb-4 font-mono bg-white/5 p-3 rounded-xl">
              GET /api/player/[id]
            </code>
            <p className="text-white/50 text-sm leading-relaxed">
              {t.scrapingDesc}
            </p>
          </div>

          <div className="p-8 rounded-3xl bg-white/5 border border-white/10 hover:border-purple-500/30 transition-all group">
            <div className="w-12 h-12 rounded-2xl bg-purple-500/10 flex items-center justify-center text-purple-400 mb-6 group-hover:scale-110 transition-transform">
              <Server size={24} />
            </div>
            <h3 className="text-xl font-bold mb-4">{t.global}</h3>
            <code className="block text-xs text-white/40 mb-4 font-mono bg-white/5 p-3 rounded-xl">
              Powered by Vercel
            </code>
            <p className="text-white/50 text-sm leading-relaxed">
              {t.globalDesc}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
