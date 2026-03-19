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
    <section id="data" className="py-20 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Categories List */}
          <div className="p-8 rounded-3xl bg-white/5 border border-white/10">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-xl bg-cyan-500/10 flex items-center justify-center text-cyan-400">
                <FolderOpen size={20} />
              </div>
              <h2 className="text-2xl font-bold">{t.categories}</h2>
            </div>
            {loading ? (
              <div className="flex items-center justify-center py-12">
                <div className="w-10 h-10 border-4 border-cyan-500/30 border-t-cyan-400 rounded-full animate-spin"></div>
              </div>
            ) : (
              <div className="space-y-2 max-h-[600px] overflow-y-auto">
                {categories.map((category, index) => (
                  <button
                    key={index}
                    onClick={() => onCategoryClick(category)}
                    className="w-full p-4 rounded-xl bg-white/5 border border-white/5 hover:bg-white/10 hover:border-cyan-500/30 transition-all group text-left"
                  >
                    <div className="flex items-center justify-between">
                      <span className="font-medium group-hover:text-cyan-400 transition-colors">
                        {category.name}
                      </span>
                      <ExternalLink size={16} className="text-white/30 group-hover:text-cyan-400 transition-colors" />
                    </div>
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Players List */}
          <div className="p-8 rounded-3xl bg-white/5 border border-white/10">
            <div className="flex items-center justify-between gap-3 mb-6">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-purple-500/10 flex items-center justify-center text-purple-400">
                  <Users size={20} />
                </div>
                <h2 className="text-2xl font-bold">{t.allPlayers}</h2>
              </div>
              <a
                href="/players"
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-2 text-sm bg-cyan-500/10 hover:bg-cyan-500/20 text-cyan-400 border border-cyan-500/20 rounded-xl transition-all flex items-center gap-2 whitespace-nowrap"
              >
                {t.showAll} <ExternalLink size={14} />
              </a>
            </div>
            {loading ? (
              <div className="flex items-center justify-center py-12">
                <div className="w-10 h-10 border-4 border-cyan-500/30 border-t-cyan-400 rounded-full animate-spin"></div>
              </div>
            ) : (
              <div className="space-y-3 max-h-[600px] overflow-y-auto pr-2">
                {players.map((player) => (
                  <div
                    key={player.id}
                    className="flex items-center gap-4 p-5 rounded-2xl bg-gradient-to-r from-white/5 to-white/[0.02] border border-white/10 hover:bg-white/10 hover:border-purple-500/30 transition-all group"
                  >
                    <img
                      src={player.imageUrl}
                      alt={player.name}
                      className="w-20 h-20 rounded-2xl object-cover bg-white/10 shadow-lg group-hover:scale-105 transition-transform"
                      onError={(e) => {
                        (e.target as HTMLImageElement).style.display = 'none';
                      }}
                    />
                    <div className="flex-1 min-w-0">
                      <div className="font-bold text-xl truncate text-white group-hover:text-cyan-400 transition-colors">
                        {player.name}
                      </div>
                      <div className="text-sm text-white/50 flex items-center gap-3 mt-1">
                        <span className="px-2 py-1 rounded-lg bg-white/10 text-xs">{player.position}</span>
                        <span>•</span>
                        <span>{player.club}</span>
                      </div>
                    </div>
                    <div className="text-right">
                      <div className="text-3xl font-bold bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
                        {player.ovr}
                      </div>
                      <div className="text-xs text-white/40 mt-1">{player.nationality}</div>
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
