/**
 * @flow
 */
'use strict';
import { takeLatest } from 'redux-saga/effects';
import PostTypes from '../actions/types-posts';
import UserTypes from '../actions/types-users';
import { getPosts, getPost } from './posts-saga';
import { login } from './auth-saga';

function* rootSaga() {
  yield [
    takeLatest(PostTypes.GET_POSTS, getPosts),
    takeLatest(PostTypes.GET_POST, getPost),
    // takeLatest(CoreTypes.GET_CATEGORY_INDEX, getCategoryIndex),
    //takeLatest(UserTypes.REQUEST_LOGIN, login),
    // fork(startup),
  ];
}

export default rootSaga;
