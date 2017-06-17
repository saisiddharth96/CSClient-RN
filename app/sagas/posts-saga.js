/**
 * @flow
 */
'use strict';
import { call, put } from 'redux-saga/effects';
import { receivePosts } from '../actions/actions-posts';
import API from '../services/api';

const api = API.create();

export function* getPosts(action) {
  console.log(action);
  const { page, args } = action;
  try {
    const result = yield call(api.listPosts, { page });
    if (result.ok) {
      const meta = {
        total: parseInt(result.headers['x-wp-total']),
        totalPages: parseInt(result.headers['x-wp-totalpages']),
      };
      yield put(receivePosts(result.data, page));
    } else {
      console.log('Error');
    }
    console.log(result);
  } catch (error) {
    console.log(error);
  }
}
