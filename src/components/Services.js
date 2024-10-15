// src/components/Services.js
import React from "react";
import "./Services.css"; // Import the new CSS file

const Services = () => {
  return (
    <div className="services-container">
      <h2 className="services-title">Our Event Decoration Services</h2>
      <ul className="services-list">
        <li>
          <strong>Theme Consultation:</strong> Personalized consultation to help
          you choose the perfect theme for your event.
        </li>
        <li>
          <strong>Venue Decoration:</strong> Transforming your venue with
          elegant decorations tailored to your theme.
        </li>
        <li>
          <strong>Floral Design:</strong> Custom floral arrangements to
          complement your event style.
        </li>
        <li>
          <strong>Lighting Setup:</strong> Stunning lighting setups to enhance
          the atmosphere and highlight key areas.
        </li>
        <li>
          <strong>Table Styling:</strong> Elegant table settings including
          centerpieces, linens, and place cards.
        </li>
        <li>
          <strong>Backdrop Design:</strong> Custom backdrops for photo areas,
          stages, and focal points.
        </li>
        <li>
          <strong>Balloon Decor:</strong> Creative balloon installations to add
          a playful or elegant touch to your event.
        </li>
        <li>
          <strong>Outdoor Event Decorations:</strong> Beautiful outdoor decor
          for ceremonies, receptions, and entrances.
        </li>
        <li>
          <strong>Special Effects:</strong> Enhancing your event with special
          effects such as fog machines, confetti, and more.
        </li>
        <li>
          <strong>Custom Props & Installations:</strong> Unique props and
          installations designed to wow your guests.
        </li>
      </ul>
    </div>
  );
};

export default Services;
