import { configureStore } from "@reduxjs/toolkit";
import popupSlice from "./slices/popupSlice";
import cachedSliceData from './slices/vacancieCache';

export const store = configureStore({
  reducer: {
    popupSlice,
    cachedSliceData,
  },
})