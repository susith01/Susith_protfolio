import React, { useRef } from 'react';
import {
  X,
  Download,
  Printer,
  Mail,
  Phone,
  Linkedin,
  Github,
  Award,
  BookOpen,
  Code2,
  Cpu,
  Layers,
  Sparkles,
} from 'lucide-react';
import { personalInfo, educationList, skillsList, projectsList, certificationsList } from '../data/portfolioData';

interface ResumeModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ResumeModal: React.FC<ResumeModalProps> = ({ isOpen, onClose }) => {
  const resumePrintRef = useRef<HTMLDivElement>(null);

  if (!isOpen) return null;

  const handlePrint = () => {
    window.print();
  };

  const handleDownload = () => {
    // Generate text/markdown downloadable resume blob or trigger print to PDF
    const resumeText = `
SUSITH RAVICHANDRAN
AI & Data Science Enthusiast | Python Developer
Email: ${personalInfo.email} | Phone: ${personalInfo.phone}
LinkedIn: https://${personalInfo.linkedin}
GitHub: https://${personalInfo.github}

PROFESSIONAL SUMMARY
${personalInfo.aboutSummary}

EDUCATION
- MSc Artificial Intelligence & Data Science (Currently Pursuing)
  Karunya Institute of Technology and Sciences (Karunya University)
- BSc Artificial Intelligence & Data Science (Expected Graduation: 2026)
  Nandha Arts and Science College, Bharathiar University

TECHNICAL SKILLS
- Programming: Python, SQL
- Data Analysis: Pandas, NumPy, Matplotlib, Excel, Power BI
- Web & Dev Tools: Streamlit, Flask, Git, GitHub
- Core Concepts: Data Structures, Algorithms, Problem Solving
- Automation: n8n, UiPath

FEATURED PROJECTS
1. Smart Internet Speed Monitoring & Boosting System (Python, Flask)
   - Real-time internet speed monitor with automated network optimization.
2. Grocery Shopping App (Vibe Coding, AI-Assisted Development)
   - Full e-commerce flow from products to cart, order, and tracking.
3. AI-Powered Power BI Analytics (Power BI, MCP Server, AI Integration)
   - Automated data retrieval and intelligent insights generation.

CERTIFICATIONS
- Python for Data Science — IBM
- Data Analytics — IBM
    `.trim();

    const blob = new Blob([resumeText], { type: 'text/plain;charset=utf-8' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = `Susith_Ravichandran_Resume.txt`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 overflow-y-auto bg-black/85 backdrop-blur-xl animate-in fade-in duration-200">
      <div className="relative w-full max-w-4xl my-6 rounded-2xl bg-slate-950 border border-slate-700 shadow-2xl shadow-cyan-950/50 overflow-hidden flex flex-col text-slate-100 max-h-[90vh]">
        {/* Top Control Bar */}
        <div className="p-4 sm:p-5 bg-slate-900 border-b border-slate-800 flex items-center justify-between gap-4">
          <div className="flex items-center gap-2">
            <span className="w-3 h-3 rounded-full bg-emerald-400" />
            <span className="text-sm font-bold text-white font-mono">
              Susith_Ravichandran_Resume.pdf
            </span>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={handlePrint}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-xs font-semibold text-slate-200 border border-slate-700 transition-colors"
              title="Print Resume"
            >
              <Printer className="w-3.5 h-3.5" />
              <span className="hidden sm:inline">Print</span>
            </button>

            <button
              onClick={handleDownload}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-cyan-600 hover:bg-cyan-500 text-xs font-semibold text-white transition-colors shadow-md shadow-cyan-600/30"
              title="Download Resume"
            >
              <Download className="w-3.5 h-3.5" />
              <span>Download</span>
            </button>

            <button
              onClick={onClose}
              className="p-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-400 hover:text-white transition-colors"
              aria-label="Close resume viewer"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* ATS-Ready Rendered Paper Container */}
        <div className="p-6 sm:p-10 overflow-y-auto bg-slate-950/95 font-sans space-y-8 print:bg-white print:text-black">
          {/* Header */}
          <div className="border-b border-slate-800 pb-6 space-y-3">
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
              <h1 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
                {personalInfo.name}
              </h1>
              <span className="text-xs font-mono text-cyan-400 font-semibold px-2.5 py-1 rounded bg-cyan-950/60 border border-cyan-500/30 w-fit">
                {personalInfo.title}
              </span>
            </div>

            {/* Contact details */}
            <div className="flex flex-wrap items-center gap-y-2 gap-x-4 text-xs text-slate-300 font-mono">
              <span className="flex items-center gap-1.5">
                <Mail className="w-3.5 h-3.5 text-cyan-400" />
                {personalInfo.email}
              </span>
              <span>•</span>
              <span className="flex items-center gap-1.5">
                <Phone className="w-3.5 h-3.5 text-cyan-400" />
                {personalInfo.phone}
              </span>
              <span>•</span>
              <span className="flex items-center gap-1.5">
                <Linkedin className="w-3.5 h-3.5 text-cyan-400" />
                {personalInfo.linkedin}
              </span>
              <span>•</span>
              <span className="flex items-center gap-1.5">
                <Github className="w-3.5 h-3.5 text-cyan-400" />
                {personalInfo.github}
              </span>
            </div>
          </div>

          {/* Professional Summary */}
          <div className="space-y-2">
            <h2 className="text-xs font-mono uppercase tracking-widest text-cyan-400 font-bold border-b border-slate-800 pb-1">
              Professional Summary
            </h2>
            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
              {personalInfo.aboutSummary}
            </p>
          </div>

          {/* Education */}
          <div className="space-y-4">
            <h2 className="text-xs font-mono uppercase tracking-widest text-cyan-400 font-bold border-b border-slate-800 pb-1">
              Education
            </h2>
            <div className="space-y-3">
              {educationList.map((edu) => (
                <div key={edu.id} className="space-y-1">
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between">
                    <h3 className="text-sm font-bold text-white">{edu.degree}</h3>
                    <span className="text-xs font-mono text-cyan-300">{edu.status}</span>
                  </div>
                  <div className="text-xs text-slate-400">
                    {edu.institution} {edu.university && `(${edu.university})`}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Technical Skills */}
          <div className="space-y-3">
            <h2 className="text-xs font-mono uppercase tracking-widest text-cyan-400 font-bold border-b border-slate-800 pb-1">
              Technical Skills
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 text-xs">
              <div className="p-2.5 rounded-lg bg-slate-900/60 border border-slate-800">
                <strong className="text-white font-mono">Programming:</strong>
                <span className="text-slate-300 ml-1.5">Python, SQL</span>
              </div>
              <div className="p-2.5 rounded-lg bg-slate-900/60 border border-slate-800">
                <strong className="text-white font-mono">Data Analysis:</strong>
                <span className="text-slate-300 ml-1.5">Pandas, NumPy, Matplotlib, Excel, Power BI</span>
              </div>
              <div className="p-2.5 rounded-lg bg-slate-900/60 border border-slate-800">
                <strong className="text-white font-mono">Web &amp; Dev Tools:</strong>
                <span className="text-slate-300 ml-1.5">Streamlit, Flask, Git, GitHub</span>
              </div>
              <div className="p-2.5 rounded-lg bg-slate-900/60 border border-slate-800">
                <strong className="text-white font-mono">Automation &amp; Concepts:</strong>
                <span className="text-slate-300 ml-1.5">n8n, UiPath, Data Structures, Algorithms</span>
              </div>
            </div>
          </div>

          {/* Projects */}
          <div className="space-y-4">
            <h2 className="text-xs font-mono uppercase tracking-widest text-cyan-400 font-bold border-b border-slate-800 pb-1">
              Featured Software Projects
            </h2>
            <div className="space-y-4">
              {projectsList.map((p) => (
                <div key={p.id} className="space-y-1.5">
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between">
                    <h3 className="text-sm font-bold text-white">{p.title}</h3>
                    <span className="text-xs font-mono text-purple-300">{p.tech.slice(0, 3).join(' • ')}</span>
                  </div>
                  <p className="text-xs text-slate-300">{p.shortDescription}</p>
                  <ul className="list-disc list-inside text-[11px] text-slate-400 space-y-0.5 pl-1">
                    {p.keyFeatures.slice(0, 2).map((feat, i) => (
                      <li key={i}>{feat}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>

          {/* Certifications */}
          <div className="space-y-3">
            <h2 className="text-xs font-mono uppercase tracking-widest text-cyan-400 font-bold border-b border-slate-800 pb-1">
              Certifications
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs">
              {certificationsList.map((cert) => (
                <div key={cert.id} className="p-2.5 rounded-lg bg-slate-900/60 border border-slate-800 flex items-center justify-between">
                  <span className="font-semibold text-white">{cert.title}</span>
                  <span className="font-mono text-cyan-400">{cert.issuer}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export const ResumeSection: React.FC<{ onOpenResume: () => void }> = ({ onOpenResume }) => {
  const handleDownload = () => {
    const resumeText = `
SUSITH RAVICHANDRAN
AI & Data Science Enthusiast | Python Developer
Email: ${personalInfo.email} | Phone: ${personalInfo.phone}
LinkedIn: https://${personalInfo.linkedin}
GitHub: https://${personalInfo.github}

PROFESSIONAL SUMMARY
${personalInfo.aboutSummary}

EDUCATION
- MSc Artificial Intelligence & Data Science (Currently Pursuing)
  Karunya Institute of Technology and Sciences (Karunya University)
- BSc Artificial Intelligence & Data Science (Expected Graduation: 2026)
  Nandha Arts and Science College, Bharathiar University

TECHNICAL SKILLS
- Programming: Python, SQL
- Data Analysis: Pandas, NumPy, Matplotlib, Excel, Power BI
- Web & Dev Tools: Streamlit, Flask, Git, GitHub
- Core Concepts: Data Structures, Algorithms, Problem Solving
- Automation: n8n, UiPath

FEATURED PROJECTS
1. Smart Internet Speed Monitoring & Boosting System (Python, Flask)
2. Grocery Shopping App (Vibe Coding, AI-Assisted Development)
3. AI-Powered Power BI Analytics (Power BI, MCP Server, AI Integration)

CERTIFICATIONS
- Python for Data Science — IBM
- Data Analytics — IBM
    `.trim();

    const blob = new Blob([resumeText], { type: 'text/plain;charset=utf-8' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = `Susith_Ravichandran_Resume.txt`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);
  };

  return (
    <section id="resume" className="relative py-24 md:py-32 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-4xl mx-auto p-8 sm:p-12 rounded-3xl bg-gradient-to-b from-slate-900/95 to-[#070c18]/95 border border-slate-800 backdrop-blur-2xl shadow-2xl relative overflow-hidden text-center space-y-6">
          {/* Top Gradient Edge */}
          <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-cyan-500 via-blue-500 to-purple-500" />

          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-cyan-950/60 border border-cyan-500/30 text-cyan-400 text-xs font-mono uppercase tracking-widest">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Recruiter Quick Action</span>
          </div>

          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Interested in My{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400">
              Profile?
            </span>
          </h2>

          <p className="text-slate-300 text-sm sm:text-base max-w-xl mx-auto leading-relaxed">
            Explore my skills, projects and educational journey through my resume.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-wrap items-center justify-center gap-4 pt-2">
            <button
              id="resume-cta-view"
              onClick={onOpenResume}
              className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl text-sm font-semibold text-white bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 hover:from-blue-500 hover:to-purple-500 shadow-lg shadow-blue-500/25 transition-all cursor-pointer hover:-translate-y-0.5"
            >
              <span>View Resume</span>
            </button>

            <button
              id="resume-cta-download"
              onClick={handleDownload}
              className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl text-sm font-semibold text-cyan-300 bg-slate-900 border border-cyan-500/30 hover:bg-slate-800 transition-all cursor-pointer hover:-translate-y-0.5"
            >
              <Download className="w-4 h-4" />
              <span>Download Resume</span>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
