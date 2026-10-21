import React from 'react';

import html from './Icons/html5.svg';
import css from './Icons/css3.svg';
import js from './Icons/javascript.svg';
import ts from './Icons/typescript.svg';
import react from './Icons/react.svg';
import next from './Icons/nextjs.svg';
import tailwind from './Icons/tailwindcss.svg';
import bootstrap from './Icons/bootstrap.svg';
import mysql from './Icons/mysql.svg';
import mongodb from './Icons/mongodb.svg';
import medusa from './Icons/medusa.svg';
import payload from './Icons/payload.svg';
import git from './Icons/git.svg';
import docker from './Icons/docker.svg';
import postman from './Icons/postman.svg';
import vscode from './Icons/vscode.svg';
import jira from './Icons/jira.svg';
import bitbucket from './Icons/bitbucket.svg';
import python from './Icons/python.svg';
import c from './Icons/c.svg';

const skillGroups = [
  {
    title: 'Frontend Development',
    items: [
      { icon: next, label: 'Next.js' },
      { icon: react, label: 'React.js' },
      { icon: ts, label: 'TypeScript' },
      { icon: js, label: 'JavaScript' },
      { icon: html, label: 'HTML5' },
      { icon: css, label: 'CSS3' },
    ],
  },
  {
    title: 'Styling & Frameworks',
    items: [
      { icon: tailwind, label: 'Tailwind CSS' },
      { icon: bootstrap, label: 'Bootstrap' },
    ],
  },
  {
    title: 'State Management & APIs',
    items: [
      { label: 'Redux Toolkit' },
      { label: 'REST APIs' },
      { label: 'WebSockets' },
    ],
  },
  {
    title: 'Platforms & CMS',
    items: [
      { icon: medusa, label: 'Medusa' },
      { icon: payload, label: 'Payload CMS' },
    ],
  },
  {
    title: 'Databases & backend collaboration',
    items: [
      { icon: mysql, label: 'MySQL' },
      { icon: mongodb, label: 'MongoDB' },
    ],
  },
  {
    title: 'Development Tools',
    items: [
      { icon: git, label: 'Git' },
      { icon: docker, label: 'Docker' },
      { icon: postman, label: 'Postman' },
      { icon: vscode, label: 'VS Code' },
      { icon: jira, label: 'Jira' },
      { icon: bitbucket, label: 'Bitbucket' },
    ],
  },
  {
    title: 'Programming Languages',
    items: [
      { icon: python, label: 'Python' },
      { icon: c, label: 'C' },
      { label: 'Go (Golang)' },
    ],
  },
  {
    title: 'Professional Skills',
    items: ['Problem Solving', 'Debugging', 'API Integration', 'Team Collaboration', 'Agile Development', 'Adaptability']
      .map((label) => ({ label })),
  },
];

function Skills() {
  return (
    <section className="section skills" id="skills" aria-labelledby="skills-title">
      <div className="container">
        <div className="section-header">
          <p className="section-label">Skills</p>
          <h2 className="section-title" id="skills-title">Technologies & tools</h2>
          <span className="section-divider" aria-hidden="true"></span>
        </div>

        <div className="skills__grid">
          {skillGroups.map((group) => (
            <div className="skill-group" key={group.title}>
              <h3 className="skill-group__title">{group.title}</h3>
              <div className="skill-group__items">
                {group.items.map((item) => (
                  <span className={item.icon ? 'skill-item' : 'skill-text-item'} key={item.label}>
                    {item.icon && <img src={item.icon} alt="" aria-hidden="true" />}
                    {item.label}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Skills;
