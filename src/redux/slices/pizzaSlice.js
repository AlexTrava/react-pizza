import { createAsyncThunk, createSlice, current } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchPizzas = createAsyncThunk(
  "pizza/fetchPizzaStatus",
  async ({ URL_ITEMS, currentPage, categoryId, typeSort, searchValue }) => {
    const { data } = await axios.get(
      `${URL_ITEMS}?page=${currentPage}&limit=4&${
        categoryId > 0 ? `category=${categoryId}` : ""
      }&sortBy=${typeSort}${
        searchValue ? `&search=${searchValue}` : ""
      }&order=desc`,
    );
    return data;
  },
);

const initialState = {
  items: [],
  status: "loading", //loading, error, succes
};

const pizzaSlice = createSlice({
  name: "pizza",
  initialState,
  reducers: {},
  extraReducers: {
    [fetchPizzas.pending]: (state, action) => {
      state.status = "loading";
    },
    [fetchPizzas.fulfilled]: (state, action) => {
      state.items = action.payload;
      state.status = "succes";
    },
    [fetchPizzas.rejected]: (state, action) => {
      state.status = "error";
    },
  },
});

export const { setItems } = pizzaSlice.actions;

export default pizzaSlice.reducer;
