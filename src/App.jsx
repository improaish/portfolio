import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Expertise from './components/Expertise';
import Experience from './components/Experience';
import Projects from './components/Projects';
import ContentArchitecture from './components/ContentArchitecture';
import Education from './components/Education';
import Activities from './components/Activities';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Toast from './components/Toast';
import { personalData } from './data/portfolioData';

export default function App() {
  const [activeSection, setActiveSection] = useState('home');
  const [emailCopied, setEmailCopied] = useState(false);
  const [toastMessage, setToastMessage] = useState('');
  const [showToast, setShowToast] = useState(false);

  // IntersectionObserver to dynamically highlight the currently active section
  useEffect(() => {
    const sectionIds = [
      'home',
      'about',
      'interests',
      'experience',
      'projects',
      'content-architecture',
      'education',
      'activities',
      'contact'
    ];

    const observers = [];

    sectionIds.forEach((id) => {
      const el = document.getElementById(id);
      if (!el) return;

      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              setActiveSection(id);
            }
          });
        },
        {
          rootMargin: '-20% 0px -60% 0px',
          threshold: 0
        }
      );

      observer.observe(el);
      observers.push(observer);
    });

    return () => {
      observers.forEach((obs) => obs.disconnect());
    };
  }, []);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(personalData.email).then(() => {
      setEmailCopied(true);
      setToastMessage(`Copied to clipboard: ${personalData.email}`);
      setShowToast(true);

      setTimeout(() => {
        setEmailCopied(false);
      }, 3000);

      setTimeout(() => {
        setShowToast(false);
      }, 4000);
    }).catch(() => {
      setToastMessage(`Email: ${personalData.email}`);
      setShowToast(true);
    });
  };

  return (
    <div className="min-h-screen bg-navy-950 text-slate-100 flex flex-col selection:bg-electric-600 selection:text-white">
      {/* Sticky Navigation */}
      <Navbar
        activeSection={activeSection}
        onConnectClick={() => setActiveSection('contact')}
      />

      {/* Main Content */}
      <main className="flex-grow">
        <Hero onCopyEmail={handleCopyEmail} emailCopied={emailCopied} />
        <About />
        <Expertise />
        <Experience />
        <Projects />
        <ContentArchitecture />
        <Education />
        <Activities />
        <Contact onCopyEmail={handleCopyEmail} emailCopied={emailCopied} />
      </main>

      {/* Footer */}
      <Footer />

      {/* Toast Feedback */}
      <Toast
        message={toastMessage}
        isVisible={showToast}
        onClose={() => setShowToast(false)}
      />
    </div>
  );
}
