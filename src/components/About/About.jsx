import React from "react";
import "./About.css";
import profile from "../../assets/me2.jpg";

function About() {
  const skills = [
    { icon: "fab fa-html5", color: "#E34F26" }, // 1st row
    { icon: "fab fa-css3-alt", color: "#385ef3ff" },

    { icon: "fab fa-js", color: "#F0DB4F" }, // 2nd row
    { icon: "fab fa-react", color: "#61DBFB" },
    { icon: "fab fa-java", color: "#148cb0ff" },

    { icon: "fas fa-leaf", color: "#28A745" }, // 3rd row
    { icon: "fas fa-database", color: "#0a5197ff" },
  ];

  return (
    <section id="about" className="about">
      <h1 className="about-page">About</h1>
      <div className="about-container">
        <div className="about-me">
          <img src={profile} alt="Profile" className="about-img" />
          <p>
            Fully committed to the philosophy of life-long learning, I'm an
            full stack developer with a strong passion for Java,
            Springboot, React and building clean, user-friendly web
            applications. The combination of creativity, logic, and technology,
            along with the excitement of constantly learning something new,
            drives my enthusiasm for web development. When I'm not coding, I
            enjoy reading novels and experimenting in the kitchen with new
            recipes.
          </p>
        </div>
        <div className="skill-text">
          <h3>My Skills</h3>
          <div className="skills-container">
            {skills.map((skill, index) => (
              <span
                key={index}
                className="skill-pill"
                style={{ backgroundColor: skill.color + "33" }}
              >
                <i className={skill.icon} style={{ color: skill.color }}></i>
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
