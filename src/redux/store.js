import { configureStore } from "@reduxjs/toolkit";
import categorySlice from "./slices/categorySlice";
import sortSlice from "./slices/sortSlice";
import searchSlice from "./slices/searchSlice";
import paginationSlice from "./slices/paginationSlice";

export const store = configureStore({
  reducer: {
    category: categorySlice,
    sort: sortSlice,
    search: searchSlice,
    pagination: paginationSlice,
  },
});
