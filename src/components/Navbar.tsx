"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { Download, Menu, X, ArrowUpRight } from "lucide-react";
import ThemeToggle from "@/components/ThemeToggle";
import { portfolioData } from "@/data/portfolio";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Career Trajectory", emoji: "🚀", href: "#career-trajectory" },
    { name: "Systems & Craft", emoji: "⚡", href: "#systems-craft" },
    { name: "Arsenal", emoji: "🛠️", href: "#arsenal" },
    { name: "Build Together", emoji: "🤝", href: "#build-together" },
  ];

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white/90 dark:bg-[#060913]/90 backdrop-blur-xl border-b border-slate-200/80 dark:border-slate-800/80 shadow-sm py-3 sm:py-3.5"
          : "bg-white/60 dark:bg-[#060913]/60 backdrop-blur-md border-b border-slate-200/40 dark:border-slate-800/40 py-3.5 sm:py-4"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between gap-4">
          {/* Left: Brand Monogram & Name */}
          <Link href="/" className="flex items-center gap-3 group shrink-0">
            <div className="w-8.5 h-8.5 rounded-xl bg-gradient-to-tr from-cyan-500 via-blue-600 to-emerald-400 p-[1px] shadow-sm group-hover:shadow-cyan-500/25 transition-all">
              <div className="w-full h-full bg-slate-900 rounded-[11px] flex items-center justify-center font-mono font-bold text-cyan-400 text-xs">
                RP
              </div>
            </div>
            <div className="flex items-baseline gap-2">
              <span className="font-bold text-slate-900 dark:text-white text-sm sm:text-base tracking-tight group-hover:text-cyan-600 dark:group-hover:text-cyan-400 transition-colors">
                {portfolioData.personal.name}
              </span>
              <span className="hidden md:inline text-xs font-mono text-slate-500 dark:text-slate-400">
                / Systems Engineer
              </span>
            </div>
          </Link>

          {/* Center: Minimalist Centered Navigation Links */}
          <nav className="hidden md:flex items-center gap-5 lg:gap-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="inline-flex items-center gap-1.5 text-sm lg:text-[15px] font-semibold text-slate-700 dark:text-slate-200 hover:text-cyan-600 dark:hover:text-cyan-400 transition-colors relative py-1.5 after:absolute after:bottom-0 after:left-0 after:w-0 hover:after:w-full after:h-[2.5px] after:bg-cyan-500 after:transition-all after:duration-200"
              >
                <span className="text-sm select-none">{link.emoji}</span>
                <span>{link.name}</span>
              </a>
            ))}
          </nav>

          {/* Right Action: Availability, ThemeToggle & Minimal Resume CTA */}
          <div className="flex items-center gap-2 sm:gap-3">
            {/* Live Availability Badge (Desktop only) */}
            <div className="hidden xl:flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-600 dark:text-emerald-400 text-xs font-mono">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 dark:bg-emerald-400 animate-pulse-subtle" />
              <span>Open to Roles</span>
            </div>

            {/* Dark/Light Mode Switcher */}
            <ThemeToggle />

            {/* Clean Resume Outline/Surface Button */}
            <a
              href={portfolioData.personal.resumeUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="hidden sm:inline-flex items-center gap-2 px-3.5 sm:px-4 py-2 rounded-xl border border-slate-300 dark:border-slate-700 bg-white hover:bg-slate-50 dark:bg-slate-900 dark:hover:bg-slate-800 text-slate-800 dark:text-slate-200 font-semibold text-xs sm:text-sm transition-all shadow-sm hover:border-slate-400 dark:hover:border-slate-600"
            >
              <span>Resume PDF</span>
              <Download className="w-3.5 h-3.5 text-cyan-600 dark:text-cyan-400" />
            </a>

            {/* Mobile Menu Toggle Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-xl md:hidden bg-slate-100 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-slate-700 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white transition-colors"
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5 text-slate-700 dark:text-slate-300" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-white/95 dark:bg-[#060913]/95 backdrop-blur-2xl border-b border-slate-200 dark:border-slate-800 px-4 pt-3 pb-6 mt-2 space-y-3 shadow-xl transition-all">
          <div className="flex items-center justify-between py-1">
            <span className="text-xs font-mono text-slate-500 dark:text-slate-400 font-bold">NAVIGATION</span>
            <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-600 dark:text-emerald-400 text-[11px] font-mono">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 dark:bg-emerald-400 animate-pulse-subtle" />
              <span>Open to Roles</span>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-2.5">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="flex items-center gap-2 px-4 py-3 rounded-xl text-sm font-semibold text-slate-800 dark:text-slate-200 bg-slate-100/80 dark:bg-slate-900/70 hover:bg-cyan-50 dark:hover:bg-slate-800 hover:text-cyan-600 dark:hover:text-cyan-400 transition-colors border border-slate-200/60 dark:border-slate-800"
              >
                <span className="text-base select-none">{link.emoji}</span>
                <span>{link.name}</span>
              </a>
            ))}
          </div>

          <div className="pt-3 border-t border-slate-200 dark:border-slate-800 flex flex-col sm:flex-row gap-2.5">
            <a
              href={portfolioData.personal.resumeUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full py-2.5 rounded-xl bg-cyan-500 text-slate-950 font-bold text-xs flex items-center justify-center gap-2 shadow-sm"
            >
              <Download className="w-4 h-4" />
              <span>Download Resume</span>
            </a>
            <a
              href={`mailto:${portfolioData.personal.email}`}
              className="w-full py-2.5 rounded-xl bg-slate-100 dark:bg-slate-900 text-slate-800 dark:text-slate-200 border border-slate-200 dark:border-slate-800 font-mono text-xs flex items-center justify-center gap-1.5"
            >
              <span>{portfolioData.personal.email}</span>
              <ArrowUpRight className="w-3.5 h-3.5 text-slate-400" />
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
