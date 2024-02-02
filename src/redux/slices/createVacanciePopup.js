import { createSlice } from '@reduxjs/toolkit';

const initialState = {
	isOpen: false,
};

const createVacanciePopup = createSlice({
	name: 'createVacanciePopup',
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

export const { openPopup, closePopup } = createVacanciePopup.actions;
export default createVacanciePopup.reducer;
