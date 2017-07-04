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

export function receivePost(post: Object) {
  return {
    type: Types.RECEIVE_POST,
    post,
  };
}

export function receivePosts(list: Array, page: number, meta: Object) {
  return {
    type: Types.RECEIVE_POSTS,
    list,
    page,
    meta,
  };
}

export function receiveComment(comment) {
  return {
    type: Types.RECEIVE_COMMENT,
    comment,
  };
}
