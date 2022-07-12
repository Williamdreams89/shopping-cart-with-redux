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

  .hero__body {
    position: absolute;
    top: 0%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100%;
    background-color: rgba(0, 0, 0, 0.5);
    color: lightgrey;
    height: 100%;
    font-size: 23px;

    .hero__buttons {
      display: flex;
      gap: 1rem;
      margin-top: 2rem;

      button {
        padding: 15px 10px;
        cursor: pointer;
        font-size: 20px;
        border-radius: 20px;

        &:nth-of-type(1) {
          color: white;
          background-color: orangered;
          border: none;
        }

        &:nth-of-type(2) {
          border: none;
          a {
            color: black;
            text-decoration: none;
          }
          &:hover {
            a {
              color: white;
            }
            background-color: #333;
          }
        }
      }
    }
  }
`;
export default function Hero() {
  return (
    <StyledHero>
      <img src="../images/33.jpg" alt="" />
      <div className="hero__body">
        <h2>Get Free Ticket for The FIFA World Cup</h2>
        <span>when you buy from us</span>
        <div className="hero__buttons">
          <button>Get a free coupon</button>
          <button>
            {" "}
            <a href="#products">Start shopping Now</a>
          </button>
        </div>
      </div>
    </StyledHero>
  );
}
