import * as types from '../actions/actionTypes';
import initialState from './data.json';

const applyFavoriteContact = (state, action) => {
  const newState = [...state];
  const contact = newState.find(contact => contact.id === action.id);

  contact.favorited = !contact.favorited;

  return newState;
};

const applyAddContact = (state, action) => {
  const newContact = {
    id: state[state.length - 1].id + 1,
    ...action.payload
  };

  return [...state, newContact];
};

const applyDeleteContact = (state, action) => {
  const filteredContacts = [
    ...state.filter(contact => contact.id !== action.id)
  ];

  return filteredContacts;
};

const contacts = (state = initialState, action) => {
  switch (action.type) {
    case types.FAVORITE_CONTACT:
      return applyFavoriteContact(state, action);

    case types.ADD_CONTACT:
      return applyAddContact(state, action);

    case types.DELETE_CONTACT:
      return applyDeleteContact(state, action);

    default:
      return state;
  }
};

export default contacts;
