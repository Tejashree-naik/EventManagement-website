// src/components/EventForm.js
import React, { useState } from "react";
import styled from "styled-components";

const FormContainer = styled.div`
  margin: 20px;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  width: 400px;
  margin: auto;
`;

const Input = styled.input`
  margin: 10px 0;
  padding: 10px;
  border: 1px solid #ddd;
  border-radius: 5px;
`;

const Button = styled.button`
  padding: 10px;
  border: none;
  border-radius: 5px;
  background-color: #282c34;
  color: white;
  cursor: pointer;
  &:hover {
    background-color: #3a3f47;
  }
`;

const EventForm = ({ onSubmit }) => {
  const [name, setName] = useState("");
  const [date, setDate] = useState("");
  const [location, setLocation] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit({ name, date, location });
    setName("");
    setDate("");
    setLocation("");
  };

  return (
    <FormContainer>
      <h2>Create Event</h2>
      <Form onSubmit={handleSubmit}>
        <Input
          type="text"
          placeholder="Event Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
        <Input
          type="date"
          value={date}
          onChange={(e) => setDate(e.target.value)}
          required
        />
        <Input
          type="text"
          placeholder="Location"
          value={location}
          onChange={(e) => setLocation(e.target.value)}
          required
        />
        <Button type="submit">Create Event</Button>
      </Form>
    </FormContainer>
  );
};

export default EventForm;
