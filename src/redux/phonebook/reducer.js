import { ADD_CONTACT, DELETE_CONTACT, UPDATE_CONTACT } from './types';

const defaultState = [
  { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
  { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
  { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
  { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
];

export const contactsReducer = (state = defaultState, action) => {
  switch (action.type) {
    case ADD_CONTACT: {
      return [...state, action.payload];
    }
    case DELETE_CONTACT: {
      return state.filter(({ id }) => id !== action.payload.id);
    }
    case UPDATE_CONTACT: {
      return state.reduce((accumulator, existingContact) => {
        if (existingContact.name === action.payload.name) {
          accumulator.push(action.payload);
          return accumulator;
        }
        accumulator.push(existingContact);
        return accumulator;
      }, []);
    }
    default:
      return state;
  }
};
