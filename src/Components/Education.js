import React from 'react';

const educationItems = [
  {
    type: 'Degree',
    degree: 'Bachelor of Engineering',
    field: 'Electronics and Communication Engineering',
    institution: 'KIT — KalaignarKarunanidhi Institute of Technology',
    period: '2017 — 2021',
    grade: 'CGPA: 7.7',
  },
  {
    type: 'Certification',
    degree: 'Honours Diploma in Computer Application (HDCA)',
    field: 'Programming, Web Dev & Database Management',
    institution: 'CSC Computer Education',
    period: 'Jul 2023 — Jul 2024',
    grade: null,
  },
];

function Education() {
  return (
    <section className="section" id="education" aria-labelledby="edu-title">
      <div className="container">
        <div className="section-header">
          <p className="section-label">Education</p>
          <h2 className="section-title" id="edu-title">Academic background</h2>
          <span className="section-divider" aria-hidden="true"></span>
        </div>

        <div className="education__grid">
          {educationItems.map((edu, idx) => (
            <article className="edu-card" key={idx}>
              <span className="edu-card__type">{edu.type}</span>
              <h3 className="edu-card__degree">{edu.degree}</h3>
              <p className="edu-card__field">{edu.field}</p>
              <p className="edu-card__institution">{edu.institution}</p>
              <div className="edu-card__meta">
                <span>{edu.period}</span>
                {edu.grade && <span>{edu.grade}</span>}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Education;
