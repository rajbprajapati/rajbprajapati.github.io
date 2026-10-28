"use client";

import React from "react";
import {
  ShieldCheck,
  Users,
  Sparkles,
  CheckCircle,
} from "lucide-react";
import { portfolioData } from "@/data/portfolio";

export default function BentoGridSection() {
  return (
    <section id="bento-impact" className="py-14 sm:py-20 relative z-10 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8 sm:space-y-12">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-3 sm:gap-4 border-b border-slate-200 dark:border-slate-800/80 pb-5 sm:pb-6">
          <div>
            <div className="inline-flex items-center gap-2 text-xs font-mono text-blue-600 dark:text-blue-400 uppercase tracking-wider mb-1.5 sm:mb-2">
              <span className="w-2 h-2 rounded-full bg-blue-500 dark:bg-blue-400" />
              <span>Multi-Cloud Credentials & Team Leadership</span>
            </div>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
              Architectural Credentials & Leadership Spotlight
            </h2>
          </div>
          <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400 max-w-md">
            Certified across multiple hyperscale clouds (AWS & GCP) with proven engineering leadership delivering high-availability production platforms.
          </p>
        </div>

        {/* 12-Column Bento Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 sm:gap-6">
          {/* Card 1: Multi-Cloud Certifications (6 cols) */}
          <div
            id="credentials"
            className="lg:col-span-6 p-5 sm:p-7 rounded-2xl sm:rounded-3xl bg-white dark:bg-gradient-to-br dark:from-slate-900/90 dark:via-[#0d1426] dark:to-slate-950 border border-slate-200 dark:border-slate-800/90 shadow-sm hover:shadow-md dark:shadow-xl transition-all flex flex-col justify-between space-y-5 sm:space-y-6"
          >
            <div>
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-2.5">
                  <span className="p-2 rounded-xl bg-amber-500/10 border border-amber-500/30 text-amber-600 dark:text-amber-400">
                    <ShieldCheck className="w-5 h-5" />
                  </span>
                  <div>
                    <h3 className="text-sm sm:text-base font-bold text-slate-900 dark:text-white">Multi-Cloud Certifications</h3>
                    <p className="text-[11px] text-slate-500 dark:text-slate-400 font-mono">AWS & Google Cloud Verified</p>
                  </div>
                </div>
                <span className="px-2.5 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-700 dark:text-emerald-400 text-[11px] sm:text-xs font-mono">
                  3x Certified
                </span>
              </div>

              <div className="space-y-2.5 sm:space-y-3">
                {portfolioData.certifications.map((cert, idx) => (
                  <div
                    key={idx}
                    className="p-3 sm:p-3.5 rounded-2xl bg-slate-50 dark:bg-slate-950/80 border border-slate-200 dark:border-slate-800/80 flex items-center justify-between hover:border-slate-300 dark:hover:border-slate-700 transition-colors"
                  >
                    <div className="flex items-center gap-2.5 sm:gap-3">
                      <div
                        className={`w-9 h-9 sm:w-10 sm:h-10 rounded-xl flex items-center justify-center text-xs font-mono font-bold shrink-0 ${
                          cert.badgeCode.startsWith("AWS")
                            ? "bg-amber-500/10 border border-amber-500/30 text-amber-600 dark:text-amber-400"
                            : cert.badgeCode.startsWith("GCP")
                            ? "bg-blue-500/10 border border-blue-500/30 text-blue-600 dark:text-blue-400"
                            : "bg-purple-500/10 border border-purple-500/30 text-purple-600 dark:text-purple-400"
                        }`}
                      >
                        {cert.badgeCode.split("-")[0]}
                      </div>
                      <div>
                        <div className="text-xs font-bold text-slate-900 dark:text-white">{cert.title}</div>
                        <div className="text-[10px] sm:text-[11px] text-slate-500 dark:text-slate-400">{cert.issuer}</div>
                      </div>
                    </div>
                    <span className="text-[11px] sm:text-xs font-mono font-semibold text-slate-700 dark:text-slate-300 bg-white dark:bg-slate-900 px-2 sm:px-2.5 py-1 rounded-lg border border-slate-200 dark:border-slate-800 shrink-0">
                      {cert.date}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            <div className="pt-3 sm:pt-4 border-t border-slate-200 dark:border-slate-800/80 text-[11px] sm:text-xs text-slate-500 dark:text-slate-400 font-mono">
              <span>Cloud Architectures: Serverless, Distributed, Zero-Downtime</span>
            </div>
          </div>

          {/* Card 2: Team Leadership of 8 Full-Stack Developers (6 cols) */}
          <div className="lg:col-span-6 p-5 sm:p-7 rounded-2xl sm:rounded-3xl bg-white dark:bg-gradient-to-br dark:from-slate-900/90 dark:via-[#0a1224] dark:to-slate-950 border border-slate-200 dark:border-slate-800/90 shadow-sm hover:shadow-md dark:shadow-xl transition-all flex flex-col justify-between space-y-5 sm:space-y-6">
            <div>
              <div className="flex items-center justify-between mb-3 sm:mb-4">
                <div className="flex items-center gap-2.5">
                  <span className="p-2 rounded-xl bg-emerald-500/10 border border-emerald-500/30 text-emerald-600 dark:text-emerald-400">
                    <Users className="w-5 h-5" />
                  </span>
                  <div>
                    <h3 className="text-sm sm:text-base font-bold text-slate-900 dark:text-white">Engineering Leadership</h3>
                    <p className="text-[11px] text-slate-500 dark:text-slate-400 font-mono">Leading 8 Engineers · Ideation to Production</p>
                  </div>
                </div>
                <span className="px-2.5 sm:px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-700 dark:text-blue-300 text-[10px] sm:text-xs font-mono flex items-center gap-1.5 shrink-0">
                  <Sparkles className="w-3 h-3 text-blue-500 dark:text-blue-400" />
                  Q2 Appreciation
                </span>
              </div>

              <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                Currently leading an 8-engineer full-stack team building next-generation AI platforms, owning scoping,
                milestone definition, architectural patterns, and execution velocity.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 sm:gap-3 mt-4">
                <div className="p-3 sm:p-3.5 rounded-2xl bg-slate-50 dark:bg-slate-950/80 border border-slate-200 dark:border-slate-800 space-y-1">
                  <div className="text-xs font-bold text-emerald-600 dark:text-emerald-400 flex items-center gap-1.5">
                    <CheckCircle className="w-3.5 h-3.5 shrink-0" />
                    100% Delivery Velocity
                  </div>
                  <p className="text-[11px] text-slate-500 dark:text-slate-400">
                    Enforced strict review standards and TDD gating that kept 100% of committed features on schedule across
                    quarters.
                  </p>
                </div>

                <div className="p-3 sm:p-3.5 rounded-2xl bg-slate-50 dark:bg-slate-950/80 border border-slate-200 dark:border-slate-800 space-y-1">
                  <div className="text-xs font-bold text-cyan-600 dark:text-cyan-400 flex items-center gap-1.5">
                    <CheckCircle className="w-3.5 h-3.5 shrink-0" />
                    Cross-Functional Alignment
                  </div>
                  <p className="text-[11px] text-slate-500 dark:text-slate-400">
                    Drove sprint planning, stakeholder demos, and third-party integrations across frontend, backend, and
                    cloud.
                  </p>
                </div>

                <div className="p-3 sm:p-3.5 rounded-2xl bg-slate-50 dark:bg-slate-950/80 border border-slate-200 dark:border-slate-800 space-y-1">
                  <div className="text-xs font-bold text-blue-600 dark:text-blue-400 flex items-center gap-1.5">
                    <CheckCircle className="w-3.5 h-3.5 shrink-0" />
                    Onboarding & Mentorship
                  </div>
                  <p className="text-[11px] text-slate-500 dark:text-slate-400">
                    Mentored interns and junior engineers, slashing onboarding cycle times and elevating team-wide
                    distributed systems proficiency.
                  </p>
                </div>

                <div className="p-3 sm:p-3.5 rounded-2xl bg-slate-50 dark:bg-slate-950/80 border border-slate-200 dark:border-slate-800 space-y-1">
                  <div className="text-xs font-bold text-amber-600 dark:text-amber-400 flex items-center gap-1.5">
                    <CheckCircle className="w-3.5 h-3.5 shrink-0" />
                    Zero-Downtime Governance
                  </div>
                  <p className="text-[11px] text-slate-500 dark:text-slate-400">
                    Authored and executed system migration blueprints with automated rollback safety and 99.99% production
                    SLAs.
                  </p>
                </div>
              </div>
            </div>

            <div className="pt-3 sm:pt-4 border-t border-slate-200 dark:border-slate-800/80 flex items-center justify-between text-[11px] sm:text-xs text-slate-500 dark:text-slate-400 font-mono">
              <span className="text-emerald-700 dark:text-emerald-400 font-semibold truncate">
                Award: Standout Performance in Model Ingestion
              </span>
              <span className="shrink-0 ml-2">Infocusp</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
