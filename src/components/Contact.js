// src/components/Contact.js
import React from "react";

const Contact = () => {
  return (
    <div
      style={{
        padding: "20px",
        background: "#fff",
        borderRadius: "8px",
        boxShadow: "0 2px 5px rgba(0,0,0,0.1)",
      }}
    >
      <h2 style={{ textAlign: "center", color: "#333" }}>Contact Us</h2>
      <p style={{ color: "#555" }}>
        We’d love to hear from you! Here are our contact details:
      </p>
      <ul style={{ lineHeight: "1.6", color: "#555" }}>
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
            style={{ color: "#007bff" }}
            target="_blank"
            rel="noopener noreferrer"
          >
            Facebook
          </a>
        </li>
        <li>
          <a
            href="https://www.twitter.com/eventmanagement"
            style={{ color: "#007bff" }}
            target="_blank"
            rel="noopener noreferrer"
          >
            Twitter
          </a>
        </li>
        <li>
          <a
            href="https://www.instagram.com/eventmanagement"
            style={{ color: "#007bff" }}
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
