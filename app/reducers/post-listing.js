'use strict';
import CoreTypes from '../actions/types-core';
import MiscTypes from '../actions/types-misc';

const INITIAL_STATE = {
  currentPage: 1,
  postItems: [],
  status: 'loading',
  viewMode: 'list',
  args: null,
};

export const posts = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case CoreTypes.RECEIVE_POSTS:
      return {
        ...state,
        status: 'loaded',
        currentPage: action.currentPage,
        postItems: state.postItems.concat(action.posts),
        args: action.args,
      };
    case CoreTypes.CLEAR_POSTS:
      return {
        ...state,
        status: 'loading',
        currentPage: 1,
        postItems: [],
      };
    case CoreTypes.SET_POSTS_ARGS:
      return {
        ...state,
        args: action.args,
      };
    case MiscTypes.SET_VIEW_MODE:
      return {
        ...state,
        viewMode: action.viewMode,
      };
    default:
      return state;
  }
};
