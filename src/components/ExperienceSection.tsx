"use client";

import React, { useState } from "react";
import { Briefcase, Calendar, MapPin, ChevronDown, ChevronUp, CheckCircle2, GraduationCap, Globe2 } from "lucide-react";
import { portfolioData } from "@/data/portfolio";

export default function ExperienceSection() {
  const [expandedIndex, setExpandedIndex] = useState<number | null>(0);

  const toggleExpand = (idx: number) => {
    setExpandedIndex(expandedIndex === idx ? null : idx);
  };

  return (
    <section id="career-trajectory" className="py-14 sm:py-24 relative z-10 border-t border-slate-200 dark:border-slate-800/80 bg-slate-100/50 dark:bg-[#070b16]/50 transition-colors">
      <span id="experience" className="sr-only" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8 sm:space-y-12">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-3 sm:gap-4 border-b border-slate-200 dark:border-slate-800/80 pb-5 sm:pb-6">
          <div>
            <div className="inline-flex items-center gap-2 text-xs font-mono text-cyan-600 dark:text-cyan-400 uppercase tracking-wider mb-1.5 sm:mb-2">
              <span className="w-2 h-2 rounded-full bg-cyan-500 dark:bg-cyan-400" />
              <span>Professional Timeline & Track Record</span>
            </div>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
              Career Trajectory & Technical Impact
            </h2>
          </div>
          <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400 max-w-md">
            5+ years of continuous advancement shipping high-availability distributed systems and optimizing cloud architectures.
          </p>
        </div>

        {/* Timeline Stack */}
        <div className="space-y-4 sm:space-y-6">
          {portfolioData.experiences.map((exp, idx) => {
            const isExpanded = expandedIndex === idx;

            return (
              <div
                key={idx}
                className="p-5 sm:p-8 rounded-2xl sm:rounded-3xl bg-white dark:bg-slate-900/80 border border-slate-200 dark:border-slate-800/90 shadow-sm hover:shadow-md dark:shadow-xl transition-all duration-300"
              >
                {/* Header row */}
                <div
                  onClick={() => toggleExpand(idx)}
                  className="cursor-pointer flex flex-col md:flex-row md:items-center justify-between gap-3 sm:gap-4 select-none"
                >
                  <div className="flex items-start gap-3 sm:gap-4">
                    <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-2xl bg-cyan-500/10 border border-cyan-500/30 flex items-center justify-center text-cyan-600 dark:text-cyan-400 shrink-0 mt-0.5">
                      <Briefcase className="w-5 h-5 sm:w-6 sm:h-6" />
                    </div>
                    <div>
                      <div className="flex flex-wrap items-center gap-2">
                        <h3 className="text-base sm:text-xl font-bold text-slate-900 dark:text-white">{exp.role}</h3>
                        {idx === 0 && (
                          <span className="px-2.5 py-0.5 rounded-full text-[10px] font-mono bg-emerald-500/10 text-emerald-700 dark:text-emerald-400 border border-emerald-500/30">
                            Current Role
                          </span>
                        )}
                      </div>
                      <div className="text-xs sm:text-sm font-semibold text-cyan-700 dark:text-cyan-400 mt-0.5">{exp.company}</div>
                    </div>
                  </div>

                  <div className="flex flex-wrap items-center gap-3 sm:gap-5 text-xs sm:text-sm md:text-base font-mono text-slate-700 dark:text-slate-300 md:ml-auto">
                    <div className="flex items-center gap-2">
                      <Calendar className="w-4 h-4 sm:w-4.5 sm:h-4.5 text-cyan-600 dark:text-cyan-400 shrink-0" />
                      <span className="font-medium text-slate-800 dark:text-slate-200">{exp.period}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <MapPin className="w-4 h-4 sm:w-4.5 sm:h-4.5 text-cyan-600 dark:text-cyan-400 shrink-0" />
                      <span className="font-medium text-slate-800 dark:text-slate-200">{exp.location}</span>
                    </div>
                    <button
                      className="p-1.5 rounded-xl bg-slate-100 dark:bg-slate-950 border border-slate-200 dark:border-slate-800 text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white shrink-0 ml-auto md:ml-0 transition-colors"
                      aria-label="Toggle details"
                    >
                      {isExpanded ? <ChevronUp className="w-4 h-4 sm:w-5 sm:h-5" /> : <ChevronDown className="w-4 h-4 sm:w-5 sm:h-5" />}
                    </button>
                  </div>
                </div>

                {/* Highlights List */}
                <div className="mt-4 sm:mt-6 pt-4 sm:pt-6 border-t border-slate-100 dark:border-slate-800/80 space-y-3 sm:space-y-4">
                  <ul className="space-y-2 sm:space-y-2.5">
                    {exp.highlights.map((point, pIdx) => (
                      <li key={pIdx} className="flex items-start gap-2.5 sm:gap-3 text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                        <CheckCircle2 className="w-4 h-4 text-cyan-600 dark:text-cyan-400 shrink-0 mt-0.5" />
                        <span>{point}</span>
                      </li>
                    ))}
                  </ul>

                  {/* Subdomains (if available, e.g. for SE2) */}
                  {exp.subDomains && isExpanded && (
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-3 sm:gap-4 pt-3 sm:pt-4 mt-3 sm:mt-4 border-t border-slate-100 dark:border-slate-800/60">
                      {exp.subDomains.map((sub, sIdx) => (
                        <div key={sIdx} className="p-3.5 sm:p-4 rounded-2xl bg-slate-50 dark:bg-slate-950/80 border border-slate-200 dark:border-slate-800 space-y-2">
                          <div className="text-xs font-mono font-bold text-cyan-700 dark:text-cyan-400 uppercase tracking-wider">
                            {sub.name}
                          </div>
                          <ul className="space-y-1.5 text-xs text-slate-600 dark:text-slate-300">
                            {sub.points.map((pt, ptIdx) => (
                              <li key={ptIdx} className="flex items-start gap-2">
                                <span className="text-emerald-500 dark:text-emerald-400 font-bold">•</span>
                                <span>{pt}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      ))}
                    </div>
                  )}

                  {/* Technologies Strip */}
                  <div className="flex flex-wrap items-center gap-1.5 pt-2 sm:pt-3">
                    <span className="text-[11px] sm:text-xs font-mono text-slate-400 mr-1 sm:mr-2">TECH:</span>
                    {exp.technologies.map((tech, tIdx) => (
                      <span
                        key={tIdx}
                        className="px-2 sm:px-2.5 py-0.5 rounded-lg text-[10px] sm:text-xs font-mono bg-slate-100 dark:bg-slate-950 text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-slate-800"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Academic Roots & Research Trajectory */}
        <div className="space-y-6 sm:space-y-8 pt-8 sm:pt-12 border-t border-slate-200 dark:border-slate-800/80">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-3 border-b border-slate-200 dark:border-slate-800/80 pb-4 sm:pb-5">
            <div>
              <div className="inline-flex items-center gap-2 text-xs font-mono text-cyan-600 dark:text-cyan-400 uppercase tracking-wider mb-1">
                <span className="w-2 h-2 rounded-full bg-cyan-500 dark:bg-cyan-400" />
                <span>Academic Roots & Research Trajectory</span>
              </div>
              <h3 className="text-xl sm:text-2xl lg:text-3xl font-extrabold text-slate-900 dark:text-white tracking-tight">
                Higher Education & Research Degrees
              </h3>
            </div>
            <p className="text-xs sm:text-sm font-mono text-slate-500 dark:text-slate-400">
              DA-IICT M.Tech (ML) · Parul B.Tech (Gold Medalist) · Erasmus+ Scholar
            </p>
          </div>

          {/* Side-by-side Bento: Degrees on Left (7 cols), Global Scholar on Right (5 cols) */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 sm:gap-6">
            {/* Card Left: Academic Excellence & Degrees (7 cols) */}
            <div className="lg:col-span-7 p-5 sm:p-7 rounded-2xl sm:rounded-3xl bg-white dark:bg-gradient-to-br dark:from-slate-900/90 dark:via-[#0a1224] dark:to-slate-950 border border-slate-200 dark:border-slate-800/90 shadow-sm hover:shadow-md dark:shadow-xl transition-all flex flex-col justify-between space-y-5 sm:space-y-6">
              <div>
                <div className="flex items-center gap-2.5 mb-3 sm:mb-4">
                  <span className="p-2 rounded-xl bg-purple-500/10 border border-purple-500/30 text-purple-600 dark:text-purple-400">
                    <GraduationCap className="w-5 h-5" />
                  </span>
                  <div>
                    <h4 className="text-sm sm:text-base font-bold text-slate-900 dark:text-white">Higher Education & Research</h4>
                    <p className="text-[11px] text-slate-500 dark:text-slate-400 font-mono">DA-IICT M.Tech (ML) · Parul B.Tech (Gold Medalist)</p>
                  </div>
                </div>

                <div className="space-y-3 sm:space-y-4">
                  {portfolioData.education.map((edu, idx) => (
                    <div key={idx} className="p-3.5 sm:p-4 rounded-2xl bg-slate-50 dark:bg-slate-950/80 border border-slate-200 dark:border-slate-800 space-y-2">
                      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1">
                        <div className="text-xs sm:text-sm font-bold text-slate-900 dark:text-white">{edu.degree}</div>
                        <span className="text-xs font-mono text-cyan-600 dark:text-cyan-400 font-semibold">{edu.period}</span>
                      </div>
                      <div className="text-xs font-semibold text-slate-700 dark:text-slate-300">{edu.institution}</div>
                      <div className="inline-block px-2.5 py-0.5 rounded-full bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-[11px] sm:text-xs font-mono text-emerald-700 dark:text-emerald-400 shadow-sm">
                        GPA: {edu.gpa}
                      </div>

                      <div className="flex flex-wrap gap-1.5 pt-1">
                        {edu.honors.map((honor, hIdx) => (
                          <span
                            key={hIdx}
                            className="px-2 py-0.5 rounded text-[10px] sm:text-[11px] font-mono bg-blue-50 dark:bg-blue-950/50 text-blue-700 dark:text-blue-300 border border-blue-200 dark:border-blue-800/40"
                          >
                            {honor}
                          </span>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="pt-3 sm:pt-4 border-t border-slate-200 dark:border-slate-800/80 text-[11px] sm:text-xs text-slate-500 dark:text-slate-400 font-mono">
                <span>Teaching Assistant: Computer Networks, Discrete Mathematics</span>
              </div>
            </div>

            {/* Card Right: ERASMUS+ European Scholar & Global Mindset (5 cols) */}
            <div className="lg:col-span-5 p-5 sm:p-7 rounded-2xl sm:rounded-3xl bg-white dark:bg-gradient-to-br dark:from-slate-900/90 dark:via-[#0d1629] dark:to-slate-950 border border-slate-200 dark:border-slate-800/90 shadow-sm hover:shadow-md dark:shadow-xl transition-all flex flex-col justify-between space-y-5 sm:space-y-6">
              <div>
                <div className="flex items-center justify-between mb-3 sm:mb-4">
                  <div className="flex items-center gap-2.5">
                    <span className="p-2 rounded-xl bg-cyan-500/10 border border-cyan-500/30 text-cyan-600 dark:text-cyan-400">
                      <Globe2 className="w-5 h-5" />
                    </span>
                    <div>
                      <h4 className="text-sm sm:text-base font-bold text-slate-900 dark:text-white">Global Scholar & Mindset</h4>
                      <p className="text-[11px] text-slate-500 dark:text-slate-400 font-mono">Erasmus+ Fully-Funded Scholar</p>
                    </div>
                  </div>
                  <span className="text-xs font-mono text-cyan-700 dark:text-cyan-300 px-2 py-0.5 rounded bg-cyan-500/10 border border-cyan-500/20">
                    Poland
                  </span>
                </div>

                <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                  Selected for a competitive, fully funded European Union Erasmus+ exchange program at{" "}
                  <strong className="text-slate-900 dark:text-white">Wrocław University of Science and Technology, Poland</strong>.
                </p>

                <div className="mt-3 sm:mt-4 p-3.5 sm:p-4 rounded-2xl bg-slate-50 dark:bg-slate-950/80 border border-slate-200 dark:border-slate-800 space-y-2.5 sm:space-y-3">
                  <div className="flex items-center justify-between text-xs font-mono">
                    <span className="text-slate-600 dark:text-slate-400">European Nations Visited:</span>
                    <span className="text-cyan-700 dark:text-cyan-400 font-bold">9 Countries</span>
                  </div>
                  <div className="text-[11px] text-slate-600 dark:text-slate-300 leading-relaxed">
                    Explored Paris, Barcelona, Brussels, Berlin, Prague, Rome, etc. Cultivated high adaptability and
                    cross-cultural communication.
                  </div>
                  <div className="pt-2 border-t border-slate-200 dark:border-slate-800 flex flex-wrap gap-1.5 text-[10px] sm:text-[11px] font-mono">
                    {portfolioData.personal.languages.map((lang, lIdx) => (
                      <span key={lIdx} className="px-2 py-0.5 rounded bg-white dark:bg-slate-900 text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-slate-800 shadow-sm">
                        {lang}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              <div className="pt-3 sm:pt-4 border-t border-slate-200 dark:border-slate-800/80 text-[11px] sm:text-xs text-slate-500 dark:text-slate-400 font-mono flex items-center justify-between">
                <span>Parul Univ Gold & Silver Medals</span>
                <span className="text-cyan-700 dark:text-cyan-400 font-semibold">9.02 / 10 CPI</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
