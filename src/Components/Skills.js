import React from "react";
import './Portfolio.css';
import './Skill.css';
import SkillCard from "./SkillCard";
import html from "./Icons/html5.svg";
import css from "./Icons/css3.svg";
import js from "./Icons/javascript.svg";
import ts from "./Icons/typescript.svg";
import react from "./Icons/react.svg";
import next from "./Icons/nextjs.svg";
import tailwind from "./Icons/tailwindcss.svg";
import bootstrap from "./Icons/bootstrap.svg";
import mysql from "./Icons/mysql.svg";
import mongodb from "./Icons/mongodb.svg";
import medusa from "./Icons/medusa.svg";
import payload from "./Icons/payload.svg";
import git from "./Icons/git.svg";
import docker from "./Icons/docker.svg";
import postman from "./Icons/postman.svg";
import vscode from "./Icons/vscode.svg";
import jira from "./Icons/jira.svg";
import bitbucket from "./Icons/bitbucket.svg";
import python from "./Icons/python.svg";
import c from "./Icons/c.svg";

const coreTechnologySkills = [
    { image: next, name: "Next.js" },
    { image: react, name: "React.js" },
    { image: ts, name: "TypeScript" },
    { image: js, name: "JavaScript" },
    { image: html, name: "HTML5" },
    { image: css, name: "CSS3" },
];

const frontendFrameworkSkills = [
    { image: tailwind, name: "Tailwind CSS" },
    { image: bootstrap, name: "Bootstrap" },
];
const programmingLanguageSkills = [
    {
        image: python,
        name: "Python",
    },
    {
        image: c,
        name: "C",
    },
];

const platformSkills = [
    {
        image: medusa,
        name: "Medusa",
    },
    {
        image: payload,
        name: "Payload CMS",
    },
];

const databaseSkills = [
    {
        image: mysql,
        name: "MySQL",
    },
    {
        image: mongodb,
        name: "MongoDB",
    },
];

const toolSkills = [
    { image: git, name: "Git" },
    { image: docker, name: "Docker" },
    { image: postman, name: "Postman" },
    { image: vscode, name: "VS Code" },
    { image: jira, name: "Jira" },
    { image: bitbucket, name: "Bitbucket" },
];

