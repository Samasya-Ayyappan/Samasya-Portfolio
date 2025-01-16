import React from 'react';
function CareerEducation() {
  return (
    <section className="p-lg-5 container-fluid">
      <header>
        <h1 className="display-1 fw-light p-4">Work Experience</h1>
      </header>
      <main className="p-4 pt-0 row">
        <div className="col-12 ">
          <h3 className="">Internship – Tutor | Aug 2023 - Present</h3>
          <h4 className="fw-light">CSC Computer Education</h4>
          <h5 className="mt-4">Roles and Responsibilities</h5>
          <p>Enhancing my development knowledge by teaching students and actively engaging in the learning process - Strengthening my skills in programming and web technologies through self-learning and student interactions. - Building practical experience in various technologies like Python, C, MySQL, HTML5, CSS3, JavaScript, and MongoDB by applying them in real-world teaching scenarios.</p>
          <h5 className="mt-4">Achievements</h5>
          <p>Successfully developed a flexible and interactive webpage, showcasing my ability to create dynamic and user-friendly web interfaces.</p>
          <p className="mt-4">
            "This current internship at CSC Computer Education has been a truly fulfilling experience, allowing me to enhance my development skills while teaching various programming languages and technologies. I developed a deeper love for coding and programming, as I enjoyed applying my knowledge in real-world scenarios. Teaching and interacting with students has further inspired my passion for continuous learning and deepened my drive to excel in the field of programming."</p>
        </div>
        <div className="col-12 my-5">
          <h3 className="">Executive Tutor  Jan 2022 - Mar 2023</h3>
          <h4 className="fw-light">Focus Edumatics Pvt Ltd</h4>
          <h5 className="mt-4">Roles and Responsibilities</h5>
          <p>Delivered high-quality, error-free sessions tailored to students' understanding levels. - Addressed session challenges with guidance from team leads. - Guided co-workers in conducting quality sessions and accurate report filling. - Trained new joiners on session procedures and best practices. - Consistently met performance KPI goals</p>
          <h5 className="mt-4">Achievements</h5>
          <p>Achieved KPI targets regularly. - Improved productivity with efficient time management. -
            Maintained excellent attendance.</p>
          <p>
            "That was a great experience in working in that role that enhanced my typing speed and multitasking abilities while managing dual chat-based sessions. The collaborative teamwork was truly fulfilling, as guiding and supporting my colleagues led to our collective success. The pre-session video conferences ensured we were always aligned, allowing for seamless coordination and efficient session execution."
          </p>
        </div>

        <div className='mb-5'>
          <header>
          <div className="display-1 mb-4 col-12">Academic Qualification</div>
          </header>
          <div className="col-12 col-md-6 ">
            <h1 className="fw-light">Bachelor Degree</h1>
            <h3 className="">Electronics and Communication Engineering  - 2021</h3>
            <h4 className="fw-light">KIT-Kalaignarkarunanidhi Institute Of Technology</h4>
          </div>
          <p >
            "Over the course of my undergraduate degree, I took part in paper presentations, technical competitions, in-plant training on embedded systems, and internships, while also mentoring participants during events organized by our college, further enhancing my academic journey with practical, real-world experience."
          </p>
        </div>
        <div>
         <header>
         <div className="display-1 my-4 col-12">Certification</div>
         </header>
          <div className="col-12 ">
            <h3 className="">Honors Diploma In Computer Application - Programming  | July 2023 - July 2024</h3>
            <h4 className="fw-light">CSC Computer Education</h4>
          </div>

          <p className="my-4">
            "Over the course completion duration of the HDCA program, I developed a comprehensive understanding of key IT concepts, including programming, web development, and database management. The program covered subjects such as Python, C, C++, MySQL, HTML5, CSS3, JavaScript, and Microsoft Office, enriching my skills in front-end languages and programming tools, and providing me with a solid foundation to pursue a career in the technology sector."
          </p>
        </div>
      </main>
    </section >
  );
};

export default CareerEducation;
