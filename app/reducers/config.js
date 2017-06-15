/**
 * @flow
 */
'use strict';

import Types from '../actions/types-config';

const INIT_STATE = {
  viewMode: 'grid',
  notifications: true,
  theme: null,
};

export const config = (state = INIT_STATE, action) => {
  switch (action.type) {
    case Types.RECEIVE_POST:
      return {
        ...state,
        ...action.post,
      };
    default:
      return state;
  }
};
