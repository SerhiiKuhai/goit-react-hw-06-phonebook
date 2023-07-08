import { combineReducers } from 'redux';
// import { colorThemesReducer } from './colorThemes/reducer';
// import { languageReducer } from './language/reducer';
import { contactsReducer } from './phonebook/reducer';
const appReducer = combineReducers({
  //   themes: colorThemesReducer,
  //   languages: languageReducer,
  contacts: contactsReducer,
});
export default (state, action) => {
  return appReducer(state, action);
};
