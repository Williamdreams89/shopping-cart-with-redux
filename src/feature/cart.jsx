import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    
       cartItems: [1,2,3,45,5,6,7,8,9,0,1],
        amount: 0,
        quantity: 0
}

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart : (state, action)=>{
        
    }
  }
});

export const {addToCart} = cartSlice.actions

export default cartSlice.reducer