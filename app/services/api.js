/**
 * @flow
 */

'use strict';

import apisauce from 'apisauce';

const Status = {
  OK: 200,
  ERROR_404: 404,
};

const create = (baseURL = 'https://clip-sub.com/wp-json/wp/v2/') => {
  const api = apisauce.create({
    baseURL,
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded',
      Accept: 'application/json; charset=UTF-8',
      'Cache-Control': 'no-cache',
    },
    timeout: 5000,
  });

  if (__DEV__ && console.tron) {
    api.addMonitor(console.tron.apisauce);
  }

  /**********************************
   * POSTS
   **********************************/
  // List posts: Posts: http://v2.wp-api.org/reference/posts/
  const listPosts = params => api.get('posts', { ...params, _embed: 1 });

  // Retrieve a post: https://developer.wordpress.org/rest-api/reference/posts/#retrieve-a-post
  const retrievePost = (id: number) => api.get('posts/' + id, { _embed: 1 });

  // Create post: https://developer.wordpress.org/rest-api/reference/posts/#create-a-post
  const createPost = args => api.post('posts', { ...args });

  // Update post: https://developer.wordpress.org/rest-api/reference/posts/#update-a-post
  const updatePost = (id, args) => {
    api.post('posts/' + id, { ...args });
  };

  // Delete post: https://developer.wordpress.org/rest-api/reference/posts/#delete-a-post
  const deletePost = id => {
    api.delete('posts/' + id);
  };

  /**********************************
   * POSTS Revisions
   **********************************/
  // List post revisions: https://developer.wordpress.org/rest-api/reference/post-revisions/#list-post-revisions
  const listPostRevisions = parentId => {
    api.get('posts/' + parentId + '/revisions');
  };

  // Retrieve single post revision: https://developer.wordpress.org/rest-api/reference/post-revisions/#retrieve-a-post-revision
  const retrievePostRevision = (parentId, id) => {
    api.get('posts/' + parentId + '/revisions' + id);
  };

  // Delete a post revision: https://developer.wordpress.org/rest-api/reference/post-revisions/#delete-a-post-revision
  const deletePostRevision = (parentId, id) => {
    api.delete('posts/' + parentId + '/revisions' + id);
  };

  /**********************************
   * PAGES
   **********************************/

  return {
    listPosts,
    retrievePost,
  };
};

export default { create };
export { Status };
