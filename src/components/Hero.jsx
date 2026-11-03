import React from 'react';
import {
  Mail,
  ArrowRight,
  Sparkles,
  Download,
  Copy,
  Check,
  GraduationCap,
  Briefcase,
  Cpu,
  Layers
} from 'lucide-react';
import { Linkedin } from './BrandIcons';
import { personalData } from '../data/portfolioData';

export default function Hero({ onCopyEmail, emailCopied }) {
  return (
    <section
      id="home"
      className="relative min-h-screen pt-28 pb-16 lg:pt-36 lg:pb-24 flex items-center overflow-hidden"
    >
      {/* Background Technology Grid and Ambient Glows */}
      <div className="absolute inset-0 bg-tech-grid opacity-30 pointer-events-none" />
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[550px] h-[550px] bg-electric-600/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-[350px] h-[350px] bg-cyanAccent-500/10 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Identity & Introduction */}
          <div className="lg:col-span-7 flex flex-col items-start text-left">
            
            {/* Status Pill */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-navy-900/90 border border-electric-500/30 text-xs text-slate-300 font-medium mb-6 shadow-sm backdrop-blur-md">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
              </span>
              <span>{personalData.availabilityBadge}</span>
            </div>

            {/* Name */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white uppercase mb-3">
              <span className="block text-slate-100">{personalData.name}</span>
            </h1>

            {/* Primary Headline */}
            <div className="text-xl sm:text-2xl lg:text-2xl font-bold mb-3">
              <span className="text-gradient-electric">
                {personalData.headline}
              </span>
            </div>

            {/* Specializations Tagline */}
            <div className="flex flex-wrap gap-2 text-xs sm:text-sm font-semibold text-cyanAccent-300 mb-6">
              {personalData.specializations.map((spec, idx) => (
                <span key={spec} className="inline-flex items-center">
                  <span>{spec}</span>
                  {idx < personalData.specializations.length - 1 && (
                    <span className="mx-2 text-slate-500">&bull;</span>
                  )}
                </span>
              ))}
            </div>

            {/* Professional Introduction Paragraph */}
            <p className="text-slate-300 text-base sm:text-lg leading-relaxed mb-8 max-w-2xl font-normal">
              {personalData.heroBio}
            </p>

            {/* Call to Action Buttons */}
            <div className="flex flex-wrap items-center gap-4 mb-8 w-full sm:w-auto">
              <a
                href="#projects"
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-gradient-to-r from-electric-600 to-cyanAccent-500 hover:from-electric-500 hover:to-cyanAccent-400 text-white font-semibold text-sm shadow-lg shadow-electric-600/30 hover:shadow-electric-600/50 hover:-translate-y-0.5 transition-all duration-200"
              >
                <span>Explore My Work</span>
                <ArrowRight className="w-4 h-4" />
              </a>

              <a
                href="#contact"
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-navy-900/90 hover:bg-slate-800 border border-slate-700/80 hover:border-slate-600 text-slate-200 hover:text-white font-semibold text-sm transition-all duration-200 shadow-sm"
              >
                <span>Contact Me</span>
              </a>
            </div>

            {/* Social & Contact Direct Links */}
            <div className="flex flex-wrap items-center gap-4 pt-4 border-t border-slate-800/80 w-full">
              <span className="text-xs uppercase tracking-wider text-slate-400 font-medium">
                Connect Directly:
              </span>

              {/* LinkedIn */}
              <a
                href={personalData.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg bg-slate-900/80 border border-slate-800 hover:border-blue-500/60 text-slate-300 hover:text-white text-xs font-medium transition-colors"
                aria-label="Aishwarya Kumari LinkedIn Profile"
              >
                <Linkedin className="w-3.5 h-3.5 text-blue-400" />
                <span>LinkedIn</span>
              </a>

              {/* Email */}
              <a
                href={`mailto:${personalData.email}`}
                className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg bg-slate-900/80 border border-slate-800 hover:border-cyan-500/60 text-slate-300 hover:text-white text-xs font-medium transition-colors"
                aria-label="Email Aishwarya Kumari"
              >
                <Mail className="w-3.5 h-3.5 text-cyanAccent-400" />
                <span>{personalData.email}</span>
              </a>

              {/* Quick Copy Email */}
              <button
                type="button"
                onClick={onCopyEmail}
                className="inline-flex items-center gap-1.5 px-2.5 py-1.5 rounded-lg bg-slate-900/80 border border-slate-800 hover:border-slate-600 text-slate-400 hover:text-slate-200 text-xs transition-colors"
                title="Copy email to clipboard"
              >
                {emailCopied ? (
                  <>
                    <Check className="w-3.5 h-3.5 text-emerald-400" />
                    <span className="text-emerald-400">Copied</span>
                  </>
                ) : (
                  <>
                    <Copy className="w-3.5 h-3.5" />
                    <span>Copy</span>
                  </>
                )}
              </button>
            </div>

          </div>

          {/* Right Column: Profile Image & Tech Visual Highlights */}
          <div className="lg:col-span-5 flex justify-center lg:justify-end relative">
            <div className="relative w-full max-w-sm sm:max-w-md">
              
              {/* Outer Decorative Glow Rings */}
              <div className="absolute -inset-1.5 bg-gradient-to-r from-electric-600 via-sky-500 to-cyanAccent-400 rounded-3xl blur-lg opacity-40 animate-pulse-subtle" />
              
              {/* Main Card Container */}
              <div className="relative rounded-3xl bg-navy-900/90 border border-slate-700/60 p-3 sm:p-4 shadow-2xl backdrop-blur-xl overflow-hidden">
                
                {/* Tech Frame Header Bar */}
                <div className="flex items-center justify-between pb-3 px-1 border-b border-slate-800/80 mb-3">
                  <div className="flex items-center gap-1.5">
                    <span className="w-2.5 h-2.5 rounded-full bg-rose-500/80" />
                    <span className="w-2.5 h-2.5 rounded-full bg-amber-500/80" />
                    <span className="w-2.5 h-2.5 rounded-full bg-emerald-500/80" />
                  </div>
                  <span className="text-[11px] font-mono text-slate-400 tracking-wider">
                    aishwarya.profile // AI-EDTECH
                  </span>
                </div>

                {/* Profile Photo */}
                <div className="relative rounded-2xl overflow-hidden bg-navy-950 aspect-[4/5] group">
                  <img
                    src={personalData.profileImage}
                    alt="Aishwarya Kumari - Artificial Intelligence & EdTech"
                    className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
                    loading="eager"
                  />
                  {/* Subtle Gradient Overlay at bottom */}
                  <div className="absolute inset-0 bg-gradient-to-t from-navy-950 via-transparent to-transparent opacity-60" />

                  {/* Corner Accent Graphic */}
                  <div className="absolute bottom-3 left-3 right-3 p-3 rounded-xl bg-navy-950/85 backdrop-blur-md border border-slate-800/90 flex items-center justify-between">
                    <div>
                      <div className="text-xs font-bold text-white">Aishwarya Kumari</div>
                      <div className="text-[11px] text-cyanAccent-300 font-medium">B.Tech in Artificial Intelligence</div>
                    </div>
                    <div className="px-2 py-0.5 rounded bg-electric-950/80 border border-electric-500/30 text-[10px] font-mono text-electric-300">
                      Grad 2027
                    </div>
                  </div>
                </div>

              </div>

              {/* Floating Pill Accent 1: EdTech & Learning Focus */}
              <div className="absolute -bottom-5 -left-4 sm:-left-6 glass-card px-3.5 py-2.5 rounded-xl border border-electric-500/30 shadow-xl flex items-center gap-2.5 animate-float-gentle">
                <div className="p-2 rounded-lg bg-electric-600/20 text-electric-400">
                  <GraduationCap className="w-4 h-4" />
                </div>
                <div>
                  <div className="text-[11px] font-semibold text-white">EdTech Focus</div>
                  <div className="text-[10px] text-slate-400">Digital Learning Solutions</div>
                </div>
              </div>

              {/* Floating Pill Accent 2: Practical Exposure */}
              <div className="absolute -top-4 -right-2 sm:-right-4 glass-card px-3.5 py-2.5 rounded-xl border border-cyanAccent-500/30 shadow-xl flex items-center gap-2.5">
                <div className="p-2 rounded-lg bg-cyanAccent-500/20 text-cyanAccent-400">
                  <Briefcase className="w-4 h-4" />
                </div>
                <div>
                  <div className="text-[11px] font-semibold text-white">6 Internships</div>
                  <div className="text-[10px] text-slate-400">Practical Exposure</div>
                </div>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
