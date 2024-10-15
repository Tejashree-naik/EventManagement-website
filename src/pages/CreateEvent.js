import React, { useEffect, useState } from "react";
import events from "../data/events.json"; // Ensure this path is correct

const CreateEvent = () => {
  const [eventList, setEventList] = useState([]);

  useEffect(() => {
    setEventList(events); // Use the imported events data
  }, []);

  const handleCall = (eventName) => {
    // Logic for handling the call button click
    alert(`Calling for more information about ${eventName}`);
  };

  const handleMessage = (eventName) => {
    // WhatsApp message URL
    const message = `Hi! I'm interested in the event: ${eventName}. Could you please provide more details?`;
    const whatsappUrl = `https://wa.me/?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, "_blank"); // Open in a new tab
  };

  return (
    <div style={{ padding: "20px" }}>
      <h2 style={{ textAlign: "center", marginBottom: "20px" }}>Event List</h2>
      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "center", // Centers the cards
          gap: "20px", // Space between cards
        }}
      >
        {eventList.map((event) => (
          <div
            key={event.id}
            style={{
              width: "250px",
              border: "1px solid #ccc",
              padding: "10px",
              borderRadius: "8px",
              backgroundColor: "#fff",
              boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
              textAlign: "center", // Center-align content in the card
            }}
          >
            <h3 style={{ fontSize: "18px" }}>{event.name}</h3>
            <img
              src={event.image}
              alt={event.name}
              style={{
                width: "100%",
                height: "150px",
                objectFit: "cover",
                borderRadius: "5px",
                marginBottom: "10px",
              }}
            />
            <p style={{ fontWeight: "bold", color: "#333" }}>
              Price: ${event.price}
            </p>
            <p
              style={{ fontSize: "14px", color: "#555", marginBottom: "10px" }}
            >
              Don't miss out on this amazing event! Join us for an unforgettable
              experience.
            </p>
            <button
              onClick={() => handleCall(event.name)}
              style={{
                backgroundColor: "green",
                color: "white",
                border: "none",
                padding: "10px 15px",
                borderRadius: "5px",
                cursor: "pointer",
                marginRight: "10px", // Space between buttons
              }}
            >
              Call
            </button>
            <button
              onClick={() => handleMessage(event.name)}
              style={{
                backgroundColor: "#25D366", // WhatsApp color
                color: "white",
                border: "none",
                padding: "10px 15px",
                borderRadius: "5px",
                cursor: "pointer",
              }}
            >
              Message
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CreateEvent;
