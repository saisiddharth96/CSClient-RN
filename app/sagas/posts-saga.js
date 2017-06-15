/**
 * @flow
 */
'use strict';
import { call, put } from 'redux-saga/effects';
import { receiveError, receivePosts } from '../actions/actions-posts';
import API from '../services/api';

const api = API.create();

export function* getPosts(action) {
  const { page, args } = action;
}
