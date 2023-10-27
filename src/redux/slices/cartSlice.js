import { createSlice, current } from "@reduxjs/toolkit";

const initialState = {
  countProduct: 0,
  resultSum: 0,
  cartList: [],
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addProduct(state, action) {
      state.cartList.push(action.payload);
      state.countProduct = state.cartList.length;
      state.resultSum = state.resultSum + action.payload.price;
      console.log(current(state), "its cart state");
    },

    removeProduct(state, action) {
      state.cartList = state.cartList.filter(
        (item) => item.id !== action.payload,
      );
    },
    clearCart(state) {
      state.cartList = [];
    },
  },
});

export const { addProduct, removeProduct, clearCart } = cartSlice.actions;

export default cartSlice.reducer;
