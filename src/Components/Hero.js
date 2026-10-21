import React from 'react';
import Resume from './Multimedia/Samasya Ayyappan - Resume(2026).pdf';
import profilePhoto from './Multimedia/IMG_20240330_140145.jpg';

function Hero() {
  return (
    <section className="hero" id="hero" aria-label="Introduction">
      <div className="container">
        <div className="hero__inner">
          {/* Text column */}
          <div>
            <div className="hero__label" aria-hidden="true">
              <span className="hero__label-dot"></span>
              Available for opportunities
            </div>

            <h1 className="hero__name">Samasya T A</h1>

            <p className="hero__title">
              Software Development Engineer | Frontend Developer
            </p>

            <p className="hero__desc">
              Specializing in Next.js, React.js, TypeScript, and scalable web applications. I build responsive, performant products that deliver real business value.
            </p>

            <div className="hero__actions">
              <a href="#contact" className="btn-primary" onClick={(e) => smoothScroll(e, '#contact')}>
                Get in touch
              </a>
              <a
                href={Resume}
                download="Samasya-T-A-Resume.pdf"
                className="btn-outline"
              >
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="7 10 12 15 17 10"/><line x1="12" y1="15" x2="12" y2="3"/>
                </svg>
                Download resume
              </a>
              <a href="#experience" className="btn-outline" onClick={(e) => smoothScroll(e, '#experience')}>
                View work
              </a>
            </div>

            <div className="hero__social">
              <a
                href="https://www.linkedin.com/in/samasyata/"
                target="_blank"
                rel="noopener noreferrer"
                className="hero__social-link"
                aria-label="LinkedIn profile"
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect x="2" y="9" width="4" height="12"/><circle cx="4" cy="4" r="2"/>
                </svg>
                LinkedIn
              </a>
              <a
                href="https://github.com/Samasya-Ayyappan"
                target="_blank"
                rel="noopener noreferrer"
                className="hero__social-link"
                aria-label="GitHub profile"
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"/>
                </svg>
                GitHub
              </a>
            </div>
          </div>

          {/* Image column */}
          <div className="hero__image-wrapper">
            <div className="hero__photo-frame">
              <img
                src={profilePhoto}
                alt="Samasya T A"
                className="hero__photo"
                width="280"
                height="280"
              />
              <span className="hero__photo-ring" aria-hidden="true"></span>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div style={{ position: 'absolute', bottom: '32px', left: '50%', transform: 'translateX(-50%)', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '6px' }}>
        <span style={{ fontSize: '11px', color: 'var(--text-muted)', fontFamily: 'var(--font-mono)', letterSpacing: '0.08em' }}>scroll</span>
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="var(--text-muted)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" style={{ animation: 'bounce 2s ease-in-out infinite' }}>
          <polyline points="6 9 12 15 18 9"/>
        </svg>
      </div>

      <style>{`
        @keyframes bounce {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(4px); }
        }
      `}</style>
    </section>
  );
}

function smoothScroll(e, href) {
  e.preventDefault();
  const target = document.querySelector(href);
  if (target) {
    const top = target.getBoundingClientRect().top + window.scrollY - 72;
    window.scrollTo({ top, behavior: 'smooth' });
  }
}

export default Hero;
