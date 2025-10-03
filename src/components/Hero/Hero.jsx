// src/components/Hero/Hero.jsx
import React from "react";
import "./Hero.css";

function Hero() {
  return (
    <section id="hero" className="hero">
      <div className="hero-content">
        <h2>Hello, I'm <span className="name">Sudhir</span></h2>
        <h3>Java fullstack web developer.</h3>
        <a href="#about" className="scroll-btn">Know Me ↓</a>
      </div>
    </section>
  );
}

export default Hero;