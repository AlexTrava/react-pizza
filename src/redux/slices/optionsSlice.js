import { createSlice } from "@reduxjs/toolkit";

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
  },
});

export const { setCategoryId, setSortId, setActiveSortType, setPageCurrent } =
  optionsSlice.actions;

export default optionsSlice.reducer;
