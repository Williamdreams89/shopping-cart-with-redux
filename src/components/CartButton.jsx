import React from 'react';
import styled from 'styled-components';
import { useDispatch } from 'react-redux';
import { addToCart } from '../feature/cart';


const StyledButton = styled.button`
    background-color: white;
    border: 3px solid orangered;
    position: absolute;
    top: 50%;
    right: 50%;
    padding: 5px;
    cursor: pointer;

    &:hover{
        background-color: orangered;
        color: white;
    }

`;
export default function CartButton() {
    const dispatch = useDispatch()
  return (
    <div>
        <StyledButton onClick={()=> dispatch(addToCart())}>Add To Cart</StyledButton>
    </div>
  )
}
