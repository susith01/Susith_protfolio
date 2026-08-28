import React, { useState } from 'react';
import {
  Code2,
  BarChart3,
  Brain,
  Cpu,
  Sparkles,
  ArrowRight,
  Hammer,
  Terminal,
  Database,
  Network,
  Workflow,
  Wand2,
} from 'lucide-react';
import { whatIBuildList } from '../data/portfolioData';

const cardVisuals: Record<string, React.ReactNode> = {
  'python-apps': (
    <div className="w-12 h-12 rounded-2xl bg-cyan-950/80 border border-cyan-500/30 flex items-center justify-center text-cyan-400 shadow-lg shadow-cyan-950/50 group-hover:rotate-6 transition-transform">
      <Code2 className="w-6 h-6" />
    </div>
  ),
  'data-analytics': (
    <div className="w-12 h-12 rounded-2xl bg-amber-950/80 border border-amber-500/30 flex items-center justify-center text-amber-400 shadow-lg shadow-amber-950/50 group-hover:rotate-6 transition-transform">
      <BarChart3 className="w-6 h-6" />
    </div>
  ),
  'ai-integration': (
    <div className="w-12 h-12 rounded-2xl bg-purple-950/80 border border-purple-500/30 flex items-center justify-center text-purple-400 shadow-lg shadow-purple-950/50 group-hover:rotate-6 transition-transform">
      <Brain className="w-6 h-6" />
    </div>
  ),
  automation: (
    <div className="w-12 h-12 rounded-2xl bg-emerald-950/80 border border-emerald-500/30 flex items-center justify-center text-emerald-400 shadow-lg shadow-emerald-950/50 group-hover:rotate-6 transition-transform">
      <Cpu className="w-6 h-6" />
    </div>
  ),
  'ai-assisted-dev': (
    <div className="w-12 h-12 rounded-2xl bg-pink-950/80 border border-pink-500/30 flex items-center justify-center text-pink-400 shadow-lg shadow-pink-950/50 group-hover:rotate-6 transition-transform">
      <Sparkles className="w-6 h-6" />
    </div>
  ),
};

export const WhatIBuildSection: React.FC = () => {
  const [hoveredCard, setHoveredCard] = useState<string | null>(null);

  return (
    <section id="what-i-build" className="relative py-24 md:py-32 overflow-hidden">
      {/* Background Glow */}
      <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-[550px] h-[550px] bg-purple-600/10 rounded-full blur-[160px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-emerald-950/40 border border-emerald-500/30 text-emerald-400 text-xs font-mono tracking-widest uppercase">
            <Hammer className="w-3.5 h-3.5" />
            <span>Core Solutions</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
            What I{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400">
              Build
            </span>
          </h2>
          <p className="text-slate-400 text-sm sm:text-base">
            Delivering modern software, business intelligence pipelines, automated workflows, and intelligent AI integrations.
          </p>
        </div>

        {/* 5 Interactive Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {whatIBuildList.map((item, index) => {
            const isHovered = hoveredCard === item.id;
            const isLast = index === whatIBuildList.length - 1;

            return (
              <div
                key={item.id}
                id={`what-i-build-card-${item.id}`}
                onMouseEnter={() => setHoveredCard(item.id)}
                onMouseLeave={() => setHoveredCard(null)}
                className={`p-6 sm:p-8 rounded-3xl bg-gradient-to-b from-slate-900/90 to-[#070c18]/95 border transition-all duration-300 backdrop-blur-xl flex flex-col justify-between group relative overflow-hidden shadow-xl shadow-black/40 ${
                  isHovered
                    ? 'border-cyan-500/50 shadow-2xl shadow-cyan-950/40 -translate-y-1.5'
                    : 'border-slate-800/80 hover:border-slate-700'
                } ${isLast ? 'md:col-span-2 lg:col-span-1' : ''}`}
              >
                {/* Top Subtle Glow */}
                <div
                  className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r ${item.accentGradient} opacity-80`}
                />

                <div className="space-y-4">
                  {/* Icon + Identifier */}
                  <div className="flex items-center justify-between">
                    {cardVisuals[item.id] || (
                      <div className="w-12 h-12 rounded-2xl bg-slate-800 flex items-center justify-center text-cyan-400">
                        <Terminal className="w-6 h-6" />
                      </div>
                    )}
                    <span className="text-[10px] font-mono uppercase tracking-wider text-slate-500">
                      MOD_0{index + 1}
                    </span>
                  </div>

                  {/* Title */}
                  <h3 className="text-xl font-bold text-white group-hover:text-cyan-300 transition-colors">
                    {item.title}
                  </h3>

                  {/* Description */}
                  <p className="text-xs sm:text-sm text-slate-300 leading-relaxed font-normal">
                    {item.description}
                  </p>

                  {/* Tools Badges */}
                  <div className="pt-2">
                    <div className="flex flex-wrap gap-1.5">
                      {item.tools.map((tool) => (
                        <span
                          key={tool}
                          className="px-2.5 py-1 rounded-lg text-xs font-mono bg-slate-950/80 border border-slate-800 text-slate-300"
                        >
                          {tool}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Footer strip */}
                <div className="mt-6 pt-4 border-t border-slate-800/60 flex items-center justify-between text-xs font-mono text-slate-400">
                  <span>Production Ready</span>
                  <ArrowRight className="w-4 h-4 text-cyan-400 group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
