import { createSlice } from '@reduxjs/toolkit';

const initialState = {
	isOpen: false,
};

const createArtistPopup = createSlice({
	name: 'createArtistPopup',
	initialState,
	reducers: {
		openPopup: (state) => {
			state.isOpen = true;
		},
		closePopup: (state) => {
			state.isOpen = false;
		},
	},
});

export const { openPopup, closePopup } = createArtistPopup.actions;
export default createArtistPopup.reducer;
