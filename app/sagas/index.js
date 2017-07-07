/**
 * @flow
 */
'use strict';
import { takeLatest } from 'redux-saga/effects';
import PostTypes from '../actions/types-posts';
import CategoryTypes from '../actions/types-categories';
import AniTypes from '../actions/types-anilist';
import { getPosts, getPost } from './posts-saga';
import { getCategories } from './categories-saga';
import { login } from './auth-saga';
import { fetchAnimeInfo } from './anilist-saga';

function* rootSaga() {
  yield [
    takeLatest(PostTypes.GET_POSTS, getPosts),
    takeLatest(PostTypes.GET_POST, getPost),
    takeLatest(CategoryTypes.GET_CATEGORIES, getCategories),
    takeLatest(AniTypes.FETCH_ANIME_INFO, fetchAnimeInfo),
    // fork(startup),
  ];
}

export default rootSaga;
