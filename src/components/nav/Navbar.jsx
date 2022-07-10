import React from "react";
import {  BsBag } from "react-icons/bs";
import styled from "styled-components";
import { useSelector } from "react-redux";

const StyledNavbar = styled.nav`
  background-color: orangered;
  width: 100vw;
  height: 4rem;
  color: white;
  display: flex;
  justify-content: space-around;
  align-items: center;
  font-size: 23px;
  position: relative;

  div {
    width: 2rem;
    position: relative;

    span {
      font-size: 12px;
      position: absolute;
      top: -2.5rem;
      right: 0;
      border-radius: 50%;
      background-color: grey;
      padding: 4px 6px;
    }
  }
`;
export default function Navbar() {
    const cart = useSelector((store)=> store.cart.cartItems)
  return (
    <StyledNavbar>
      <h5>Funky Shop</h5>
      <div>
        <BsBag />
        <div>
            {cart.length > 1 ? <span>{cart.length}</span> : null }
        </div>
      </div>
    </StyledNavbar>
  );
}
