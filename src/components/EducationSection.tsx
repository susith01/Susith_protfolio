import React, { useState } from 'react';
import {
  GraduationCap,
  Calendar,
  Building2,
  Sparkles,
  BookOpen,
  CheckCircle2,
  Atom,
  Binary,
} from 'lucide-react';
import { educationList } from '../data/portfolioData';

export const EducationSection: React.FC = () => {
  const [activeTab, setActiveTab] = useState<string>('msc-ai-ds');

  return (
    <section id="education" className="relative py-24 md:py-32 overflow-hidden">
      {/* Background ambient lighting */}
      <div className="absolute top-1/3 left-1/4 w-[500px] h-[500px] bg-blue-600/10 rounded-full blur-[160px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] bg-purple-600/10 rounded-full blur-[160px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-20 space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-blue-950/40 border border-blue-500/30 text-blue-400 text-xs font-mono tracking-widest uppercase">
            <GraduationCap className="w-3.5 h-3.5" />
            <span>Academic Background</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
            Education
          </h2>
          <p className="text-slate-400 text-sm sm:text-base">
            Formal academic foundation in Artificial Intelligence, Data Science, and Computer Science fundamentals.
          </p>
        </div>

        {/* Timeline Layout */}
        <div className="relative max-w-4xl mx-auto">
          {/* Vertical Connecting Line with glowing gradient */}
          <div className="absolute left-4 sm:left-1/2 top-4 bottom-4 -translate-x-1/2 w-0.5 bg-gradient-to-b from-cyan-500 via-blue-500 to-purple-500 opacity-60" />

          <div className="space-y-12 sm:space-y-16">
            {educationList.map((edu, index) => {
              const isEven = index % 2 === 0;
              return (
                <div
                  key={edu.id}
                  id={`edu-item-${edu.id}`}
                  className={`relative flex flex-col sm:flex-row items-start sm:items-center ${
                    isEven ? 'sm:flex-row-reverse' : ''
                  } gap-6 sm:gap-10`}
                >
                  {/* Timeline Center Node */}
                  <div className="absolute left-4 sm:left-1/2 -translate-x-1/2 flex items-center justify-center z-20">
                    <div className="relative">
                      <div className="w-10 h-10 rounded-full bg-[#030712] border-2 border-cyan-400 flex items-center justify-center shadow-lg shadow-cyan-500/40">
                        {edu.isCurrentlyStudying ? (
                          <Atom className="w-5 h-5 text-cyan-400 animate-spin" style={{ animationDuration: '8s' }} />
                        ) : (
                          <GraduationCap className="w-5 h-5 text-purple-400" />
                        )}
                      </div>
                      {edu.isCurrentlyStudying && (
                        <div className="absolute -inset-1 rounded-full border border-cyan-400/50 animate-ping" />
                      )}
                    </div>
                  </div>

                  {/* Spacer for mobile alignment */}
                  <div className="w-10 sm:w-1/2 shrink-0 hidden sm:block" />

                  {/* Degree Card */}
                  <div className="w-full sm:w-1/2 pl-12 sm:pl-0">
                    <div className="p-6 sm:p-7 rounded-2xl bg-gradient-to-b from-slate-900/90 to-[#070c18]/90 border border-slate-800 backdrop-blur-xl hover:border-cyan-500/40 transition-all duration-300 shadow-xl shadow-black/40 hover:-translate-y-1 group relative overflow-hidden">
                      {/* Top Accent Gradient */}
                      <div
                        className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r ${
                          edu.isCurrentlyStudying
                            ? 'from-cyan-500 via-blue-500 to-indigo-500'
                            : 'from-purple-500 via-indigo-500 to-blue-500'
                        }`}
                      />

                      <div className="space-y-4">
                        {/* Status Badges */}
                        <div className="flex flex-wrap items-center justify-between gap-2">
                          {edu.isCurrentlyStudying ? (
                            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-mono font-medium bg-cyan-950/60 border border-cyan-400/40 text-cyan-300 shadow-sm shadow-cyan-500/30">
                              <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse" />
                              Currently Studying
                            </span>
                          ) : (
                            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-mono font-medium bg-purple-950/60 border border-purple-400/40 text-purple-300">
                              <Calendar className="w-3.5 h-3.5 text-purple-400" />
                              {edu.expectedGraduation ? `Expected Graduation: ${edu.expectedGraduation}` : edu.status}
                            </span>
                          )}

                          <span className="text-xs font-mono text-slate-400">
                            {edu.status}
                          </span>
                        </div>

                        {/* Degree Title */}
                        <div>
                          <h3 className="text-lg sm:text-xl font-bold text-white group-hover:text-cyan-300 transition-colors leading-snug">
                            {edu.degree}
                          </h3>

                          {/* Institution & University */}
                          <div className="flex items-center gap-2 mt-2 text-sm text-slate-300 font-medium">
                            <Building2 className="w-4 h-4 text-cyan-400 shrink-0" />
                            <span>{edu.institution}</span>
                          </div>
                          {edu.university && edu.university !== edu.institution && (
                            <div className="text-xs text-slate-400 pl-6 mt-0.5">
                              {edu.university}
                            </div>
                          )}
                        </div>

                        {/* Description */}
                        <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                          {edu.description}
                        </p>

                        {/* Focus Areas */}
                        <div className="pt-2">
                          <div className="text-[11px] font-mono uppercase tracking-wider text-slate-400 mb-2">
                            Curriculum Highlights:
                          </div>
                          <div className="flex flex-wrap gap-1.5">
                            {edu.focus.map((item) => (
                              <span
                                key={item}
                                className="px-2.5 py-1 rounded-lg text-xs font-mono bg-slate-950/80 border border-slate-800 text-cyan-200"
                              >
                                {item}
                              </span>
                            ))}
                          </div>
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
