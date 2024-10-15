// src/components/Contact.js
import React from "react";
import "./Contact.css"; // Import the new CSS file

const Contact = () => {
  return (
    <div className="contact-container">
      <h2 className="contact-title">Contact Us</h2>
      <p className="contact-text">
        We’d love to hear from you! Here are our contact details:
      </p>
      <ul className="contact-list">
        <li>
          <strong>Email:</strong> contact@eventmanagement.com
        </li>
        <li>
          <strong>Phone:</strong> +1 (555) 123-4567
        </li>
        <li>
          <strong>Office Address:</strong> 123 Event Lane, Suite 456, Event
          City, ST 12345
        </li>
        <li>
          <strong>Follow Us:</strong>
        </li>
        <li>
          <a
            href="https://www.facebook.com/eventmanagement"
            target="_blank"
            rel="noopener noreferrer"
          >
            Facebook
          </a>
        </li>
        <li>
          <a
            href="https://www.twitter.com/eventmanagement"
            target="_blank"
            rel="noopener noreferrer"
          >
            Twitter
          </a>
        </li>
        <li>
          <a
            href="https://www.instagram.com/eventmanagement"
            target="_blank"
            rel="noopener noreferrer"
          >
            Instagram
          </a>
        </li>
      </ul>
    </div>
  );
};

export default Contact;
