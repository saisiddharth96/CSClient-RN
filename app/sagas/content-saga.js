/**
 * @flow
 */
'use strict';
import { call, put } from 'redux-saga/effects';
import API, { DataStatus } from '../services/API';
import { receivePost, receiveError } from '../actions/actions-core';

const api = API.create();

export function* getPost(action) {
  const { postId } = action;
  try {
    const result = yield call(api.getPost, postId);
    console.log(result);
    if (result.data.status === DataStatus.OK) {
      const { post } = result.data;
      yield put(receivePost(post));
    } else {
      yield put(receiveError(result.data));
    }
  } catch (error) {
    console.log(error);
    yield put(receiveError(error));
  }
}
