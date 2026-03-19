'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { Database, Languages, Terminal, Github, ExternalLink, Smartphone, Menu, X } from 'lucide-react';
import { Language } from './translations';
import LanguageModal from './LanguageModal';

interface NavbarProps {
  t: any;
  lang: Language;
  setLang: (lang: Language) => void;
}

export default function Navbar({ t, lang, setLang }: NavbarProps) {
  const [showLangModal, setShowLangModal] = useState(false);
  const [showMobileMenu, setShowMobileMenu] = useState(false);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setShowMobileMenu(false);
    }
  };

  return (
    <>
      <nav className="fixed top-0 left-0 right-0 z-40 border-b border-white/5 bg-black/50 backdrop-blur-xl">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 h-16 sm:h-20 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2 sm:gap-3">
            <div className="w-9 h-9 sm:w-10 sm:h-10 bg-gradient-to-tr from-cyan-500 to-blue-600 rounded-xl flex items-center justify-center shadow-lg shadow-cyan-500/20">
              <Database className="text-white" size={18} />
            </div>
            <span className="text-lg sm:text-xl font-bold tracking-tight">
              ef<span className="text-cyan-400">Info</span>Hub
            </span>
          </Link>
          
          <div className="flex items-center gap-2 sm:gap-4">
            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center gap-4 xl:gap-6 text-xs sm:text-sm font-medium text-white/60">
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
              <span className="px-2 sm:px-3 py-1 bg-cyan-500/10 border border-cyan-500/20 rounded-full text-cyan-400 text-[10px] sm:text-xs whitespace-nowrap">
                {t.nav.systemLive}
              </span>
            </div>

            {/* Get eFinfo HUB App Button - Desktop */}
            <a
              href="https://t.me/eFinfo_HUB"
              target="_blank"
              rel="noopener noreferrer"
              className="hidden xl:flex items-center gap-2 px-3 sm:px-4 py-2 bg-gradient-to-r from-cyan-500/10 to-blue-500/10 hover:from-cyan-500/20 hover:to-blue-500/20 border border-cyan-500/30 rounded-xl text-xs sm:text-sm font-medium text-cyan-400 transition-all whitespace-nowrap"
            >
              <Smartphone size={14} />
              <span className="hidden 2xl:inline">{t.nav.getHubApp}</span>
            </a>
            
            {/* Language Selector */}
            <button
              onClick={() => setShowLangModal(true)}
              className="flex items-center gap-1 sm:gap-2 px-2 sm:px-3 py-1.5 sm:py-2 rounded-lg sm:rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 transition-all"
            >
              <Languages size={14} />
              <span className="text-xs sm:text-sm font-medium uppercase">{lang}</span>
            </button>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setShowMobileMenu(!showMobileMenu)}
              className="lg:hidden p-2 rounded-lg hover:bg-white/10 transition-all"
            >
              {showMobileMenu ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {showMobileMenu && (
          <div className="lg:hidden border-t border-white/5 bg-black/95 backdrop-blur-xl">
            <div className="px-4 py-4 space-y-3">
              <button 
                onClick={() => scrollToSection('api')}
                className="w-full p-3 rounded-xl hover:bg-white/5 transition-all text-left flex items-center gap-3"
              >
                <Terminal size={18} />
                <span className="font-medium">{t.nav.apiDocs}</span>
              </button>
              <button 
                onClick={() => scrollToSection('endpoints')}
                className="w-full p-3 rounded-xl hover:bg-white/5 transition-all text-left flex items-center gap-3"
              >
                <ExternalLink size={18} />
                <span className="font-medium">{t.nav.endpoints}</span>
              </button>
              <a 
                href="https://github.com/usmoxan-design/api_pes_db"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full p-3 rounded-xl hover:bg-white/5 transition-all flex items-center gap-3"
              >
                <Github size={18} />
                <span className="font-medium">{t.nav.github}</span>
              </a>
              <a
                href="https://t.me/eFinfo_HUB"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full p-3 rounded-xl bg-gradient-to-r from-cyan-500/10 to-blue-500/10 border border-cyan-500/30 flex items-center gap-3"
              >
                <Smartphone size={18} />
                <span className="font-medium text-cyan-400">{t.nav.getHubApp}</span>
              </a>
              <div className="pt-3 border-t border-white/10">
                <span className="px-3 py-1 bg-cyan-500/10 border border-cyan-500/20 rounded-full text-cyan-400 text-xs">
                  {t.nav.systemLive}
                </span>
              </div>
            </div>
          </div>
        )}
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
