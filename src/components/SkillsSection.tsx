import React, { useState } from 'react';
import {
  Code,
  Database,
  BarChart2,
  Terminal,
  Cpu,
  Layers,
  Sparkles,
  GitBranch,
  Table,
  LineChart,
  Boxes,
  Zap,
} from 'lucide-react';
import { skillsList } from '../data/portfolioData';

const categories = [
  'All',
  'Programming',
  'Data Analysis',
  'Web & Dev Tools',
  'Core Concepts',
  'Automation Tools',
] as const;

const skillIconMap: Record<string, React.ReactNode> = {
  Python: <Code className="w-5 h-5 text-[#38bdf8]" />,
  SQL: <Database className="w-5 h-5 text-[#60a5fa]" />,
  Pandas: <Table className="w-5 h-5 text-[#818cf8]" />,
  NumPy: <Boxes className="w-5 h-5 text-[#a78bfa]" />,
  Matplotlib: <LineChart className="w-5 h-5 text-[#c084fc]" />,
  Excel: <Table className="w-5 h-5 text-[#34d399]" />,
  'Power BI': <BarChart2 className="w-5 h-5 text-[#fbbf24]" />,
  Streamlit: <Sparkles className="w-5 h-5 text-[#f87171]" />,
  Flask: <Terminal className="w-5 h-5 text-[#38bdf8]" />,
  Git: <GitBranch className="w-5 h-5 text-[#fb923c]" />,
  GitHub: <GitBranch className="w-5 h-5 text-[#e2e8f0]" />,
  'Data Structures': <Layers className="w-5 h-5 text-[#38bdf8]" />,
  Algorithms: <Cpu className="w-5 h-5 text-[#818cf8]" />,
  'Problem Solving': <Zap className="w-5 h-5 text-[#a855f7]" />,
  n8n: <Zap className="w-5 h-5 text-[#ec4899]" />,
  UiPath: <Cpu className="w-5 h-5 text-[#f97316]" />,
};

export const SkillsSection: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [hoveredSkill, setHoveredSkill] = useState<string | null>(null);

  const filteredSkills =
    selectedCategory === 'All'
      ? skillsList
      : skillsList.filter((s) => s.category === selectedCategory);

  return (
    <section id="skills" className="relative py-24 md:py-32 overflow-hidden">
      {/* Glow Effects */}
      <div className="absolute top-1/2 left-1/3 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-cyan-600/10 rounded-full blur-[150px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14 space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-cyan-950/40 border border-cyan-500/30 text-cyan-400 text-xs font-mono tracking-widest uppercase">
            <Cpu className="w-3.5 h-3.5" />
            <span>Core Competencies</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
            Technical{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400">
              Skills
            </span>
          </h2>
          <p className="text-slate-400 text-sm sm:text-base">
            Structured skill stack spanning Python development, AI algorithms, data analytics pipelines, and workflow automation.
          </p>
        </div>

        {/* Category Filters */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
          {categories.map((category) => {
            const isSelected = selectedCategory === category;
            return (
              <button
                key={category}
                id={`skill-filter-${category.toLowerCase().replace(/[^a-z0-9]/g, '-')}`}
                onClick={() => setSelectedCategory(category)}
                className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-medium transition-all duration-200 cursor-pointer ${
                  isSelected
                    ? 'bg-gradient-to-r from-cyan-500/20 via-blue-500/20 to-purple-500/20 border border-cyan-500/50 text-cyan-300 shadow-md shadow-cyan-500/10'
                    : 'bg-slate-900/60 border border-slate-800 text-slate-400 hover:text-slate-200 hover:bg-slate-800/60'
                }`}
              >
                {category}
              </button>
            );
          })}
        </div>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-5">
          {filteredSkills.map((skill) => {
            const isHovered = hoveredSkill === skill.name;
            return (
              <div
                key={skill.name}
                id={`skill-card-${skill.name.toLowerCase().replace(/[^a-z0-9]/g, '-')}`}
                onMouseEnter={() => setHoveredSkill(skill.name)}
                onMouseLeave={() => setHoveredSkill(null)}
                className={`p-5 rounded-2xl bg-gradient-to-b from-slate-900/80 to-[#070c18]/90 border transition-all duration-300 backdrop-blur-md flex flex-col justify-between group relative overflow-hidden ${
                  isHovered
                    ? 'border-cyan-500/40 shadow-xl shadow-cyan-950/40 -translate-y-1.5'
                    : 'border-slate-800/80 hover:border-slate-700'
                }`}
              >
                {/* Top Subtle Glow */}
                <div
                  className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-cyan-400 to-transparent transition-opacity duration-300 ${
                    isHovered ? 'opacity-100' : 'opacity-0'
                  }`}
                />

                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <div className="p-3 rounded-xl bg-slate-950/80 border border-slate-800/80 flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-inner">
                      {skillIconMap[skill.name] || <Code className="w-5 h-5 text-cyan-400" />}
                    </div>
                    <span className="text-[10px] font-mono uppercase tracking-wider px-2 py-0.5 rounded-md bg-slate-800/60 text-slate-400 border border-slate-700/40">
                      {skill.category}
                    </span>
                  </div>

                  <div>
                    <h3 className="text-base font-bold text-white group-hover:text-cyan-300 transition-colors font-mono">
                      {skill.name}
                    </h3>
                    <p className="text-xs text-slate-300 mt-1.5 leading-relaxed">
                      {skill.description}
                    </p>
                  </div>
                </div>

                <div className="mt-4 pt-3 border-t border-slate-800/50 flex items-center justify-between text-[11px] font-mono text-slate-400">
                  <span className="flex items-center gap-1">
                    <span className="w-1.5 h-1.5 rounded-full bg-cyan-400" />
                    Verified Skill
                  </span>
                  <span className="text-cyan-400 group-hover:translate-x-1 transition-transform">
                    →
                  </span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
