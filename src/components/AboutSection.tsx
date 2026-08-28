import React, { useState } from 'react';
import {
  Brain,
  Code2,
  BarChart3,
  Cpu,
  Layers,
  Sparkles,
  CheckCircle2,
  Terminal,
  Compass,
} from 'lucide-react';
import { personalInfo, aboutHighlights } from '../data/portfolioData';

const iconMap: Record<string, React.ReactNode> = {
  'AI & Data Science': <Brain className="w-5 h-5 text-cyan-400" />,
  'Python Development': <Code2 className="w-5 h-5 text-amber-400" />,
  'Data Analytics': <BarChart3 className="w-5 h-5 text-emerald-400" />,
  'Automation': <Cpu className="w-5 h-5 text-purple-400" />,
  'Software Development': <Layers className="w-5 h-5 text-indigo-400" />,
  'AI-Assisted Development': <Sparkles className="w-5 h-5 text-pink-400" />,
};

export const AboutSection: React.FC = () => {
  const [hoveredCard, setHoveredCard] = useState<string | null>(null);

  return (
    <section id="about" className="relative py-24 md:py-32 overflow-hidden">
      {/* Subtle Glow backdrop */}
      <div className="absolute top-1/2 right-10 w-96 h-96 bg-purple-600/10 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-10 left-10 w-96 h-96 bg-blue-600/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-cyan-950/40 border border-cyan-500/30 text-cyan-400 text-xs font-mono tracking-widest uppercase">
            <Compass className="w-3.5 h-3.5" />
            <span>Profile Overview</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
            About{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400">
              Me
            </span>
          </h2>
          <p className="text-slate-400 text-sm sm:text-base">
            Bridging analytical data rigor with modern full-stack software development.
          </p>
        </div>

        {/* Main Grid: Summary Card + Focus Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          {/* Main Professional Summary Glass Card */}
          <div className="lg:col-span-5 flex flex-col justify-between p-6 sm:p-8 rounded-2xl bg-gradient-to-b from-slate-900/80 to-[#070c18]/90 border border-slate-800 backdrop-blur-xl shadow-xl shadow-black/40 relative overflow-hidden group">
            {/* Top glowing edge */}
            <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-cyan-500 to-transparent opacity-80" />

            <div className="space-y-6">
              {/* Card Header */}
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-cyan-500/10 border border-cyan-500/30 flex items-center justify-center text-cyan-400">
                    <Terminal className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-white font-mono">{personalInfo.name}</h3>
                    <p className="text-xs text-cyan-400 font-mono">AI &amp; Data Science Developer</p>
                  </div>
                </div>
                <span className="px-2.5 py-1 rounded-full text-[11px] font-mono bg-emerald-500/10 border border-emerald-500/30 text-emerald-400">
                  Active
                </span>
              </div>

              {/* Exact user requested professional summary quote */}
              <div className="p-4 rounded-xl bg-slate-950/60 border border-slate-800/80">
                <p className="text-slate-200 text-sm sm:text-base leading-relaxed italic">
                  "{personalInfo.aboutSummary}"
                </p>
              </div>

              {/* Core Strengths */}
              <div className="space-y-3 pt-2">
                <h4 className="text-xs font-mono uppercase tracking-widest text-slate-400">Core Strengths:</h4>
                <div className="space-y-2 text-xs sm:text-sm text-slate-300">
                  <div className="flex items-start gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-cyan-400 mt-0.5 shrink-0" />
                    <span>Real-world hands-on project implementations in Python &amp; Flask</span>
                  </div>
                  <div className="flex items-start gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-cyan-400 mt-0.5 shrink-0" />
                    <span>Interactive Power BI dashboards &amp; AI MCP server integrations</span>
                  </div>
                  <div className="flex items-start gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-cyan-400 mt-0.5 shrink-0" />
                    <span>Automated workflows using n8n and UiPath robotic automation</span>
                  </div>
                  <div className="flex items-start gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-cyan-400 mt-0.5 shrink-0" />
                    <span>AI-assisted rapid software engineering with Vibe Coding</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Bottom Quick Metric strip */}
            <div className="mt-8 pt-6 border-t border-slate-800/80 grid grid-cols-2 gap-4">
              <div className="p-3 rounded-xl bg-slate-900/40 border border-slate-800">
                <div className="text-xs text-slate-400 font-mono">Specialization</div>
                <div className="text-sm font-bold text-cyan-300 font-mono mt-0.5">AI &amp; Data Science</div>
              </div>
              <div className="p-3 rounded-xl bg-slate-900/40 border border-slate-800">
                <div className="text-xs text-slate-400 font-mono">Primary Language</div>
                <div className="text-sm font-bold text-purple-300 font-mono mt-0.5">Python &amp; SQL</div>
              </div>
            </div>
          </div>

          {/* Right Column: 6 Animated 3D Glassmorphism Highlights */}
          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-4">
            {aboutHighlights.map((item) => {
              const isHovered = hoveredCard === item.title;
              return (
                <div
                  key={item.title}
                  id={`about-card-${item.title.toLowerCase().replace(/[^a-z0-9]/g, '-')}`}
                  onMouseEnter={() => setHoveredCard(item.title)}
                  onMouseLeave={() => setHoveredCard(null)}
                  className={`p-5 rounded-2xl bg-[#070c18]/80 border transition-all duration-300 backdrop-blur-md flex flex-col justify-between group relative overflow-hidden ${
                    isHovered
                      ? `${item.border} shadow-xl shadow-cyan-950/30 -translate-y-1 bg-slate-900/90`
                      : 'border-slate-800/80 hover:border-slate-700'
                  }`}
                >
                  {/* Subtle inner gradient corner */}
                  <div
                    className={`absolute -right-8 -top-8 w-24 h-24 rounded-full bg-gradient-to-br ${item.color} blur-xl pointer-events-none transition-opacity duration-300 ${
                      isHovered ? 'opacity-100' : 'opacity-40'
                    }`}
                  />

                  <div className="space-y-3 relative z-10">
                    <div className="flex items-center justify-between">
                      <div className="p-2.5 rounded-xl bg-slate-900 border border-slate-800 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                        {iconMap[item.title] || <Brain className="w-5 h-5 text-cyan-400" />}
                      </div>
                      <span className="text-[10px] font-mono uppercase tracking-wider px-2 py-0.5 rounded-md bg-slate-800/80 text-slate-300 border border-slate-700/60">
                        {item.tag}
                      </span>
                    </div>

                    <h4 className="text-base font-bold text-white tracking-wide group-hover:text-cyan-300 transition-colors">
                      {item.title}
                    </h4>

                    <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">
                      {item.description}
                    </p>
                  </div>

                  <div className="mt-4 pt-3 border-t border-slate-800/50 flex items-center justify-between text-[11px] font-mono text-slate-400">
                    <span>Engineering Focus</span>
                    <span className="text-cyan-400 group-hover:translate-x-0.5 transition-transform">→</span>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};
