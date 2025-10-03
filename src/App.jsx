// src/App.jsx
import React from "react";
import "./App.css";

import Header from "./components/Header/Header";
import Hero from "./components/Hero/Hero";
import About from "./components/About/About";
import Projects from "./components/Projects/Projects";
import Contact from "./components/Contact/Contact";

function App() {
  return (
    <div>
      <Hero />
      <Header />
      <About />
      <Projects />
      <Contact />
       <a
        href="/Sudhir_Yadav_Resume.pdf"
        download
        className="download-cv"
        title="Download CV"
      >
        <i className="fas fa-download"></i> Download Resume
      </a>
      
    </div>
  );
}

export default App;