/**
 * @flow
 */
'use strict';
import { takeLatest } from 'redux-saga/effects';
import PostTypes from '../actions/types-posts';
import CategoryTypes from '../actions/types-categories';
import AniTypes from '../actions/types-anilist';
import CommentTypes from '../actions/types-comments';
import { getPosts, getPost } from './posts-saga';
import { getCategories } from './categories-saga';
import { fetchAnimeInfo } from './anilist-saga';
import { getCommentsHome } from './comments-saga';

function* rootSaga() {
  yield [
    takeLatest(PostTypes.GET_POSTS, getPosts),
    takeLatest(PostTypes.GET_POST, getPost),
    takeLatest(CategoryTypes.GET_CATEGORIES, getCategories),
    takeLatest(AniTypes.FETCH_ANIME_INFO, fetchAnimeInfo),
    takeLatest(CommentTypes.GET_COMMENTS_HOME, getCommentsHome),
    // fork(startup),
  ];
}

export default rootSaga;
