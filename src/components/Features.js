// src/components/Features.js
import React from "react";
import "./Features.css"; // Import the updated CSS

const Features = () => {
  return (
    <div className="features-container">
      <h2 className="features-title">Decoration Features</h2>
      <ul className="features-list">
        <li>
          <strong>Custom Themes:</strong> Choose from a variety of themes to
          match your event's style and atmosphere.
        </li>
        <li>
          <strong>Lighting Setup:</strong> Professional lighting arrangements to
          enhance the ambiance.
        </li>
        <li>
          <strong>Floral Arrangements:</strong> Beautiful and artistic floral
          decorations to elevate the visual appeal.
        </li>
        <li>
          <strong>Table & Seating Design:</strong> Elegant table setups with
          custom linens and seating arrangements.
        </li>
        <li>
          <strong>Backdrop Design:</strong> Stunning backdrop designs for photo
          booths and stage areas.
        </li>
        <li>
          <strong>Centerpieces:</strong> Unique and creative centerpieces
          tailored to the theme of the event.
        </li>
        <li>
          <strong>Balloon Decorations:</strong> Colorful balloon arrangements
          for all types of celebrations.
        </li>
        <li>
          <strong>Outdoor Décor:</strong> Special decorations for outdoor
          events, including arches and entranceways.
        </li>
        <li>
          <strong>Stage Design:</strong> Custom stage decorations for
          performances, speeches, and special moments.
        </li>
        <li>
          <strong>Special Effects:</strong> Smoke machines, confetti cannons,
          and more to add excitement to the event.
        </li>
      </ul>
    </div>
  );
};

export default Features;
