import React from 'react';

const experiences = [
  {
    period: 'Jul 2025 — Jul 2026',
    role: 'Software Development Engineer I',
    company: 'Cerebronix (Neosys Ventures LLP)',
    badge: 'Full-time',
    badgeClass: '',
    highlights: [
      'Developed and maintained modern web applications using Next.js, React.js, TypeScript, Tailwind CSS, Redux Toolkit, and REST APIs.',
      'Customized and extended Medusa-based e-commerce solutions by analyzing platform architecture, configuring plugins, customizing workflows and hooks, implementing backend extensions, and working with MySQL-backed data.',
      'Built frontend features for a customer communication platform, integrating Chatwoot with WebSockets to support real-time conversations.',
      'Created Payload CMS collections, implemented dynamic slug-based pages, and developed frontend components to render MongoDB-backed CMS-managed content.',
      'Enhanced Ory Kratos authentication by implementing backend hooks and collaborating with backend developers to strengthen secure authentication workflows.',
      'Implemented the WhatsApp Template Builder, internationalization (i18n), and guided product tours.',
      'Improved application performance through client-side caching, efficient state management, and API optimization techniques.',
      'Collaborated closely with backend developers on Go-based services while following Agile development practices using Git, Bitbucket, Jira, Docker, and Postman.',
      'Leveraged AI-assisted development tools, including OpenAI Codex and Antigravity, to accelerate development, debugging, and solution exploration.',
    ],
    tech: ['Next.js', 'React', 'TypeScript', 'Tailwind CSS', 'Redux Toolkit', 'Medusa', 'Payload CMS', 'WebSockets', 'Ory Kratos', 'REST APIs', 'Docker', 'Git'],
  },
  {
    period: 'Mar 2025 — Jun 2025',
    role: 'UI Developer Intern',
    company: 'Cerebronix (Neosys Ventures LLP)',
    badge: 'Internship',
    badgeClass: 'secondary',
    highlights: [
      'Developed responsive web interfaces using Next.js, React.js, TypeScript, HTML5, CSS3, and Tailwind CSS.',
      'Implemented REST API integrations, Redux Toolkit state management, reusable UI components, and dynamic routing.',
      'Developed real-time chat interfaces using WebSockets, integrated Chatwoot, and implemented frontend authentication workflows using Ory Kratos.',
      'Collaborated with senior developers on debugging, feature development, code reviews, and Agile software development workflows.',
    ],
    tech: ['Next.js', 'React', 'TypeScript', 'Tailwind CSS', 'Redux Toolkit', 'WebSockets', 'Chatwoot', 'Git'],
  },
  {
    period: 'Apr 2024 — Feb 2025',
    role: 'Teaching Faculty',
    company: 'CSC Computer Education',
    badge: 'Full-time',
    badgeClass: 'secondary',
    highlights: [
      'Taught Python, C, C++, JavaScript, HTML5, CSS3, React.js, Bootstrap, MySQL, MongoDB, Windows, and Microsoft Office.',
      'Designed and delivered practical lessons, guided students in programming concepts, database management, and project development while strengthening my own technical knowledge through continuous learning and mentoring.',
    ],
    tech: ['Python', 'C', 'JavaScript', 'React', 'MySQL', 'MongoDB'],
  },
  {
    period: 'Jan 2022 — Mar 2023',
    role: 'Executive Tutor',
    company: 'Focus Edumatics Pvt Ltd',
    badge: 'Full-time',
    badgeClass: 'secondary',
    highlights: [
      'Delivered high-quality Mathematics tutoring sessions tailored to students\u2019 learning needs while consistently achieving performance KPI goals.',
      'Collaborated with team leads to resolve session challenges, mentored new joiners, supported colleagues, and maintained high standards of teaching, productivity, and reporting accuracy.',
    ],
    tech: [],
  },
];

function Experience() {
  return (
    <section className="section exp" id="experience" aria-labelledby="exp-title">
      <div className="container">
        <div className="section-header">
          <p className="section-label">Experience</p>
          <h2 className="section-title" id="exp-title">Where I've worked</h2>
          <span className="section-divider" aria-hidden="true"></span>
        </div>

        <div className="exp__list">
          {experiences.map((exp, idx) => (
            <article className="exp__item" key={idx}>
              <div className="exp__period-col">
                <span className="exp__period">{exp.period}</span>
                <div>
                  <span className={`exp__role-badge${exp.badgeClass ? ` ${exp.badgeClass}` : ''}`}>
                    {exp.badge}
                  </span>
                </div>
              </div>

              <div>
                <h3 className="exp__role">{exp.role}</h3>
                <p className="exp__company">{exp.company}</p>

                <div className="exp__highlights">
                  {exp.highlights.map((h, i) => (
                    <div className="exp__highlight" key={i}>
                      <span className="exp__highlight-dot" aria-hidden="true"></span>
                      <span>{h}</span>
                    </div>
                  ))}
                </div>

                {exp.tech.length > 0 && (
                  <div className="exp__tech">
                    {exp.tech.map((t) => (
                      <span className="exp__tech-tag" key={t}>{t}</span>
                    ))}
                  </div>
                )}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Experience;
