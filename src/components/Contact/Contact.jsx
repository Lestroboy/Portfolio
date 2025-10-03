import React from "react";
import "./Contact.css";
import { BiCopyright } from "react-icons/bi";

function Contact() {
  return (
    <section id="contact" className="contact">
      <h2>Contact Me</h2>
      <pre>
        If you’d like to get in touch, Leave your details <br/>and I'll get back to
        you as soon as possible.
      </pre>

      {/* Contact Form */}
      <form className="contact-form">
        <input type="text" name="name" placeholder="Your Name" required />
        <input type="email" name="email" placeholder="Your Email" required />
        <textarea
          name="message"
          rows="5"
          placeholder="Your Message"
          required
        ></textarea>
        <button type="submit" className="submit-btn">
          Submit
        </button>
      </form>

      {/* Scroll to top button */}
      <a href="#top" className="scroll-top">
        <i className="fas fa-arrow-up"></i>
      </a>

      {/* Bottom Bar */}
      <div className="contact-bottom">
        <h3 className="copyright">SUDHIR YADAV ©2025</h3>
        <a href="mailto:sy0205476@gmail.com" className="contact-icon">
          <i className="fas fa-envelope"></i>
        </a>
        <a
          href="https://github.com/Lestroboy"
          target="_blank"
          rel="noopener noreferrer"
          className="contact-icon"
        >
          <i className="fab fa-github"></i>
        </a>
      </div>
    </section>
  );
}

export default Contact;