function Projects() {
    return (
        <section className="px-lg-5 p-4 container-fluid m-0 ">
            <main className="row container-fluid w-100 p-0 m-0 ">
                <div className="skills-content p-0">
                    <header>
                        <h1 className="display-3 fw-light py-2">
                            Technical Skills
                        </h1>
                    </header>

                    <section className="mb-2">

                        <h2 className="skill-category">
                            Core Technologies
                        </h2>

                        <div className="row mt-4">

                            {coreTechnologySkills.map((skill) => (
                                <SkillCard
                                    key={skill.name}
                                    image={skill.image}
                                    name={skill.name}
                                />
                            ))}

                        </div>

                    </section>

                    <section className="mb-2">

                        <h2 className="skill-category">
                            Frontend Frameworks & Styling
                        </h2>

                        <div className="row mt-4">

                            {frontendFrameworkSkills.map((skill) => (
                                <SkillCard
                                    key={skill.name}
                                    image={skill.image}
                                    name={skill.name}
                                />
                            ))}

                        </div>

                    </section>

                    <section className="mb-5">

                        <h2 className="skill-category">
                            State Management
                        </h2>

                        <div className="skill-tags">

                            <span className="skill-tag">
                                Redux Toolkit
                            </span>

                        </div>

                    </section>

                    <section className="mb-5">

                        <h2 className="skill-category">
                            Backend & APIs
                        </h2>

                        <div className="skill-tags">

                            <span className="skill-tag">
                                REST APIs
                            </span>

                            <span className="skill-tag">
                                Go
                            </span>

                            <span className="skill-tag">
                                WebSockets
                            </span>

                        </div>

                    </section>

                    <section className="mb-2">

                        <h2 className="skill-category">
                            Databases
                        </h2>

                        <div className="row mt-4">

                            {databaseSkills.map((skill) => (
                                <SkillCard
                                    key={skill.name}
                                    image={skill.image}
                                    name={skill.name}
                                />
                            ))}

                        </div>

                    </section>

                    <section className="mb-2">

                        <h2 className="skill-category">
                            Platforms & Services
                        </h2>

                        <div className="row mt-4">

                            {platformSkills.map((skill) => (
                                <SkillCard
                                    key={skill.name}
                                    image={skill.image}
                                    name={skill.name}
                                />
                            ))}

                        </div>

                    </section>

                    <section className="mb-2">

                        <h2 className="skill-category">
                            Development Tools
                        </h2>

                        <div className="row mt-4">

                            {toolSkills.map((skill) => (
                                <SkillCard
                                    key={skill.name}
                                    image={skill.image}
                                    name={skill.name}
                                />
                            ))}

                        </div>

                    </section>

                    <section className="mb-2">

                        <h2 className="skill-category">
                            Programming Languages
                        </h2>

                        <div className="row mt-4">

                            {programmingLanguageSkills.map((skill) => (
                                <SkillCard
                                    key={skill.name}
                                    image={skill.image}
                                    name={skill.name}
                                />
                            ))}

                        </div>

                    </section>

                    <section className="mb-4">

                        <h2 className="skill-category">
                            Professional Skills
                        </h2>

                        <div className="skill-tags">

                            <span className="skill-tag">
                                Problem Solving
                            </span>

                            <span className="skill-tag">
                                Debugging
                            </span>

                            <span className="skill-tag">
                                API Integration
                            </span>

                            <span className="skill-tag">
                                Team Collaboration
                            </span>

                            <span className="skill-tag">
                                Agile Development
                            </span>

                            <span className="skill-tag">
                                Adaptability
                            </span>

                        </div>

                    </section>
                </div>
                <header className="p-0" >
                    <h1 className="display-3 fw-light py-4 px-0">Projects</h1>
                </header>
                <div className="row container-fluid w-100 m-0 p-0">
                    <div className="col-12 col-lg-4 p-0">
                        <div className="container-fluid p-0 p-lg-1">
                            <div className="card my-4 p-3 text-light">
                                <a href="https://samasya-ayyappan.github.io/FoodHut-Bootstrap/" target="_blank" rel="noopener noreferrer" className=" card-img-top">
                                    <img src={require('./Multimedia/Bootstrap1.png')} alt="Foodhut_Image" className="w-100" />
                                </a>
                                <h3 className="card-title my-4">Restaurant Template</h3>
                                <p className="card-body text-justify p-0 m-0">
                                    The FoodHut Bootstrap project is a static, responsive webpage created using the Bootstrap framework. The project highlights the effective use of Bootstrap's grid system and pre-built components, such as carousels, navigation bars, and cards, to achieve a visually appealing layout. This project demonstrates my ability to design professional, responsive web pages efficiently.
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="col-12 col-lg-4 p-0">
                        <div className="container-fluid p-0 p-lg-1" >
                            <div className="card my-4 p-3 text-light">
                                <a href="https://samasya-ayyappan.github.io/clock/" target="_blank" rel="noopener noreferrer" className=" card-img-top">
                                    <img src={require('./Multimedia/Javascript1.png')} alt="Clock_Image" className="w-100" />
                                </a>
                                <h3 className="card-title my-4">Analog & Digital Clock</h3>
                                <p className="card-body text-justify p-0 m-0">
                                    The JavaScript Clock project is a dynamic real-time clock application developed using JavaScript, HTML5, and CSS3. It displays the current time through both analog and digital clocks with live updates every second, demonstrating DOM manipulation and time-based functionality. Highlights my ability to build interactive and responsive web applications.
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="col-12 col-lg-4 p-0">
                        <div className="container-fluid p-0 p-lg-1" >
                            <div className="card my-4 p-3 text-light">
                                <a href="https://samasya-ayyappan.github.io/HeartEffects/" target="_blank" rel="noopener noreferrer" className=" card-img-top">
                                    <img src={require('./Multimedia/Javascript2.png')} alt="HeartEffect_Image" className="w-100" />
                                </a>
                                <h3 className="card-title my-4">Mouse Event</h3>
                                <p className="card-body text-justify p-0 m-0">
                                    The Heart Effects project is an interactive web page developed using HTML5, CSS3, and JavaScript. It features animated heart effects that respond to user interactions, showcasing the use of JavaScript event handling and CSS animations to create an engaging visual experience. This project reflects my ability to combine creativity with frontend to build interactive user interfaces. </p>
                            </div>
                        </div>
                    </div>
                </div>
            </main >

        </section >
    )
}

export default Projects;