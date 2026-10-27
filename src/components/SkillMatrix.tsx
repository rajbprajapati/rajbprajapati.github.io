"use client";

import React, { useState } from "react";
import { Cpu, Cloud, Database, Network, ShieldCheck, Terminal, Star } from "lucide-react";
import { portfolioData, SkillCategory } from "@/data/portfolio";

export default function SkillMatrix() {
  const [activeCategory, setActiveCategory] = useState<string>("All");

  const getCategoryIcon = (name: string) => {
    switch (name) {
      case "Languages & Core":
        return <Terminal className="w-4 h-4 text-cyan-400" />;
      case "Cloud & DevOps":
        return <Cloud className="w-4 h-4 text-blue-400" />;
      case "Backend & Systems":
        return <Cpu className="w-4 h-4 text-emerald-400" />;
      case "Databases & Storage":
        return <Database className="w-4 h-4 text-purple-400" />;
      case "Data, Streaming & IoT":
        return <Network className="w-4 h-4 text-amber-400" />;
      default:
        return <ShieldCheck className="w-4 h-4 text-teal-400" />;
    }
  };

  const filteredCategories =
    activeCategory === "All"
      ? portfolioData.skillCategories
      : portfolioData.skillCategories.filter((c) => c.category === activeCategory);

  return (
    <section id="skills" className="py-24 relative z-10 border-t border-slate-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 border-b border-slate-800/80 pb-6">
          <div>
            <div className="inline-flex items-center gap-2 text-xs font-mono text-cyan-400 uppercase tracking-wider mb-2">
              <span className="w-2 h-2 rounded-full bg-cyan-400" />
              <span>Technical Capabilities</span>
            </div>
            <h2 className="text-3xl font-extrabold text-white tracking-tight sm:text-4xl">
              Systems Engineering & Cloud Stack
            </h2>
          </div>

          {/* Category Filter Pills */}
          <div className="flex items-center gap-1.5 p-1 rounded-2xl bg-slate-900 border border-slate-800 overflow-x-auto max-w-full">
            <button
              onClick={() => setActiveCategory("All")}
              className={`px-3 py-1.5 rounded-xl text-xs font-medium transition-all whitespace-nowrap ${
                activeCategory === "All"
                  ? "bg-cyan-500 text-slate-950 font-bold shadow-md shadow-cyan-500/20"
                  : "text-slate-400 hover:text-white"
              }`}
            >
              All Categories
            </button>
            {portfolioData.skillCategories.map((c) => (
              <button
                key={c.category}
                onClick={() => setActiveCategory(c.category)}
                className={`px-3 py-1.5 rounded-xl text-xs font-medium transition-all whitespace-nowrap ${
                  activeCategory === c.category
                    ? "bg-cyan-500 text-slate-950 font-bold shadow-md shadow-cyan-500/20"
                    : "text-slate-400 hover:text-white"
                }`}
              >
                {c.category}
              </button>
            ))}
          </div>
        </div>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredCategories.map((cat, idx) => (
            <div
              key={idx}
              className="p-6 rounded-3xl bg-slate-900/80 border border-slate-800/90 shadow-xl space-y-5 hover:border-slate-700 transition-all duration-300"
            >
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2.5">
                  <span className="p-2 rounded-xl bg-slate-950 border border-slate-800">
                    {getCategoryIcon(cat.category)}
                  </span>
                  <h3 className="text-base font-bold text-white">{cat.category}</h3>
                </div>
                <span className="text-[11px] font-mono text-slate-500">{cat.skills.length} skills</span>
              </div>

              <div className="flex flex-wrap gap-2">
                {cat.skills.map((skill, sIdx) => (
                  <span
                    key={sIdx}
                    className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-mono transition-colors ${
                      skill.highlight
                        ? "bg-cyan-950/60 border border-cyan-500/40 text-cyan-200 shadow-sm shadow-cyan-500/10 font-medium"
                        : "bg-slate-950/80 border border-slate-800 text-slate-300"
                    }`}
                  >
                    {skill.highlight && <span className="w-1.5 h-1.5 rounded-full bg-cyan-400" />}
                    <span>{skill.name}</span>
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
