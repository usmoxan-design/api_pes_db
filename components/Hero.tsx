'use client';

import React from 'react';
import { Terminal, Github } from 'lucide-react';

interface HeroProps {
  t: any;
}

export default function Hero({ t }: HeroProps) {
  return (
    <section className="relative pt-24 sm:pt-32 pb-16 sm:pb-32 px-4 sm:px-6 text-center overflow-hidden">
      {/* Radial Grid Pattern Background */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Radial gradient glow */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] sm:w-[800px] h-[600px] sm:h-[800px] bg-gradient-to-r from-cyan-500/10 via-blue-500/5 to-purple-500/10 blur-[100px] rounded-full"></div>
        
        {/* Grid pattern */}
        <div 
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: `
              linear-gradient(to right, #ffffff 1px, transparent 1px),
              linear-gradient(to bottom, #ffffff 1px, transparent 1px)
            `,
            backgroundSize: '60px 60px',
            maskImage: 'radial-gradient(ellipse at center, black 0%, transparent 70%)',
            WebkitMaskImage: 'radial-gradient(ellipse at center, black 0%, transparent 70%)'
          }}
        />
        
        {/* Concentric circles */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] sm:w-[600px] h-[400px] sm:h-[600px] border border-white/[0.02] rounded-full"></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[250px] sm:w-[400px] h-[250px] sm:h-[400px] border border-white/[0.03] rounded-full"></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[100px] sm:w-[200px] h-[100px] sm:h-[200px] border border-white/[0.05] rounded-full"></div>
      </div>

      <div className="relative z-10">
        <div className="inline-flex items-center gap-2 px-3 sm:px-4 py-1.5 sm:py-2 rounded-full bg-white/5 border border-white/10 text-[10px] sm:text-xs font-medium text-white/50 mb-6 sm:mb-8 animate-fade-in">
          <span className="w-1.5 sm:w-2 h-1.5 sm:h-2 rounded-full bg-green-500 animate-pulse"></span>
          <span className="line-clamp-1">{t.hero.badge}</span>
        </div>
        
        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-extrabold tracking-tight mb-6 sm:mb-8 leading-tight">
          <span className="block">{t.hero.title1}</span>
          <span className="block mt-2 bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent">
            {t.hero.title2}
          </span>
        </h1>
        
        <p className="max-w-xl sm:max-w-2xl mx-auto text-base sm:text-lg md:text-xl text-white/60 mb-8 sm:mb-12 px-2">
          {t.hero.description}
        </p>
        
        <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4 w-full sm:w-auto">
          <a
            href="#data"
            className="w-full sm:w-auto px-6 sm:px-8 py-3 sm:py-4 bg-white text-black font-bold rounded-xl sm:rounded-2xl hover:bg-cyan-500 hover:text-white transition-all transform hover:-translate-y-1 text-sm sm:text-base"
          >
            {t.hero.viewData}
          </a>
          <a
            href="#api"
            className="w-full sm:w-auto px-6 sm:px-8 py-3 sm:py-4 bg-white/5 border border-white/10 rounded-xl sm:rounded-2xl font-bold hover:bg-white/10 transition-all flex items-center justify-center gap-2 text-sm sm:text-base"
          >
            <Terminal size={16} /> {t.hero.apiDocs}
          </a>
          <a
            href="https://github.com/usmoxan-design/api_pes_db"
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto px-6 sm:px-8 py-3 sm:py-4 bg-white/5 border border-white/10 rounded-xl sm:rounded-2xl font-bold hover:bg-white/10 transition-all flex items-center justify-center gap-2 text-sm sm:text-base"
          >
            <Github size={16} /> {t.hero.getSource}
          </a>
        </div>
      </div>
    </section>
  );
}
