import { createSlice } from '@reduxjs/toolkit';

const contactSlice = createSlice({
  name: 'contact',
  initialState: [],
  reducers: {
    addContact(state, action) {
      return [...state, action.payload];
    },
    deleteContact(state, action) {
      return state.filter(({ id }) => id !== action.payload.id);
    },
  },
});

export const addContact = contactSlice.actions.addContact;
export const deleteContact = contactSlice.actions.deleteContact;

export const contactsReducer = contactSlice.reducer;
