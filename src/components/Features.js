// src/components/Features.js
import React from "react";
import "./Features.css"; // Import the updated CSS

const Features = () => {
  return (
    <div className="features-container">
      <h2 className="features-title">Features</h2>
      <ul className="features-list">
        <li>
          <strong>Event Creation:</strong> Easily create new events with
          detailed information.
        </li>
        <li>
          <strong>RSVP Management:</strong> Manage attendee responses for
          events.
        </li>
        <li>
          <strong>Ticketing System:</strong> Sell and manage tickets for your
          events.
        </li>
        <li>
          <strong>Notifications:</strong> Send reminders and updates to
          attendees.
        </li>
        <li>
          <strong>Event Calendar:</strong> View upcoming events in a calendar
          format.
        </li>
        <li>
          <strong>User Registration/Login:</strong> Secure accounts for users to
          manage events.
        </li>
        <li>
          <strong>Feedback Collection:</strong> Gather feedback from attendees
          post-event.
        </li>
        <li>
          <strong>Social Media Integration:</strong> Share events on social
          media platforms.
        </li>
        <li>
          <strong>Analytics Dashboard:</strong> Gain insights into event
          attendance and performance.
        </li>
        <li>
          <strong>Collaboration Tools:</strong> Collaborate with team members on
          event planning.
        </li>
      </ul>
    </div>
  );
};

export default Features;
