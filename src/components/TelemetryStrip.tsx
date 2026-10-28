"use client";

import React from "react";
import { Zap, TrendingDown, ShieldCheck, Database, Users, CheckCircle2 } from "lucide-react";
import { portfolioData, MetricItem } from "@/data/portfolio";

export default function TelemetryStrip() {
  const getIcon = (category: MetricItem["category"]) => {
    switch (category) {
      case "scale":
        return <Zap className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-cyan-600 dark:text-cyan-400" />;
      case "cost":
        return <TrendingDown className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-emerald-600 dark:text-emerald-400" />;
      case "reliability":
        return <ShieldCheck className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-blue-600 dark:text-blue-400" />;
      case "data":
        return <Database className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-purple-600 dark:text-purple-400" />;
      case "leadership":
        return <Users className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-amber-600 dark:text-amber-400" />;
      default:
        return <CheckCircle2 className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-cyan-600 dark:text-cyan-400" />;
    }
  };

  const getValueColor = (category: MetricItem["category"]) => {
    switch (category) {
      case "scale":
        return "text-cyan-600 dark:text-cyan-400";
      case "cost":
        return "text-emerald-600 dark:text-emerald-400";
      case "reliability":
        return "text-blue-600 dark:text-blue-400";
      case "data":
        return "text-purple-600 dark:text-purple-400";
      case "leadership":
        return "text-amber-600 dark:text-amber-400";
      default:
        return "text-slate-900 dark:text-white";
    }
  };

  return (
    <section className="py-8 sm:py-12 relative z-10 border-y border-slate-200 dark:border-slate-800/80 bg-slate-100/70 dark:bg-[#070b16]/70 backdrop-blur-md transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-6 sm:mb-8 gap-2 sm:gap-4">
          <div>
            <div className="inline-flex items-center gap-1.5 sm:gap-2 text-[11px] sm:text-xs font-mono text-cyan-700 dark:text-cyan-400 uppercase tracking-wider mb-1">
              <span>Telemetry & Quantitative Impact</span>
              <span>●</span>
              <span className="text-slate-500 dark:text-slate-400">Production Benchmarks</span>
            </div>
            <h2 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-white tracking-tight">
              Engineering metrics delivered at production scale
            </h2>
          </div>
          <div className="text-xs sm:text-sm md:text-base font-mono font-medium text-slate-700 dark:text-slate-300 flex flex-wrap items-center gap-1.5 sm:gap-2">
            <span>Sustained SLAs</span>
            <span className="text-cyan-600 dark:text-cyan-400 font-bold">·</span>
            <span>High-Throughput</span>
            <span className="text-cyan-600 dark:text-cyan-400 font-bold">·</span>
            <span>Cloud Optimization</span>
          </div>
        </div>

        {/* 2 columns on mobile, 3 on tablet, 6 on desktop */}
        <div className="grid grid-cols-2 lg:grid-cols-3 xl:grid-cols-6 gap-2.5 sm:gap-4">
          {portfolioData.metrics.map((metric, idx) => (
            <div
              key={idx}
              className="group p-3.5 sm:p-5 rounded-2xl bg-white dark:bg-slate-900/70 border border-slate-200 dark:border-slate-800/90 transition-all duration-300 hover:-translate-y-0.5 sm:hover:-translate-y-1 shadow-sm hover:shadow-md dark:shadow-none flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-2 sm:mb-3">
                  <span className="p-1.5 sm:p-2 rounded-xl bg-slate-50 dark:bg-slate-950/80 border border-slate-200 dark:border-slate-800">
                    {getIcon(metric.category)}
                  </span>
                  <span className="text-[9px] sm:text-[10px] font-mono text-slate-400 dark:text-slate-500 uppercase tracking-widest">
                    #{String(idx + 1).padStart(2, "0")}
                  </span>
                </div>
                <div className={`text-2xl sm:text-3xl font-black font-mono tracking-tight ${getValueColor(metric.category)}`}>
                  {metric.value}
                </div>
                <div className="text-[11px] sm:text-xs font-bold text-slate-800 dark:text-slate-200 mt-1 line-clamp-1">
                  {metric.label}
                </div>
              </div>

              <p className="text-[10px] sm:text-[11px] text-slate-500 dark:text-slate-400 leading-relaxed mt-2 sm:mt-3 pt-2 sm:pt-3 border-t border-slate-100 dark:border-slate-800/80">
                {metric.detail}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
