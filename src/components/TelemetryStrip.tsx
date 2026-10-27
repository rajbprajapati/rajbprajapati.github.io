"use client";

import React from "react";
import { Zap, TrendingDown, ShieldCheck, Database, Users, CheckCircle2 } from "lucide-react";
import { portfolioData, MetricItem } from "@/data/portfolio";

export default function TelemetryStrip() {
  const getIcon = (category: MetricItem["category"]) => {
    switch (category) {
      case "scale":
        return <Zap className="w-4 h-4 text-cyan-400" />;
      case "cost":
        return <TrendingDown className="w-4 h-4 text-emerald-400" />;
      case "reliability":
        return <ShieldCheck className="w-4 h-4 text-blue-400" />;
      case "data":
        return <Database className="w-4 h-4 text-purple-400" />;
      case "leadership":
        return <Users className="w-4 h-4 text-amber-400" />;
      default:
        return <CheckCircle2 className="w-4 h-4 text-cyan-400" />;
    }
  };

  const getAccentBorder = (category: MetricItem["category"]) => {
    switch (category) {
      case "scale":
        return "hover:border-cyan-500/50 group-hover:shadow-cyan-500/10";
      case "cost":
        return "hover:border-emerald-500/50 group-hover:shadow-emerald-500/10";
      case "reliability":
        return "hover:border-blue-500/50 group-hover:shadow-blue-500/10";
      case "data":
        return "hover:border-purple-500/50 group-hover:shadow-purple-500/10";
      case "leadership":
        return "hover:border-amber-500/50 group-hover:shadow-amber-500/10";
      default:
        return "hover:border-slate-700";
    }
  };

  const getValueColor = (category: MetricItem["category"]) => {
    switch (category) {
      case "scale":
        return "text-cyan-400";
      case "cost":
        return "text-emerald-400";
      case "reliability":
        return "text-blue-400";
      case "data":
        return "text-purple-400";
      case "leadership":
        return "text-amber-400";
      default:
        return "text-white";
    }
  };

  return (
    <section className="py-12 relative z-10 border-y border-slate-800/80 bg-[#070b16]/70 backdrop-blur-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 gap-4">
          <div>
            <div className="inline-flex items-center gap-2 text-xs font-mono text-cyan-400 uppercase tracking-wider mb-1">
              <span>Telemetry & Quantitative Impact</span>
              <span>●</span>
              <span className="text-slate-400">Production Benchmarks</span>
            </div>
            <h2 className="text-2xl font-bold text-white tracking-tight">
              Engineering metrics delivered at production scale
            </h2>
          </div>
          <div className="text-xs font-mono text-slate-400">
            Sustained SLAs · High-Throughput · Cloud Optimization
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6 gap-4">
          {portfolioData.metrics.map((metric, idx) => (
            <div
              key={idx}
              className={`group p-5 rounded-2xl bg-slate-900/70 border border-slate-800/90 transition-all duration-300 hover:-translate-y-1 shadow-lg ${getAccentBorder(
                metric.category
              )} flex flex-col justify-between`}
            >
              <div>
                <div className="flex items-center justify-between mb-3">
                  <span className="p-2 rounded-xl bg-slate-950/80 border border-slate-800">
                    {getIcon(metric.category)}
                  </span>
                  <span className="text-[10px] font-mono text-slate-500 uppercase tracking-widest">
                    #{String(idx + 1).padStart(2, "0")}
                  </span>
                </div>
                <div className={`text-3xl font-black font-mono tracking-tight ${getValueColor(metric.category)}`}>
                  {metric.value}
                </div>
                <div className="text-xs font-bold text-slate-200 mt-1">{metric.label}</div>
              </div>

              <p className="text-[11px] text-slate-400 leading-relaxed mt-3 pt-3 border-t border-slate-800/80">
                {metric.detail}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
