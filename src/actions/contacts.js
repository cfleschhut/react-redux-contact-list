import * as types from './actionTypes';

export const addContact = payload => {
  return {
    type: types.ADD_CONTACT,
    payload
  };
};

export const deleteContact = id => {
  return {
    type: types.DELETE_CONTACT,
    id
  };
};

export const favoriteContact = id => {
  return {
    type: types.FAVORITE_CONTACT,
    id
  };
};
