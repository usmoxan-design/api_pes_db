'use client';

import React from 'react';
import { BookOpen, Github } from 'lucide-react';

interface EndpointsProps {
  t: any;
}

export default function Endpoints({ t }: EndpointsProps) {
  return (
    <section id="endpoints" className="py-12 sm:py-20 px-4 sm:px-6">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-8 sm:mb-12">
          <div className="inline-flex items-center gap-2 px-3 sm:px-4 py-1.5 sm:py-2 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 text-xs sm:text-sm font-medium mb-4">
            <BookOpen size={14} />
            {t.docs}
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-3 sm:mb-4">{t.endpoints}</h2>
          <p className="text-sm sm:text-base text-white/60 max-w-2xl mx-auto px-4">{t.docsDesc}</p>
        </div>

        <div className="space-y-3 sm:space-y-4">
          {/* Endpoint 1 */}
          <div className="p-4 sm:p-6 rounded-xl sm:rounded-2xl bg-white/5 border border-white/10">
            <div className="flex items-center justify-between mb-3 sm:mb-4">
              <div className="flex items-center gap-2 sm:gap-3">
                <span className="px-2 sm:px-3 py-1 bg-green-500/20 text-green-400 rounded-lg text-xs sm:text-sm font-mono font-bold">
                  GET
                </span>
                <code className="text-xs sm:text-sm text-white/80 font-mono">/api/categories</code>
              </div>
            </div>
            <p className="text-xs sm:text-sm text-white/50 mb-3 sm:mb-4">{t.description}: {t.categories}</p>
            <div className="bg-black/50 rounded-lg sm:rounded-xl p-3 sm:p-4 overflow-x-auto">
              <pre className="text-[10px] sm:text-xs text-white/70 font-mono" suppressHydrationWarning>
{`{
  "name": "Top Players",
  "url": "https://pesdb.net/efootball/?category=top"
}`}
              </pre>
            </div>
          </div>

          {/* Endpoint 2 */}
          <div className="p-4 sm:p-6 rounded-xl sm:rounded-2xl bg-white/5 border border-white/10">
            <div className="flex items-center justify-between mb-3 sm:mb-4">
              <div className="flex items-center gap-2 sm:gap-3">
                <span className="px-2 sm:px-3 py-1 bg-green-500/20 text-green-400 rounded-lg text-xs sm:text-sm font-mono font-bold">
                  GET
                </span>
                <code className="text-xs sm:text-sm text-white/80 font-mono">/api/players</code>
              </div>
            </div>
            <p className="text-xs sm:text-sm text-white/50 mb-3 sm:mb-4">{t.description}: {t.players} {t.loading.toLowerCase()}</p>
            <div className="flex flex-wrap gap-1.5 sm:gap-2 mb-3 sm:mb-4">
              <span className="px-2 py-1 bg-white/10 rounded text-[10px] sm:text-xs">?page=1</span>
              <span className="px-2 py-1 bg-white/10 rounded text-[10px] sm:text-xs">?url=category_url</span>
            </div>
            <div className="bg-black/50 rounded-lg sm:rounded-xl p-3 sm:p-4 overflow-x-auto">
              <pre className="text-[10px] sm:text-xs text-white/70 font-mono" suppressHydrationWarning>
{`{
  "id": "133543",
  "name": "Erling Haaland",
  "club": "Manchester City",
  "nationality": "Norway",
  "position": "CF",
  "ovr": "94",
  "imageUrl": "https://pesdb.net/efootball/images/players/133543.png"
}`}
              </pre>
            </div>
          </div>

          {/* Endpoint 3 */}
          <div className="p-4 sm:p-6 rounded-xl sm:rounded-2xl bg-white/5 border border-white/10">
            <div className="flex items-center justify-between mb-3 sm:mb-4">
              <div className="flex items-center gap-2 sm:gap-3">
                <span className="px-2 sm:px-3 py-1 bg-green-500/20 text-green-400 rounded-lg text-xs sm:text-sm font-mono font-bold">
                  GET
                </span>
                <code className="text-xs sm:text-sm text-white/80 font-mono">/api/player/[id]</code>
              </div>
            </div>
            <p className="text-xs sm:text-sm text-white/50 mb-3 sm:mb-4">{t.description}: {t.players} ID {t.loading.toLowerCase()}</p>
            <div className="bg-black/50 rounded-lg sm:rounded-xl p-3 sm:p-4 overflow-x-auto">
              <pre className="text-[10px] sm:text-xs text-white/70 font-mono" suppressHydrationWarning>
{`{
  "id": "133543",
  "name": "Erling Haaland",
  "team": "Manchester City",
  "position": "CF",
  "overall": "94"
}`}
              </pre>
            </div>
          </div>
        </div>

        <div className="mt-8 sm:mt-12 text-center">
          <a
            href="https://github.com/usmoxan-design/api_pes_db"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-5 sm:px-6 py-3 sm:py-4 bg-white text-black font-bold rounded-xl sm:rounded-2xl hover:bg-cyan-500 hover:text-white transition-all text-sm sm:text-base"
          >
            <Github size={16} />
            {t.getStarted}
          </a>
        </div>
      </div>
    </section>
  );
}
