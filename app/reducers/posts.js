/**
 * @flow
 */
'use strict';

import Types from '../actions/types-posts';

const POST_INIT_STATE = {
  id: 1,
  title: null,
  excerpt: '',
  content: null,
};

export const post = (state = POST_INIT_STATE, action) => {
  switch (action.type) {
    case Types.RECEIVE_POST:
      return {
        ...state,
        ...action.post,
      };
    default:
      return state;
  }
};

const POSTS_INITIAL_STATE = {
  page: 1,
  total: 0,
  totalPages: 0,
  list: [],
  status: 'loading',
  viewMode: 'grid',
  args: null,
};

export const posts = (state = POSTS_INITIAL_STATE, action) => {
  switch (action.type) {
    case Types.GET_POSTS:
      console.log(action);
      return {
        ...state,
        status: 'loading',
      };
    case Types.RECEIVE_POSTS:
      return {
        ...state,
        status: 'loaded',
        page: action.page,
        list: state.list.concat(action.list),
        args: action.args,
      };
    case Types.CLEAR_POSTS:
      return {
        ...state,
        currentPage: 1,
        postItems: [],
      };
    default:
      return state;
  }
};
