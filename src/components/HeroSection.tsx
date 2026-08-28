import React from 'react';
import { ArrowRight, Code2, Database, Sparkles, FileText, Send, Github, Linkedin, Mail } from 'lucide-react';
import { personalInfo } from '../data/portfolioData';
import { Hero3D } from './Hero3D';

interface HeroSectionProps {
  onOpenResume: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({ onOpenResume }) => {
  return (
    <section
      id="home"
      className="relative min-h-screen pt-28 pb-16 md:pt-36 md:pb-24 flex items-center justify-center overflow-hidden"
    >
      {/* Background Lighting Accents */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-blue-600/10 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute top-1/3 left-10 w-[400px] h-[400px] bg-purple-600/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Column: Hero Content & CTAs */}
          <div className="lg:col-span-7 flex flex-col items-start space-y-6 text-left">
            {/* Status Badge */}
            <div
              id="hero-status-badge"
              className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full bg-slate-900/80 border border-emerald-500/30 backdrop-blur-md text-xs sm:text-sm font-medium text-slate-200 shadow-lg shadow-emerald-950/30"
            >
              <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-pulse" />
              <span>{personalInfo.statusBadge}</span>
            </div>

            {/* Intro Greeting */}
            <div className="space-y-2">
              <div className="flex items-center gap-2 text-cyan-400 font-mono text-sm sm:text-base tracking-wider uppercase">
                <Sparkles className="w-4 h-4" />
                <span>Hi, I'm Susith Ravichandran</span>
              </div>

              {/* Main Heading */}
              <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-[1.15]">
                AI &amp; Data Science Enthusiast <br className="hidden sm:inline" />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400">
                  | Python Developer
                </span>
              </h1>
            </div>

            {/* Supporting Text */}
            <p className="text-base sm:text-lg text-slate-300 max-w-2xl leading-relaxed font-normal">
              {personalInfo.heroSubtext}
            </p>

            {/* Tech Pill Tags */}
            <div className="flex flex-wrap gap-2 pt-1">
              {['Python', 'AI & Data Science', 'Data Analytics', 'Automation', 'Flask', 'Power BI', 'n8n'].map(
                (tech) => (
                  <span
                    key={tech}
                    className="px-3 py-1 rounded-lg text-xs font-mono bg-slate-900/60 border border-slate-800 text-slate-300"
                  >
                    {tech}
                  </span>
                )
              )}
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-wrap items-center gap-3.5 pt-4 w-full sm:w-auto">
              <a
                href="#projects"
                id="hero-cta-projects"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl text-sm font-semibold text-white bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 hover:from-blue-500 hover:to-purple-500 transition-all shadow-lg shadow-blue-500/25 hover:shadow-blue-500/40 hover:-translate-y-0.5"
              >
                <span>View My Projects</span>
                <ArrowRight className="w-4 h-4" />
              </a>

              <a
                href="#contact"
                id="hero-cta-connect"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl text-sm font-semibold text-slate-200 bg-slate-900/80 border border-slate-700/80 hover:bg-slate-800/90 hover:border-slate-600 hover:text-white transition-all backdrop-blur-md shadow-md shadow-black/30 hover:-translate-y-0.5"
              >
                <Send className="w-4 h-4 text-cyan-400" />
                <span>Let's Connect</span>
              </a>

              <button
                id="hero-cta-resume"
                onClick={onOpenResume}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl text-sm font-semibold text-cyan-300 bg-cyan-950/30 border border-cyan-500/30 hover:bg-cyan-900/40 hover:border-cyan-400 transition-all backdrop-blur-md shadow-md shadow-cyan-950/30 hover:-translate-y-0.5"
              >
                <FileText className="w-4 h-4" />
                <span>View Resume</span>
              </button>
            </div>

            {/* Social Quick Links */}
            <div className="flex items-center gap-4 pt-2 text-slate-400">
              <span className="text-xs font-mono uppercase tracking-widest text-slate-500">Connect:</span>
              <a
                href={personalInfo.linkedinUrl}
                target="_blank"
                rel="noreferrer"
                id="hero-social-linkedin"
                className="p-2 rounded-lg bg-slate-900/60 border border-slate-800 text-slate-400 hover:text-cyan-400 hover:border-cyan-500/40 transition-all"
                title="LinkedIn Profile"
              >
                <Linkedin className="w-4 h-4" />
              </a>
              <a
                href={personalInfo.githubUrl}
                target="_blank"
                rel="noreferrer"
                id="hero-social-github"
                className="p-2 rounded-lg bg-slate-900/60 border border-slate-800 text-slate-400 hover:text-white hover:border-slate-600 transition-all"
                title="GitHub Profile"
              >
                <Github className="w-4 h-4" />
              </a>
              <a
                href={`mailto:${personalInfo.email}`}
                id="hero-social-email"
                className="p-2 rounded-lg bg-slate-900/60 border border-slate-800 text-slate-400 hover:text-purple-400 hover:border-purple-500/40 transition-all"
                title="Send Email"
              >
                <Mail className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Right Column: 3D Interactive AI Visualization */}
          <div className="lg:col-span-5 flex items-center justify-center">
            <Hero3D />
          </div>
        </div>
      </div>
    </section>
  );
};
