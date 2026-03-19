'use client';

import React from 'react';
import { FolderOpen, Users, ExternalLink } from 'lucide-react';
import { Language } from './translations';

interface Player {
  id: string;
  name: string;
  club: string;
  nationality: string;
  position: string;
  ovr: string;
  imageUrl: string;
}

interface Category {
  name: string;
  url: string;
}

interface DataSectionProps {
  t: any;
  lang: Language;
  players: Player[];
  categories: Category[];
  loading: boolean;
  onCategoryClick: (category: Category) => void;
}

export default function DataSection({ t, lang, players, categories, loading, onCategoryClick }: DataSectionProps) {
  return (
    <section id="data" className="py-12 sm:py-20 px-4 sm:px-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-8">
          {/* Categories List */}
          <div className="p-4 sm:p-8 rounded-2xl sm:rounded-3xl bg-white/5 border border-white/10">
            <div className="flex items-center gap-2 sm:gap-3 mb-4 sm:mb-6">
              <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-xl bg-cyan-500/10 flex items-center justify-center text-cyan-400 flex-shrink-0">
                <FolderOpen size={18} />
              </div>
              <h2 className="text-xl sm:text-2xl font-bold">{t.categories}</h2>
            </div>
            {loading ? (
              <div className="flex items-center justify-center py-12">
                <div className="w-8 h-8 sm:w-10 sm:h-10 border-4 border-cyan-500/30 border-t-cyan-400 rounded-full animate-spin"></div>
              </div>
            ) : (
              <div className="space-y-2 max-h-[400px] sm:max-h-[600px] overflow-y-auto">
                {categories.map((category, index) => (
                  <button
                    key={index}
                    onClick={() => onCategoryClick(category)}
                    className="w-full p-3 sm:p-4 rounded-xl bg-white/5 border border-white/5 hover:bg-white/10 hover:border-cyan-500/30 transition-all group text-left"
                  >
                    <div className="flex items-center justify-between">
                      <span className="font-medium text-sm sm:text-base group-hover:text-cyan-400 transition-colors line-clamp-1">
                        {category.name}
                      </span>
                      <ExternalLink size={14} className="text-white/30 group-hover:text-cyan-400 transition-colors flex-shrink-0 ml-2" />
                    </div>
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Players List */}
          <div className="p-4 sm:p-8 rounded-2xl sm:rounded-3xl bg-white/5 border border-white/10">
            <div className="flex items-center justify-between gap-2 sm:gap-3 mb-4 sm:mb-6">
              <div className="flex items-center gap-2 sm:gap-3">
                <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-xl bg-purple-500/10 flex items-center justify-center text-purple-400 flex-shrink-0">
                  <Users size={18} />
                </div>
                <h2 className="text-xl sm:text-2xl font-bold">{t.allPlayers}</h2>
              </div>
              <a
                href="/players"
                target="_blank"
                rel="noopener noreferrer"
                className="px-3 sm:px-4 py-1.5 sm:py-2 text-xs sm:text-sm bg-cyan-500/10 hover:bg-cyan-500/20 text-cyan-400 border border-cyan-500/20 rounded-xl transition-all flex items-center gap-1 whitespace-nowrap"
              >
                {t.showAll} <ExternalLink size={12} />
              </a>
            </div>
            {loading ? (
              <div className="flex items-center justify-center py-12">
                <div className="w-8 h-8 sm:w-10 sm:h-10 border-4 border-cyan-500/30 border-t-cyan-400 rounded-full animate-spin"></div>
              </div>
            ) : (
              <div className="space-y-2 sm:space-y-3 max-h-[400px] sm:max-h-[600px] overflow-y-auto pr-1 sm:pr-2">
                {players.map((player) => (
                  <div
                    key={player.id}
                    className="flex items-center gap-2 sm:gap-4 p-3 sm:p-5 rounded-xl sm:rounded-2xl bg-gradient-to-r from-white/5 to-white/[0.02] border border-white/10 hover:bg-white/10 hover:border-purple-500/30 transition-all group"
                  >
                    <img
                      src={player.imageUrl}
                      alt={player.name}
                      className="w-14 h-14 sm:w-20 sm:h-20 rounded-xl sm:rounded-2xl object-cover bg-white/10 shadow-lg group-hover:scale-105 transition-transform flex-shrink-0"
                      onError={(e) => {
                        (e.target as HTMLImageElement).style.display = 'none';
                      }}
                    />
                    <div className="flex-1 min-w-0">
                      <div className="font-bold text-base sm:text-xl truncate text-white group-hover:text-cyan-400 transition-colors">
                        {player.name}
                      </div>
                      <div className="text-xs sm:text-sm text-white/50 flex items-center gap-2 sm:gap-3 mt-0.5 sm:mt-1">
                        <span className="px-1.5 sm:px-2 py-0.5 sm:py-1 rounded-lg bg-white/10 text-[10px] sm:text-xs">{player.position}</span>
                        <span>•</span>
                        <span className="truncate">{player.club}</span>
                      </div>
                    </div>
                    <div className="text-right flex-shrink-0">
                      <div className="text-2xl sm:text-3xl font-bold bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
                        {player.ovr}
                      </div>
                      <div className="text-[10px] sm:text-xs text-white/40 mt-0.5 sm:mt-1">{player.nationality}</div>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
