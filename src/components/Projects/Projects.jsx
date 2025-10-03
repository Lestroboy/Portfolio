import React from "react";
import "./Projects.css";
import restaurant from "../../assets/restaurant.png";
import customer from "../../assets/customer.png";
import delivery from "../../assets/delivery.png";
import admin from "../../assets/admin.png";

function Projects() {
  const project = {
    name: "Food Delivery Application",
    description:
      "A web application built with Spring Boot and React.js that enables customers to browse restaurants, place orders, and track deliveries, while allowing restaurant owners and delivery agents to manage their tasks efficiently.",
    github: "https://github.com/Lestroboy/Food-Delivery-Application",
    images: [delivery, restaurant, customer, admin],
  };

  return (
    <section id="projects" className="projects">
      <h1 className="project-page">Projects</h1>
      <div className="projects-container">
        <div className="project-card">
          <h3>{project.name}</h3>
          <p>{project.description}</p>
          <a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            className="project-link"
          >
            View on GitHub
          </a>
        </div>

        <div className="projects-stack">
          {project.images.map((img, index) => (
            <img
              key={index}
              src={img}
              alt={`Project ${index + 1}`}
              className={`project-image project-image-${index}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects;
