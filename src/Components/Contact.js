import React from "react";
import "./Portfolio.css";
function Contact() {
    return (
        <section className="p-lg-5 container-fluid p-0">
            <main className="row w-100  pt-0 p-4 m-0 ">
                <header className="display-1 fw-light py-4 mb-4">
                    Contact Me
                </header>
                <div className="col-12 container-fluid" >
                    <div className="fs-4 pb-4 p-md-4 pt-md-0">
                        <i class="fa-regular fa-envelope me-2"></i> <span>Email : </span>
                        <a href="mailto:samasyayyappan@gmail.com" style={{ textDecoration: "none",color:"white" }}>samasyayyappan@gmail.com</a>
                    </div>
                    <div className="fs-4 py-4 p-md-4">
                    <i class="fa-solid fa-phone me-2"></i> <span>Phone : </span>
                        <a href="phoneto:9363889558" style={{ textDecoration: "none",color:"white" }}>+91-9363889558</a>
                    </div>
                    <div className="fs-4 py-4 p-md-4">
                    <i class="fa-solid fa-earth-asia me-2"></i> <span>Location : </span>
                        <a href="https://www.google.com/maps/place/Palladam,+Tamil+Nadu/@11.0000809,77.2742826,3293m/data=!3m2!1e3!4b1!4m6!3m5!1s0x3ba9a95673dd8dfb:0x6effc31a8745d016!8m2!3d10.9955767!4d77.2852097!16zL20vMGY1eGcx?entry=ttu&g_ep=EgoyMDI1MDExMC4wIKXMDSoASAFQAw%3D%3D" style={{ textDecoration: "none",color:"white" }}>Tiruppur, India</a>
                    </div>
                    <div className="fs-5 py-4 p-md-4">
                    <i class="fa-brands fa-linkedin me-2"></i>
                        <a href="https://www.linkedin.com/in/samasyata/" style={{ textDecoration: "none",color:"white" }}> LinkedIn </a>
                    </div>
                    <div className="fs-4 py-4 p-md-4">
                    <i class="fa-brands fa-github me-2"></i>
                        <a href="https://github.com/Samasya-Ayyappan" style={{ textDecoration: "none",color:"white" }}> GitHub </a>
                    </div>
                </div>
            </main>
        </section>
    )
}

export default Contact;