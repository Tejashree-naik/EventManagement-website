// src/pages/Home.js
import React from "react";

import "./Home.css"; // Assuming you create a separate CSS file

const Home = () => {
  return (
    <div
      style={{
        padding: "20px",
        minHeight: "100vh",
        backgroundImage:
          "url('https://img.freepik.com/free-vector/pink-spotlight-stage-background-disco-party-light_107791-29420.jpg')", // Path to your background image
        backgroundSize: "cover",
        backgroundPosition: "center",
        color: "#fff",
        position: "relative",
      }}
    >
      <div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          backgroundColor: "rgba(0, 0, 0, 0.5)", // Dark overlay
          zIndex: 1,
        }}
      />
      <div style={{ position: "relative", zIndex: 2 }}>
        <h2 className="welcome-heading">
          Welcome to Our Event Management System
        </h2>
        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "space-between",
            marginTop: "20px",
          }}
        ></div>
      </div>
    </div>
  );
};

export default Home;
