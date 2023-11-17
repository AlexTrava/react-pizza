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
      const findItem = state.cartList.find(
        (product) => product.id === action.payload.id,
      );

      if (findItem) {
        findItem.count++;
        findItem.resultPrice = findItem.resultPrice + action.payload.price;
      } else {
        state.cartList.push({
          ...action.payload,
          count: 1,
          resultPrice: action.payload.price,
        });
      }
      state.countProduct = state.cartList.reduce((sum, { count }) => {
        return sum + count;
      }, 0);
      state.resultSum = state.cartList.reduce((sum, { resultPrice }) => {
        return sum + resultPrice;
      }, 0);
    },

    minusProduct(state, action) {
      const findItem = state.cartList.find(
        (product) => product.id === action.payload.id,
      );
      findItem.count--;
      state.resultSum = state.resultSum - action.payload.price;
      state.countProduct = state.countProduct - 1;
    },

    removeProduct(state, action) {
      const findItem = state.cartList.find(
        (product) => product.id === action.payload,
      );
      state.cartList = state.cartList.filter(
        (item) => item.id !== action.payload,
      );
      state.resultSum = state.resultSum - findItem.resultPrice;
      state.countProduct = state.countProduct - findItem.count;
    },
    clearCart(state) {
      state.cartList = [];
      state.countProduct = 0;
      state.resultSum = 0;
    },
  },
});

export const cartSlector = (state) => state.cart;
export const cartItemByIdSelector = (id) =>(state) =>
    state.cart.cartList.find((product) => product.id === id)

export const { addProduct, removeProduct, clearCart, minusProduct } =
  cartSlice.actions;

export default cartSlice.reducer;
