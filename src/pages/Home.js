// src/pages/Home.js
import React from "react";
import "./Home.css"; // Import the CSS file

const Home = () => {
  return (
    <div className="home-container">
      {/* Dark overlay */}
      <div className="overlay" />

      <div className="content">
        {/* Heading */}
        <h2 className="welcome-heading">Event Planner</h2>

        <div className="flex-container">{/* Other content can go here */}</div>
      </div>
    </div>
  );
};

export default Home;
