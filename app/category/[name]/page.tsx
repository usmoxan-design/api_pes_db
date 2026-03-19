'use client';

import React, { useEffect, useState } from 'react';
import { useParams } from 'next/navigation';
import { Loader2, Database, Github } from 'lucide-react';
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

export default function CategoryPage() {
  const params = useParams();
  const categoryName = decodeURIComponent(params.name as string);
  
  const [players, setPlayers] = useState<Player[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchCategoryPlayers = async () => {
      setLoading(true);
      try {
        const categoriesRes = await fetch('/api/categories');
        const categories = await categoriesRes.json();
        const category = categories.find((c: any) => c.name === categoryName);
        
        if (category) {
          const res = await fetch(`/api/players?url=${encodeURIComponent(category.url)}&page=1`);
          const data = await res.json();
          setPlayers(data);
        }
      } catch (error) {
        console.error('Error fetching category players:', error);
      } finally {
        setLoading(false);
      }
    };
    fetchCategoryPlayers();
  }, [categoryName]);

  return (
    <div className="min-h-screen bg-[#0A0A0A] text-white selection:bg-cyan-500/30 font-sans">
      {/* Background Glow */}
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
              href="/#data"
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
              <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">{categoryName}</span>
            </h1>
            <p className="text-white/60 text-lg">
              {loading ? 'Loading...' : `${players.length} players in this category`}
            </p>
          </div>
        </section>

        {/* Players List */}
        <section className="py-8 px-6">
          <div className="max-w-5xl mx-auto">
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
                    <div className="flex items-center gap-4">
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
