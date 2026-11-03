import React, { useState, useEffect } from 'react';
import { Menu, X, ArrowUpRight } from 'lucide-react';
import { personalData } from '../data/portfolioData';

const navLinks = [
  { name: 'About', href: '#about' },
  { name: 'Interests', href: '#interests' },
  { name: 'Experience', href: '#experience' },
  { name: 'Projects', href: '#projects' },
  { name: 'Content Architecture', href: '#content-architecture' },
  { name: 'Education', href: '#education' },
  { name: 'Activities', href: '#activities' },
  { name: 'Contact', href: '#contact' },
];

export default function Navbar({ activeSection, onConnectClick }) {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 15);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const closeMenu = () => setIsOpen(false);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-200 ${
        isScrolled
          ? 'bg-navy-950/95 backdrop-blur-md border-b border-slate-800/80 py-3 shadow-sm'
          : 'bg-transparent py-4'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          
          {/* Brand */}
          <a
            href="#home"
            className="flex items-center gap-2.5 text-white font-bold text-base hover:text-cyanAccent-400 transition-colors"
          >
            <span className="w-8 h-8 rounded-lg bg-electric-600 flex items-center justify-center font-bold text-xs text-white">
              AK
            </span>
            <span className="tracking-tight">{personalData.name}</span>
          </a>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-1 xl:gap-2">
            {navLinks.map((link) => {
              const isActive = activeSection === link.href.substring(1);
              return (
                <a
                  key={link.name}
                  href={link.href}
                  className={`px-3 py-1.5 text-xs font-medium rounded-lg transition-colors ${
                    isActive
                      ? 'text-cyanAccent-400 bg-slate-900 border border-slate-800'
                      : 'text-slate-300 hover:text-white hover:bg-slate-900/60'
                  }`}
                >
                  {link.name}
                </a>
              );
            })}
          </nav>

          {/* Right Action & Mobile Toggle */}
          <div className="flex items-center gap-3">
            <a
              href="#contact"
              onClick={onConnectClick}
              className="px-4 py-2 text-xs font-semibold rounded-lg bg-electric-600 hover:bg-electric-500 text-white transition-colors inline-flex items-center gap-1"
            >
              <span>Let's Connect</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </a>

            <button
              type="button"
              onClick={() => setIsOpen(!isOpen)}
              className="p-1.5 rounded-lg text-slate-300 hover:text-white hover:bg-slate-800 lg:hidden"
              aria-label="Toggle Menu"
            >
              {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Drawer */}
      {isOpen && (
        <div className="lg:hidden bg-navy-950 border-b border-slate-800 px-4 pt-3 pb-5 shadow-xl">
          <nav className="flex flex-col space-y-1">
            {navLinks.map((link) => {
              const isActive = activeSection === link.href.substring(1);
              return (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={closeMenu}
                  className={`px-3 py-2 rounded-lg text-xs font-medium ${
                    isActive
                      ? 'text-cyanAccent-400 bg-slate-900'
                      : 'text-slate-300 hover:text-white'
                  }`}
                >
                  {link.name}
                </a>
              );
            })}
          </nav>
        </div>
      )}
    </header>
  );
}
