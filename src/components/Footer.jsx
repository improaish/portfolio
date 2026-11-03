import React from 'react';
import { ArrowUp, Mail, ExternalLink } from 'lucide-react';
import { Linkedin, Github, TwitterX, Instagram } from './BrandIcons';
import { personalData } from '../data/portfolioData';

export default function Footer() {
  const currentYear = new Date().getFullYear();
  const { socials } = personalData;

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-charcoal-950 border-t border-slate-900 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main Footer Row */}
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6 pb-8 border-b border-slate-900">
          <div>
            <div className="text-lg font-bold text-white mb-1">
              {personalData.name}
            </div>
            <div className="text-xs text-cyanAccent-400 font-medium mb-1">
              {personalData.headline}
            </div>
            <div className="text-xs text-slate-400">
              {personalData.specializations.join(' • ')}
            </div>
          </div>

          {/* Social Media Links with @improaish */}
          <div className="flex items-center gap-3">
            <a
              href={socials.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-lg bg-slate-900 border border-slate-800 text-slate-400 hover:text-blue-400 hover:border-slate-700 transition-colors"
              title="LinkedIn: /in/improaish"
              aria-label="LinkedIn"
            >
              <Linkedin className="w-4 h-4" />
            </a>

            <a
              href={socials.github}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-lg bg-slate-900 border border-slate-800 text-slate-400 hover:text-white hover:border-slate-700 transition-colors"
              title="GitHub: @improaish"
              aria-label="GitHub"
            >
              <Github className="w-4 h-4" />
            </a>

            <a
              href={socials.x}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-lg bg-slate-900 border border-slate-800 text-slate-400 hover:text-sky-400 hover:border-slate-700 transition-colors"
              title="X: @improaish"
              aria-label="X (Twitter)"
            >
              <TwitterX className="w-3.5 h-3.5" />
            </a>

            <a
              href={socials.instagram}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-lg bg-slate-900 border border-slate-800 text-slate-400 hover:text-pink-400 hover:border-slate-700 transition-colors"
              title="Instagram: @improaish"
              aria-label="Instagram"
            >
              <Instagram className="w-4 h-4" />
            </a>

            <a
              href={`mailto:${personalData.email}`}
              className="p-2 rounded-lg bg-slate-900 border border-slate-800 text-slate-400 hover:text-cyanAccent-400 hover:border-slate-700 transition-colors"
              title="Email: improaish@gmail.com"
              aria-label="Email"
            >
              <Mail className="w-4 h-4" />
            </a>
          </div>
        </div>

        {/* Bottom Credits & Back to Top */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-400">
          <div className="flex flex-wrap items-center gap-4">
            <span>&copy; {currentYear} {personalData.name}. All rights reserved.</span>
            <span>&bull;</span>
            <a
              href={socials.portfolio}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-cyanAccent-400 transition-colors inline-flex items-center gap-1"
            >
              <span>Archive Portfolio</span>
              <ExternalLink className="w-3 h-3" />
            </a>
          </div>

          <button
            onClick={scrollToTop}
            className="inline-flex items-center gap-1.5 text-xs text-slate-400 hover:text-white transition-colors"
          >
            <span>Back to top</span>
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>

      </div>
    </footer>
  );
}
