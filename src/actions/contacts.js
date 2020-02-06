import * as types from './actionTypes';

export const favoriteContact = id => {
  return {
    type: types.FAVORITE_CONTACT,
    id
  };
};
