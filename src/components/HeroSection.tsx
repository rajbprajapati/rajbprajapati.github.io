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
    <section className="relative pt-32 pb-16 md:pt-40 md:pb-24 overflow-hidden">
      {/* Background radial gradients & subtle grid pattern */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[650px] h-[650px] bg-gradient-to-tr from-cyan-500/10 via-blue-600/10 to-emerald-500/10 rounded-full blur-3xl pointer-events-none -z-10" />
      <div className="absolute top-0 right-0 w-96 h-96 bg-cyan-500/5 rounded-full blur-3xl pointer-events-none -z-10" />
      <div className="absolute inset-0 bg-[radial-gradient(#1e293b_1px,transparent_1px)] [background-size:28px_28px] opacity-25 pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Column: Headline, Bio & CTAs (7 cols) */}
          <div className="lg:col-span-7 space-y-6">
            {/* Telemetry pill */}
            <div className="inline-flex flex-wrap items-center gap-2 px-3 py-1.5 rounded-full bg-slate-900/90 border border-slate-700/80 text-xs font-mono text-cyan-300 shadow-sm">
              <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse-subtle" />
              <span>SOFTWARE ENGINEER 3 @ INFOCUSP INNOVATIONS</span>
              <span className="text-slate-600">|</span>
              <span className="text-emerald-400 font-semibold">5+ YRS PRODUCTION EXP</span>
            </div>

            {/* Main Headline */}
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-5xl font-extrabold text-white tracking-tight leading-[1.12]">
              Architecting resilient distributed engines,{" "}
              <span className="bg-gradient-to-r from-cyan-400 via-teal-300 to-emerald-400 bg-clip-text text-transparent">
                cutting cloud spend by ~80%
              </span>
              , and scaling simulation throughput{" "}
              <span className="text-cyan-400 underline decoration-cyan-500/40 decoration-2 underline-offset-8">
                10x
              </span>
              .
            </h1>

            {/* Subtitle Bio */}
            <p className="text-sm sm:text-base text-slate-300 leading-relaxed max-w-2xl">
              Backend & Distributed Systems Engineer specializing in mission-critical platforms across{" "}
              <strong className="text-white font-semibold">power-grid simulation (GridLAB-D, CIM/GML)</strong>,{" "}
              <strong className="text-white font-semibold">IoT device clouds</strong>, and{" "}
              <strong className="text-white font-semibold">bioinformatics sequence pipelines</strong>. Multi-cloud
              certified across AWS & GCP, DA-IICT Machine Learning M.Tech graduate, and tech lead guiding teams of up to 8
              engineers end-to-end.
            </p>

            {/* Quick Badges Strip */}
            <div className="flex flex-wrap items-center gap-2 pt-1 text-xs font-mono text-slate-300">
              <span className="px-2.5 py-1 rounded-md bg-slate-900 border border-slate-800 flex items-center gap-1.5">
                <ShieldCheck className="w-3.5 h-3.5 text-amber-400" />
                AWS Solutions Architect
              </span>
              <span className="px-2.5 py-1 rounded-md bg-slate-900 border border-slate-800 flex items-center gap-1.5">
                <Cpu className="w-3.5 h-3.5 text-blue-400" />
                GCP Cloud Developer
              </span>
              <span className="px-2.5 py-1 rounded-md bg-slate-900 border border-slate-800 flex items-center gap-1.5">
                <Award className="w-3.5 h-3.5 text-cyan-400" />
                GCP Data Engineer
              </span>
              <span className="px-2.5 py-1 rounded-md bg-slate-900 border border-slate-800 flex items-center gap-1.5">
                <Users className="w-3.5 h-3.5 text-emerald-400" />
                Led 8 Engineers
              </span>
            </div>

            {/* Action CTA Buttons */}
            <div className="flex flex-wrap items-center gap-4 pt-3">
              <a
                href="#architecture"
                className="px-6 py-3.5 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-slate-950 font-bold text-xs sm:text-sm transition-all duration-200 flex items-center gap-2 shadow-lg shadow-cyan-500/25 hover:shadow-cyan-500/40"
              >
                <span>View System Architecture</span>
                <ArrowDown className="w-4 h-4" />
              </a>

              <a
                href={portfolioData.personal.resumeUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="px-5 py-3.5 rounded-xl bg-slate-900 hover:bg-slate-800 border border-slate-700/80 text-slate-200 font-semibold text-xs sm:text-sm transition-all flex items-center gap-2 hover:border-slate-600"
              >
                <Download className="w-4 h-4 text-cyan-400" />
                <span>Download Resume (PDF)</span>
              </a>

              <button
                onClick={copyEmail}
                className="px-4 py-3.5 rounded-xl bg-slate-950/80 hover:bg-slate-900 border border-slate-800 text-slate-300 font-mono text-xs transition-all flex items-center gap-2 group"
                title="Click to copy email address"
              >
                {copied ? (
                  <>
                    <Check className="w-3.5 h-3.5 text-emerald-400" />
                    <span className="text-emerald-400 font-semibold">Email Copied!</span>
                  </>
                ) : (
                  <>
                    <Copy className="w-3.5 h-3.5 text-slate-400 group-hover:text-cyan-400" />
                    <span className="group-hover:text-white">{portfolioData.personal.email}</span>
                  </>
                )}
              </button>
            </div>

            {/* Social Channels */}
            <div className="flex items-center gap-4 pt-2 border-t border-slate-800/80">
              <span className="text-xs font-mono text-slate-400">CONNECT CHANNELS:</span>
              <a
                href={portfolioData.personal.socialLinks.github}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-lg bg-slate-900 border border-slate-800 text-slate-400 hover:text-white hover:border-slate-700 transition-colors"
                aria-label="GitHub Profile"
              >
                <GithubIcon className="w-4 h-4" />
              </a>
              <a
                href={portfolioData.personal.socialLinks.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-lg bg-slate-900 border border-slate-800 text-slate-400 hover:text-cyan-400 hover:border-slate-700 transition-colors"
                aria-label="LinkedIn Profile"
              >
                <LinkedinIcon className="w-4 h-4" />
              </a>
              <a
                href={portfolioData.personal.socialLinks.twitter}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-lg bg-slate-900 border border-slate-800 text-slate-400 hover:text-blue-400 hover:border-slate-700 transition-colors"
                aria-label="Twitter Profile"
              >
                <TwitterIcon className="w-4 h-4" />
              </a>
              <a
                href={`mailto:${portfolioData.personal.email}`}
                className="p-2 rounded-lg bg-slate-900 border border-slate-800 text-slate-400 hover:text-emerald-400 hover:border-slate-700 transition-colors"
                aria-label="Send Direct Email"
              >
                <Mail className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Right Column: Hero Portrait & Bento Micro-Cards (5 cols) */}
          <div className="lg:col-span-5 flex justify-center">
            <div className="relative group w-full max-w-sm">
              {/* Radiant halo */}
              <div className="absolute -inset-2 bg-gradient-to-tr from-cyan-500 via-blue-600 to-emerald-400 rounded-3xl blur-xl opacity-30 group-hover:opacity-60 transition duration-700" />

              <div className="relative bg-[#0a0f1e] border border-slate-800/90 rounded-3xl p-5 shadow-2xl space-y-4">
                {/* Photo frame */}
                <div className="relative aspect-square w-full rounded-2xl overflow-hidden border border-slate-700/80 bg-slate-950">
                  <Image
                    src={portfolioData.personal.photoUrl}
                    alt={portfolioData.personal.name}
                    width={400}
                    height={400}
                    priority
                    className="w-full h-full object-cover object-top"
                  />
                  {/* Floating active status */}
                  <div className="absolute top-3 right-3 bg-slate-950/85 backdrop-blur-md border border-emerald-500/30 px-3 py-1 rounded-full flex items-center gap-2 text-[11px] font-mono text-emerald-300">
                    <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse-subtle" />
                    <span>Infocusp Innovations</span>
                  </div>

                  {/* Floating location & degree pill */}
                  <div className="absolute bottom-3 left-3 right-3 bg-slate-950/90 backdrop-blur-md border border-slate-800 rounded-xl p-2.5 flex items-center justify-between text-xs font-mono">
                    <div className="flex flex-col">
                      <span className="text-white font-bold text-xs">{portfolioData.personal.name}</span>
                      <span className="text-slate-400 text-[11px]">{portfolioData.personal.location}</span>
                    </div>
                    <span className="px-2 py-0.5 rounded bg-blue-500/10 text-blue-300 border border-blue-500/30 text-[11px]">
                      DA-IICT M.Tech
                    </span>
                  </div>
                </div>

                {/* Team Lead Indicator */}
                <div className="p-3 rounded-2xl bg-gradient-to-r from-emerald-950/40 via-slate-900 to-slate-900 border border-emerald-500/30 flex items-center gap-3">
                  <div className="w-8 h-8 rounded-xl bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center text-emerald-400">
                    <Users className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="text-xs font-bold text-white">Leading 8 Full-Stack Developers</div>
                    <div className="text-[11px] text-slate-400">AI Platform · Model Benchmarking · Scoping</div>
                  </div>
                </div>

                {/* Micro Certification Stack */}
                <div className="space-y-2 pt-1 font-mono text-xs">
                  <div className="flex items-center justify-between p-2 rounded-xl bg-slate-950/80 border border-slate-800">
                    <div className="flex items-center gap-2">
                      <span className="w-6 h-6 rounded-lg bg-amber-500/10 border border-amber-500/30 flex items-center justify-center text-[10px] font-bold text-amber-400">
                        AWS
                      </span>
                      <span className="text-white text-xs font-medium">Solutions Architect</span>
                    </div>
                    <span className="text-amber-400 text-[11px]">Jul 2026</span>
                  </div>

                  <div className="flex items-center justify-between p-2 rounded-xl bg-slate-950/80 border border-slate-800">
                    <div className="flex items-center gap-2">
                      <span className="w-6 h-6 rounded-lg bg-blue-500/10 border border-blue-500/30 flex items-center justify-center text-[10px] font-bold text-blue-400">
                        GCP
                      </span>
                      <span className="text-white text-xs font-medium">Cloud Developer</span>
                    </div>
                    <span className="text-blue-400 text-[11px]">Jan 2025</span>
                  </div>

                  <div className="flex items-center justify-between p-2 rounded-xl bg-slate-950/80 border border-slate-800">
                    <div className="flex items-center gap-2">
                      <span className="w-6 h-6 rounded-lg bg-cyan-500/10 border border-cyan-500/30 flex items-center justify-center text-[10px] font-bold text-cyan-400">
                        GCP
                      </span>
                      <span className="text-white text-xs font-medium">Data Engineer</span>
                    </div>
                    <span className="text-cyan-400 text-[11px]">Dec 2025</span>
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
