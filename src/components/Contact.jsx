import React, { useState } from 'react';
import { Mail, MapPin, Send, Copy, Check, ArrowUpRight, Loader2, AlertCircle } from 'lucide-react';
import { Linkedin, Github, TwitterX, Instagram } from './BrandIcons';
import { contactData, personalData } from '../data/portfolioData';

export default function Contact({ onCopyEmail, emailCopied }) {
  const { socials } = personalData;
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [status, setStatus] = useState(null); // 'success' | 'error' | null
  const [statusMessage, setStatusMessage] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setStatus(null);

    try {
      // Direct submission via FormSubmit AJAX service to improaish@gmail.com
      const response = await fetch('https://formsubmit.co/ajax/improaish@gmail.com', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          message: formData.message,
          _subject: `New Portfolio Message from ${formData.name}`,
          _template: 'table'
        })
      });

      const result = await response.json();

      if (response.ok || result.success === 'true' || result.success === true) {
        setStatus('success');
        setStatusMessage('Your message was sent successfully! Aishwarya will get back to you soon.');
        setFormData({ name: '', email: '', message: '' });
      } else {
        throw new Error(result.message || 'Failed to deliver message.');
      }
    } catch (err) {
      console.warn('FormSubmit error or offline, fallback to mailto:', err);
      // Seamless mailto fallback
      const mailtoSubject = encodeURIComponent(`Message from ${formData.name} via Portfolio`);
      const mailtoBody = encodeURIComponent(`Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`);
      window.location.href = `mailto:${contactData.email}?subject=${mailtoSubject}&body=${mailtoBody}`;
      setStatus('success');
      setStatusMessage('Opening your email client to send your message directly.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-16 lg:py-20 border-t border-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-2xl mb-10">
          <h2 className="text-3xl font-bold text-white tracking-tight mb-2">
            {contactData.title}
          </h2>
          <p className="text-sm text-slate-400">
            {contactData.description}
          </p>
        </div>

        {/* 2-Column Clean Contact Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Column: Direct Links & Socials (@improaish) */}
          <div className="lg:col-span-5 space-y-4">
            
            {/* Email Card */}
            <div className="p-4 rounded-xl bg-slate-900/60 border border-slate-800 flex items-center justify-between">
              <div>
                <div className="text-[11px] uppercase tracking-wider text-slate-400 font-medium">
                  Direct Email
                </div>
                <a
                  href={`mailto:${contactData.email}`}
                  className="text-sm font-semibold text-white hover:text-cyanAccent-400 transition-colors"
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

            {/* Social Channels with @improaish */}
            <div className="p-4 rounded-xl bg-slate-900/60 border border-slate-800 space-y-2">
              <div className="text-[11px] uppercase tracking-wider text-slate-400 font-medium mb-1">
                Social Profiles (@improaish)
              </div>

              {/* LinkedIn */}
              <a
                href={socials.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-between py-1.5 text-xs text-slate-300 hover:text-white transition-colors"
              >
                <div className="flex items-center gap-2.5">
                  <Linkedin className="w-4 h-4 text-blue-400" />
                  <span>LinkedIn</span>
                </div>
                <span className="text-slate-400 font-mono text-[11px] flex items-center gap-1">
                  in/improaish
                  <ArrowUpRight className="w-3 h-3" />
                </span>
              </a>

              {/* GitHub */}
              <a
                href={socials.github}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-between py-1.5 text-xs text-slate-300 hover:text-white transition-colors border-t border-slate-800/60"
              >
                <div className="flex items-center gap-2.5">
                  <Github className="w-4 h-4 text-slate-300" />
                  <span>GitHub</span>
                </div>
                <span className="text-slate-400 font-mono text-[11px] flex items-center gap-1">
                  @improaish
                  <ArrowUpRight className="w-3 h-3" />
                </span>
              </a>

              {/* X / Twitter */}
              <a
                href={socials.x}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-between py-1.5 text-xs text-slate-300 hover:text-white transition-colors border-t border-slate-800/60"
              >
                <div className="flex items-center gap-2.5">
                  <TwitterX className="w-3.5 h-3.5 text-sky-400" />
                  <span>X (Twitter)</span>
                </div>
                <span className="text-slate-400 font-mono text-[11px] flex items-center gap-1">
                  @improaish
                  <ArrowUpRight className="w-3 h-3" />
                </span>
              </a>

              {/* Instagram */}
              <a
                href={socials.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-between py-1.5 text-xs text-slate-300 hover:text-white transition-colors border-t border-slate-800/60"
              >
                <div className="flex items-center gap-2.5">
                  <Instagram className="w-4 h-4 text-pink-400" />
                  <span>Instagram</span>
                </div>
                <span className="text-slate-400 font-mono text-[11px] flex items-center gap-1">
                  @improaish
                  <ArrowUpRight className="w-3 h-3" />
                </span>
              </a>
            </div>

            {/* Location */}
            <div className="p-3.5 rounded-xl bg-slate-900/40 border border-slate-800/60 flex items-center gap-2.5 text-xs text-slate-400">
              <MapPin className="w-3.5 h-3.5 text-rose-400 shrink-0" />
              <span>Location: {contactData.location}</span>
            </div>

          </div>

          {/* Right Column: Working Contact Form */}
          <div className="lg:col-span-7">
            <div className="p-5 sm:p-7 rounded-xl bg-slate-900/60 border border-slate-800">
              <h3 className="text-base font-bold text-white mb-4">
                Send a Message
              </h3>

              {status === 'success' && (
                <div className="mb-4 p-3 rounded-lg bg-emerald-950 border border-emerald-500/40 text-emerald-300 text-xs flex items-center gap-2">
                  <Check className="w-4 h-4 shrink-0 text-emerald-400" />
                  <span>{statusMessage}</span>
                </div>
              )}

              {status === 'error' && (
                <div className="mb-4 p-3 rounded-lg bg-rose-950 border border-rose-500/40 text-rose-300 text-xs flex items-center gap-2">
                  <AlertCircle className="w-4 h-4 shrink-0 text-rose-400" />
                  <span>{statusMessage}</span>
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-3.5">
                <div>
                  <label htmlFor="name" className="block text-xs text-slate-300 font-medium mb-1">
                    Your Name
                  </label>
                  <input
                    id="name"
                    name="name"
                    type="text"
                    required
                    placeholder="Enter your name"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full px-3 py-2 rounded-lg bg-slate-950 border border-slate-800 text-white text-xs focus:border-cyanAccent-400 focus:outline-none"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-xs text-slate-300 font-medium mb-1">
                    Your Email
                  </label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    required
                    placeholder="name@example.com"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full px-3 py-2 rounded-lg bg-slate-950 border border-slate-800 text-white text-xs focus:border-cyanAccent-400 focus:outline-none"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-xs text-slate-300 font-medium mb-1">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={4}
                    required
                    placeholder="Write your message here..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full px-3 py-2 rounded-lg bg-slate-950 border border-slate-800 text-white text-xs focus:border-cyanAccent-400 focus:outline-none resize-none"
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full py-2.5 rounded-lg bg-electric-600 hover:bg-electric-500 disabled:bg-electric-900 disabled:opacity-60 text-white font-semibold text-xs transition-colors flex items-center justify-center gap-2"
                >
                  {isSubmitting ? (
                    <>
                      <Loader2 className="w-3.5 h-3.5 animate-spin" />
                      <span>Sending message...</span>
                    </>
                  ) : (
                    <>
                      <Send className="w-3.5 h-3.5" />
                      <span>Send Message</span>
                    </>
                  )}
                </button>
              </form>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
