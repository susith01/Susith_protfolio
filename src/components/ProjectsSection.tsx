import React, { useState } from 'react';
import {
  FolderGit2,
  Github,
  ExternalLink,
  ArrowRight,
  Sparkles,
  CheckCircle2,
  Maximize2,
} from 'lucide-react';
import { projectsList } from '../data/portfolioData';
import { ProjectItem } from '../types/portfolio';
import { SpeedMonitorVisual, GroceryAppVisual, PowerBiAiVisual } from './ProjectVisuals';
import { ProjectModal } from './ProjectModal';

export const ProjectsSection: React.FC = () => {
  const [selectedProject, setSelectedProject] = useState<ProjectItem | null>(null);
  const [hoveredCard, setHoveredCard] = useState<string | null>(null);

  return (
    <section id="projects" className="relative py-24 md:py-32 overflow-hidden">
      {/* Background ambient lighting */}
      <div className="absolute top-1/3 right-1/4 w-[600px] h-[600px] bg-purple-600/10 rounded-full blur-[170px] pointer-events-none" />
      <div className="absolute bottom-10 left-1/4 w-[600px] h-[600px] bg-blue-600/10 rounded-full blur-[170px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-purple-950/40 border border-purple-500/30 text-purple-400 text-xs font-mono tracking-widest uppercase">
            <FolderGit2 className="w-3.5 h-3.5" />
            <span>Showcase Portfolio</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
            Featured{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-blue-400 to-cyan-400">
              Projects
            </span>
          </h2>
          <p className="text-slate-400 text-sm sm:text-base">
            Tangible real-world software applications built with Python, Flask, Power BI MCP integrations, and AI-assisted development.
          </p>
        </div>

        {/* Projects Showcase Cards */}
        <div className="space-y-12 lg:space-y-16">
          {projectsList.map((project, index) => {
            const isReversed = index % 2 !== 0;
            const isHovered = hoveredCard === project.id;

            return (
              <div
                key={project.id}
                id={`project-card-${project.id}`}
                onMouseEnter={() => setHoveredCard(project.id)}
                onMouseLeave={() => setHoveredCard(null)}
                className={`p-6 sm:p-8 lg:p-10 rounded-3xl bg-gradient-to-b from-slate-900/90 to-[#070c18]/95 border border-slate-800/80 backdrop-blur-xl transition-all duration-300 shadow-2xl shadow-black/50 hover:border-cyan-500/40 relative overflow-hidden group ${
                  isHovered ? '-translate-y-1.5' : ''
                }`}
              >
                {/* Top Accent Line */}
                <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-cyan-500 via-blue-500 to-purple-500" />

                <div
                  className={`grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center ${
                    isReversed ? 'lg:flex-row-reverse' : ''
                  }`}
                >
                  {/* Visual Simulation Column */}
                  <div
                    className={`lg:col-span-6 w-full h-[320px] sm:h-[360px] relative ${
                      isReversed ? 'lg:order-2' : 'lg:order-1'
                    }`}
                  >
                    <div className="w-full h-full rounded-2xl overflow-hidden shadow-xl shadow-black/60 relative group-hover:scale-[1.01] transition-transform duration-300">
                      {project.type === 'speed-monitor' && <SpeedMonitorVisual />}
                      {project.type === 'grocery-app' && <GroceryAppVisual />}
                      {project.type === 'power-bi-ai' && <PowerBiAiVisual />}
                    </div>
                  </div>

                  {/* Content Column */}
                  <div
                    className={`lg:col-span-6 flex flex-col justify-between space-y-6 ${
                      isReversed ? 'lg:order-1' : 'lg:order-2'
                    }`}
                  >
                    <div className="space-y-4">
                      <div className="flex items-center justify-between">
                        <span className="text-xs font-mono uppercase tracking-widest text-cyan-400 font-semibold px-2.5 py-1 rounded-md bg-cyan-950/60 border border-cyan-500/30">
                          {project.category}
                        </span>
                        <button
                          onClick={() => setSelectedProject(project)}
                          className="text-xs text-slate-400 hover:text-cyan-300 flex items-center gap-1 font-mono transition-colors"
                        >
                          <Maximize2 className="w-3.5 h-3.5" />
                          <span>Expand</span>
                        </button>
                      </div>

                      <h3 className="text-2xl sm:text-3xl font-extrabold text-white group-hover:text-cyan-300 transition-colors leading-tight">
                        {project.title}
                      </h3>

                      <p className="text-sm sm:text-base text-slate-300 leading-relaxed font-normal">
                        {project.shortDescription}
                      </p>

                      {/* Tech Pills */}
                      <div className="flex flex-wrap gap-2 pt-1">
                        {project.tech.map((t) => (
                          <span
                            key={t}
                            className="px-3 py-1 rounded-lg text-xs font-mono bg-slate-950/80 border border-slate-800 text-slate-200"
                          >
                            {t}
                          </span>
                        ))}
                      </div>

                      {/* Key Features Bullet Points */}
                      <div className="space-y-2 pt-2">
                        {project.keyFeatures.slice(0, 2).map((feat, i) => (
                          <div key={i} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-300">
                            <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
                            <span>{feat}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Actions Toolbar */}
                    <div className="flex flex-wrap items-center gap-3 pt-4 border-t border-slate-800/80">
                      <button
                        onClick={() => setSelectedProject(project)}
                        className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl text-xs font-semibold text-white bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-500 hover:to-purple-500 shadow-md shadow-blue-500/20 transition-all cursor-pointer hover:-translate-y-0.5"
                      >
                        <span>View Details</span>
                        <ArrowRight className="w-3.5 h-3.5" />
                      </button>

                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noreferrer"
                        className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl text-xs font-semibold text-slate-300 bg-slate-900 border border-slate-800 hover:bg-slate-800 hover:text-white transition-all hover:-translate-y-0.5"
                      >
                        <Github className="w-3.5 h-3.5" />
                        <span>GitHub</span>
                      </a>

                      <a
                        href={project.liveDemoUrl === '#' ? project.githubUrl : project.liveDemoUrl}
                        target="_blank"
                        rel="noreferrer"
                        className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl text-xs font-semibold text-cyan-300 bg-cyan-950/40 border border-cyan-500/30 hover:bg-cyan-900/50 transition-all hover:-translate-y-0.5"
                      >
                        <ExternalLink className="w-3.5 h-3.5" />
                        <span>Live Demo</span>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Project Detail Modal */}
      <ProjectModal project={selectedProject} onClose={() => setSelectedProject(null)} />
    </section>
  );
};
