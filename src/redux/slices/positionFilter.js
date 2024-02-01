import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  filter: [],
}

const positionFilter = createSlice({
  name: 'positionFilter',
  initialState,
  reducers: {
    addFilter: (state, { payload }) => {
      state.filter.push(payload);
    },
    removeFilter: (state, { payload }) => {
      state.filter = state.filter.filter((item) => item !== payload);
    }
  }
});

export const { addFilter, removeFilter } = positionFilter.actions;
export default positionFilter.reducer;