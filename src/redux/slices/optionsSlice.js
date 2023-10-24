import { createSlice, current } from "@reduxjs/toolkit";

const initialState = {
  categoryId: 0,
  activeSortId: 0,
  activeSortType: "rating",
  activePageCount: 1,
};

const optionsSlice = createSlice({
  name: "option",
  initialState,
  reducers: {
    setCategoryId(state, action) {
      state.categoryId = action.payload;
    },
    setSortId(state, action) {
      state.activeSortId = action.payload;
    },
    setActiveSortType(state, action) {
      state.activeSortType = action.payload;
    },
    setPageCurrent(state, action) {
      state.activePageCount = action.payload;
    },
    setFilters(state, action) {
      state.activePageCount = Number(action.payload.currentPage);
      state.categoryId = Number(action.payload.categoryId);
      state.activeSortType = action.payload.sortProperty;
    },
  },
});

export const {
  setCategoryId,
  setSortId,
  setActiveSortType,
  setPageCurrent,
  setFilters,
} = optionsSlice.actions;

export default optionsSlice.reducer;
