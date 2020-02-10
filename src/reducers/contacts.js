import * as types from '../actions/actionTypes';
import initialState from './data.json';

const contacts = (state = initialState, action) => {
  switch (action.type) {
    case types.FAVORITE_CONTACT:
      const newState = [...state];
      const contact = newState.find(contact => contact.id === action.id);

      contact.favorited = !contact.favorited;

      return newState;

    case types.DELETE_CONTACT:
      const filteredContacts = [
        ...state.filter(contact => contact.id !== action.id)
      ];

      return filteredContacts;

    default:
      return state;
  }
};

export default contacts;