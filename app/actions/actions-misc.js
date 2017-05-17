/**
 * @flow
 */
'use strict';

import Types from './types-misc';

/**
 * 
 * @param {*} viewMode: One of 'list' / 'grid'
 */
export function setViewMode(viewMode: string) {
  return {
    type: Types.SET_VIEW_MODE,
    viewMode,
  };
}
