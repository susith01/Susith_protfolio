import React from 'react';
import { Award, CheckCircle2, ExternalLink, ShieldCheck, Sparkles } from 'lucide-react';
import { certificationsList } from '../data/portfolioData';

export const CertificationsSection: React.FC = () => {
  return (
    <section id="certifications" className="relative py-24 md:py-32 overflow-hidden">
      {/* Glow */}
      <div className="absolute top-1/2 right-1/4 -translate-y-1/2 w-[500px] h-[500px] bg-blue-600/10 rounded-full blur-[160px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-blue-950/40 border border-blue-500/30 text-blue-400 text-xs font-mono tracking-widest uppercase">
            <Award className="w-3.5 h-3.5" />
            <span>Credentials</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
            Certifications
          </h2>
          <p className="text-slate-400 text-sm sm:text-base">
            Professional industry certifications validating Python engineering and data analytics methodologies.
          </p>
        </div>

        {/* Certifications Grid (ONLY the 2 specified IBM certifications) */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {certificationsList.map((cert) => (
            <div
              key={cert.id}
              id={`cert-card-${cert.id}`}
              className="p-6 sm:p-8 rounded-3xl bg-gradient-to-b from-slate-900/90 to-[#070c18]/95 border border-slate-800/80 backdrop-blur-xl shadow-xl shadow-black/40 hover:border-blue-500/40 transition-all duration-300 hover:-translate-y-1.5 flex flex-col justify-between group relative overflow-hidden"
            >
              {/* Top Accent Strip */}
              <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-500 via-cyan-400 to-indigo-500" />

              <div className="space-y-5">
                {/* Header with IBM badge */}
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 rounded-2xl bg-blue-950/80 border border-blue-500/30 flex items-center justify-center text-blue-400 shadow-md shadow-blue-950/50 group-hover:scale-105 transition-transform">
                      <ShieldCheck className="w-6 h-6 text-blue-400" />
                    </div>
                    <div>
                      <span className="text-xs font-mono text-cyan-400 font-bold uppercase tracking-wider">
                        {cert.issuer}
                      </span>
                      <h3 className="text-lg sm:text-xl font-bold text-white group-hover:text-cyan-300 transition-colors">
                        {cert.title}
                      </h3>
                    </div>
                  </div>

                  <span className="px-2.5 py-1 rounded-full text-[11px] font-mono bg-emerald-500/10 border border-emerald-500/30 text-emerald-400">
                    Verified
                  </span>
                </div>

                {/* Description */}
                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                  {cert.description}
                </p>

                {/* Skills Verified */}
                <div className="space-y-2 pt-1">
                  <div className="text-[11px] font-mono uppercase tracking-wider text-slate-400">
                    Validated Competencies:
                  </div>
                  <div className="flex flex-wrap gap-1.5">
                    {cert.skillsGained.map((skill) => (
                      <span
                        key={skill}
                        className="px-2.5 py-1 rounded-lg text-xs font-mono bg-slate-950/80 border border-slate-800 text-slate-300"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Card Footer */}
              <div className="mt-6 pt-4 border-t border-slate-800/80 flex items-center justify-between text-xs font-mono text-slate-400">
                <span className="flex items-center gap-1.5 text-cyan-300">
                  <Sparkles className="w-3.5 h-3.5" />
                  Industry Standard
                </span>

                <a
                  href={cert.credentialUrl || '#'}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-1 text-slate-400 hover:text-cyan-300 transition-colors"
                >
                  <span>Verification Portal</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
