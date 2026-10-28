"use client";

import React, { useState } from "react";
import { Mail, Phone, MapPin, Copy, Check, Download, ArrowUpRight } from "lucide-react";
import { GithubIcon, LinkedinIcon, TwitterIcon, YoutubeIcon } from "@/components/icons";
import { portfolioData } from "@/data/portfolio";

export default function ContactSection() {
  const [copied, setCopied] = useState(false);

  const copyEmail = () => {
    navigator.clipboard.writeText(portfolioData.personal.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  return (
    <section id="build-together" className="py-24 relative z-10 border-t border-slate-200 dark:border-slate-800/80 bg-slate-50/50 dark:bg-[#070b16]/80 transition-colors">
      <span id="contact" className="sr-only" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-600 dark:text-emerald-400 text-xs font-mono">
            <span className="w-2 h-2 rounded-full bg-emerald-500 dark:bg-emerald-400 animate-pulse-subtle" />
            <span>Available for Select Technical Opportunities</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            Let's Engineer High-Scale Systems Together
          </h2>
          <p className="text-base sm:text-lg text-slate-600 dark:text-slate-300 leading-relaxed font-normal">
            Whether you want to discuss distributed architectures, power-grid simulations, cloud infrastructure
            optimization, or engineering leadership, I'd love to connect.
          </p>
        </div>

        {/* Contact Bento */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6 max-w-5xl mx-auto">
          {/* Main Direct Email Card (7 cols) */}
          <div className="md:col-span-7 p-6 sm:p-8 rounded-3xl bg-white dark:bg-gradient-to-br dark:from-slate-900 dark:via-slate-900/90 dark:to-blue-950/40 border border-slate-200 dark:border-slate-800 shadow-lg dark:shadow-xl flex flex-col justify-between space-y-6">
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <span className="p-3 rounded-2xl bg-cyan-500/10 border border-cyan-500/30 text-cyan-600 dark:text-cyan-400">
                  <Mail className="w-6 h-6" />
                </span>
                <div>
                  <h3 className="text-lg font-bold text-slate-900 dark:text-white">Direct Email Inquiry</h3>
                  <p className="text-sm text-slate-600 dark:text-slate-300 font-medium">Quickest channel for consulting & leadership</p>
                </div>
              </div>

              <div className="p-4 rounded-2xl bg-slate-50 dark:bg-slate-950/80 border border-slate-200 dark:border-slate-800 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                <span className="font-mono text-xs sm:text-sm md:text-base text-cyan-700 dark:text-cyan-300 font-semibold truncate">
                  {portfolioData.personal.email}
                </span>
                <button
                  onClick={copyEmail}
                  className="px-4 py-2 rounded-xl bg-white hover:bg-slate-100 dark:bg-slate-900 dark:hover:bg-slate-800 border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-200 text-xs font-semibold flex items-center justify-center gap-2 transition-all shrink-0 shadow-sm"
                >
                  {copied ? (
                    <>
                      <Check className="w-3.5 h-3.5 text-emerald-500 dark:text-emerald-400" />
                      <span className="text-emerald-600 dark:text-emerald-400">Copied!</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-3.5 h-3.5 text-slate-500 dark:text-slate-400" />
                      <span>Copy Address</span>
                    </>
                  )}
                </button>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs font-mono text-slate-700 dark:text-slate-300 pt-2">
                <div className="flex items-center gap-2 p-3 rounded-xl bg-slate-50 dark:bg-slate-950/50 border border-slate-200 dark:border-slate-800">
                  <MapPin className="w-4 h-4 text-cyan-600 dark:text-cyan-400" />
                  <span>{portfolioData.personal.location}</span>
                </div>
                <div className="flex items-center gap-2 p-3 rounded-xl bg-slate-50 dark:bg-slate-950/50 border border-slate-200 dark:border-slate-800">
                  <Phone className="w-4 h-4 text-emerald-600 dark:text-emerald-400" />
                  <span>{portfolioData.personal.phone}</span>
                </div>
              </div>
            </div>

            <div className="pt-4 border-t border-slate-200 dark:border-slate-800 flex flex-wrap items-center justify-between gap-3">
              <a
                href={`mailto:${portfolioData.personal.email}`}
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-cyan-500 hover:bg-cyan-400 text-slate-950 font-bold text-xs sm:text-sm transition-all shadow-md shadow-cyan-500/20"
              >
                <span>Compose Mail</span>
                <ArrowUpRight className="w-4 h-4" />
              </a>
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-slate-100 dark:bg-slate-950 border border-slate-200 dark:border-slate-800 text-xs sm:text-sm font-mono text-slate-700 dark:text-slate-300 shadow-sm">
                <span className="w-2 h-2 rounded-full bg-emerald-500 dark:bg-emerald-400 animate-pulse-subtle" />
                <span>Typical response within 24h</span>
              </div>
            </div>
          </div>

          {/* Social Profiles & Resume (5 cols) */}
          <div className="md:col-span-5 p-6 sm:p-8 rounded-3xl bg-white dark:bg-slate-900/90 border border-slate-200 dark:border-slate-800 shadow-lg dark:shadow-xl flex flex-col justify-between space-y-6">
            <div className="space-y-4">
              <h3 className="text-lg font-bold text-slate-900 dark:text-white">Professional Profiles</h3>

              <div className="space-y-2.5">
                <a
                  href={portfolioData.personal.socialLinks.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 rounded-xl bg-slate-50 hover:bg-slate-100 dark:bg-slate-950 dark:hover:bg-slate-800/80 border border-slate-200 dark:border-slate-800/80 flex items-center justify-between text-xs text-slate-700 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white transition-colors group"
                >
                  <div className="flex items-center gap-2.5">
                    <LinkedinIcon className="w-4 h-4 text-blue-500 dark:text-blue-400" />
                    <span>LinkedIn Profile</span>
                  </div>
                  <ArrowUpRight className="w-3.5 h-3.5 text-slate-400 dark:text-slate-500 group-hover:text-cyan-600 dark:group-hover:text-cyan-400" />
                </a>

                <a
                  href={portfolioData.personal.socialLinks.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 rounded-xl bg-slate-50 hover:bg-slate-100 dark:bg-slate-950 dark:hover:bg-slate-800/80 border border-slate-200 dark:border-slate-800/80 flex items-center justify-between text-xs text-slate-700 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white transition-colors group"
                >
                  <div className="flex items-center gap-2.5">
                    <GithubIcon className="w-4 h-4 text-purple-500 dark:text-purple-400" />
                    <span>GitHub Repositories</span>
                  </div>
                  <ArrowUpRight className="w-3.5 h-3.5 text-slate-400 dark:text-slate-500 group-hover:text-cyan-600 dark:group-hover:text-cyan-400" />
                </a>

                <a
                  href={portfolioData.personal.socialLinks.twitter}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 rounded-xl bg-slate-50 hover:bg-slate-100 dark:bg-slate-950 dark:hover:bg-slate-800/80 border border-slate-200 dark:border-slate-800/80 flex items-center justify-between text-xs text-slate-700 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white transition-colors group"
                >
                  <div className="flex items-center gap-2.5">
                    <TwitterIcon className="w-4 h-4 text-cyan-500 dark:text-cyan-400" />
                    <span>X / Twitter</span>
                  </div>
                  <ArrowUpRight className="w-3.5 h-3.5 text-slate-400 dark:text-slate-500 group-hover:text-cyan-600 dark:group-hover:text-cyan-400" />
                </a>

                <a
                  href={portfolioData.personal.socialLinks.youtube}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 rounded-xl bg-slate-50 hover:bg-slate-100 dark:bg-slate-950 dark:hover:bg-slate-800/80 border border-slate-200 dark:border-slate-800/80 flex items-center justify-between text-xs text-slate-700 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white transition-colors group"
                >
                  <div className="flex items-center gap-2.5">
                    <YoutubeIcon className="w-4 h-4 text-red-500 dark:text-red-400" />
                    <span>YouTube Channel</span>
                  </div>
                  <ArrowUpRight className="w-3.5 h-3.5 text-slate-400 dark:text-slate-500 group-hover:text-cyan-600 dark:group-hover:text-cyan-400" />
                </a>
              </div>
            </div>

            <a
              href={portfolioData.personal.resumeUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full py-3 rounded-xl bg-slate-900 hover:bg-slate-800 text-white dark:bg-slate-800 dark:hover:bg-slate-700 dark:text-slate-100 border border-slate-800 dark:border-slate-700 font-semibold text-xs sm:text-sm flex items-center justify-center gap-2 transition-all shadow-md"
            >
              <Download className="w-4 h-4 text-cyan-400" />
              <span>Download Resume</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
