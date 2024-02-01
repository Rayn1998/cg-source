import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  type: 'jobs',
}

const pageType = createSlice({
  name: 'pageType',
  initialState,
  reducers: {
    setJobs: (state) => {
      state.type = 'jobs';
    },
    setArtists: (state) => {
      state.type = 'artists';
    }
  }
});

export const { setJobs, setArtists } = pageType.actions;
export default pageType.reducer;