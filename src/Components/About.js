import React from 'react';

function About() {
  return (
    <section className="section" id="about" aria-labelledby="about-title">
      <div className="container">
        <div className="about__inner">
          {/* Left aside — quick facts */}
          <aside className="about__aside">
            <div className="section-header">
              <p className="section-label">About</p>
              <h2 className="section-title" id="about-title">Background</h2>
              <span className="section-divider" aria-hidden="true"></span>
            </div>

            <div className="about__meta">
              <div className="about__meta-item">
                <span className="about__meta-label">Recent role</span>
                <span className="about__meta-value">Software Development Engineer I, Jul 2025 — Jul 2026</span>
              </div>
              <div className="about__meta-item">
                <span className="about__meta-label">Company</span>
                <span className="about__meta-value">Cerebronix (Neosys Ventures LLP)</span>
              </div>
              <div className="about__meta-item">
                <span className="about__meta-label">Specialization</span>
                <span className="about__meta-value accent">Frontend Engineering</span>
              </div>
              <div className="about__meta-item">
                <span className="about__meta-label">Location</span>
                <span className="about__meta-value">Tiruppur, India</span>
              </div>
              <div className="about__meta-item">
                <span className="about__meta-label">Education</span>
                <span className="about__meta-value">B.E. Electronics &amp; Communication</span>
              </div>
            </div>
          </aside>

          {/* Right column — narrative */}
          <div className="about__content">
            <p>
              A passionate <strong>Software Development Engineer</strong> with a strong foundation in <strong>frontend development</strong>, specializing in <strong>Next.js</strong>, <strong>React.js</strong>, <strong>TypeScript</strong>, and modern web technologies. I take pride in building <strong>responsive</strong>, <strong>scalable</strong>, and <strong>intuitive web applications</strong>, constantly refining my skills to create seamless digital experiences through clean, efficient, and maintainable solutions.
            </p>

            <p>
              My professional experience has strengthened my expertise in designing and developing
              <strong> scalable web applications</strong>, customizing
              <strong> Medusa</strong>-based e-commerce solutions, implementing secure
              authentication workflows with <strong>Ory Kratos</strong>, integrating
              <strong> REST APIs</strong>, and building
              <strong> real-time communication</strong> experiences powered by
              <strong> Chatwoot APIs</strong>, <strong>Reachat UI</strong>,
              and <strong>WebSockets</strong>.
            </p>

            <p>
              Working extensively with <strong>Next.js</strong> has given me a strong
              understanding of both <strong>server-side</strong> and
              <strong> client-side rendering</strong>, while implementing
              <strong> internationalization</strong>, application onboarding, and efficient
              <strong> state management</strong> has enhanced my ability to build intuitive,
              globally accessible, and maintainable applications.
            </p>

            <p>
              Beyond development, collaborating through
              <strong> Git-based workflows</strong>, working in
              <strong> Linux environments</strong>, and debugging complex application behavior
              have strengthened my <strong>problem-solving skills</strong> and deepened my
              understanding of modern software development. Every project has reinforced my
              appreciation for <strong>application architecture</strong> and my passion for
              building <strong>reliable</strong>, <strong>scalable</strong>, and
              <strong> impactful software solutions</strong>.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
