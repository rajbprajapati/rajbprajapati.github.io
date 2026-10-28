"use client";

import React, { useState } from "react";
import {
  ArrowRight,
  ArrowDown,
  Zap,
} from "lucide-react";
import { GithubIcon } from "@/components/icons";
import { portfolioData } from "@/data/portfolio";

export default function ArchitectureSection() {
  const [selectedCategory, setSelectedCategory] = useState<string>("All");

  const categories = [
    "All",
    "Distributed Systems",
    "Cloud & IoT",
    "Data Pipelines",
    "Research & AI",
  ];

  const filteredProjects =
    selectedCategory === "All"
      ? portfolioData.featuredProjects
      : portfolioData.featuredProjects.filter((p) => p.category === selectedCategory);

  return (
    <section id="systems-craft" className="py-14 sm:py-24 relative z-10 border-t border-slate-200 dark:border-slate-800/80 transition-colors">
      <span id="architecture" className="sr-only" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8 sm:space-y-12">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-2.5 pb-2">
          <div className="inline-flex items-center gap-2 text-xs sm:text-sm font-mono text-cyan-600 dark:text-cyan-400 uppercase tracking-wider">
            <span className="w-2 h-2 rounded-full bg-cyan-500 dark:bg-cyan-400 animate-pulse-subtle" />
            <span>Systems & Engineering Craft</span>
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            Platforms Built for Throughput & Reliability
          </h2>
          <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 max-w-2xl mx-auto leading-relaxed">
            Architectural blueprints and battle-tested distributed platforms engineered for high throughput, sub-second latency, and zero data loss.
          </p>
        </div>

        {/* Highlight Architecture Flow Diagram: Power Systems Simulation */}
        <div className="p-5 sm:p-8 rounded-2xl sm:rounded-3xl bg-slate-50 dark:bg-[#090e1c] border border-cyan-500/30 shadow-sm dark:shadow-2xl space-y-5 sm:space-y-6 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-80 h-80 bg-cyan-500/10 rounded-full blur-3xl pointer-events-none" />

          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2.5 sm:gap-3 relative z-10">
            <div>
              <span className="text-[11px] sm:text-xs font-mono text-cyan-700 dark:text-cyan-400 uppercase tracking-widest font-semibold">
                SYSTEM ARCHITECTURE SHOWCASE
              </span>
              <h3 className="text-lg sm:text-2xl font-bold text-slate-900 dark:text-white mt-1">
                Event-Driven Power Grid Simulation & Decarbonization Pipeline
              </h3>
            </div>
            <div className="flex flex-wrap items-center gap-1.5 sm:gap-2 font-mono text-[11px] sm:text-xs">
              <span className="px-2.5 sm:px-3 py-1 rounded-full bg-cyan-100 dark:bg-cyan-950/80 border border-cyan-300 dark:border-cyan-700/60 text-cyan-800 dark:text-cyan-300">
                10x Daily Throughput
              </span>
              <span className="px-2.5 sm:px-3 py-1 rounded-full bg-emerald-100 dark:bg-emerald-950/80 border border-emerald-300 dark:border-emerald-700/60 text-emerald-800 dark:text-emerald-300">
                0 Idle Spend
              </span>
            </div>
          </div>

          <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed max-w-4xl relative z-10">
            A high-throughput simulation framework parsing heterogeneous electrical grid networks into a unified internal
            model and dispatching containerized serverless simulation jobs on Google Cloud Platform with automated N-1
            contingency benchmarking.
          </p>

          {/* Interactive Flow Nodes */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 relative z-10 pt-1 font-mono text-xs">
            {/* Step 1 */}
            <div className="p-3.5 sm:p-4 rounded-2xl bg-white dark:bg-slate-950/90 border border-cyan-500/30 shadow-sm relative flex flex-col justify-between space-y-2">
              <div>
                <div className="flex items-center justify-between text-cyan-700 dark:text-cyan-400 font-bold text-[10px] sm:text-[11px] mb-1">
                  <span>01. INGESTION</span>
                  <span>KOTLIN</span>
                </div>
                <div className="text-slate-900 dark:text-white font-bold text-sm">CIM/GML Parser</div>
                <p className="text-[11px] text-slate-500 dark:text-slate-400 font-sans mt-1">
                  Normalizes complex multi-vendor power topologies into a canonical internal model.
                </p>
              </div>
              <div className="hidden lg:block absolute -right-3 top-1/2 -translate-y-1/2 text-cyan-500 z-10">
                <ArrowRight className="w-5 h-5" />
              </div>
            </div>

            {/* Step 2 */}
            <div className="p-3.5 sm:p-4 rounded-2xl bg-white dark:bg-slate-950/90 border border-emerald-500/30 shadow-sm relative flex flex-col justify-between space-y-2">
              <div>
                <div className="flex items-center justify-between text-emerald-700 dark:text-emerald-400 font-bold text-[10px] sm:text-[11px] mb-1">
                  <span>02. ENGINE</span>
                  <span>GRIDLAB-D</span>
                </div>
                <div className="text-slate-900 dark:text-white font-bold text-sm">Simulation Processor</div>
                <p className="text-[11px] text-slate-500 dark:text-slate-400 font-sans mt-1">
                  Scales runs from 100+ to 1,000+ daily simulations with automated validation.
                </p>
              </div>
              <div className="hidden lg:block absolute -right-3 top-1/2 -translate-y-1/2 text-emerald-500 z-10">
                <ArrowRight className="w-5 h-5" />
              </div>
            </div>

            {/* Step 3 */}
            <div className="p-3.5 sm:p-4 rounded-2xl bg-white dark:bg-slate-950/90 border border-blue-500/30 shadow-sm relative flex flex-col justify-between space-y-2">
              <div>
                <div className="flex items-center justify-between text-blue-700 dark:text-blue-400 font-bold text-[10px] sm:text-[11px] mb-1">
                  <span>03. SERVERLESS</span>
                  <span>GCP CLOUD</span>
                </div>
                <div className="text-slate-900 dark:text-white font-bold text-sm">Containerized Benchmarking</div>
                <p className="text-[11px] text-slate-500 dark:text-slate-400 font-sans mt-1">
                  Auto-scaling execution for N-1 contingency analysis without idle server overhead.
                </p>
              </div>
              <div className="hidden lg:block absolute -right-3 top-1/2 -translate-y-1/2 text-blue-500 z-10">
                <ArrowRight className="w-5 h-5" />
              </div>
            </div>

            {/* Step 4 */}
            <div className="p-3.5 sm:p-4 rounded-2xl bg-white dark:bg-slate-950/90 border border-purple-500/30 shadow-sm flex flex-col justify-between space-y-2">
              <div>
                <div className="flex items-center justify-between text-purple-700 dark:text-purple-400 font-bold text-[10px] sm:text-[11px] mb-1">
                  <span>04. TELEMETRY</span>
                  <span>ANALYTICS</span>
                </div>
                <div className="text-slate-900 dark:text-white font-bold text-sm">Decarbonization Engine</div>
                <p className="text-[11px] text-slate-500 dark:text-slate-400 font-sans mt-1">
                  Powers mission-critical planning and decarbonization decisions across teams.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Subsection: Featured Deployments with Category Filter */}
        <div className="space-y-6 sm:space-y-8 pt-4 sm:pt-6 border-t border-slate-200 dark:border-slate-800/80">
          <div className="text-center max-w-3xl mx-auto space-y-2">
            <div className="inline-flex items-center gap-2 text-xs sm:text-sm font-mono text-cyan-600 dark:text-cyan-400 uppercase tracking-wider">
              <span className="w-2 h-2 rounded-full bg-cyan-500 dark:bg-cyan-400" />
              <span>Production Deployments</span>
            </div>
            <h3 className="text-xl sm:text-2xl lg:text-3xl font-extrabold text-slate-900 dark:text-white tracking-tight">
              Featured Case Studies & Engineering Impact
            </h3>
          </div>

          {/* Filter Tabs directly above the project cards, centered and larger */}
          <div className="flex justify-center">
            <div className="inline-flex items-center gap-1.5 sm:gap-2 p-1.5 rounded-2xl bg-slate-100 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 overflow-x-auto no-scrollbar max-w-full shadow-inner">
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setSelectedCategory(cat)}
                  className={`px-4 sm:px-5 py-2 sm:py-2.5 rounded-xl text-xs sm:text-sm font-semibold transition-all whitespace-nowrap ${
                    selectedCategory === cat
                      ? "bg-cyan-500 text-slate-950 shadow-md shadow-cyan-500/20"
                      : "text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white hover:bg-white/60 dark:hover:bg-slate-800/60"
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Project Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
          {filteredProjects.map((project, idx) => (
            <div
              key={idx}
              className="p-5 sm:p-6 rounded-2xl sm:rounded-3xl bg-white dark:bg-slate-900/70 border border-slate-200 dark:border-slate-800/90 hover:border-slate-300 dark:hover:border-slate-700 transition-all duration-300 flex flex-col justify-between space-y-5 sm:space-y-6 group hover:-translate-y-1 shadow-sm hover:shadow-md dark:shadow-xl"
            >
              <div className="space-y-3.5 sm:space-y-4">
                <div className="flex items-center justify-between">
                  <span className="px-3 py-1 rounded-full text-[11px] font-mono bg-cyan-50 dark:bg-cyan-500/10 text-cyan-700 dark:text-cyan-400 border border-cyan-200 dark:border-cyan-500/20">
                    {project.category}
                  </span>
                  {project.github && (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-slate-500 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white p-1 rounded-lg hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
                      aria-label="View Project on GitHub"
                    >
                      <GithubIcon className="w-4 h-4" />
                    </a>
                  )}
                </div>

                <div>
                  <h4 className="text-base sm:text-lg font-bold text-slate-900 dark:text-white group-hover:text-cyan-600 dark:group-hover:text-cyan-300 transition-colors">
                    {project.title}
                  </h4>
                  <p className="text-[11px] sm:text-xs font-mono text-slate-500 dark:text-slate-400 mt-0.5">{project.subtitle}</p>
                </div>

                <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed font-sans">{project.description}</p>

                <div className="p-3 sm:p-3.5 rounded-2xl bg-slate-50 dark:bg-slate-950/80 border border-slate-200 dark:border-slate-800/80">
                  <div className="text-[10px] sm:text-[11px] font-mono uppercase text-emerald-700 dark:text-emerald-400 font-bold flex items-center gap-1.5 mb-1">
                    <Zap className="w-3.5 h-3.5" />
                    Key Engineering Impact
                  </div>
                  <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed">{project.impact}</p>
                </div>
              </div>

              <div className="space-y-3 pt-3 sm:pt-4 border-t border-slate-100 dark:border-slate-800/80">
                <div className="flex flex-wrap gap-1.5">
                  {project.technologies.map((tech, tIdx) => (
                    <span
                      key={tIdx}
                      className="px-2.5 py-0.5 rounded-lg text-[10px] sm:text-[11px] font-mono bg-slate-100 dark:bg-slate-950 text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-slate-800"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
