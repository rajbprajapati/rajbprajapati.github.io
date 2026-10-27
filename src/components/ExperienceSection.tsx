"use client";

import React, { useState } from "react";
import { Briefcase, Calendar, MapPin, ChevronDown, ChevronUp, CheckCircle2, Zap } from "lucide-react";
import { portfolioData, WorkExperienceItem } from "@/data/portfolio";

export default function ExperienceSection() {
  const [expandedIndex, setExpandedIndex] = useState<number | null>(0);

  const toggleExpand = (idx: number) => {
    setExpandedIndex(expandedIndex === idx ? null : idx);
  };

  return (
    <section id="experience" className="py-24 relative z-10 border-t border-slate-800/80 bg-[#070b16]/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 border-b border-slate-800/80 pb-6">
          <div>
            <div className="inline-flex items-center gap-2 text-xs font-mono text-cyan-400 uppercase tracking-wider mb-2">
              <span className="w-2 h-2 rounded-full bg-cyan-400" />
              <span>Professional Timeline & Track Record</span>
            </div>
            <h2 className="text-3xl font-extrabold text-white tracking-tight sm:text-4xl">
              Career Trajectory & Technical Impact
            </h2>
          </div>
          <p className="text-xs sm:text-sm text-slate-400 max-w-md">
            5+ years of continuous advancement shipping high-availability distributed systems, leading engineering teams,
            and optimizing cloud architectures.
          </p>
        </div>

        {/* Timeline Stack */}
        <div className="space-y-6">
          {portfolioData.experiences.map((exp, idx) => {
            const isExpanded = expandedIndex === idx;

            return (
              <div
                key={idx}
                className="p-6 sm:p-8 rounded-3xl bg-slate-900/80 border border-slate-800/90 shadow-xl transition-all duration-300 hover:border-slate-700"
              >
                {/* Header row */}
                <div
                  onClick={() => toggleExpand(idx)}
                  className="cursor-pointer flex flex-col md:flex-row md:items-center justify-between gap-4 select-none"
                >
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-2xl bg-cyan-500/10 border border-cyan-500/30 flex items-center justify-center text-cyan-400 shrink-0 mt-0.5">
                      <Briefcase className="w-6 h-6" />
                    </div>
                    <div>
                      <div className="flex flex-wrap items-center gap-2">
                        <h3 className="text-lg sm:text-xl font-bold text-white">{exp.role}</h3>
                        {idx === 0 && (
                          <span className="px-2.5 py-0.5 rounded-full text-[10px] font-mono bg-emerald-500/10 text-emerald-400 border border-emerald-500/30">
                            Current Role · Tech Lead
                          </span>
                        )}
                      </div>
                      <div className="text-sm font-semibold text-cyan-400">{exp.company}</div>
                    </div>
                  </div>

                  <div className="flex items-center gap-4 text-xs font-mono text-slate-400 md:ml-auto">
                    <div className="flex items-center gap-1.5">
                      <Calendar className="w-4 h-4 text-slate-500" />
                      <span>{exp.period}</span>
                    </div>
                    <div className="flex items-center gap-1.5">
                      <MapPin className="w-4 h-4 text-slate-500" />
                      <span>{exp.location}</span>
                    </div>
                    <button
                      className="p-1 rounded-lg bg-slate-950 border border-slate-800 text-slate-400 hover:text-white"
                      aria-label="Toggle details"
                    >
                      {isExpanded ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
                    </button>
                  </div>
                </div>

                {/* Highlights List */}
                <div className="mt-6 pt-6 border-t border-slate-800/80 space-y-4">
                  <ul className="space-y-2.5">
                    {exp.highlights.map((point, pIdx) => (
                      <li key={pIdx} className="flex items-start gap-3 text-xs sm:text-sm text-slate-300 leading-relaxed">
                        <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
                        <span>{point}</span>
                      </li>
                    ))}
                  </ul>

                  {/* Subdomains (if available, e.g. for SE2) */}
                  {exp.subDomains && isExpanded && (
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 pt-4 mt-4 border-t border-slate-800/60">
                      {exp.subDomains.map((sub, sIdx) => (
                        <div key={sIdx} className="p-4 rounded-2xl bg-slate-950/80 border border-slate-800 space-y-2">
                          <div className="text-xs font-mono font-bold text-cyan-400 uppercase tracking-wider">
                            {sub.name}
                          </div>
                          <ul className="space-y-1.5 text-xs text-slate-300">
                            {sub.points.map((pt, ptIdx) => (
                              <li key={ptIdx} className="flex items-start gap-2">
                                <span className="text-emerald-400 font-bold">•</span>
                                <span>{pt}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      ))}
                    </div>
                  )}

                  {/* Technologies Strip */}
                  <div className="flex flex-wrap items-center gap-1.5 pt-3">
                    <span className="text-xs font-mono text-slate-500 mr-2">TECH:</span>
                    {exp.technologies.map((tech, tIdx) => (
                      <span
                        key={tIdx}
                        className="px-2.5 py-0.5 rounded-lg text-xs font-mono bg-slate-950 text-slate-300 border border-slate-800"
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
      </div>
    </section>
  );
}
