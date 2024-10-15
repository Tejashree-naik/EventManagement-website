// src/components/EventCard.js
import React from "react";
import styled from "styled-components";

const Card = styled.div`
  border: 1px solid #ddd;
  border-radius: 5px;
  padding: 20px;
  margin: 10px;
  background-color: #f9f9f9;
  cursor: pointer;
  &:hover {
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  }
`;

const EventCard = ({ event, onClick }) => {
  return (
    <Card onClick={() => onClick(event)}>
      <h2>{event.name}</h2>
      <p>{event.date}</p>
      <p>{event.location}</p>
    </Card>
  );
};

export default EventCard;
