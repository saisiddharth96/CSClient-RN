/**
 * @flow
 */
'use strict';
import Types from './types-core';

export function getNonce(controller, method) {
  return {
    type: Types.GET_NONCE,
    controller,
    method,
  };
}

export function getPosts(page, args) {
  return {
    type: Types.GET_POSTS,
    page: page,
    args,
  };
}

export function clearPosts() {
  return {
    type: Types.CLEAR_POSTS,
  };
}

export function setPostsArgs(args) {
  console.log('1111', args);
  return {
    type: Types.SET_POSTS_ARGS,
    args,
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

export function getPage(pageId: number) {
  return {
    type: Types.GET_PAGE,
    page_id: pageId,
  };
}

export function getCategoryPosts(categoryId: number) {
  return {
    type: Types.GET_CATEGORY_POSTS,
    category_id: categoryId,
  };
}

export function getAuthorPosts(authorId: number) {
  return {
    type: Types.GET_AUTHOR_POSTS,
    authorId: authorId,
  };
}

export function getCategoryIndex(parentId: number) {
  return {
    type: Types.GET_CATEGORY_INDEX,
    parentId: parentId,
  };
}

export function receivePosts(
  currentPage: number,
  posts: Array<Object>,
  countTotal: number,
  pages: number,
  args: Object,
) {
  return {
    type: Types.RECEIVE_POSTS,
    currentPage: currentPage,
    posts: posts,
    countTotal: countTotal,
    pages: pages,
    args,
  };
}

export function receiveRecentPosts(
  currentPage: number,
  posts: Array<Object>,
  count: number,
  countTotal: number,
  pages: number,
) {
  return {
    type: Types.RECEIVE_RECENT_POSTS,
    currentPage: number,
    posts: posts,
    count: count,
    countTotal: countTotal,
    pages: pages,
  };
}

export function receivePost(post: Object) {
  return {
    type: Types.RECEIVE_POST,
    post,
  };
}

export function receivePage(page: Object) {
  return {
    type: Types.RECEIVE_PAGE,
    page,
  };
}

export function receiveCategoryIndex(
  categories: ?Array<any> = [],
  count: number = 0,
) {
  return {
    type: Types.RECEIVE_CATEGORY_INDEX,
    categories: categories,
    count: count,
  };
}

export function receiveNonce(
  nonce: string,
  controller: string,
  method: string,
) {
  return {
    type: Types.RECEIVE_NONCE,
    nonce: nonce,
    controller: controller,
    method: method,
  };
}

export function receiveError(error) {
  return {
    type: Types.RECEIVE_ERROR,
    error: error,
  };
}
