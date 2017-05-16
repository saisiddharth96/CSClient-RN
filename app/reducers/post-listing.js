'use strict';
import Types from '../actions/types-core';

const INITIAL_STATE = {
  currentPage: 1,
  postItems: [],
  status: 'loading',
  viewMode: 'list',
  args: null,
};

export const posts = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case Types.RECEIVE_POSTS:
      return {
        ...state,
        status: 'loaded',
        currentPage: action.currentPage,
        postItems: state.postItems.concat(action.posts),
        args: action.args,
      };
    case Types.CLEAR_POSTS:
      return {
        ...state,
        status: 'loading',
        currentPage: 1,
        postItems: [],
      };
    case Types.SET_POSTS_ARGS:
      return {
        ...state,
        args: action.args,
      };
    default:
      return state;
  }
};
