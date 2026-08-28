import React, { useState, useEffect } from 'react';
import {
  Github,
  ExternalLink,
  GitBranch,
  FolderGit2,
  Terminal,
  Code2,
  Sparkles,
  ArrowUpRight,
  Shield,
  Layers,
} from 'lucide-react';
import { personalInfo } from '../data/portfolioData';

interface RepoData {
  id: number;
  name: string;
  description: string;
  html_url: string;
  language: string;
  updated_at: string;
}

export const GithubSection: React.FC = () => {
  const [repos, setRepos] = useState<RepoData[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  // Default repositories representing real projects from prompt
  const fallbackRepos: RepoData[] = [
    {
      id: 1,
      name: 'smart-internet-speed-monitor',
      description: 'Real-time internet speed monitoring and automated network optimization dashboard in Python & Flask.',
      html_url: 'https://github.com/susith01',
      language: 'Python',
      updated_at: '2026-08',
    },
    {
      id: 2,
      name: 'grocery-shopping-app',
      description: 'Reactive grocery shopping e-commerce interface built using AI-assisted Vibe Coding workflows.',
      html_url: 'https://github.com/susith01',
      language: 'TypeScript',
      updated_at: '2026-08',
    },
    {
      id: 3,
      name: 'powerbi-mcp-ai-analytics',
      description: 'Model Context Protocol (MCP) server bridge for automated Power BI insights and analytics extraction.',
      html_url: 'https://github.com/susith01',
      language: 'Python',
      updated_at: '2026-08',
    },
  ];

  useEffect(() => {
    let isMounted = true;
    const fetchGithubData = async () => {
      try {
        const res = await fetch('https://api.github.com/users/susith01/repos?sort=updated&per_page=6');
        if (res.ok) {
          const data = await res.json();
          if (isMounted && Array.isArray(data) && data.length > 0) {
            setRepos(
              data.map((r: any) => ({
                id: r.id,
                name: r.name,
                description: r.description || 'Public repository by Susith Ravichandran',
                html_url: r.html_url,
                language: r.language || 'Python',
                updated_at: r.updated_at ? r.updated_at.substring(0, 7) : 'Active',
              }))
            );
          } else if (isMounted) {
            setRepos(fallbackRepos);
          }
        } else if (isMounted) {
          setRepos(fallbackRepos);
        }
      } catch (err) {
        if (isMounted) setRepos(fallbackRepos);
      } finally {
        if (isMounted) setLoading(false);
      }
    };

    fetchGithubData();
    return () => {
      isMounted = false;
    };
  }, []);

  return (
    <section id="github" className="relative py-24 md:py-32 overflow-hidden">
      {/* Background ambient lighting */}
      <div className="absolute top-1/2 right-1/4 -translate-y-1/2 w-[550px] h-[550px] bg-slate-700/10 rounded-full blur-[170px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-slate-900 border border-slate-700 text-slate-300 text-xs font-mono tracking-widest uppercase">
            <Github className="w-3.5 h-3.5" />
            <span>Open Source &amp; Code</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
            Code &amp;{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-slate-200 to-purple-400">
              Projects
            </span>
          </h2>
          <p className="text-slate-400 text-sm sm:text-base">
            Explore my projects, experiments and development journey.
          </p>
        </div>

        {/* GitHub Overview Card */}
        <div className="max-w-4xl mx-auto mb-12 p-6 sm:p-8 rounded-3xl bg-gradient-to-b from-slate-900/95 to-[#070c18]/95 border border-slate-800 backdrop-blur-xl shadow-2xl flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-4 text-left">
            <div className="w-14 h-14 rounded-2xl bg-slate-950 border border-slate-700 flex items-center justify-center text-white shadow-xl shadow-black/50">
              <Github className="w-7 h-7" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <h3 className="text-lg font-bold text-white font-mono">susith01</h3>
                <span className="px-2 py-0.5 rounded text-[10px] font-mono bg-cyan-950/80 border border-cyan-500/40 text-cyan-300">
                  Verified Profile
                </span>
              </div>
              <p className="text-xs text-slate-400 mt-1 font-mono">
                AI &amp; Data Science Developer • Python Specialist
              </p>
            </div>
          </div>

          <a
            href={personalInfo.githubUrl}
            target="_blank"
            rel="noreferrer"
            id="github-visit-btn"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl text-sm font-semibold text-white bg-slate-800 hover:bg-slate-700 border border-slate-600 shadow-lg shadow-black/40 transition-all hover:-translate-y-0.5"
          >
            <Github className="w-4 h-4" />
            <span>Visit My GitHub</span>
            <ArrowUpRight className="w-4 h-4 text-cyan-400" />
          </a>
        </div>

        {/* Repositories Display */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 max-w-6xl mx-auto">
          {repos.map((repo) => (
            <a
              key={repo.id}
              href={repo.html_url}
              target="_blank"
              rel="noreferrer"
              id={`github-repo-card-${repo.id}`}
              className="p-5 rounded-2xl bg-[#070c18]/90 border border-slate-800 hover:border-cyan-500/40 transition-all duration-300 backdrop-blur-md flex flex-col justify-between group relative overflow-hidden hover:-translate-y-1 shadow-lg shadow-black/40"
            >
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2 text-cyan-400 font-mono text-xs font-semibold">
                    <FolderGit2 className="w-4 h-4 shrink-0" />
                    <span className="truncate max-w-[180px] text-white group-hover:text-cyan-300 transition-colors">
                      {repo.name}
                    </span>
                  </div>
                  <ExternalLink className="w-3.5 h-3.5 text-slate-500 group-hover:text-cyan-400 transition-colors" />
                </div>

                <p className="text-xs text-slate-400 leading-relaxed line-clamp-3">
                  {repo.description}
                </p>
              </div>

              <div className="mt-4 pt-3 border-t border-slate-800/80 flex items-center justify-between text-[11px] font-mono text-slate-400">
                <div className="flex items-center gap-1.5">
                  <span
                    className={`w-2.5 h-2.5 rounded-full ${
                      repo.language === 'Python'
                        ? 'bg-blue-400'
                        : repo.language === 'TypeScript'
                        ? 'bg-purple-400'
                        : 'bg-emerald-400'
                    }`}
                  />
                  <span>{repo.language}</span>
                </div>
                <span className="text-slate-500">Public</span>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};
