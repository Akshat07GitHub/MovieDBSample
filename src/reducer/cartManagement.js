import { createSlice } from '@reduxjs/toolkit';



const initialState = {
  cart :[]
};

const CartManagement = createSlice({
  name: 'CartManagement',
  initialState,
  reducers: {
    addToCart(state, action) {
      console.log(state,action)
      state.cart.push(action.payload)
    },
  },
});

export const { addToCart } = CartManagement.actions;
export default CartManagement;
