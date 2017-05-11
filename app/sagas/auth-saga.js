/**
 * @flow
 */
'use strict';
import { call, put } from 'redux-saga/effects';
import { setLoading } from '../actions/actions-misc';
import API, { DataStatus } from '../services/API';
import DataService from '../services/data-service';

const api = API.create();

export function* login(action) {
  const { username, password } = action;
  try {
    yield put(setLoading(true));
    const result = yield call(api.generateAuthCookie, username, password);
    if (result.data.status === DataStatus.OK) {
      DataService.storeUserData(result.data).done();
      yield put(setLoading(false));
      console.log(result.data);
    } else {
      console.log(result);
    }
  } catch (error) {
    console.log(error);
  }
}
