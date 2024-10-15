// src/App.js
import React, { useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from "./components/Header"; // Assuming you want to use it

import Home from "./pages/Home";
import CreateEvent from "./pages/CreateEvent";

import Features from "./components/Features";
import Services from "./components/Services";
import Contact from "./components/Contact";
import styled from "styled-components";

const AppContainer = styled.div`
  font-family: Arial, sans-serif;
  background-color: #f4f4f4;
  min-height: 100vh;
`;

const App = () => {
  const [events, setEvents] = useState([]); // Store all created events

  const handleEventClick = (eventId) => {
    // Add logic to handle event click
    console.log("Event clicked:", eventId);
  };

  const handleEventCreate = (event) => {
    setEvents([...events, { ...event, id: events.length + 1 }]); // Add the new event with an ID
  };

  return (
    <Router>
      <AppContainer>
        <Header /> {/* Add the Header component */}
        <Routes>
          <Route
            path="/"
            element={<Home events={events} onEventClick={handleEventClick} />}
          />
          <Route
            path="/create-event"
            element={
              <CreateEvent onEventCreate={handleEventCreate} events={events} />
            }
          />
          <Route path="/features" element={<Features />} />
          <Route path="/services" element={<Services />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </AppContainer>
    </Router>
  );
};

export default App;
