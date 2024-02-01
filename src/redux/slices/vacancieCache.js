import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  data: {},
}

const cachedSliceData = createSlice({
  name: 'cachedSliceData',
  initialState,
  reducers: {
    setCache: (state, {payload}) => {
      state.data = {...payload};
    },
    clearCache: (state) => {
      state.data = {};
    },
  },
});

export const { setCache, clearCache } = cachedSliceData.actions;
export default cachedSliceData.reducer;