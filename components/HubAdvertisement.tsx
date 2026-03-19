'use client';

import React from 'react';
import { Smartphone, Download } from 'lucide-react';

interface HubAdvertisementProps {
  t: any;
}

export default function HubAdvertisement({ t }: HubAdvertisementProps) {
  return (
    <section className="py-20 px-6">
      <div className="max-w-4xl mx-auto">
        <div className="relative p-12 rounded-3xl bg-gradient-to-br from-cyan-500/20 via-blue-600/20 to-purple-600/20 border border-white/10 overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-cyan-500/10 blur-[80px] rounded-full pointer-events-none"></div>
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-purple-500/10 blur-[80px] rounded-full pointer-events-none"></div>
          
          <div className="relative z-10 text-center">
            <div className="inline-flex items-center gap-3 mb-6">
              <div className="w-16 h-16 rounded-2xl bg-gradient-to-tr from-cyan-500 to-blue-600 flex items-center justify-center shadow-lg shadow-cyan-500/30">
                <Smartphone size={32} className="text-white" />
              </div>
            </div>
            <h2 className="text-4xl md:text-5xl font-extrabold mb-4">
              {t.downloadTitle}
            </h2>
            <p className="text-lg text-white/60 mb-8 max-w-xl mx-auto">
              {t.downloadDesc}
            </p>
            <a
              href="https://t.me/eFinfo_HUB"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 px-8 py-5 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-bold rounded-2xl hover:from-cyan-400 hover:to-blue-500 transition-all transform hover:-translate-y-1 hover:shadow-xl hover:shadow-cyan-500/30"
            >
              <Download size={22} />
              {t.hero.downloadApp}
            </a>
            <p className="mt-4 text-sm text-white/40">
              {t.available}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
