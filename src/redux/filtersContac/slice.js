import { createSlice } from '@reduxjs/toolkit';

const filtersContactSlice = createSlice({
  name: 'filtersContact',
  initialState: '',
  reducer: {
    addFiltersContact(state, action) {
      return action.payload;
    },
  },
});

export const { addFiltersContact } = filtersContactSlice.actions;
export const filtersContactReducer = filtersContactSlice.reducer;
