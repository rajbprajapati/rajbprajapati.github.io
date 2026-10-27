"use client";

import React from "react";
import { ArrowUp, Terminal, Heart } from "lucide-react";
import { portfolioData } from "@/data/portfolio";

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="py-12 border-t border-slate-800 bg-[#040711] relative z-10 text-xs font-mono text-slate-400">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        {/* Quote */}
        <div className="text-center max-w-xl mx-auto space-y-1">
          <p className="italic text-slate-300 font-sans text-sm">
            “Tell me and I forget, teach me and I may remember, involve me and I learn.”
          </p>
          <p className="text-[11px] text-cyan-400 font-mono">— Benjamin Franklin</p>
        </div>

        <div className="pt-8 border-t border-slate-900 flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2">
            <div className="w-6 h-6 rounded-lg bg-cyan-500/10 border border-cyan-500/30 flex items-center justify-center font-bold text-cyan-400 text-xs">
              RP
            </div>
            <span className="text-slate-300 font-semibold">{portfolioData.personal.name}</span>
            <span className="text-slate-600">·</span>
            <span>&copy; {new Date().getFullYear()} All rights reserved.</span>
          </div>

          <div className="text-center md:text-right text-[11px] text-slate-500 flex items-center gap-1.5">
            <span>Built with Next.js 16, TypeScript & Tailwind CSS</span>
            <span>·</span>
            <span className="text-emerald-400 font-semibold">GitHub Pages SSG</span>
          </div>

          <button
            onClick={scrollToTop}
            className="p-2.5 rounded-xl bg-slate-900 border border-slate-800 text-slate-400 hover:text-white hover:border-slate-700 transition-colors flex items-center gap-1 text-xs"
            aria-label="Scroll back to top"
          >
            <span>Top</span>
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>
    </footer>
  );
}
