'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { Database, Languages, Terminal, Github, ExternalLink, Smartphone } from 'lucide-react';
import { Language } from './translations';
import LanguageModal from './LanguageModal';

interface NavbarProps {
  t: any;
  lang: Language;
  setLang: (lang: Language) => void;
}

export default function Navbar({ t, lang, setLang }: NavbarProps) {
  const [showLangModal, setShowLangModal] = useState(false);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      <nav className="fixed top-0 left-0 right-0 z-40 border-b border-white/5 bg-black/50 backdrop-blur-xl">
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-gradient-to-tr from-cyan-500 to-blue-600 rounded-xl flex items-center justify-center shadow-lg shadow-cyan-500/20">
              <Database className="text-white" size={20} />
            </div>
            <span className="text-xl font-bold tracking-tight">
              ef<span className="text-cyan-400">Info</span>Hub
            </span>
          </div>
          
          <div className="flex items-center gap-4">
            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center gap-6 text-sm font-medium text-white/60">
              <button 
                onClick={() => scrollToSection('api')}
                className="hover:text-white transition-colors flex items-center gap-1"
              >
                <Terminal size={14} />
                {t.nav.apiDocs}
              </button>
              <button 
                onClick={() => scrollToSection('endpoints')}
                className="hover:text-white transition-colors flex items-center gap-1"
              >
                <ExternalLink size={14} />
                {t.nav.endpoints}
              </button>
              <a 
                href="https://github.com/usmoxan-design/api_pes_db"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-white transition-colors flex items-center gap-1"
              >
                <Github size={14} />
                {t.nav.github}
              </a>
              <div className="h-4 w-[1px] bg-white/10"></div>
              <span className="px-3 py-1 bg-cyan-500/10 border border-cyan-500/20 rounded-full text-cyan-400 text-xs">
                {t.nav.systemLive}
              </span>
            </div>

            {/* Get eFinfo HUB App Button */}
            <a
              href="https://t.me/eFinfo_HUB"
              target="_blank"
              rel="noopener noreferrer"
              className="hidden lg:flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-cyan-500/10 to-blue-500/10 hover:from-cyan-500/20 hover:to-blue-500/20 border border-cyan-500/30 rounded-xl text-sm font-medium text-cyan-400 transition-all"
            >
              <Smartphone size={16} />
              {t.nav.getHubApp}
            </a>
            
            {/* Language Selector */}
            <button
              onClick={() => setShowLangModal(true)}
              className="flex items-center gap-2 px-3 py-2 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 transition-all"
            >
              <Languages size={16} />
              <span className="text-sm font-medium uppercase">{lang}</span>
            </button>
          </div>
        </div>
      </nav>

      {/* Language Modal */}
      <LanguageModal
        isOpen={showLangModal}
        onClose={() => setShowLangModal(false)}
        currentLang={lang}
        onSelectLang={setLang}
        t={t}
      />
    </>
  );
}
