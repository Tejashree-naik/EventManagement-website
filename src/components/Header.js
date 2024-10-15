// src/components/Header.js
import React from "react";
import styled from "styled-components";

const HeaderContainer = styled.header`
  background-color: #282c34;
  padding: 20px;
  text-align: center;
  color: white;
`;

const Header = () => {
  return (
    <HeaderContainer>
      <h1>Event Management</h1>
    </HeaderContainer>
  );
};

export default Header;
