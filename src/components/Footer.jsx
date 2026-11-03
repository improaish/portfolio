import React from 'react';
import { ArrowUp, Mail, ExternalLink, Heart } from 'lucide-react';
import { Linkedin } from './BrandIcons';
import { personalData } from '../data/portfolioData';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-charcoal-950 border-t border-slate-800/80 pt-16 pb-12 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Top Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 pb-12 border-b border-slate-800/70 items-start">
          
          {/* Identity (6 Cols) */}
          <div className="md:col-span-6 space-y-3">
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-electric-600 to-cyanAccent-500 flex items-center justify-center font-bold text-white text-xs">
                AK
              </div>
              <span className="font-bold text-xl text-white tracking-tight">
                {personalData.name}
              </span>
            </div>

            <div className="text-sm font-semibold text-cyanAccent-400">
              Artificial Intelligence &bull; EdTech &bull; Emerging Technologies
            </div>

            <div className="text-xs text-slate-300">
              AI Applications &bull; Educational Technology &bull; Content Architecture
            </div>

            <p className="text-xs text-slate-400 max-w-md pt-1 leading-relaxed">
              Committed to building accessible, structured and intelligent digital experiences at the intersection of machine learning and modern education.
            </p>
          </div>

          {/* Direct Navigation Quicklinks (3 Cols) */}
          <div className="md:col-span-3 space-y-2">
            <div className="text-xs font-semibold text-slate-300 uppercase tracking-wider mb-3">
              Navigation
            </div>
            <ul className="space-y-1.5 text-xs text-slate-400">
              <li>
                <a href="#about" className="hover:text-cyanAccent-300 transition-colors">About Me</a>
              </li>
              <li>
                <a href="#expertise" className="hover:text-cyanAccent-300 transition-colors">Technical Expertise</a>
              </li>
              <li>
                <a href="#edtech" className="hover:text-cyanAccent-300 transition-colors">EdTech Innovations</a>
              </li>
              <li>
                <a href="#experience" className="hover:text-cyanAccent-300 transition-colors">Internship Experience</a>
              </li>
              <li>
                <a href="#projects" className="hover:text-cyanAccent-300 transition-colors">Projects &amp; Work</a>
              </li>
              <li>
                <a href="#content-architecture" className="hover:text-cyanAccent-300 transition-colors">Content Architecture</a>
              </li>
              <li>
                <a href="#education" className="hover:text-cyanAccent-300 transition-colors">Education &amp; Credentials</a>
              </li>
            </ul>
          </div>

          {/* Connect & Links (3 Cols) */}
          <div className="md:col-span-3 space-y-3">
            <div className="text-xs font-semibold text-slate-300 uppercase tracking-wider mb-3">
              Direct Contact
            </div>
            
            <a
              href={`mailto:${personalData.email}`}
              className="flex items-center gap-2 text-xs text-slate-300 hover:text-white transition-colors"
            >
              <Mail className="w-3.5 h-3.5 text-cyanAccent-400" />
              <span>{personalData.email}</span>
            </a>

            <a
              href={personalData.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-xs text-slate-300 hover:text-white transition-colors"
            >
              <Linkedin className="w-3.5 h-3.5 text-blue-400" />
              <span>LinkedIn Profile</span>
            </a>

            <a
              href={personalData.existingPortfolio}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-xs text-slate-400 hover:text-cyanAccent-300 transition-colors pt-2"
            >
              <ExternalLink className="w-3.5 h-3.5" />
              <span>Existing Portfolio Archive</span>
            </a>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-400">
          <div>
            &copy; {currentYear} {personalData.name}. All rights reserved.
          </div>

          <div className="flex items-center gap-6">
            <span className="text-[11px] text-slate-400">
              Designed for professional review &bull; React &amp; Tailwind CSS
            </span>
            <button
              onClick={scrollToTop}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-slate-900 border border-slate-800 text-slate-300 hover:text-white hover:border-slate-700 transition-all text-xs"
              aria-label="Back to top"
            >
              <span>Back to Top</span>
              <ArrowUp className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>

      </div>
    </footer>
  );
}
