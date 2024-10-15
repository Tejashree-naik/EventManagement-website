// src/components/EventList.js
import React from "react";
import EventCard from "./EventCard";
import styled from "styled-components";

const ListContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`;

const EventList = ({ events, onEventClick }) => {
  return (
    <ListContainer>
      {events.map((event) => (
        <EventCard key={event.id} event={event} onClick={onEventClick} />
      ))}
    </ListContainer>
  );
};

export default EventList;
