'use client';

import React from 'react';
import { Cpu, Database, Server } from 'lucide-react';

interface FeaturesProps {
  t: any;
}

export default function Features({ t }: FeaturesProps) {
  return (
    <section id="api" className="py-16 sm:py-32 bg-white/[0.02]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-3 sm:mb-4">{t.features}</h2>
          <p className="text-sm sm:text-base text-white/60 max-w-2xl mx-auto px-4">{t.docsDesc}</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-8">
          <div className="p-5 sm:p-8 rounded-2xl sm:rounded-3xl bg-white/5 border border-white/10 hover:border-cyan-500/30 transition-all group">
            <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl sm:rounded-2xl bg-cyan-500/10 flex items-center justify-center text-cyan-400 mb-4 sm:mb-6 group-hover:scale-110 transition-transform flex-shrink-0">
              <Cpu size={20} className="sm:w-6 sm:h-6" />
            </div>
            <h3 className="text-lg sm:text-xl font-bold mb-3 sm:mb-4">{t.restApi}</h3>
            <code className="block text-[10px] sm:text-xs text-white/40 mb-3 sm:mb-4 font-mono bg-white/5 p-2 sm:p-3 rounded-lg sm:rounded-xl overflow-x-auto">
              GET /api/players
            </code>
            <p className="text-xs sm:text-sm text-white/50 leading-relaxed">
              {t.restApiDesc}
            </p>
          </div>

          <div className="p-5 sm:p-8 rounded-2xl sm:rounded-3xl bg-white/5 border border-white/10 hover:border-blue-500/30 transition-all group">
            <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl sm:rounded-2xl bg-blue-500/10 flex items-center justify-center text-blue-400 mb-4 sm:mb-6 group-hover:scale-110 transition-transform flex-shrink-0">
              <Database size={20} className="sm:w-6 sm:h-6" />
            </div>
            <h3 className="text-lg sm:text-xl font-bold mb-3 sm:mb-4">{t.scraping}</h3>
            <code className="block text-[10px] sm:text-xs text-white/40 mb-3 sm:mb-4 font-mono bg-white/5 p-2 sm:p-3 rounded-lg sm:rounded-xl overflow-x-auto">
              GET /api/player/[id]
            </code>
            <p className="text-xs sm:text-sm text-white/50 leading-relaxed">
              {t.scrapingDesc}
            </p>
          </div>

          <div className="p-5 sm:p-8 rounded-2xl sm:rounded-3xl bg-white/5 border border-white/10 hover:border-purple-500/30 transition-all group">
            <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl sm:rounded-2xl bg-purple-500/10 flex items-center justify-center text-purple-400 mb-4 sm:mb-6 group-hover:scale-110 transition-transform flex-shrink-0">
              <Server size={20} className="sm:w-6 sm:h-6" />
            </div>
            <h3 className="text-lg sm:text-xl font-bold mb-3 sm:mb-4">{t.global}</h3>
            <code className="block text-[10px] sm:text-xs text-white/40 mb-3 sm:mb-4 font-mono bg-white/5 p-2 sm:p-3 rounded-lg sm:rounded-xl overflow-x-auto">
              Powered by Vercel
            </code>
            <p className="text-xs sm:text-sm text-white/50 leading-relaxed">
              {t.globalDesc}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
