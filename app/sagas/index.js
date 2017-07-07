/**
 * @flow
 */
'use strict';
import { takeLatest } from 'redux-saga/effects';
import PostTypes from '../actions/types-posts';
import AniTypes from '../actions/types-anilist';
import { getPosts, getPost } from './posts-saga';
// import * from './categories-saga';
import { login } from './auth-saga';
import { fetchAnimeInfo } from './anilist-saga';

function* rootSaga() {
  yield [
    takeLatest(PostTypes.GET_POSTS, getPosts),
    takeLatest(PostTypes.GET_POST, getPost),
    // takeLatest(CoreTypes.GET_CATEGORY_INDEX, getCategoryIndex),
    takeLatest(AniTypes.FETCH_ANIME_INFO, fetchAnimeInfo),
    // fork(startup),
  ];
}

export default rootSaga;
