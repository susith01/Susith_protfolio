import React from 'react';
import {
  X,
  Github,
  ExternalLink,
  CheckCircle2,
  Cpu,
  Layers,
  Sparkles,
  HelpCircle,
  Lightbulb,
  UserCheck,
} from 'lucide-react';
import { ProjectItem } from '../types/portfolio';
import { SpeedMonitorVisual, GroceryAppVisual, PowerBiAiVisual } from './ProjectVisuals';

interface ProjectModalProps {
  project: ProjectItem | null;
  onClose: () => void;
}

export const ProjectModal: React.FC<ProjectModalProps> = ({ project, onClose }) => {
  if (!project) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto bg-black/80 backdrop-blur-xl animate-in fade-in duration-200">
      <div className="relative w-full max-w-3xl my-8 rounded-2xl bg-[#070c18] border border-slate-700/80 shadow-2xl shadow-cyan-950/50 overflow-hidden text-slate-100">
        {/* Top Gradient Edge */}
        <div className="h-1.5 w-full bg-gradient-to-r from-cyan-500 via-blue-500 to-purple-500" />

        {/* Modal Header */}
        <div className="p-6 sm:p-8 pb-4 flex items-start justify-between gap-4 border-b border-slate-800/80">
          <div className="space-y-1">
            <span className="text-xs font-mono uppercase tracking-widest text-cyan-400 font-semibold">
              {project.category}
            </span>
            <h3 className="text-xl sm:text-2xl font-bold text-white leading-snug">
              {project.title}
            </h3>
          </div>

          <button
            onClick={onClose}
            className="p-2 rounded-xl bg-slate-900 hover:bg-slate-800 text-slate-400 hover:text-white border border-slate-800 transition-colors"
            aria-label="Close project modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Body */}
        <div className="p-6 sm:p-8 space-y-6 max-h-[75vh] overflow-y-auto">
          {/* Interactive Simulation Box */}
          <div className="rounded-2xl overflow-hidden border border-slate-800 bg-slate-950/60 p-2">
            {project.type === 'speed-monitor' && <SpeedMonitorVisual />}
            {project.type === 'grocery-app' && <GroceryAppVisual />}
            {project.type === 'power-bi-ai' && <PowerBiAiVisual />}
          </div>

          {/* Tech Stack Pills */}
          <div>
            <h4 className="text-xs font-mono uppercase tracking-wider text-slate-400 mb-2.5">
              Technologies &amp; Architecture:
            </h4>
            <div className="flex flex-wrap gap-2">
              {project.tech.map((t) => (
                <span
                  key={t}
                  className="px-3 py-1 rounded-lg text-xs font-mono bg-slate-900 border border-slate-700 text-cyan-300"
                >
                  {t}
                </span>
              ))}
            </div>
          </div>

          {/* Problem & Solution Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="p-4 rounded-xl bg-slate-900/60 border border-slate-800 space-y-2">
              <div className="flex items-center gap-2 text-rose-400 text-xs font-mono font-bold uppercase tracking-wider">
                <HelpCircle className="w-4 h-4" />
                <span>The Problem</span>
              </div>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                {project.fullProblem}
              </p>
            </div>

            <div className="p-4 rounded-xl bg-slate-900/60 border border-slate-800 space-y-2">
              <div className="flex items-center gap-2 text-emerald-400 text-xs font-mono font-bold uppercase tracking-wider">
                <Lightbulb className="w-4 h-4" />
                <span>The Solution</span>
              </div>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                {project.solution}
              </p>
            </div>
          </div>

          {/* Key Features */}
          <div className="space-y-3">
            <h4 className="text-xs font-mono uppercase tracking-wider text-slate-400">
              Key Features &amp; Implementation Highlights:
            </h4>
            <div className="grid grid-cols-1 gap-2.5">
              {project.keyFeatures.map((feat, index) => (
                <div
                  key={index}
                  className="p-3 rounded-xl bg-slate-900/40 border border-slate-800/80 flex items-start gap-3"
                >
                  <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
                  <span className="text-xs sm:text-sm text-slate-200">{feat}</span>
                </div>
              ))}
            </div>
          </div>

          {/* My Contribution */}
          <div className="p-4 rounded-xl bg-blue-950/30 border border-blue-500/30 space-y-2">
            <div className="flex items-center gap-2 text-cyan-300 text-xs font-mono font-bold uppercase tracking-wider">
              <UserCheck className="w-4 h-4" />
              <span>My Contribution</span>
            </div>
            <p className="text-xs sm:text-sm text-slate-200 leading-relaxed">
              {project.myContribution}
            </p>
          </div>
        </div>

        {/* Modal Footer CTAs */}
        <div className="p-6 sm:p-8 pt-4 border-t border-slate-800/80 flex flex-wrap items-center justify-between gap-4 bg-[#030712]/60">
          <div className="text-xs text-slate-400 font-mono">
            Direct GitHub &amp; Demo Verification:
          </div>

          <div className="flex items-center gap-3 w-full sm:w-auto">
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noreferrer"
              className="flex-1 sm:flex-initial inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl text-xs font-semibold text-white bg-slate-800 hover:bg-slate-700 border border-slate-700 transition-all"
            >
              <Github className="w-4 h-4" />
              <span>GitHub Repo</span>
            </a>

            <a
              href={project.liveDemoUrl === '#' ? project.githubUrl : project.liveDemoUrl}
              target="_blank"
              rel="noreferrer"
              className="flex-1 sm:flex-initial inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl text-xs font-semibold text-white bg-gradient-to-r from-cyan-600 to-blue-600 hover:from-cyan-500 hover:to-blue-500 shadow-md shadow-cyan-500/20 transition-all"
            >
              <ExternalLink className="w-4 h-4" />
              <span>Live Showcase</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
