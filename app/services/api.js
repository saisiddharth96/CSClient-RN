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
  const listPosts = (args: Object) => api.get('posts', { ...args, _embed: 1 });

  const retrievePost = (id: number) => api.get('posts/' + id, { _embed: 1 });

  const createPost = (args: Object) => api.post('posts', { ...args });

  const updatePost = (id, args) => {
    api.post('posts/' + id, { ...args });
  };

  const deletePost = id => {
    api.delete('posts/' + id);
  };

  /**********************************
   * POSTS Revisions
   **********************************/
  const listPostRevisions = (parentId: number) => {
    api.get('posts/' + parentId + '/revisions');
  };

  const retrievePostRevision = (parentId: number, id: number) => {
    api.get('posts/' + parentId + '/revisions' + id);
  };

  const deletePostRevision = (parentId: number, id: number) => {
    api.delete('posts/' + parentId + '/revisions' + id);
  };

  /**********************************
   * PAGES
   **********************************/

  /**********************************
   * USERS
   **********************************/

  const listUsers = (args: Object) => api.get('users/', { ...args });

  const retrieveUser = (id: Object) => api.get('users/' + id);

  const createUser = (args: Object) => api.post('users/', { ...args });

  const updateUser = (id: number, args: Object) =>
    api.post('users/' + id, { ...args });

  const deleteUser = (id: number, force: boolean, reassign: number) =>
    api.delete('users/' + id, { force, reassign });

  return {
    listPosts,
    retrievePost,
    createPost,
    updatePost,
    deletePost,

    listPostRevisions,
    retrievePostRevision,
    deletePostRevision,

    listUsers,
    retrieveUser,
    createUser,
    updateUser,
    deleteUser,
  };
};

export default { create };
export { Status };
