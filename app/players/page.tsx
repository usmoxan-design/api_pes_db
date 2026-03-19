'use client';

import React, { useEffect, useState } from 'react';
import { ChevronLeft, ChevronRight, Loader2, Database, Github } from 'lucide-react';
import Link from 'next/link';

interface Player {
  id: string;
  name: string;
  club: string;
  nationality: string;
  position: string;
  ovr: string;
  imageUrl: string;
}

export default function PlayersPage() {
  const [players, setPlayers] = useState<Player[]>([]);
  const [loading, setLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(585);
  const itemsPerPage = 20;

  useEffect(() => {
    fetchPlayers(currentPage);
  }, [currentPage]);

  const fetchPlayers = async (page: number) => {
    setLoading(true);
    try {
      const res = await fetch(`/api/players?page=${page}`);
      const data = await res.json();
      setPlayers(data);
    } catch (error) {
      console.error('Error fetching players:', error);
    } finally {
      setLoading(false);
    }
  };

  const getPaginationItems = () => {
    const items: (number | string)[] = [];
    const showPages = 2;

    if (totalPages <= showPages * 2 + 3) {
      for (let i = 1; i <= totalPages; i++) {
        items.push(i);
      }
    } else {
      if (currentPage <= showPages + 1) {
        for (let i = 1; i <= showPages * 2 + 1; i++) {
          items.push(i);
        }
        items.push('...');
        items.push(totalPages);
      } else if (currentPage >= totalPages - showPages) {
        items.push(1);
        items.push('...');
        for (let i = totalPages - showPages * 2; i <= totalPages; i++) {
          items.push(i);
        }
      } else {
        items.push(1);
        items.push('...');
        for (let i = currentPage - showPages; i <= currentPage + showPages; i++) {
          items.push(i);
        }
        items.push('...');
        items.push(totalPages);
      }
    }

    return items;
  };

  return (
    <div className="min-h-screen bg-[#0A0A0A] text-white selection:bg-cyan-500/30 font-sans">
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-cyan-500/10 blur-[120px] rounded-full"></div>
        <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-purple-500/10 blur-[120px] rounded-full"></div>
      </div>

      <nav className="relative z-10 border-b border-white/5 bg-black/50 backdrop-blur-xl">
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-3">
            <div className="w-10 h-10 bg-gradient-to-tr from-cyan-500 to-blue-600 rounded-xl flex items-center justify-center shadow-lg shadow-cyan-500/20">
              <Database className="text-white" size={20} />
            </div>
            <span className="text-xl font-bold tracking-tight">
              ef<span className="text-cyan-400">Info</span>Hub
            </span>
          </Link>
          <div className="flex items-center gap-4">
            <Link
              href="/"
              className="text-sm font-medium text-white/60 hover:text-white transition-colors"
            >
              ← Back to Home
            </Link>
          </div>
        </div>
      </nav>

      <main className="relative z-10">
        {/* Header */}
        <section className="pt-16 pb-8 px-6">
          <div className="max-w-7xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-extrabold mb-4">
              All <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">eFootball Players</span>
            </h1>
            <p className="text-white/60 text-lg">
              Page {currentPage} of {totalPages} - {totalPages * itemsPerPage}+ players available
            </p>
          </div>
        </section>

        {/* SEO Stats */}
        <section className="py-8 px-6 border-t border-white/5">
          <div className="max-w-4xl mx-auto">
            <div className="grid md:grid-cols-3 gap-4 text-sm text-white/60">
              <div className="p-4 rounded-xl bg-white/5 border border-white/10">
                <div className="text-2xl font-bold text-cyan-400 mb-1">{totalPages * itemsPerPage}+</div>
                <div className="text-xs">Total Players</div>
              </div>
              <div className="p-4 rounded-xl bg-white/5 border border-white/10">
                <div className="text-2xl font-bold text-blue-400 mb-1">585</div>
                <div className="text-xs">Pages</div>
              </div>
              <div className="p-4 rounded-xl bg-white/5 border border-white/10">
                <div className="text-2xl font-bold text-purple-400 mb-1">Real-time</div>
                <div className="text-xs">Updates</div>
              </div>
            </div>
          </div>
        </section>

        {/* Players List */}
        <section className="py-8 px-6">
          <div className="max-w-5xl mx-auto">
            {/* Pagination - Top */}
            {totalPages > 1 && (
              <div className="flex items-center justify-center gap-2 mb-8 flex-wrap">
                <button
                  onClick={() => setCurrentPage(p => Math.max(1, p - 1))}
                  disabled={currentPage === 1}
                  className="px-4 py-3 rounded-xl bg-white/5 hover:bg-white/10 disabled:opacity-30 disabled:cursor-not-allowed transition-all flex items-center gap-2"
                >
                  <ChevronLeft size={18} /> Previous
                </button>

                <div className="flex items-center gap-1">
                  {getPaginationItems().map((item, index) => (
                    <button
                      key={index}
                      onClick={() => typeof item === 'number' && setCurrentPage(item)}
                      disabled={item === '...'}
                      className={`min-w-[44px] h-11 rounded-xl font-medium transition-all ${item === currentPage
                          ? 'bg-cyan-500 text-white'
                          : item === '...'
                            ? 'cursor-default text-white/40'
                            : 'bg-white/5 hover:bg-white/10'
                        }`}
                    >
                      {item}
                    </button>
                  ))}
                </div>

                <button
                  onClick={() => setCurrentPage(p => Math.min(totalPages, p + 1))}
                  disabled={currentPage === totalPages}
                  className="px-4 py-3 rounded-xl bg-white/5 hover:bg-white/10 disabled:opacity-30 disabled:cursor-not-allowed transition-all flex items-center gap-2"
                >
                  Next <ChevronRight size={18} />
                </button>
              </div>
            )}

            {loading ? (
              <div className="flex items-center justify-center py-24">
                <Loader2 className="w-12 h-12 animate-spin text-cyan-400" />
              </div>
            ) : (
              <div className="space-y-3">
                {players.map((player) => (
                  <div
                    key={player.id}
                    className="group p-5 rounded-2xl bg-white/5 border border-white/10 hover:bg-white/10 hover:border-cyan-500/30 transition-all"
                  >
                    <div className="flex items-start gap-4">
                      <img
                        src={player.imageUrl}
                        alt={player.name}
                        // h-50 ni olib tashladik, h-auto qildik. w-24 (96px) card uchun mosroq bo'lishi mumkin.
                        className="w-24 h-auto object-contain group-hover:scale-105 transition-transform"
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
                  </div>
                ))}
              </div>
            )}
          </div>
        </section>

        {/* Footer */}
        <footer className="py-20 border-t border-white/5 mt-20">
          <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-8">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 bg-white/5 rounded-lg flex items-center justify-center">
                <Database className="text-white/40" size={16} />
              </div>
              <span className="text-sm font-bold text-white/40 tracking-tight">
                efInfoHub API System v1.0
              </span>
            </div>
            <div className="flex gap-8 text-sm text-white/40 font-medium">
              <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
              <a href="#" className="hover:text-white transition-colors">Documentation</a>
              <a
                href="https://github.com/usmoxan-design/api_pes_db"
                target="_blank"
                className="flex items-center gap-1 hover:text-white transition-colors"
              >
                <Github size={14} /> Source
              </a>
            </div>
          </div>
        </footer>
      </main>
    </div>
  );
}
