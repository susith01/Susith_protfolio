import React, { useState } from 'react';
import {
  GitCommit,
  GraduationCap,
  Code2,
  BarChart3,
  Cpu,
  Sparkles,
  Layers,
  Rocket,
  Milestone,
  ArrowDown,
} from 'lucide-react';
import { journeyStages } from '../data/portfolioData';

const stageIcons: Record<string, React.ReactNode> = {
  GraduationCap: <GraduationCap className="w-5 h-5 text-cyan-400" />,
  Code2: <Code2 className="w-5 h-5 text-amber-400" />,
  BarChart3: <BarChart3 className="w-5 h-5 text-emerald-400" />,
  Cpu: <Cpu className="w-5 h-5 text-purple-400" />,
  Sparkles: <Sparkles className="w-5 h-5 text-pink-400" />,
  Layers: <Layers className="w-5 h-5 text-blue-400" />,
  Rocket: <Rocket className="w-5 h-5 text-cyan-300" />,
};

export const JourneySection: React.FC = () => {
  const [activeStage, setActiveStage] = useState<string | null>(null);

  return (
    <section id="journey" className="relative py-24 md:py-32 overflow-hidden">
      {/* Background ambient lighting */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[700px] h-[700px] bg-cyan-600/10 rounded-full blur-[180px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-20 space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-cyan-950/40 border border-cyan-500/30 text-cyan-400 text-xs font-mono tracking-widest uppercase">
            <Milestone className="w-3.5 h-3.5" />
            <span>Progression Roadmap</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
            My{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400">
              Journey
            </span>
          </h2>
          <p className="text-slate-400 text-sm sm:text-base">
            The technical progression from computational foundations to specialized software and AI engineering.
          </p>
        </div>

        {/* Vertical Timeline */}
        <div className="relative max-w-4xl mx-auto">
          {/* Animated Glowing Connecting Line */}
          <div className="absolute left-6 sm:left-1/2 top-4 bottom-8 -translate-x-1/2 w-1 bg-gradient-to-b from-cyan-500 via-purple-500 to-emerald-400 rounded-full opacity-60 shadow-lg shadow-cyan-500/30" />

          <div className="space-y-12 sm:space-y-16">
            {journeyStages.map((stage, index) => {
              const isEven = index % 2 === 0;
              const isSelected = activeStage === stage.id;
              const isLast = index === journeyStages.length - 1;

              return (
                <div
                  key={stage.id}
                  id={`journey-stage-${stage.id}`}
                  onMouseEnter={() => setActiveStage(stage.id)}
                  onMouseLeave={() => setActiveStage(null)}
                  className={`relative flex flex-col sm:flex-row items-start sm:items-center ${
                    isEven ? 'sm:flex-row-reverse' : ''
                  } gap-6 sm:gap-10`}
                >
                  {/* Glowing Node on Line */}
                  <div className="absolute left-6 sm:left-1/2 -translate-x-1/2 flex items-center justify-center z-20">
                    <div
                      className={`w-12 h-12 rounded-2xl bg-[#030712] border-2 transition-all duration-300 flex items-center justify-center shadow-lg ${
                        isLast
                          ? 'border-emerald-400 shadow-emerald-500/50 scale-110'
                          : isSelected
                          ? 'border-cyan-400 shadow-cyan-500/50 scale-110'
                          : 'border-slate-700 shadow-black/60'
                      }`}
                    >
                      {stageIcons[stage.iconName] || <GitCommit className="w-5 h-5 text-cyan-400" />}
                    </div>
                  </div>

                  {/* Spacer for desktop symmetry */}
                  <div className="w-12 sm:w-1/2 shrink-0 hidden sm:block" />

                  {/* Content Card */}
                  <div className="w-full sm:w-1/2 pl-16 sm:pl-0">
                    <div
                      className={`p-6 sm:p-7 rounded-3xl bg-gradient-to-b from-slate-900/90 to-[#070c18]/95 border transition-all duration-300 backdrop-blur-xl shadow-xl shadow-black/40 ${
                        isLast
                          ? 'border-emerald-500/40 bg-gradient-to-b from-slate-900/95 to-emerald-950/20'
                          : isSelected
                          ? 'border-cyan-500/40 -translate-y-1'
                          : 'border-slate-800/80 hover:border-slate-700'
                      }`}
                    >
                      <div className="space-y-3">
                        <div className="flex items-center justify-between">
                          <span className="text-[11px] font-mono uppercase tracking-wider text-cyan-400 font-semibold px-2.5 py-0.5 rounded-md bg-cyan-950/60 border border-cyan-500/30">
                            STEP 0{index + 1}
                          </span>
                          <span className="text-xs font-mono text-slate-400">
                            {stage.subtitle}
                          </span>
                        </div>

                        <h3 className="text-lg sm:text-xl font-bold text-white leading-snug">
                          {stage.title}
                        </h3>

                        <p className="text-xs sm:text-sm text-slate-300 leading-relaxed font-normal">
                          {stage.description}
                        </p>

                        <div className="pt-2 flex flex-wrap gap-1.5">
                          {stage.technologies.map((tech) => (
                            <span
                              key={tech}
                              className="px-2.5 py-1 rounded-lg text-xs font-mono bg-slate-950/80 border border-slate-800 text-slate-300"
                            >
                              {tech}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
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
