import { configureStore } from "@reduxjs/toolkit";
import searchSlice from "./slices/searchSlice";
import optionsSlice from "./slices/optionsSlice";
import cartSlice from "./slices/cartSlice";

export const store = configureStore({
  reducer: {
    options: optionsSlice,
    search: searchSlice,
    cart: cartSlice,
  },
});
