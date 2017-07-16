/**
 * @flow
 */

'use strict';

import { call, put } from 'redux-saga/effects';
import { receivePage } from '../actions/actions-pages';
import API from '../services/api';

const api = API.create();

export function* getPage(action) {
  const { pageId } = action;
  try {
    const result = yield call(api.retrievePage, pageId);
    if (result.ok) {
      yield put(receivePage(result.data));
    }
  } catch (error) {
    console.log(error);
  }
}
