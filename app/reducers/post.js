'use strict';
import Types from '../actions/types-core';

const INITIAL_STATE = {
  id: null,
  author: null,
  categories: [],
  comments: [],
  content: '',
  date: null,
  modified: null,
  excerpt: [],
  slug: null,
  tags: [],
  title: null,
  url: null,
};

export const post = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case Types.GET_POST:
      return {
        ...state,
      };
    case Types.RECEIVE_POST:
      const {
        id,
        author,
        categories,
        comments,
        content,
        date,
        modified,
        excerpt,
        slug,
        tags,
        title,
        url,
      } = action.post;
      return {
        ...state,
        id,
        author,
        categories,
        comments,
        content,
        date,
        modified,
        excerpt,
        slug,
        tags,
        title,
        url,
      };
    case Types.CLEAR_POST:
      return INITIAL_STATE;
    default:
      return state;
  }
};
