/**
 * @flow
 */
'use strict';
import Types from './types-posts';

export function getPosts(page, args) {
  return {
    type: Types.GET_POSTS,
    page,
    ...args,
  };
}

export function clearPosts() {
  return {
    type: Types.CLEAR_POSTS,
  };
}

export function getPost(postId) {
  return {
    type: Types.GET_POST,
    postId,
  };
}

export function clearPost() {
  return {
    type: Types.CLEAR_POST,
  };
}
