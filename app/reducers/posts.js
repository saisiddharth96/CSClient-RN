/**
 * @flow
 */
'use strict';

import Types from '../actions/types-posts';

const INITIAL_STATE = {
  page: 1,
  posts: [],
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
        page: action.page,
        posts: state.posts.concat(action.posts),
        args: action.args,
      };
    case Types.CLEAR_POSTS:
      return {
        ...state,
        status: 'loading',
        currentPage: 1,
        postItems: [],
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
