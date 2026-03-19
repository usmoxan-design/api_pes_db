import React from 'react';
import { Globe, Cpu, Database, Server, Smartphone, ExternalLink, Github, Terminal } from 'lucide-react';

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-[#0A0A0A] text-white selection:bg-cyan-500/30 font-sans">
      {/* Background Glow */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-cyan-500/10 blur-[120px] rounded-full"></div>
        <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-purple-500/10 blur-[120px] rounded-full"></div>
      </div>

      <nav className="relative z-10 border-b border-white/5 bg-black/50 backdrop-blur-xl">
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-gradient-to-tr from-cyan-500 to-blue-600 rounded-xl flex items-center justify-center shadow-lg shadow-cyan-500/20">
              <Database className="text-white" size={20} />
            </div>
            <span className="text-xl font-bold tracking-tight">
              ef<span className="text-cyan-400">Info</span>Hub
            </span>
          </div>
          <div className="hidden md:flex items-center gap-8 text-sm font-medium text-white/60">
            <a href="#api" className="hover:text-white transition-colors">API Docs</a>
            <a href="#github" className="hover:text-white transition-colors">GitHub</a>
            <div className="h-4 w-[1px] bg-white/10"></div>
            <span className="px-3 py-1 bg-cyan-500/10 border border-cyan-500/20 rounded-full text-cyan-400 text-xs">
              System Live
            </span>
          </div>
        </div>
      </nav>

      <main className="relative z-10">
        {/* Hero Section */}
        <section className="pt-24 pb-32 px-6 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 text-xs font-medium text-white/50 mb-8 animate-fade-in">
            <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></span>
            Next.js 14 backend for eFootball content
          </div>
          <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight mb-8 leading-tight">
            High-Performance API for <br className="hidden md:block" />
            <span className="bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent">
              eFootball Enthusiasts
            </span>
          </h1>
          <p className="max-w-2xl mx-auto text-lg md:text-xl text-white/60 mb-12">
            A lightning-fast, secure API wrapper for eFootball player data and statistics.
            Built to power the efInfo mobile ecosystem.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a href="/api/categories" className="w-full sm:w-auto px-8 py-4 bg-white text-black font-bold rounded-2xl hover:bg-cyan-500 hover:text-white transition-all transform hover:-translate-y-1">
              View Categories
            </a>
            <a href="#api" className="w-full sm:w-auto px-8 py-4 bg-white/5 border border-white/10 rounded-2xl font-bold hover:bg-white/10 transition-all flex items-center justify-center gap-2">
              <Terminal size={18} /> API Reference
            </a>
          </div>
        </section>

        {/* Features */}
        <section id="api" className="py-32 bg-white/[0.02]">
          <div className="max-w-6xl mx-auto px-6">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="p-8 rounded-3xl bg-white/5 border border-white/10 hover:border-cyan-500/30 transition-all group">
                <div className="w-12 h-12 rounded-2xl bg-cyan-500/10 flex items-center justify-center text-cyan-400 mb-6 group-hover:scale-110 transition-transform">
                  <Cpu size={24} />
                </div>
                <h3 className="text-xl font-bold mb-4">REST API</h3>
                <code className="block text-xs text-white/40 mb-4 font-mono">
                  GET /api/players
                </code>
                <p className="text-white/50 text-sm leading-relaxed">
                  Fast access to comprehensive player lists with support for filtering and pagination.
                </p>
              </div>
              
              <div className="p-8 rounded-3xl bg-white/5 border border-white/10 hover:border-blue-500/30 transition-all group">
                <div className="w-12 h-12 rounded-2xl bg-blue-500/10 flex items-center justify-center text-blue-400 mb-6 group-hover:scale-110 transition-transform">
                  <Database size={24} />
                </div>
                <h3 className="text-xl font-bold mb-4">Dynamic Scraping</h3>
                <code className="block text-xs text-white/40 mb-4 font-mono">
                  GET /api/player/[id]
                </code>
                <p className="text-white/50 text-sm leading-relaxed">
                  Real-time data extraction from eFootball databases ensuring up-to-date player stats.
                </p>
              </div>

              <div className="p-8 rounded-3xl bg-white/5 border border-white/10 hover:border-purple-500/30 transition-all group">
                <div className="w-12 h-12 rounded-2xl bg-purple-500/10 flex items-center justify-center text-purple-400 mb-6 group-hover:scale-110 transition-transform">
                  <Server size={24} />
                </div>
                <h3 className="text-xl font-bold mb-4">Global Network</h3>
                <code className="block text-xs text-white/40 mb-4 font-mono">
                  Powered by Vercel
                </code>
                <p className="text-white/50 text-sm leading-relaxed">
                  Edge-optimized responses with globally distributed serving for minimal latency.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="py-20 border-t border-white/5">
          <div className="max-w-7xl mx-auto px-6 flex flex-col md:row items-center justify-between gap-8">
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
              <a href="https://github.com" target="_blank" className="flex items-center gap-1 hover:text-white transition-colors">
                <Github size={14} /> Source
              </a>
            </div>
          </div>
        </footer>
      </main>
    </div>
  );
}
