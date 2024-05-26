import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    items: [],
  },
  reducers: {
    addItem: (state, action) => {
      //payload here will an cart item
      state.items.push(action.payload);
    },
    removeItem: (state, action) => {
      //payload will be item id in cart to be remove
      state.items = state.items.filter((item) => item.id !== action.payload);
    },
    clearCart: (state) => {
      state.items.length = 0;
    },
  },
});

export const { addItem, removeItem, clearCart } = cartSlice.actions;

export default cartSlice.reducer;

//Selector Functions

export const getCart = (store) => store.cart.items;
