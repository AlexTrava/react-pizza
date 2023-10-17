import { configureStore } from "@reduxjs/toolkit";
import categorySlice from "./slices/categorySlice";
import sortSlice from "./slices/sortSlice";
import searchSlice from "./slices/searchSlice";

export const store = configureStore({
  reducer: {
    category: categorySlice,
    sort: sortSlice,
    search: searchSlice,
  },
});
