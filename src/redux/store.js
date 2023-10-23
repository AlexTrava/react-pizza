import { configureStore } from "@reduxjs/toolkit";
import searchSlice from "./slices/searchSlice";
import optionsSlice from "./slices/optionsSlice";

export const store = configureStore({
  reducer: {
    options: optionsSlice,
    search: searchSlice,
  },
});

// , , currentPage
// , sortSlice, paginationSlice

// down categoryId typeSort
