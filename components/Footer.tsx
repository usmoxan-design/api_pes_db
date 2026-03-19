'use client';

import React from 'react';
import { Database, Github } from 'lucide-react';

interface FooterProps {
  t: any;
}

export default function Footer({ t }: FooterProps) {
  return (
    <footer className="py-12 sm:py-20 border-t border-white/5 px-4 sm:px-6">
      <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4 sm:gap-8">
        <div className="flex items-center gap-2 sm:gap-3">
          <div className="w-7 h-7 sm:w-8 sm:h-8 bg-white/5 rounded-lg flex items-center justify-center">
            <Database className="text-white/40" size={14} />
          </div>
          <span className="text-xs sm:text-sm font-bold text-white/40 tracking-tight">
            {t.footer}
          </span>
        </div>
        <div className="flex flex-wrap justify-center gap-4 sm:gap-8 text-xs sm:text-sm text-white/40 font-medium">
          <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
          <a href="#" className="hover:text-white transition-colors">Documentation</a>
          <a
            href="https://github.com/usmoxan-design/api_pes_db"
            target="_blank"
            className="flex items-center gap-1 hover:text-white transition-colors"
          >
            <Github size={12} /> Source
          </a>
        </div>
      </div>
    </footer>
  );
}
