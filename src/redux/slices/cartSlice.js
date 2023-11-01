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
      console.log(findItem, "ist findItem");

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

    removeProduct(state, action) {
      state.cartList = state.cartList.filter(
        (item) => item.id !== action.payload,
      );
    },
    clearCart(state) {
      state.cartList = [];
      state.countProduct = 0;
      state.resultSum = 0;
    },
  },
});

export const { addProduct, removeProduct, clearCart } = cartSlice.actions;

export default cartSlice.reducer;
