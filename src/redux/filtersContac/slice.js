import { createSlice } from '@reduxjs/toolkit';

const filtersContactSlice = createSlice({
  name: 'filtersContact',
  initialState: {
    filtersContact: '',
  },
  reducer: {
    addFiltersContact(state, action) {
      return { ...state, filtersContact: action.payload };
    },
  },
});

export const addFiltersContact = filtersContactSlice.actions.addFiltersContact;

export const filtersContactReducer = filtersContactSlice.reducer;
