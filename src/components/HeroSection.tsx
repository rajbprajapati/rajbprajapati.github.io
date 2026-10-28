"use client";

import React, { useState } from "react";
import Image from "next/image";
import {
  ArrowDown,
  Download,
  Copy,
  Check,
  Award,
  ShieldCheck,
  Cpu,
  Mail,
  Users,
} from "lucide-react";
import { GithubIcon, LinkedinIcon, TwitterIcon } from "@/components/icons";
import { portfolioData } from "@/data/portfolio";

export default function HeroSection() {
  const [copied, setCopied] = useState(false);

  const copyEmail = () => {
    navigator.clipboard.writeText(portfolioData.personal.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  return (
    <section className="relative pt-24 pb-14 sm:pt-32 sm:pb-20 md:pt-40 md:pb-24 overflow-hidden transition-colors">
      {/* Background radial gradients & subtle grid pattern */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[350px] sm:w-[650px] h-[350px] sm:h-[650px] bg-gradient-to-tr from-cyan-500/10 via-blue-600/10 to-emerald-500/10 rounded-full blur-3xl pointer-events-none -z-10" />
      <div className="absolute top-0 right-0 w-64 sm:w-96 h-64 sm:h-96 bg-cyan-500/5 rounded-full blur-3xl pointer-events-none -z-10" />
      <div className="absolute inset-0 bg-[radial-gradient(#94a3b8_1px,transparent_1px)] dark:bg-[radial-gradient(#1e293b_1px,transparent_1px)] [background-size:24px_24px] sm:[background-size:28px_28px] opacity-35 dark:opacity-25 pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          {/* Left Column: Headline, Bio & CTAs (7 cols) */}
          <div className="lg:col-span-7 space-y-5 sm:space-y-6 text-left">
            {/* Telemetry pill */}
            <div className="inline-flex flex-wrap items-center gap-1.5 sm:gap-2 px-3 py-1.5 rounded-full bg-slate-100 dark:bg-slate-900/90 border border-slate-200 dark:border-slate-700/80 text-[11px] sm:text-xs font-mono text-cyan-700 dark:text-cyan-300 shadow-sm max-w-full">
              <span className="w-2 h-2 rounded-full bg-cyan-500 dark:bg-cyan-400 animate-pulse-subtle shrink-0" />
              <span className="truncate">INFOCUSP INNOVATIONS · SOFTWARE ENGINEER 3</span>
              <span className="hidden sm:inline text-slate-400 dark:text-slate-600">|</span>
              <span className="text-emerald-700 dark:text-emerald-400 font-semibold">5+ YRS PROD EXP</span>
            </div>

            {/* Main Headline */}
            <h1 className="text-2xl sm:text-4xl md:text-5xl lg:text-5xl font-extrabold text-slate-900 dark:text-white tracking-tight leading-[1.15]">
              Architecting resilient distributed engines,{" "}
              <span className="bg-gradient-to-r from-cyan-600 via-teal-500 to-emerald-600 dark:from-cyan-400 dark:via-teal-300 dark:to-emerald-400 bg-clip-text text-transparent">
                cutting cloud spend by ~80%
              </span>
              , and scaling simulation throughput{" "}
              <span className="text-cyan-600 dark:text-cyan-400 underline decoration-cyan-500/40 decoration-2 underline-offset-4 sm:underline-offset-8">
                10x
              </span>
              .
            </h1>

            {/* Subtitle Bio */}
            <p className="text-xs sm:text-sm md:text-base text-slate-600 dark:text-slate-300 leading-relaxed max-w-2xl">
              Backend & Distributed Systems Engineer specializing in mission-critical platforms across{" "}
              <strong className="text-slate-900 dark:text-white font-semibold">power-grid simulation (GridLAB-D, CIM/GML)</strong>,{" "}
              <strong className="text-slate-900 dark:text-white font-semibold">IoT device clouds</strong>, and{" "}
              <strong className="text-slate-900 dark:text-white font-semibold">bioinformatics sequence pipelines</strong>. Multi-cloud
              certified across AWS & GCP, DA-IICT Machine Learning M.Tech graduate, guiding cross-functional teams of up to 8
              engineers end-to-end.
            </p>

            {/* Quick Badges Strip */}
            <div className="flex flex-wrap items-center gap-1.5 sm:gap-2 pt-1 text-[11px] sm:text-xs font-mono text-slate-700 dark:text-slate-300">
              <span className="px-2.5 py-1 rounded-md bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-sm flex items-center gap-1.5">
                <ShieldCheck className="w-3.5 h-3.5 text-amber-500 dark:text-amber-400 shrink-0" />
                AWS Solutions Architect
              </span>
              <span className="px-2.5 py-1 rounded-md bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-sm flex items-center gap-1.5">
                <Cpu className="w-3.5 h-3.5 text-blue-500 dark:text-blue-400 shrink-0" />
                GCP Cloud Developer
              </span>
              <span className="px-2.5 py-1 rounded-md bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-sm flex items-center gap-1.5">
                <Award className="w-3.5 h-3.5 text-cyan-500 dark:text-cyan-400 shrink-0" />
                GCP Data Engineer
              </span>
              <span className="px-2.5 py-1 rounded-md bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-sm flex items-center gap-1.5">
                <Users className="w-3.5 h-3.5 text-emerald-500 dark:text-emerald-400 shrink-0" />
                Led 8 Engineers
              </span>
            </div>

            {/* Action CTA Buttons */}
            <div className="flex flex-col sm:flex-row sm:items-center gap-2.5 sm:gap-4 pt-2">
              <a
                href="#systems-craft"
                className="w-full sm:w-auto px-6 py-3 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-slate-950 font-bold text-xs sm:text-sm transition-all duration-200 flex items-center justify-center gap-2 shadow-md shadow-cyan-500/20"
              >
                <span>Explore Systems & Craft</span>
                <ArrowDown className="w-4 h-4" />
              </a>

              <a
                href={portfolioData.personal.resumeUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto px-5 py-3 rounded-xl bg-white hover:bg-slate-100 dark:bg-slate-900 dark:hover:bg-slate-800 border border-slate-300 dark:border-slate-700/80 text-slate-800 dark:text-slate-200 font-semibold text-xs sm:text-sm transition-all flex items-center justify-center gap-2 shadow-sm"
              >
                <Download className="w-4 h-4 text-cyan-600 dark:text-cyan-400" />
                <span>Download Resume</span>
              </a>

              <button
                onClick={copyEmail}
                className="w-full sm:w-auto px-4 py-3 rounded-xl bg-slate-100 hover:bg-slate-200 dark:bg-slate-950/80 dark:hover:bg-slate-900 border border-slate-200 dark:border-slate-800 text-slate-700 dark:text-slate-300 font-mono text-xs transition-all flex items-center justify-center gap-2 group shadow-sm"
                title="Click to copy email address"
              >
                {copied ? (
                  <>
                    <Check className="w-3.5 h-3.5 text-emerald-600 dark:text-emerald-400" />
                    <span className="text-emerald-600 dark:text-emerald-400 font-semibold">Email Copied!</span>
                  </>
                ) : (
                  <>
                    <Copy className="w-3.5 h-3.5 text-slate-500 dark:text-slate-400 group-hover:text-cyan-600 dark:group-hover:text-cyan-400" />
                    <span className="group-hover:text-slate-900 dark:group-hover:text-white truncate">
                      {portfolioData.personal.email}
                    </span>
                  </>
                )}
              </button>
            </div>

            {/* Social Channels */}
            <div className="flex items-center gap-3 sm:gap-4 pt-2 border-t border-slate-200 dark:border-slate-800/80">
              <span className="text-[11px] sm:text-xs font-mono text-slate-500 dark:text-slate-400">CHANNELS:</span>
              <a
                href={portfolioData.personal.socialLinks.github}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-lg bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white hover:border-slate-300 dark:hover:border-slate-700 transition-colors shadow-sm"
                aria-label="GitHub Profile"
              >
                <GithubIcon className="w-4 h-4" />
              </a>
              <a
                href={portfolioData.personal.socialLinks.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-lg bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-slate-600 dark:text-slate-400 hover:text-cyan-600 dark:hover:text-cyan-400 hover:border-slate-300 dark:hover:border-slate-700 transition-colors shadow-sm"
                aria-label="LinkedIn Profile"
              >
                <LinkedinIcon className="w-4 h-4" />
              </a>
              <a
                href={portfolioData.personal.socialLinks.twitter}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-lg bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-slate-600 dark:text-slate-400 hover:text-blue-600 dark:hover:text-blue-400 hover:border-slate-300 dark:hover:border-slate-700 transition-colors shadow-sm"
                aria-label="Twitter Profile"
              >
                <TwitterIcon className="w-4 h-4" />
              </a>
              <a
                href={`mailto:${portfolioData.personal.email}`}
                className="p-2 rounded-lg bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-slate-600 dark:text-slate-400 hover:text-emerald-600 dark:hover:text-emerald-400 hover:border-slate-300 dark:hover:border-slate-700 transition-colors shadow-sm"
                aria-label="Send Direct Email"
              >
                <Mail className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Right Column: Hero Portrait & Bento Micro-Cards (5 cols) */}
          <div className="lg:col-span-5 flex justify-center">
            <div className="relative group w-full max-w-[300px] sm:max-w-sm">
              {/* Radiant halo */}
              <div className="absolute -inset-2 bg-gradient-to-tr from-cyan-500 via-blue-600 to-emerald-400 rounded-3xl blur-xl opacity-20 dark:opacity-30 group-hover:opacity-40 dark:group-hover:opacity-60 transition duration-700" />

              <div className="relative bg-white dark:bg-[#0a0f1e] border border-slate-200 dark:border-slate-800/90 rounded-3xl p-4 sm:p-5 shadow-lg dark:shadow-2xl space-y-3 sm:space-y-4">
                {/* Photo frame */}
                <div className="relative aspect-square w-full rounded-2xl overflow-hidden border border-slate-200 dark:border-slate-700/80 bg-slate-100 dark:bg-slate-950">
                  <Image
                    src={portfolioData.personal.photoUrl}
                    alt={portfolioData.personal.name}
                    width={400}
                    height={400}
                    priority
                    className="w-full h-full object-cover object-top"
                  />
                  {/* Floating active status */}
                  <div className="absolute top-2.5 right-2.5 sm:top-3 sm:right-3 bg-white/90 dark:bg-slate-950/85 backdrop-blur-md border border-emerald-500/30 px-2.5 sm:px-3 py-1 rounded-full flex items-center gap-1.5 sm:gap-2 text-[10px] sm:text-[11px] font-mono text-emerald-700 dark:text-emerald-300 shadow-sm">
                    <span className="w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full bg-emerald-500 dark:bg-emerald-400 animate-pulse-subtle shrink-0" />
                    <span>Infocusp</span>
                  </div>

                  {/* Floating location & degree pill */}
                  <div className="absolute bottom-2.5 left-2.5 right-2.5 sm:bottom-3 sm:left-3 sm:right-3 bg-white/90 dark:bg-slate-950/90 backdrop-blur-md border border-slate-200 dark:border-slate-800 rounded-xl p-2 sm:p-2.5 flex items-center justify-between text-xs font-mono shadow-sm">
                    <div className="flex flex-col">
                      <span className="text-slate-900 dark:text-white font-bold text-xs">{portfolioData.personal.name}</span>
                      <span className="text-slate-500 dark:text-slate-400 text-[10px] sm:text-[11px]">
                        {portfolioData.personal.location}
                      </span>
                    </div>
                    <span className="px-2 py-0.5 rounded bg-blue-500/10 text-blue-700 dark:text-blue-300 border border-blue-500/30 text-[10px] sm:text-[11px]">
                      DA-IICT M.Tech
                    </span>
                  </div>
                </div>

                {/* Team Lead Indicator */}
                <div className="p-2.5 sm:p-3 rounded-2xl bg-slate-50 dark:bg-slate-900 border border-emerald-500/30 flex items-center gap-2.5 sm:gap-3">
                  <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-xl bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center text-emerald-600 dark:text-emerald-400 shrink-0">
                    <Users className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="text-xs font-bold text-slate-900 dark:text-white">Leading 8 Full-Stack Developers</div>
                    <div className="text-[10px] sm:text-[11px] text-slate-500 dark:text-slate-400">
                      AI Platform · Benchmarking · Scoping
                    </div>
                  </div>
                </div>

                {/* Micro Certification Stack */}
                <div className="space-y-1.5 sm:space-y-2 pt-0.5 font-mono text-[11px] sm:text-xs">
                  <div className="flex items-center justify-between p-2 rounded-xl bg-slate-50 dark:bg-slate-950/80 border border-slate-200 dark:border-slate-800">
                    <div className="flex items-center gap-2">
                      <span className="w-5 h-5 sm:w-6 sm:h-6 rounded-lg bg-amber-500/10 border border-amber-500/30 flex items-center justify-center text-[9px] sm:text-[10px] font-bold text-amber-600 dark:text-amber-400 shrink-0">
                        AWS
                      </span>
                      <span className="text-slate-800 dark:text-white font-medium">Solutions Architect</span>
                    </div>
                    <span className="text-amber-600 dark:text-amber-400 text-[10px] sm:text-[11px]">Jul 2026</span>
                  </div>

                  <div className="flex items-center justify-between p-2 rounded-xl bg-slate-50 dark:bg-slate-950/80 border border-slate-200 dark:border-slate-800">
                    <div className="flex items-center gap-2">
                      <span className="w-5 h-5 sm:w-6 sm:h-6 rounded-lg bg-blue-500/10 border border-blue-500/30 flex items-center justify-center text-[9px] sm:text-[10px] font-bold text-blue-600 dark:text-blue-400 shrink-0">
                        GCP
                      </span>
                      <span className="text-slate-800 dark:text-white font-medium">Cloud Developer</span>
                    </div>
                    <span className="text-blue-600 dark:text-blue-400 text-[10px] sm:text-[11px]">Jan 2025</span>
                  </div>

                  <div className="flex items-center justify-between p-2 rounded-xl bg-slate-50 dark:bg-slate-950/80 border border-slate-200 dark:border-slate-800">
                    <div className="flex items-center gap-2">
                      <span className="w-5 h-5 sm:w-6 sm:h-6 rounded-lg bg-cyan-500/10 border border-cyan-500/30 flex items-center justify-center text-[9px] sm:text-[10px] font-bold text-cyan-600 dark:text-cyan-400 shrink-0">
                        GCP
                      </span>
                      <span className="text-slate-800 dark:text-white font-medium">Data Engineer</span>
                    </div>
                    <span className="text-cyan-600 dark:text-cyan-400 text-[10px] sm:text-[11px]">Dec 2025</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
