import React from 'react';
import './App.css'
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Home from './Components/Home';
import About from './Components/About';
import CareerEducation from './Components/Qualification';
import Projects from './Components/Skills';
import Contact from './Components/Contact';
function App(){
  return (
    <Router>
      <div className='m-0 p-0 text-light w-100 container-fluid' id='Main'> 
        <nav className='nav py-3 w-100 row m-0 p-0 d-flex justify-content-end'> 
          <ul className='nav col-12 col-lg-6 justify-content-center'> 
            <li className='nav-item active'><Link  className='nav-link text-light active' to="/">Home</Link></li> 
            <li className='nav-item'><Link  className='nav-link text-light' to="/about">About</Link></li> 
            <li className='nav-item'><Link  className='nav-link text-light' to="/career-education">Career & Education</Link></li> 
            <li className='nav-item'><Link  className='nav-link text-light' to="/projects">Skills & Projects</Link></li> 
            <li className='nav-item'><Link  className='nav-link text-light' to="/contact">Contacts</Link></li> 
          </ul>
        </nav>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/career-education" element={<CareerEducation />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="*" element={<Home />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
