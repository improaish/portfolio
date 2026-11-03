import React, { useState } from 'react';
import { Mail, MapPin, Send, Copy, Check, ArrowUpRight } from 'lucide-react';
import { Linkedin, Github, TwitterX, Instagram } from './BrandIcons';
import { contactData, personalData } from '../data/portfolioData';

export default function Contact({ onCopyEmail, emailCopied }) {
  const { socials } = personalData;
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    const subject = encodeURIComponent(`Message from ${formData.name || 'Visitor'} via Portfolio`);
    const body = encodeURIComponent(
      `Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`
    );
    window.location.href = `mailto:${contactData.email}?subject=${subject}&body=${body}`;
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 4000);
  };

  return (
    <section id="contact" className="py-20 lg:py-24 border-t border-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight mb-3">
            {contactData.title}
          </h2>
          <p className="text-slate-300 text-base leading-relaxed">
            {contactData.description}
          </p>
        </div>

        {/* 2-Column Clean Contact Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Column: Direct Links & Socials (@improaish) */}
          <div className="lg:col-span-5 space-y-4">
            
            {/* Email Card */}
            <div className="p-5 rounded-xl bg-slate-900/60 border border-slate-800 flex items-center justify-between">
              <div>
                <div className="text-xs uppercase tracking-wider text-slate-400 font-medium mb-1">
                  Email
                </div>
                <a
                  href={`mailto:${contactData.email}`}
                  className="text-base font-semibold text-white hover:text-cyanAccent-400 transition-colors"
                >
                  {contactData.email}
                </a>
              </div>
              <button
                type="button"
                onClick={onCopyEmail}
                className="p-2 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-300 hover:text-white transition-colors"
                title="Copy Email"
              >
                {emailCopied ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4" />}
              </button>
            </div>

            {/* Social Channels List with @improaish */}
            <div className="p-5 rounded-xl bg-slate-900/60 border border-slate-800 space-y-3">
              <div className="text-xs uppercase tracking-wider text-slate-400 font-medium mb-2">
                Social Profiles (@improaish)
              </div>

              {/* LinkedIn */}
              <a
                href={socials.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-between py-2 text-sm text-slate-300 hover:text-white transition-colors group"
              >
                <div className="flex items-center gap-3">
                  <Linkedin className="w-4 h-4 text-blue-400" />
                  <span>LinkedIn</span>
                </div>
                <span className="text-xs text-slate-400 group-hover:text-blue-400 flex items-center gap-1 font-mono">
                  in/improaish
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </span>
              </a>

              {/* GitHub */}
              <a
                href={socials.github}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-between py-2 text-sm text-slate-300 hover:text-white transition-colors group border-t border-slate-800/60"
              >
                <div className="flex items-center gap-3">
                  <Github className="w-4 h-4 text-slate-300" />
                  <span>GitHub</span>
                </div>
                <span className="text-xs text-slate-400 group-hover:text-white flex items-center gap-1 font-mono">
                  @improaish
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </span>
              </a>

              {/* X / Twitter */}
              <a
                href={socials.x}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-between py-2 text-sm text-slate-300 hover:text-white transition-colors group border-t border-slate-800/60"
              >
                <div className="flex items-center gap-3">
                  <TwitterX className="w-3.5 h-3.5 text-sky-400" />
                  <span>X (Twitter)</span>
                </div>
                <span className="text-xs text-slate-400 group-hover:text-sky-400 flex items-center gap-1 font-mono">
                  @improaish
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </span>
              </a>

              {/* Instagram */}
              <a
                href={socials.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-between py-2 text-sm text-slate-300 hover:text-white transition-colors group border-t border-slate-800/60"
              >
                <div className="flex items-center gap-3">
                  <Instagram className="w-4 h-4 text-pink-400" />
                  <span>Instagram</span>
                </div>
                <span className="text-xs text-slate-400 group-hover:text-pink-400 flex items-center gap-1 font-mono">
                  @improaish
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </span>
              </a>
            </div>

            {/* Location */}
            <div className="p-4 rounded-xl bg-slate-900/40 border border-slate-800/60 flex items-center gap-3 text-xs text-slate-400">
              <MapPin className="w-4 h-4 text-rose-400 shrink-0" />
              <span>Location: {contactData.location}</span>
            </div>

          </div>

          {/* Right Column: Clean Message Form */}
          <div className="lg:col-span-7">
            <div className="p-6 sm:p-8 rounded-xl bg-slate-900/60 border border-slate-800">
              <h3 className="text-lg font-bold text-white mb-4">
                Send a Message
              </h3>

              {submitted && (
                <div className="mb-4 p-3 rounded-lg bg-emerald-950 border border-emerald-500/40 text-emerald-300 text-xs flex items-center gap-2">
                  <Check className="w-4 h-4 shrink-0" />
                  <span>Launching your email client. Thank you!</span>
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label htmlFor="name" className="block text-xs text-slate-300 font-medium mb-1">
                    Your Name
                  </label>
                  <input
                    id="name"
                    type="text"
                    required
                    placeholder="Enter your name"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-lg bg-slate-950 border border-slate-800 text-white text-sm focus:border-cyanAccent-400 focus:outline-none"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-xs text-slate-300 font-medium mb-1">
                    Your Email
                  </label>
                  <input
                    id="email"
                    type="email"
                    required
                    placeholder="name@company.com"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-lg bg-slate-950 border border-slate-800 text-white text-sm focus:border-cyanAccent-400 focus:outline-none"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-xs text-slate-300 font-medium mb-1">
                    Message
                  </label>
                  <textarea
                    id="message"
                    rows={4}
                    required
                    placeholder="Write your message here..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-lg bg-slate-950 border border-slate-800 text-white text-sm focus:border-cyanAccent-400 focus:outline-none resize-none"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full py-3 rounded-lg bg-electric-600 hover:bg-electric-500 text-white font-semibold text-sm transition-colors flex items-center justify-center gap-2"
                >
                  <Send className="w-4 h-4" />
                  <span>Send Message</span>
                </button>
              </form>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
