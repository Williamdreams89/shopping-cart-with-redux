import React from "react";
import styled from "styled-components";

function ShoppingCart({ showCart }) {
  const StyledCart = styled.div`
    // background: linear-gradient(transparent, rgba(0,0,0,.9));
    width: 95%;
    height: 98vh;
    display: ${({ showCart }) => (showCart ? "" : "none")};
    cursor: pointer;
    margin: auto;
    overflow-y: scroll;
    position: absolute;
    z-index: 100;
    right: 0;
    background-color: lightgray;

    h2 {
      color: orangered;
      letter-spacing: 5px;
      text-align: center;
      margin: 1rem 0;
      text-transform: uppercase;
    }

  `;
  return (
    <StyledCart showCart={showCart}>
      <h2>Your Cart</h2>
    </StyledCart>
  );
}

export default ShoppingCart;
