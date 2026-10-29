import React from 'react';
import bootstrap1 from './Multimedia/Bootstrap1.png';
import js1 from './Multimedia/Javascript1.png';
import js2 from './Multimedia/Javascript2.png';
import resumeBuilder from './Multimedia/ResumeBuilder.png';

const projects = [
  {
    name: 'Restaurant Template',
    description:
      'A static, responsive restaurant landing page built with Bootstrap. Demonstrates effective use of the grid system, carousels, navigation bars, and cards to create a professional, visually appealing layout.',
    image: bootstrap1,
    tech: ['Bootstrap', 'HTML5', 'CSS3'],
    liveUrl: 'https://samasya-ayyappan.github.io/FoodHut-Bootstrap/',
    repoUrl: 'https://github.com/Samasya-Ayyappan/FoodHut-Bootstrap',
  },
  {
    name: 'Analog & Digital Clock',
    description:
      'A dynamic real-time clock application with both analog and digital displays updating every second. Demonstrates DOM manipulation, CSS transforms, and time-based JavaScript functionality.',
    image: js1,
    tech: ['JavaScript', 'HTML5', 'CSS3'],
    liveUrl: 'https://samasya-ayyappan.github.io/clock/',
    repoUrl: 'https://github.com/Samasya-Ayyappan/clock',
  },
  {
    name: 'Heart Mouse Effect',
    description:
      'An interactive web page featuring animated heart effects that respond to user interactions. Showcases JavaScript event handling and CSS animations to create an engaging visual experience.',
    image: js2,
    tech: ['JavaScript', 'HTML5', 'CSS3'],
    liveUrl: 'https://samasya-ayyappan.github.io/HeartEffects/',
    repoUrl: 'https://github.com/Samasya-Ayyappan/HeartEffects',
  },
  {
    name: 'Resume Builder',
    description:
      'A Next.js resume builder for freshers and experienced engineers. It highlights ATS-focused resume creation with curated templates, role-specific schemas, a real-time split preview, private browser-based saving, and instant PDF downloads without registration.',
    image: resumeBuilder,
    imageFit: 'full',
    tech: ['Next.js'],
    liveUrl: 'https://samasya-ayyappan.github.io/Resume-builder/',
    repoUrl: 'https://github.com/Samasya-Ayyappan/Resume-builder',
  },
];

function Projects() {
  return (
    <section className="section" id="projects" aria-labelledby="projects-title">
      <div className="container">
        <div className="section-header">
          <p className="section-label">Projects</p>
          <h2 className="section-title" id="projects-title">Selected work</h2>
          <span className="section-divider" aria-hidden="true"></span>
        </div>

        <div className="projects__grid">
          {projects.map((project, idx) => (
            <article className="project-card" key={idx}>
              {project.image && (
                <img
                  src={project.image}
                  alt={`${project.name} screenshot`}
                  className={`project-card__image${project.imageFit ? ` project-card__image--${project.imageFit}` : ''}`}
                  loading="lazy"
                />
              )}

              <div className="project-card__header">
                <h3 className="project-card__name">{project.name}</h3>
                <div className="project-card__links">
                  {project.liveUrl && (
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="project-card__link"
                      aria-label={`Live demo of ${project.name}`}
                    >
                      <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                        <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" /><polyline points="15 3 21 3 21 9" /><line x1="10" y1="14" x2="21" y2="3" />
                      </svg>
                      Live
                    </a>
                  )}
                  {project.repoUrl && (
                    <a
                      href={project.repoUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="project-card__link"
                      aria-label={`Source code for ${project.name}`}
                    >
                      <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                        <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" />
                      </svg>
                      Code
                    </a>
                  )}
                </div>
              </div>

              {project.description && <p className="project-card__desc">{project.description}</p>}

              {project.tech.length > 0 && (
                <div className="project-card__tech">
                  {project.tech.map((t) => (
                    <span className="project-card__tag" key={t}>{t}</span>
                  ))}
                </div>
              )}
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects;
