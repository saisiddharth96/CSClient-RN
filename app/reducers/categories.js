/**
 * @flow
 */

'use strict';
import Types from '../actions/types-categories';

const INITIAL_STATE = {
  loading: false,
  list: [],
};

export const categories = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case Types.GET_CATEGORIES:
      return {
        ...state,
        loading: true,
      };
    case Types.RECEIVE_CATEGORIES:
      return {
        ...state,
        loading: false,
        list: action.categories,
      };
    default:
      return state;
  }
};
