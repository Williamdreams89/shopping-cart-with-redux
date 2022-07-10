import React, { useState } from "react";
import styled from "styled-components";

const StyledButton = styled.button`
  border: none;
  background-color: white;
  margin-bottom: 2rem;

  button {
    border: 2px solid orangered;
    color: black;
    border-radius: 5px;
    padding: 7px 6px;
    outline: none;
    width: 7rem;
    cursor: pointer;
    background-color: white;

    
    &:hover, & .active{
      background-color: orangered;
      color: white;
    }
  }

`;

export default function TagsButton({ name, setTag }) {
  return (
    <StyledButton>
      <button
        onClick={() => {
          setTag(name);
        }}

      >
        {name.toUpperCase()}
      </button>
    </StyledButton>
  );
}
