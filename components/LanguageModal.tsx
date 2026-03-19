'use client';

import React from 'react';
import { Language } from './translations';

interface LanguageModalProps {
  isOpen: boolean;
  onClose: () => void;
  currentLang: Language;
  onSelectLang: (lang: Language) => void;
  t: any;
}

export default function LanguageModal({ isOpen, onClose, currentLang, onSelectLang, t }: LanguageModalProps) {
  if (!isOpen) return null;

  const languages: { code: Language; name: string }[] = [
    { code: 'uz', name: t.languageModal.uzbek },
    { code: 'en', name: t.languageModal.english },
    { code: 'ru', name: t.languageModal.russian }
  ];

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6">
      {/* Backdrop with blur */}
      <div
        className="absolute inset-0 bg-black/80 backdrop-blur-md transition-opacity"
        onClick={onClose}
      />
      
      {/* Modal */}
      <div className="relative w-full max-w-md transform transition-all animate-in fade-in zoom-in duration-200">
        <div className="bg-gradient-to-br from-[#0A0A0A] via-[#0f0f0f] to-[#0A0A0A] border border-white/10 rounded-3xl shadow-2xl overflow-hidden max-h-[90vh] sm:max-h-none">
          {/* Header */}
          <div className="flex items-center justify-between p-4 sm:p-6 border-b border-white/5">
            <h3 className="text-lg sm:text-xl font-bold bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
              {t.languageModal.title}
            </h3>
            <button
              onClick={onClose}
              className="p-2 rounded-xl hover:bg-white/10 transition-all group"
            >
              <svg className="w-5 h-5 text-white/60 group-hover:text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
          
          {/* Language Options */}
          <div className="p-3 sm:p-4 space-y-2">
            {languages.map((language) => (
              <button
                key={language.code}
                onClick={() => {
                  onSelectLang(language.code);
                  onClose();
                }}
                className={`w-full p-3 sm:p-4 rounded-2xl border transition-all duration-200 flex items-center justify-between group ${
                  currentLang === language.code
                    ? 'bg-gradient-to-r from-cyan-500/20 to-blue-500/20 border-cyan-500/50 scale-[1.02]'
                    : 'bg-white/[0.02] border-white/5 hover:bg-white/[0.05] hover:border-white/10'
                }`}
              >
                <div className="flex items-center gap-3 sm:gap-4">
                  <div className={`w-7 h-7 sm:w-8 sm:h-8 rounded-full flex items-center justify-center transition-all flex-shrink-0 ${
                    currentLang === language.code 
                      ? 'bg-gradient-to-r from-cyan-500 to-blue-500 shadow-lg shadow-cyan-500/30' 
                      : 'bg-white/10 group-hover:bg-white/20'
                  }`}>
                    {currentLang === language.code ? (
                      <svg className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                      </svg>
                    ) : (
                      <span className="text-xs sm:text-sm font-medium text-white/60">
                        {language.code.toUpperCase()}
                      </span>
                    )}
                  </div>
                  <span className={`text-base sm:text-lg font-medium transition-colors text-left ${
                    currentLang === language.code 
                      ? 'text-cyan-400' 
                      : 'text-white/70 group-hover:text-white'
                  }`}>
                    {language.name}
                  </span>
                </div>
                {currentLang === language.code && (
                  <span className="text-[10px] sm:text-xs text-cyan-400 font-medium px-2 sm:px-3 py-0.5 sm:py-1 bg-cyan-500/10 rounded-full flex-shrink-0 ml-2">
                    {t.languageModal.selected}
                  </span>
                )}
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
