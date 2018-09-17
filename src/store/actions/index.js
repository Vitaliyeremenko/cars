import * as actionTypes from './actionTypes';

export const changeCurrentItem = (id) => {
  return {
    type: actionTypes.CHANGE_CURRENT_ITEM,
    id: id
  };
};