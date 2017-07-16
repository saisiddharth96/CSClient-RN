/**
 * @flow
 */

'use strict';

import Types from './types-pages';

export function getPage(pageId: number) {
  return {
    type: Types.GET_PAGE,
    pageId,
  };
}

export function clearPage() {
  return {
    type: Types.CLEAR_PAGE,
  };
}

export function receivePage(page: Object) {
  return {
    type: Types.RECEIVE_PAGE,
    page,
  };
}
