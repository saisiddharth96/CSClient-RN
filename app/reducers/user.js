'use strict';
import Types from '../actions/types-users';

const INITIAL_STATE = {
  id: null,
  cookie: null,
  cookieName: null,
  username: null,
  nickname: null,
  registered: null,
  email: null,
  password: null,
};

export const user = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case Types.GENERATE_AUTH_COOKIE_OK:
      return {
        ...state,
        cookie: action.cookie,
        cookieName: action.cookieName,
        id: action.user.id,
        username: action.user.username,
        nickname: action.user.nickname,
        registered: action.user.registered,
        email: action.user.email,
        password: action.user.password,
      };
    case Types.LOG_OUT:
      console.log('kaka');
      return INITIAL_STATE;
    default:
      return state;
  }
};

