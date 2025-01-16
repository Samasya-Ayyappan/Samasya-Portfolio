import React from "react";
import './Portfolio.css';
function Projects() {
    return (
        <section className="p-lg-5 container-fluid m-0 p-0">
            <main className="row container-fluid w-100  p-4 pt-0 m-0 ">
                <header >
                    <h1 className="display-1 fw-light py-4 m-0">Skills</h1>
                </header>
                <h1>Core Technologies</h1>
                <div className="row py-4">
                    <div className="col-6 col-md-3">
                        <div className="col-6 mx-auto">
                            <img src={require('./Multimedia/HTML5.png')} alt="HTML5 Icon" className="w-100 m-3 mb-5" />
                        </div>
                    </div>
                    <div className="col-6 col-md-3">
                        <div className="col-6 mx-auto">
                            <img src={require('./Multimedia/CSS3.png')} alt="CSS3 Icon" className="w-100 m-3 mb-5" />
                        </div>
                    </div>
                    <div className="col-6 col-md-3">
                        <div className="col-6 mx-auto">
                            <img src={require('./Multimedia/JavaScript.png')} alt="JAVASCRIPT Icon" className="w-100 m-3 mb-5" />
                        </div>
                    </div>
                    <div className="col-6 col-md-3">
                        <div className="col-6 mx-auto">
                            <img src={require('./Multimedia/C.png')} alt="C Icon" className="w-100 mb-5 m-3" />
                        </div>
                    </div>
                    <div className="col-6 col-md-3">
                        <div className="col-6 mx-auto">
                            <img src={require('./Multimedia/Python.png')} alt="PYTHON Icon" className="w-100 m-3 mb-5" />
                        </div>
                    </div>
                    <div className="col-6 col-md-3">
                        <div className="col-6 mx-auto">
                            <img src={require('./Multimedia/Azure SQL Database.png')} alt="SQL Icon" className="w-100 m-3 mb-5" />
                        </div>
                    </div>
                    <div className="col-6 col-md-3">
                        <div className="col-6 mx-auto">
                            <img src={require('./Multimedia/MongoDB.png')} alt="MONGODB Icon" className="w-100 m-3 mb-5" />
                        </div>
                    </div>
                </div>
                <div className="col-12">
                    <h1>Frontend Tools & Frameworks</h1>
                    <div className="row py-4">
                        <div className="col-6 col-md-3">
                            <div className="col-6 mx-auto">
                                <img src={require('./Multimedia/Bootstrap.png')} alt="BOOTSTRAP Icon" className="w-100 m-3" />
                            </div>
                        </div>
                        <div className="col-6 col-md-3">
                            <div className="col-6 mx-auto">
                                <img src={require('./Multimedia/React.png')} alt="REACT JS Icon" className="w-100 m-3" />
                            </div>
                        </div>
                    </div>
                    <h1>Development Tool</h1>
                    <div className="row py-4">
                        <div className="col-6 col-md-3">
                            <div className="col-6 mx-auto">
                                <img src={require('./Multimedia/Visual Studio Code (VS Code).png')} alt="VSC Icon" className="w-100 m-3" />
                            </div>
                        </div>
                    </div>
                    <h1>Productivity Tools</h1>
                    <div className="row py-4">
                        <div className="col-6 col-md-3">
                            <div className="col-6 mx-auto">
                                <img src={require('./Multimedia/pngwing.com.png')} alt="MS OFFICE Icon" className="w-100 m-3" />
                            </div>
                        </div>
                    </div>
                </div>
                <header >
                    <h1 className="display-1 fw-light py-4">Projects</h1>
                </header>
                <div className="row container-fluid w-100 m-0 p-0 ">
                    <div className="col-12 col-lg-4 m-0">
                        <h1 className="mb-4">Bootstrap Project - 1</h1>
                        <div className="container-fluid">
                            <div className="card my-4 p-3 text-light">
                                <a href="https://samasya-ayyappan.github.io/FoodHut-Bootstrap/" target="_blank" rel="noopener noreferrer" className=" card-img-top">
                                    <img src={require('./Multimedia/Bootstrap1.png')} alt="Foodhut_Image" className="w-100" />
                                </a>
                                <h3 className="card-title my-2">Restaurant Template</h3>
                                <p className="card-body text-justify p-0 m-0 ">
                                    The FoodHut Bootstrap project is a static, responsive webpage created using the Bootstrap framework. It showcases a clean and modern design, ideal for presenting food-related content such as a restaurant or cafe website. The project highlights the effective use of Bootstrap's grid system and pre-built components, such as carousels, navigation bars, and cards, to achieve a visually appealing layout. This project demonstrates my ability to design professional, responsive web pages efficiently.
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="col-12 col-lg-4 m-0">
                        <h1 className="mb-4">Javascript Project - 1</h1>
                        <div className="container-fluid" >
                            <div className="card my-4 p-3 text-light">
                                <a href="https://samasya-ayyappan.github.io/clock/" target="_blank" rel="noopener noreferrer" className=" card-img-top">
                                    <img src={require('./Multimedia/Javascript1.png')} alt="Clock_Image" className="w-100" />
                                </a>
                                <h3 className="card-title my-2">Analog & Digital Clock</h3>
                                <p className="card-body text-justify p-0 m-0">
                                    The JavaScript Clock project, accessible at JavaScript Clock, is a dynamic, real-time clock application developed using JavaScript, HTML, and CSS. This project visually displays the current time with a clean and minimalist design, updating every second. It demonstrates my proficiency in JavaScript for handling real-time functionality and DOM manipulation while combining it with HTML and CSS to create an engaging user experience. This project is a testament to my ability to build interactive and functional web applications.
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="col-12 col-lg-4 m-0">
                        <h1 className="mb-4">Javascript Project - 2</h1>
                        <div className="container-fluid" >
                            <div className="card my-4 p-3 text-light">
                                <a href="https://samasya-ayyappan.github.io/HeartEffects/" target="_blank" rel="noopener noreferrer" className=" card-img-top">
                                    <img src={require('./Multimedia/Javascript2.png')} alt="HeartEffect_Image" className="w-100" />
                                </a>
                                <h3 className="card-title my-2">Mouse Event</h3>
                                <p className="card-body text-justify p-0 m-0">
                                    The Heart Effects project, available at Heart Effects, is a visually appealing web page created using HTML, CSS, and JavaScript. The project features an animated heart effect, showcasing dynamic visuals that respond interactively to user actions or predefined triggers. It highlights creative use of CSS animations and JavaScript for adding interactivity, making it a perfect example of blending design and functionality. This project reflects my ability to create engaging and aesthetically pleasing web experiences.    </p>
                            </div>
                        </div>
                    </div>
                </div>
            </main >

        </section >
    )
}

export default Projects;