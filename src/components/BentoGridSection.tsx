"use client";

import React from "react";
import {
  Award,
  ShieldCheck,
  Cpu,
  GraduationCap,
  Users,
  Globe2,
  Sparkles,
  CheckCircle,
  ExternalLink,
} from "lucide-react";
import { portfolioData } from "@/data/portfolio";

export default function BentoGridSection() {
  return (
    <section id="bento-impact" className="py-20 relative z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 border-b border-slate-800/80 pb-6">
          <div>
            <div className="inline-flex items-center gap-2 text-xs font-mono text-blue-400 uppercase tracking-wider mb-2">
              <span className="w-2 h-2 rounded-full bg-blue-400" />
              <span>Multi-Cloud Credentials & Tech Leadership</span>
            </div>
            <h2 className="text-3xl font-extrabold text-white tracking-tight sm:text-4xl">
              Architectural Credentials & Leadership Spotlight
            </h2>
          </div>
          <p className="text-xs sm:text-sm text-slate-400 max-w-md">
            Certified across multiple hyperscale clouds, academic roots in Machine Learning from DA-IICT, and proven
            experience leading engineering teams to ship production systems.
          </p>
        </div>

        {/* 12-Column Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
          {/* Card 1: Multi-Cloud Certifications (5 cols) */}
          <div
            id="credentials"
            className="md:col-span-5 p-7 rounded-3xl bg-gradient-to-br from-slate-900/90 via-[#0d1426] to-slate-950 border border-slate-800/90 shadow-xl flex flex-col justify-between space-y-6"
          >
            <div>
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-2">
                  <span className="p-2 rounded-xl bg-amber-500/10 border border-amber-500/30 text-amber-400">
                    <ShieldCheck className="w-5 h-5" />
                  </span>
                  <div>
                    <h3 className="text-base font-bold text-white">Multi-Cloud Certifications</h3>
                    <p className="text-xs text-slate-400 font-mono">AWS & Google Cloud Verified</p>
                  </div>
                </div>
                <span className="px-2.5 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-mono">
                  3x Certified
                </span>
              </div>

              <div className="space-y-3">
                {portfolioData.certifications.map((cert, idx) => (
                  <div
                    key={idx}
                    className="p-3.5 rounded-2xl bg-slate-950/80 border border-slate-800/80 flex items-center justify-between hover:border-slate-700 transition-colors"
                  >
                    <div className="flex items-center gap-3">
                      <div
                        className={`w-10 h-10 rounded-xl flex items-center justify-center text-xs font-mono font-bold ${
                          cert.badgeCode.startsWith("AWS")
                            ? "bg-amber-500/10 border border-amber-500/30 text-amber-400"
                            : cert.badgeCode.startsWith("GCP")
                            ? "bg-blue-500/10 border border-blue-500/30 text-blue-400"
                            : "bg-purple-500/10 border border-purple-500/30 text-purple-400"
                        }`}
                      >
                        {cert.badgeCode.split("-")[0]}
                      </div>
                      <div>
                        <div className="text-xs font-bold text-white">{cert.title}</div>
                        <div className="text-[11px] text-slate-400">{cert.issuer}</div>
                      </div>
                    </div>
                    <span className="text-xs font-mono font-semibold text-slate-300 bg-slate-900 px-2.5 py-1 rounded-lg border border-slate-800">
                      {cert.date}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            <div className="pt-4 border-t border-slate-800/80 flex items-center justify-between text-xs text-slate-400 font-mono">
              <span>Cloud Architectures: Serverless, Distributed, Zero-Downtime</span>
            </div>
          </div>

          {/* Card 2: Team Leadership of 8 Full-Stack Developers (7 cols) */}
          <div className="md:col-span-7 p-7 rounded-3xl bg-gradient-to-br from-slate-900/90 via-[#0a1224] to-slate-950 border border-slate-800/90 shadow-xl flex flex-col justify-between space-y-6">
            <div>
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-2">
                  <span className="p-2 rounded-xl bg-emerald-500/10 border border-emerald-500/30 text-emerald-400">
                    <Users className="w-5 h-5" />
                  </span>
                  <div>
                    <h3 className="text-base font-bold text-white">Engineering Leadership</h3>
                    <p className="text-xs text-slate-400 font-mono">Leading 8 Engineers · Ideation to Production</p>
                  </div>
                </div>
                <span className="px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-300 text-xs font-mono flex items-center gap-1.5">
                  <Sparkles className="w-3.5 h-3.5 text-blue-400" />
                  Q2 Appreciation Award
                </span>
              </div>

              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                Currently leading an 8-engineer full-stack team building next-generation AI platforms, owning scoping,
                milestone definition, architectural patterns, and execution velocity.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mt-4">
                <div className="p-3.5 rounded-2xl bg-slate-950/80 border border-slate-800 space-y-1">
                  <div className="text-xs font-bold text-emerald-400 flex items-center gap-1.5">
                    <CheckCircle className="w-3.5 h-3.5" />
                    100% Delivery Velocity
                  </div>
                  <p className="text-[11px] text-slate-400">
                    Enforced strict review standards and TDD gating that kept 100% of committed features on schedule across
                    quarters.
                  </p>
                </div>

                <div className="p-3.5 rounded-2xl bg-slate-950/80 border border-slate-800 space-y-1">
                  <div className="text-xs font-bold text-cyan-400 flex items-center gap-1.5">
                    <CheckCircle className="w-3.5 h-3.5" />
                    Cross-Functional Alignment
                  </div>
                  <p className="text-[11px] text-slate-400">
                    Drove sprint planning, stakeholder demos, and third-party integrations across frontend, backend, and
                    cloud.
                  </p>
                </div>

                <div className="p-3.5 rounded-2xl bg-slate-950/80 border border-slate-800 space-y-1">
                  <div className="text-xs font-bold text-blue-400 flex items-center gap-1.5">
                    <CheckCircle className="w-3.5 h-3.5" />
                    Onboarding & Mentorship
                  </div>
                  <p className="text-[11px] text-slate-400">
                    Mentored interns and junior engineers, slashing onboarding cycle times and elevating team-wide
                    distributed systems proficiency.
                  </p>
                </div>

                <div className="p-3.5 rounded-2xl bg-slate-950/80 border border-slate-800 space-y-1">
                  <div className="text-xs font-bold text-amber-400 flex items-center gap-1.5">
                    <CheckCircle className="w-3.5 h-3.5" />
                    Zero-Downtime Governance
                  </div>
                  <p className="text-[11px] text-slate-400">
                    Authored and executed system migration blueprints with automated rollback safety and 99.99% production
                    SLAs.
                  </p>
                </div>
              </div>
            </div>

            <div className="pt-4 border-t border-slate-800/80 flex items-center justify-between text-xs text-slate-400 font-mono">
              <span className="text-emerald-400 font-semibold">Award: Standout Performance in Model Ingestion</span>
              <span>Infocusp Innovations</span>
            </div>
          </div>

          {/* Card 3: Academic Excellence & DA-IICT ML Research (7 cols) */}
          <div className="md:col-span-7 p-7 rounded-3xl bg-gradient-to-br from-slate-900/90 via-[#0a1224] to-slate-950 border border-slate-800/90 shadow-xl flex flex-col justify-between space-y-6">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <span className="p-2 rounded-xl bg-purple-500/10 border border-purple-500/30 text-purple-400">
                  <GraduationCap className="w-5 h-5" />
                </span>
                <div>
                  <h3 className="text-base font-bold text-white">Higher Education & Research</h3>
                  <p className="text-xs text-slate-400 font-mono">DA-IICT M.Tech (ML) · Parul B.Tech (Gold Medalist)</p>
                </div>
              </div>

              <div className="space-y-4">
                {portfolioData.education.map((edu, idx) => (
                  <div key={idx} className="p-4 rounded-2xl bg-slate-950/80 border border-slate-800 space-y-2">
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1">
                      <div className="text-sm font-bold text-white">{edu.degree}</div>
                      <span className="text-xs font-mono text-cyan-400 font-semibold">{edu.period}</span>
                    </div>
                    <div className="text-xs font-semibold text-slate-300">{edu.institution}</div>
                    <div className="inline-block px-2.5 py-0.5 rounded-full bg-slate-900 border border-slate-800 text-xs font-mono text-emerald-400">
                      GPA: {edu.gpa}
                    </div>

                    <div className="flex flex-wrap gap-1.5 pt-1">
                      {edu.honors.map((honor, hIdx) => (
                        <span
                          key={hIdx}
                          className="px-2 py-0.5 rounded text-[11px] font-mono bg-blue-950/50 text-blue-300 border border-blue-800/40"
                        >
                          {honor}
                        </span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="pt-4 border-t border-slate-800/80 flex items-center justify-between text-xs text-slate-400 font-mono">
              <span>Teaching Assistant: Computer Networks, Discrete Mathematics</span>
            </div>
          </div>

          {/* Card 4: ERASMUS+ European Scholar & Global Mindset (5 cols) */}
          <div className="md:col-span-5 p-7 rounded-3xl bg-gradient-to-br from-slate-900/90 via-[#0d1629] to-slate-950 border border-slate-800/90 shadow-xl flex flex-col justify-between space-y-6">
            <div>
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-2">
                  <span className="p-2 rounded-xl bg-cyan-500/10 border border-cyan-500/30 text-cyan-400">
                    <Globe2 className="w-5 h-5" />
                  </span>
                  <div>
                    <h3 className="text-base font-bold text-white">Global Scholar & Perspective</h3>
                    <p className="text-xs text-slate-400 font-mono">Erasmus+ Fully-Funded Scholar</p>
                  </div>
                </div>
                <span className="text-xs font-mono text-cyan-300 px-2 py-0.5 rounded bg-cyan-500/10 border border-cyan-500/20">
                  Poland
                </span>
              </div>

              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                Selected for a competitive, fully funded European Union Erasmus+ exchange program at{" "}
                <strong className="text-white">Wrocław University of Science and Technology, Poland</strong>.
              </p>

              <div className="mt-4 p-4 rounded-2xl bg-slate-950/80 border border-slate-800 space-y-3">
                <div className="flex items-center justify-between text-xs font-mono">
                  <span className="text-slate-400">European Nations Visited:</span>
                  <span className="text-cyan-400 font-bold">9 Countries</span>
                </div>
                <div className="text-[11px] text-slate-300">
                  Explored Paris, Barcelona, Brussels, Berlin, Prague, Rome, etc. Cultivated strong adaptability,
                  cross-cultural communication, and an adventurous builder mindset.
                </div>
                <div className="pt-2 border-t border-slate-800 flex flex-wrap gap-1.5 text-[11px] font-mono">
                  {portfolioData.personal.languages.map((lang, lIdx) => (
                    <span key={lIdx} className="px-2 py-0.5 rounded bg-slate-900 text-slate-300 border border-slate-800">
                      {lang}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            <div className="pt-4 border-t border-slate-800/80 text-xs text-slate-400 font-mono flex items-center justify-between">
              <span>Parul Univ Gold & Silver Medals</span>
              <span className="text-cyan-400">9.02 / 10 CPI</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
