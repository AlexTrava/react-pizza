import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  activeSortId: 0,
  activeSortType: "rating",
};

const sortSlice = createSlice({
  name: "sortPopUp",
  initialState,
  reducers: {
    setSortId(state, action) {
      state.activeSortId = action.payload;
    },
    setActiveSortType(state, action) {
      state.activeSortType = action.payload;
    },
  },
});

export const { setSortId, setActiveSortType } = sortSlice.actions;

export default sortSlice.reducer;
