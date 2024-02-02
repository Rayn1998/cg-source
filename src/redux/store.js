import { configureStore } from "@reduxjs/toolkit";
import popupSlice from "./slices/popupSlice";
import cachedSliceData from './slices/vacancieCache';
import pageType from './slices/pageType';
import positionFilter from "./slices/positionFilter";
import createArtistPopup from "./slices/createArtistPopup";
import createVacanciePopup from "./slices/createVacanciePopup";

export const store = configureStore({
  reducer: {
    popupSlice,
    cachedSliceData,
    pageType,
    positionFilter,
    createArtistPopup,
    createVacanciePopup,
  },
})