/**
 * @flow
 */
'use strict';
import { call, put } from 'redux-saga/effects';
import {
  receiveError,
  receivePosts,
  receiveCategoryIndex,
} from '../actions/actions-core';
import API, { DataStatus } from '../services/API';

const api = API.create();

export function* getPosts(action) {
  const { page, args } = action;
  console.log(action.args);
  if (args) delete args.type;
  try {
    const result = yield call(api.getPosts, page, args);
    console.log(result);
    if (result.data.status === DataStatus.OK) {
      yield put(
        receivePosts(
          page,
          result.data.posts,
          result.data.count_total,
          result.data.pages,
          args,
        ),
      );
    } else {
      yield put(receiveError(result.data.error));
    }
  } catch (e) {
    console.log(e);
    yield put(receiveError(e));
  }
}

export function* getCategoryIndex(action) {
  const { parentId } = action;

  try {
    const result = yield call(api.getCategoryIndex, parentId);
    if (result.data.status === DataStatus.OK) {
      yield put(
        receiveCategoryIndex(result.data.categories, result.data.count),
      );
    } else {
      yield put(receiveError(result.data.error));
    }
  } catch (e) {
    console.log(e);
    yield put(receiveError(e));
  }
}
