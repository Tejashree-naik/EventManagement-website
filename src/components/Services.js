// src/components/Services.js
import React from 'react';

const Services = () => {
  return (
    <div style={{ padding: '20px', background: '#fff', borderRadius: '8px', boxShadow: '0 2px 5px rgba(0,0,0,0.1)' }}>
      <h2 style={{ textAlign: 'center', color: '#333' }}>Our Services</h2>
      <ul style={{ lineHeight: '1.6', color: '#555' }}>
        <li><strong>Event Planning Consultation:</strong> Expert advice to plan successful events.</li>
        <li><strong>Venue Booking:</strong> Help with finding and booking the perfect venue.</li>
        <li><strong>Catering Services:</strong> Full catering options including meal planning and service.</li>
        <li><strong>Event Promotion:</strong> Marketing strategies to promote your events effectively.</li>
        <li><strong>Ticket Sales Management:</strong> Solutions for managing online ticket sales.</li>
        <li><strong>On-Site Event Support:</strong> Staff to assist during the event for seamless execution.</li>
        <li><strong>Audio/Visual Equipment Rental:</strong> Equipment rental services for all event needs.</li>
        <li><strong>Attendee Management:</strong> Tools for managing registrations and check-ins.</li>
        <li><strong>Feedback and Survey Services:</strong> Collect and analyze attendee feedback.</li>
        <li><strong>Post-Event Analysis:</strong> Reports on event performance and insights for future improvements.</li>
      </ul>
    </div>
  );
};

export default Services;
