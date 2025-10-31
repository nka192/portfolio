import React from "react";
import "../styles/contact.css";

const Contact = () => {
  return (
    <>
      <footer className="contact-footer">
        <div className="footer-content">
          <p>Have a project or just want to say hi? Let's connect!</p>
          <a className="email-link" href="mailto:nayoung.kate.kim@google.com">
            nayoung.kate.kim@google.com
          </a>
          <div className="social-links">
            <a href="https://github.com/nka192">GitHub</a>
            <a href="https://www.linkedin.com/in/nayoung-kate-kim-048052263">
              LinkedIn
            </a>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Contact;
