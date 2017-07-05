/**
 * @flow
 */

'use strict';
import Types from '../actions/types-categories';

const INITIAL_STATE = {
  loading: false,
  pagesLoaded: 0,
  categoryItems: [],
};

export const categories = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case Types.GET_CATEGORIES:
      return {
        ...state,
        loading: true,
      };
    case Types.RECEIVE_CATEGORY_INDEX:
      return {
        ...state,
        loading: false,
        pagesLoaded: action.page,
        categoryItems: action.categories,
      };
    default:
      return state;
  }
};
