import { configureStore } from "@reduxjs/toolkit";
import popupSlice from "./slices/popupSlice";
import cachedSliceData from './slices/vacancieCache';
import pageType from './slices/pageType';
import positionFilter from "./slices/positionFilter";

export const store = configureStore({
  reducer: {
    popupSlice,
    cachedSliceData,
    pageType,
    positionFilter,
  },
})