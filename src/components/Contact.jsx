import React, { useState } from 'react';
import {
  Mail,
  MapPin,
  Send,
  Copy,
  Check,
  ArrowUpRight,
  Sparkles,
  MessageSquare
} from 'lucide-react';
import { Linkedin } from './BrandIcons';
import { contactData, personalData } from '../data/portfolioData';

export default function Contact({ onCopyEmail, emailCopied }) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Prepare mailto link with encoded parameters
    const subject = encodeURIComponent(
      formData.subject || `Opportunity / Connection Inquiry from ${formData.name || 'Recruiter'}`
    );
    const body = encodeURIComponent(
      `Hello Aishwarya,\n\nName: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}\n`
    );
    window.location.href = `mailto:${contactData.email}?subject=${subject}&body=${body}`;
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 5000);
  };

  return (
    <section id="contact" className="py-20 lg:py-28 relative overflow-hidden">
      {/* Background radial glow */}
      <div className="absolute bottom-0 right-1/4 w-[500px] h-[500px] bg-electric-600/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-electric-950/80 border border-electric-500/30 text-xs font-semibold text-cyanAccent-300 uppercase tracking-wider mb-3">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Direct Outreach</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight mb-4">
            {contactData.title}
          </h2>
          <p className="text-slate-300 text-base sm:text-lg leading-relaxed">
            {contactData.description}
          </p>
          <div className="h-1 w-20 bg-gradient-to-r from-electric-500 to-cyanAccent-400 rounded-full mx-auto mt-4" />
        </div>

        {/* Grid: Contact Information & Interactive Form */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-start">
          
          {/* Left Side: Contact Information & Action Cards (5 Cols) */}
          <div className="lg:col-span-5 space-y-6">
            
            {/* Direct Email Card */}
            <div className="glass-card p-6 sm:p-7 rounded-2xl border border-slate-800/90 relative group">
              <div className="flex items-start justify-between gap-4">
                <div className="flex items-start gap-4">
                  <div className="p-3.5 rounded-xl bg-electric-950/90 border border-electric-500/30 text-cyanAccent-400 group-hover:scale-105 transition-transform">
                    <Mail className="w-6 h-6" />
                  </div>
                  <div>
                    <div className="text-xs uppercase tracking-wider font-semibold text-slate-400 mb-1">
                      Email Address
                    </div>
                    <a
                      href={`mailto:${contactData.email}`}
                      className="text-base sm:text-lg font-bold text-white hover:text-cyanAccent-300 transition-colors break-all"
                    >
                      {contactData.email}
                    </a>
                    <div className="text-xs text-slate-400 mt-1">
                      Click to launch your default mail client
                    </div>
                  </div>
                </div>

                {/* Copy Button */}
                <button
                  type="button"
                  onClick={onCopyEmail}
                  className="p-2.5 rounded-lg bg-slate-900 border border-slate-800 hover:border-slate-700 text-slate-400 hover:text-white transition-colors shrink-0"
                  title="Copy email address"
                  aria-label="Copy email address"
                >
                  {emailCopied ? (
                    <Check className="w-4 h-4 text-emerald-400" />
                  ) : (
                    <Copy className="w-4 h-4" />
                  )}
                </button>
              </div>

              <div className="mt-5 pt-4 border-t border-slate-800 flex items-center justify-between">
                <a
                  href={`mailto:${contactData.email}`}
                  className="inline-flex items-center gap-1.5 text-xs font-semibold text-cyanAccent-400 hover:text-cyanAccent-300"
                >
                  <span>Send Direct Email</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </a>
                <span className="text-xs text-slate-400">Response within 24h</span>
              </div>
            </div>

            {/* LinkedIn Card */}
            <div className="glass-card p-6 sm:p-7 rounded-2xl border border-slate-800/90 relative group">
              <div className="flex items-start justify-between gap-4">
                <div className="flex items-start gap-4">
                  <div className="p-3.5 rounded-xl bg-blue-950/80 border border-blue-500/30 text-blue-400 group-hover:scale-105 transition-transform">
                    <Linkedin className="w-6 h-6" />
                  </div>
                  <div>
                    <div className="text-xs uppercase tracking-wider font-semibold text-slate-400 mb-1">
                      LinkedIn Network
                    </div>
                    <div className="text-base sm:text-lg font-bold text-white">
                      in/improaish
                    </div>
                    <div className="text-xs text-slate-400 mt-1">
                      Open to professional connections and discussions
                    </div>
                  </div>
                </div>

                <a
                  href={contactData.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2.5 rounded-lg bg-slate-900 border border-slate-800 hover:border-blue-500/50 text-slate-400 hover:text-white transition-colors shrink-0"
                  aria-label="Open LinkedIn profile in new tab"
                >
                  <ArrowUpRight className="w-4 h-4 text-blue-400" />
                </a>
              </div>

              <div className="mt-5 pt-4 border-t border-slate-800 flex items-center justify-between">
                <a
                  href={contactData.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-xs font-semibold text-blue-400 hover:text-blue-300"
                >
                  <span>View LinkedIn Profile</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </a>
                <span className="text-xs text-slate-400">Verified Profile</span>
              </div>
            </div>

            {/* Location Card */}
            <div className="glass-card p-5 rounded-2xl border border-slate-800/90 flex items-center gap-4">
              <div className="p-3 rounded-xl bg-slate-900 border border-slate-800 text-slate-400">
                <MapPin className="w-5 h-5 text-rose-400" />
              </div>
              <div>
                <div className="text-xs uppercase tracking-wider font-semibold text-slate-400">
                  Location &amp; Relocation
                </div>
                <div className="text-sm font-bold text-white">
                  {contactData.location} &bull; Open to On-site / Remote / Hybrid
                </div>
              </div>
            </div>

          </div>

          {/* Right Side: Quick Message Composer (7 Cols) */}
          <div className="lg:col-span-7">
            <div className="glass-card p-7 sm:p-9 rounded-3xl border border-slate-800/90 relative">
              <div className="flex items-center gap-3 mb-6">
                <div className="p-2.5 rounded-xl bg-electric-950 border border-electric-500/30 text-cyanAccent-400">
                  <MessageSquare className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white">
                    Send a Message
                  </h3>
                  <p className="text-xs text-slate-400">
                    Fill in your details below to start a conversation directly.
                  </p>
                </div>
              </div>

              {submitted && (
                <div className="mb-6 p-4 rounded-xl bg-emerald-950/80 border border-emerald-500/40 text-emerald-200 text-sm flex items-center gap-3">
                  <Check className="w-5 h-5 text-emerald-400 shrink-0" />
                  <span>Preparing your email client. Thank you for reaching out!</span>
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label
                      htmlFor="contact-name"
                      className="block text-xs font-semibold text-slate-300 mb-1.5"
                    >
                      Your Name
                    </label>
                    <input
                      id="contact-name"
                      type="text"
                      required
                      placeholder="e.g. Alex Johnson"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-slate-900/90 border border-slate-800 focus:border-cyanAccent-400 focus:outline-none focus:ring-1 focus:ring-cyanAccent-400 text-white text-sm placeholder-slate-400 transition-colors"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="contact-email"
                      className="block text-xs font-semibold text-slate-300 mb-1.5"
                    >
                      Your Email
                    </label>
                    <input
                      id="contact-email"
                      type="email"
                      required
                      placeholder="e.g. recruiter@company.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-slate-900/90 border border-slate-800 focus:border-cyanAccent-400 focus:outline-none focus:ring-1 focus:ring-cyanAccent-400 text-white text-sm placeholder-slate-400 transition-colors"
                    />
                  </div>
                </div>

                <div>
                  <label
                    htmlFor="contact-subject"
                    className="block text-xs font-semibold text-slate-300 mb-1.5"
                  >
                    Subject
                  </label>
                  <input
                    id="contact-subject"
                    type="text"
                    placeholder="e.g. Early Career Opportunity / EdTech Discussion"
                    value={formData.subject}
                    onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl bg-slate-900/90 border border-slate-800 focus:border-cyanAccent-400 focus:outline-none focus:ring-1 focus:ring-cyanAccent-400 text-white text-sm placeholder-slate-400 transition-colors"
                  />
                </div>

                <div>
                  <label
                    htmlFor="contact-message"
                    className="block text-xs font-semibold text-slate-300 mb-1.5"
                  >
                    Message
                  </label>
                  <textarea
                    id="contact-message"
                    rows={4}
                    required
                    placeholder="Please share details about your role, collaboration or inquiry..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl bg-slate-900/90 border border-slate-800 focus:border-cyanAccent-400 focus:outline-none focus:ring-1 focus:ring-cyanAccent-400 text-white text-sm placeholder-slate-400 transition-colors resize-none"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-gradient-to-r from-electric-600 via-blue-600 to-cyanAccent-500 hover:from-electric-500 hover:to-cyanAccent-400 text-white font-semibold text-sm shadow-lg shadow-electric-600/30 hover:shadow-electric-600/50 hover:-translate-y-0.5 transition-all duration-200"
                >
                  <Send className="w-4 h-4" />
                  <span>Send Message via Email</span>
                </button>
              </form>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
