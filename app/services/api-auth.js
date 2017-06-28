/**
 * @flow
 */

'use strict';

import apisauce from 'apisauce';

const Status = {
  OK: 200,
  ERROR_404: 404,
};

const create = (baseURL = 'https://clip-sub.com/api/') => {
  const api = apisauce.create({
    baseURL,
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded',
      Accept: 'application/json',
      'Cache-Control': 'no-cache',
    },
    timeout: 5000,
  });

  if (__DEV__ && console.tron) {
    api.addMonitor(console.tron.apisauce);
  }

  const getNonce = (controller: string, method: string) =>
    api.post('get_nonce/', { controller, method });

  const generateAuthCookie = (username, password) =>
    api.get('user/generate_auth_cookie/', { username, password });

  return {
    getNonce,
    generateAuthCookie,
  };
};

export default { create };
export { Status };
