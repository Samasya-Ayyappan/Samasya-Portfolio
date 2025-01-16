import React from "react";
import './Portfolio.css';
function Home() {
    return (

        <div className="container-fluid pb-5 m-0 w-100 ">
            <div className="col-12 col-lg-5 float-end py-lg-5">
                <div className="col-12 px-5 h-100 d-flex">
                    <img src={require(`./Multimedia/IMG_20240330_140145.jpg`)} alt="My_Image" className="w-75 h-75 mt-5 mx-auto " id="Profile" />
                </div>
            </div>
            <div className="col-12 col-lg-7 p-5">
                <div className="p-lg-5 py-md-5 my-5 ">
                    <header className=" py-0 pb-lg-0 display-1 fw-bold my-5">My <br></br> Portfolio</header>
                    <p className="py-lg-5 pt-0 pt-lg-0">"An enthusiastic developer with a passion for building dynamic front-end interfaces and robust back-end systems to create impactful digital solutions."</p>
                </div>
            </div>

        </div>
    );
}

export default Home;