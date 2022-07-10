import React from "react";
import styled from "styled-components";

const StyledHero = styled.div`
  position: relative;
  margin-bottom: 2rem;
  height: calc(100vh - 4rem);

  img {
    object-fit: cover;
    width: 100%;
    height: 100%;
  }

  div {
    position: absolute;
    top: 50%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100%;
    background-color: rgba(0, 0, 0, 0.5);
    color: white;
    height: 4rem;
  }
`;
export default function Hero() {
  return (
    <StyledHero>
      <img src="../images/15.jpg" alt="" />
      <div>
        <h2>Get Free Ticket for The FIFA World Cup</h2>
        <p>when you buy from us</p>
      </div>
    </StyledHero>
  );
}
