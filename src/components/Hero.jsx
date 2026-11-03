import React from 'react';
import { Mail, ArrowRight, Copy, Check } from 'lucide-react';
import { Linkedin, Github, TwitterX, Instagram } from './BrandIcons';
import { personalData } from '../data/portfolioData';

export default function Hero({ onCopyEmail, emailCopied }) {
  const { socials } = personalData;

  return (
    <section
      id="home"
      className="relative min-h-[90vh] pt-28 pb-16 lg:pt-36 lg:pb-20 flex items-center"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Identity & Bio */}
          <div className="lg:col-span-7 flex flex-col items-start text-left">
            
            {/* Status Badge */}
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-900 border border-slate-800 text-xs text-slate-300 font-medium mb-5">
              <span className="w-2 h-2 rounded-full bg-emerald-400" />
              <span>{personalData.availabilityBadge}</span>
            </div>

            {/* Name */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-white mb-3">
              {personalData.name}
            </h1>

            {/* Headline */}
            <div className="text-lg sm:text-xl font-semibold text-cyanAccent-400 mb-2">
              {personalData.headline}
            </div>

            {/* Specializations */}
            <p className="text-xs sm:text-sm text-slate-400 font-medium mb-6 tracking-wide">
              {personalData.specializations.join('  •  ')}
            </p>

            {/* Bio */}
            <p className="text-slate-300 text-base sm:text-lg leading-relaxed mb-8 max-w-2xl font-normal">
              {personalData.heroBio}
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-wrap items-center gap-4 mb-8">
              <a
                href="#projects"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-electric-600 hover:bg-electric-500 text-white font-semibold text-sm transition-colors shadow-md shadow-electric-600/20"
              >
                <span>Explore My Work</span>
                <ArrowRight className="w-4 h-4" />
              </a>

              <a
                href="#contact"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-slate-900 hover:bg-slate-800 border border-slate-800 text-slate-200 hover:text-white font-semibold text-sm transition-colors"
              >
                <span>Contact Me</span>
              </a>
            </div>

            {/* Social Media Links (@improaish everywhere) */}
            <div className="pt-6 border-t border-slate-800/80 w-full flex flex-wrap items-center gap-3">
              <span className="text-xs font-medium text-slate-400 mr-2">
                Find me online:
              </span>

              {/* LinkedIn */}
              <a
                href={socials.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-slate-900 border border-slate-800 hover:border-blue-500/50 text-slate-300 hover:text-white text-xs transition-colors"
                title="LinkedIn: /in/improaish"
              >
                <Linkedin className="w-3.5 h-3.5 text-blue-400" />
                <span>LinkedIn</span>
              </a>

              {/* GitHub */}
              <a
                href={socials.github}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-slate-900 border border-slate-800 hover:border-slate-600 text-slate-300 hover:text-white text-xs transition-colors"
                title="GitHub: @improaish"
              >
                <Github className="w-3.5 h-3.5 text-slate-300" />
                <span>GitHub</span>
              </a>

              {/* X (Twitter) */}
              <a
                href={socials.x}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-slate-900 border border-slate-800 hover:border-sky-500/50 text-slate-300 hover:text-white text-xs transition-colors"
                title="X: @improaish"
              >
                <TwitterX className="w-3 h-3 text-sky-400" />
                <span>X (Twitter)</span>
              </a>

              {/* Instagram */}
              <a
                href={socials.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-slate-900 border border-slate-800 hover:border-pink-500/50 text-slate-300 hover:text-white text-xs transition-colors"
                title="Instagram: @improaish"
              >
                <Instagram className="w-3.5 h-3.5 text-pink-400" />
                <span>Instagram</span>
              </a>

              {/* Email */}
              <button
                type="button"
                onClick={onCopyEmail}
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-slate-900 border border-slate-800 hover:border-cyanAccent-500/50 text-slate-300 hover:text-white text-xs transition-colors"
                title="Copy email: improaish@gmail.com"
              >
                {emailCopied ? (
                  <>
                    <Check className="w-3.5 h-3.5 text-emerald-400" />
                    <span className="text-emerald-400">Copied</span>
                  </>
                ) : (
                  <>
                    <Mail className="w-3.5 h-3.5 text-cyanAccent-400" />
                    <span>Email</span>
                  </>
                )}
              </button>
            </div>

          </div>

          {/* Right Column: Clean Portrait */}
          <div className="lg:col-span-5 flex justify-center lg:justify-end">
            <div className="relative w-full max-w-sm">
              <div className="rounded-2xl overflow-hidden border border-slate-800 bg-slate-900 shadow-xl aspect-[4/5]">
                <img
                  src={personalData.profileImage}
                  alt={personalData.name}
                  className="w-full h-full object-cover object-center"
                  loading="eager"
                />
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
