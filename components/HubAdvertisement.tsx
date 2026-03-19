'use client';

import React from 'react';
import { Smartphone, Download } from 'lucide-react';

interface HubAdvertisementProps {
  t: any;
}

export default function HubAdvertisement({ t }: HubAdvertisementProps) {
  return (
    <section className="py-12 sm:py-20 px-4 sm:px-6">
      <div className="max-w-4xl mx-auto">
        <div className="relative p-6 sm:p-12 rounded-2xl sm:rounded-3xl bg-gradient-to-br from-cyan-500/20 via-blue-600/20 to-purple-600/20 border border-white/10 overflow-hidden">
          <div className="absolute top-0 right-0 w-48 sm:w-64 h-48 sm:h-64 bg-cyan-500/10 blur-[80px] rounded-full pointer-events-none"></div>
          <div className="absolute bottom-0 left-0 w-48 sm:w-64 h-48 sm:h-64 bg-purple-500/10 blur-[80px] rounded-full pointer-events-none"></div>
          
          <div className="relative z-10 text-center">
            <div className="inline-flex items-center gap-2 sm:gap-3 mb-4 sm:mb-6">
              <div className="w-12 h-12 sm:w-16 sm:h-16 rounded-xl sm:rounded-2xl bg-gradient-to-tr from-cyan-500 to-blue-600 flex items-center justify-center shadow-lg shadow-cyan-500/30 flex-shrink-0">
                <Smartphone size={24} className="sm:w-8 sm:h-8 text-white" />
              </div>
            </div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold mb-3 sm:mb-4 px-2">
              {t.downloadTitle}
            </h2>
            <p className="text-base sm:text-lg text-white/60 mb-6 sm:mb-8 max-w-xl mx-auto px-4">
              {t.downloadDesc}
            </p>
            <a
              href="https://t.me/eFinfo_HUB"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 sm:gap-3 px-6 sm:px-8 py-3 sm:py-5 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-bold rounded-xl sm:rounded-2xl hover:from-cyan-400 hover:to-blue-500 transition-all transform hover:-translate-y-1 hover:shadow-xl hover:shadow-cyan-500/30 text-sm sm:text-base"
            >
              <Download size={18} />
              {t.hero.downloadApp}
            </a>
            <p className="mt-3 sm:mt-4 text-xs sm:text-sm text-white/40">
              {t.available}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
