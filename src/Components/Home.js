import React from "react";
import './Portfolio.css';
import Resume from "./Multimedia/Samasya Ayyappan - Resume(2026).pdf";
function Home() {
    return (

        <div className="container-fluid d-flex align-items-center px-4 px-md-5"
            style={{ minHeight: "100dvh" }}>
            <div className="row w-100 align-items-center py-4 py-md-0">

                <div className="col-12 col-md-6 col-xl-7 order-2 order-md-1 my-5 px-xl-5">
                    <h1 className="display-4 fw-bold ps-xxl-5">
                        Samasya T A
                    </h1>

                    <h5 className="mb-4 ps-xl-5">
                        <span className="fw-bold">Software Development Engineer</span> |
                        <span className="fw-light"> Frontend Developer</span>
                    </h5>

                    <p className="ps-xl-5">
                        "An enthusiastic Software Development Engineer with a passion
                        for building dynamic user experiences and robust software
                        solutions to create impactful digital products."
                    </p>

                    <div className="ps-xl-5 mt-4">
                        <a
                            href={Resume}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="btn btn-outline-light btn-lg rounded-pill px-4"
                        >
                            <i className="fa-solid fa-download me-2"></i>
                            Resume
                        </a>
                    </div>
                </div>

                <div className="col-12 col-md-6 col-xl-5 order-1 order-md-2 text-center">
                    <img
                        src={require("./Multimedia/IMG_20240330_140145.jpg")}
                        alt="My_Image"
                        className="w-50 h-50 mb-md-5"
                        id="Profile"
                    />
                </div>

            </div>
        </div>
    );
}

export default Home;