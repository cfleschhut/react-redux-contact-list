import * as types from './actionTypes';

export const favoriteContact = id => {
  return {
    type: types.FAVORITE_CONTACT,
    id
  };
};

export const deleteContact = id => {
  return {
    type: types.DELETE_CONTACT,
    id
  };
};
