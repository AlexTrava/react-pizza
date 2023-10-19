import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  activePageCount: 1,
};

const paginationSlice = createSlice({
  name: "pagination",
  initialState,
  reducers: {
    setPageCurrent(state, action) {
      state.activePageCount = action.payload;
    },
  },
});

export const { setPageCurrent } = paginationSlice.actions;

export default paginationSlice.reducer;
