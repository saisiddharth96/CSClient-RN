/**
 * @flow
 */
'use strict';
import Types from './types-users';

export function requestLogin(username, password) {
  return {
    type: Types.REQUEST_LOGIN,
    username,
    password,
  };
}

export function generateAuthCookie(
  username: string,
  password: string,
  seconds: number,
) {
  return {
    type: Types.GENERATE_AUTH_COOKIE,
    username,
    password,
    seconds,
  };
}

export function generateAuthCookieSuccess(
  cookie: string,
  cookieName: string,
  user: Object,
) {
  return {
    type: Types.GENERATE_AUTH_COOKIE_OK,
    cookie,
    cookieName,
    user,
  };
}

export function listUsers(params) {
  // Ref: https://developer.wordpress.org/rest-api/reference/users/#list-users
  return {
    type: Types.LIST_USERS,
    params,
  };
}

export function retrievedListUsers(users) {
  return {
    type: Types.RETRIEVED_LIST_USERS,
    users,
  };
}

export function retrieveUser(id) {
  return {
    type: Types.RETRIEVE_USER,
    id,
  };
}

export function retrievedUser(user) {
  return {
    type: Types.RETRIEVED_USER,
    user,
  };
}

export function createUser(params) {
  return {
    type: Types.CREATE_USER,
    params,
  };
}

export function createdUser(user) {
  return {
    type: Types.CREATED_USER,
    user,
  };
}

export function updateUser(params) {
  return {
    type: Types.UPDATE_USER,
    params,
  };
}

export function updatedUser(params) {
  return {
    type: Types.UPDATE_USER,
    params,
  };
}

export function deleteUser(id) {
  return {
    type: Types.DELETE_USER,
    id,
  };
}

export function deletedUser(result) {
  return {
    type: Types.DELETED_USER,
    result,
  };
}

export function requestLogout() {
  return {
    type: Types.LOG_OUT,
  };
}
