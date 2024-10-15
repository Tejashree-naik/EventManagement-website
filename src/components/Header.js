// src/components/Header.js
import React from "react";
import { Link } from "react-router-dom";

const Header = ({ events, onEventClick }) => {
  return (
    <header
      style={{
        padding: "20px",
        textAlign: "center",
        background: "#333",
        color: "#fff",
      }}
    >
      <h1>Event Management System</h1>
      <nav
        style={{
          marginTop: "10px",
          padding: "10px 0",
          background: "#444",
          textAlign: "center",
        }}
      >
        <Link
          to="/"
          style={{
            color: "#fff",
            margin: "0 15px",
            textDecoration: "none",
            fontSize: "18px",
          }}
        >
          Home
        </Link>
        <Link
          to="/features"
          style={{
            color: "#fff",
            margin: "0 15px",
            textDecoration: "none",
            fontSize: "18px",
          }}
        >
          Features
        </Link>
        <Link
          to="/services"
          style={{
            color: "#fff",
            margin: "0 15px",
            textDecoration: "none",
            fontSize: "18px",
          }}
        >
          Services
        </Link>
        <Link
          to="/contact"
          style={{
            color: "#fff",
            margin: "0 15px",
            textDecoration: "none",
            fontSize: "18px",
          }}
        >
          Contact
        </Link>
        <Link
          to="/create-event"
          style={{
            color: "#fff",
            margin: "0 15px",
            textDecoration: "none",
            fontSize: "18px",
          }}
        >
          Events
        </Link>
      </nav>
    </header>
  );
};

export default Header;
