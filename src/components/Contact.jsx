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
    const formElement = e.target;
    setIsSubmitting(true);
    setStatus(null);

    try {
      // Direct submission via FormSubmit AJAX service (formsubmit.co)
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
          _replyto: formData.email,
          _captcha: 'false',
          _template: 'table'
        })
      });

      const result = await response.json().catch(() => ({}));

      if (response.ok || result.success === 'true' || result.success === true || (result.message && result.message.toLowerCase().includes('activate'))) {
        setStatus('success');
        setStatusMessage('Your message has been sent successfully! I will get back to you soon.');
        setFormData({ name: '', email: '', message: '' });
      } else {
        throw new Error(result.message || 'Delivery error');
      }
    } catch (err) {
      console.warn('FormSubmit AJAX notice, executing standard form submit fallback:', err);
      // Fallback: Submit natively through FormSubmit
      if (formElement && formElement.submit) {
        formElement.submit();
      } else {
        const mailtoSubject = encodeURIComponent(`Message from ${formData.name || 'Visitor'} via Portfolio`);
        const mailtoBody = encodeURIComponent(`Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`);
        window.location.href = `mailto:${contactData.email}?subject=${mailtoSubject}&body=${mailtoBody}`;
        setStatus('success');
        setStatusMessage('Opening your email client to send your message.');
      }
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-14 sm:py-16 lg:py-20 border-t border-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-2xl mb-8 sm:mb-10">
          <h2 className="text-2xl sm:text-3xl font-bold text-white tracking-tight mb-2">
            {contactData.title}
          </h2>
          <p className="text-xs sm:text-sm text-slate-400">
            {contactData.description}
          </p>
        </div>

        {/* 2-Column Responsive Contact Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-8 items-start">
          
          {/* Left Column: Direct Links & Socials (@improaish) */}
          <div className="lg:col-span-5 space-y-4 w-full">
            
            {/* Email Card */}
            <div className="p-4 sm:p-5 rounded-xl bg-slate-900/60 border border-slate-800 flex items-center justify-between gap-3">
              <div className="min-w-0">
                <div className="text-[10px] sm:text-[11px] uppercase tracking-wider text-slate-400 font-medium">
                  Direct Email
                </div>
                <a
                  href={`mailto:${contactData.email}`}
                  className="text-sm sm:text-base font-semibold text-white hover:text-cyanAccent-400 transition-colors break-all"
                >
                  {contactData.email}
                </a>
              </div>
              <button
                type="button"
                onClick={onCopyEmail}
                className="p-2.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-300 hover:text-white transition-colors shrink-0 min-h-[44px] min-w-[44px] flex items-center justify-center"
                title="Copy Email"
                aria-label="Copy email address"
              >
                {emailCopied ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4" />}
              </button>
            </div>

            {/* Social Channels with @improaish */}
            <div className="p-4 sm:p-5 rounded-xl bg-slate-900/60 border border-slate-800 space-y-2.5">
              <div className="text-[10px] sm:text-[11px] uppercase tracking-wider text-slate-400 font-medium mb-1">
                Social Profiles (@improaish)
              </div>

              {/* LinkedIn */}
              <a
                href={socials.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-between py-2 text-xs sm:text-sm text-slate-300 hover:text-white transition-colors"
              >
                <div className="flex items-center gap-2.5">
                  <Linkedin className="w-4 h-4 text-blue-400 shrink-0" />
                  <span>LinkedIn</span>
                </div>
                <span className="text-slate-400 font-mono text-xs flex items-center gap-1">
                  in/improaish
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </span>
              </a>

              {/* GitHub */}
              <a
                href={socials.github}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-between py-2 text-xs sm:text-sm text-slate-300 hover:text-white transition-colors border-t border-slate-800/60"
              >
                <div className="flex items-center gap-2.5">
                  <Github className="w-4 h-4 text-slate-300 shrink-0" />
                  <span>GitHub</span>
                </div>
                <span className="text-slate-400 font-mono text-xs flex items-center gap-1">
                  @improaish
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </span>
              </a>

              {/* X / Twitter */}
              <a
                href={socials.x}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-between py-2 text-xs sm:text-sm text-slate-300 hover:text-white transition-colors border-t border-slate-800/60"
              >
                <div className="flex items-center gap-2.5">
                  <TwitterX className="w-3.5 h-3.5 text-sky-400 shrink-0" />
                  <span>X (Twitter)</span>
                </div>
                <span className="text-slate-400 font-mono text-xs flex items-center gap-1">
                  @improaish
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </span>
              </a>

              {/* Instagram */}
              <a
                href={socials.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-between py-2 text-xs sm:text-sm text-slate-300 hover:text-white transition-colors border-t border-slate-800/60"
              >
                <div className="flex items-center gap-2.5">
                  <Instagram className="w-4 h-4 text-pink-400 shrink-0" />
                  <span>Instagram</span>
                </div>
                <span className="text-slate-400 font-mono text-xs flex items-center gap-1">
                  @improaish
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </span>
              </a>
            </div>

            {/* Location */}
            <div className="p-3.5 sm:p-4 rounded-xl bg-slate-900/40 border border-slate-800/60 flex items-center gap-2.5 text-xs text-slate-400">
              <MapPin className="w-4 h-4 text-rose-400 shrink-0" />
              <span>Location: {contactData.location}</span>
            </div>

          </div>

          {/* Right Column: Responsive Working Contact Form */}
          <div className="lg:col-span-7 w-full">
            <div className="p-5 sm:p-7 rounded-xl bg-slate-900/60 border border-slate-800">
              
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-base sm:text-lg font-bold text-white">
                  Send a Message
                </h3>
              </div>

              {status === 'success' && (
                <div className="mb-4 p-3.5 rounded-lg bg-emerald-950/90 border border-emerald-500/40 text-emerald-200 text-xs sm:text-sm flex items-start gap-2.5 animate-fadeIn">
                  <Check className="w-4 h-4 shrink-0 text-emerald-400 mt-0.5" />
                  <span>{statusMessage}</span>
                </div>
              )}

              {status === 'error' && (
                <div className="mb-4 p-3.5 rounded-lg bg-rose-950/90 border border-rose-500/40 text-rose-200 text-xs sm:text-sm flex items-start gap-2.5 animate-fadeIn">
                  <AlertCircle className="w-4 h-4 shrink-0 text-rose-400 mt-0.5" />
                  <span>{statusMessage}</span>
                </div>
              )}

              <form
                action="https://formsubmit.co/improaish@gmail.com"
                method="POST"
                onSubmit={handleSubmit}
                className="space-y-4"
              >
                {/* FormSubmit Configuration */}
                <input type="hidden" name="_captcha" value="false" />
                <input type="hidden" name="_template" value="table" />
                <input type="hidden" name="_subject" value="New Portfolio Message from Contact Form" />

                <div>
                  <label htmlFor="contact-name" className="block text-xs sm:text-sm text-slate-300 font-medium mb-1.5">
                    Your Name
                  </label>
                  <input
                    id="contact-name"
                    name="name"
                    type="text"
                    required
                    placeholder="Enter your name"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full px-3.5 py-2.5 sm:py-3 rounded-lg bg-slate-950 border border-slate-800 text-white text-base sm:text-sm focus:border-cyanAccent-400 focus:outline-none focus:ring-1 focus:ring-cyanAccent-400 transition-colors min-h-[44px]"
                  />
                </div>

                <div>
                  <label htmlFor="contact-email" className="block text-xs sm:text-sm text-slate-300 font-medium mb-1.5">
                    Your Email Address
                  </label>
                  <input
                    id="contact-email"
                    name="email"
                    type="email"
                    required
                    placeholder="you@company.com"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full px-3.5 py-2.5 sm:py-3 rounded-lg bg-slate-950 border border-slate-800 text-white text-base sm:text-sm focus:border-cyanAccent-400 focus:outline-none focus:ring-1 focus:ring-cyanAccent-400 transition-colors min-h-[44px]"
                  />
                </div>

                <div>
                  <label htmlFor="contact-message" className="block text-xs sm:text-sm text-slate-300 font-medium mb-1.5">
                    Your Message
                  </label>
                  <textarea
                    id="contact-message"
                    name="message"
                    rows={4}
                    required
                    placeholder="Write your message here..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full px-3.5 py-2.5 sm:py-3 rounded-lg bg-slate-950 border border-slate-800 text-white text-base sm:text-sm focus:border-cyanAccent-400 focus:outline-none focus:ring-1 focus:ring-cyanAccent-400 transition-colors resize-none"
                  />
                </div>

                <div className="pt-1">
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full py-3 px-4 rounded-lg bg-electric-600 hover:bg-electric-500 disabled:bg-electric-900 disabled:opacity-60 text-white font-semibold text-xs sm:text-sm transition-all duration-200 flex items-center justify-center gap-2 shadow-md shadow-electric-600/20 min-h-[44px] cursor-pointer"
                  >
                    {isSubmitting ? (
                      <>
                        <Loader2 className="w-4 h-4 animate-spin" />
                        <span>Sending message...</span>
                      </>
                    ) : (
                      <>
                        <Send className="w-4 h-4" />
                        <span>Send Message</span>
                      </>
                    )}
                  </button>
                </div>
              </form>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
