/**
 * @flow
 */
'use strict';
import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { StyleProvider } from 'native-base';
import getTheme from '../native-base-theme/components';
import megumi from '../native-base-theme/variables/megumi';
import CustomStore from './stores/custom-store';
import RootContainer from './containers/root-container';

const store = CustomStore();

export default class CSClient extends Component {
  render() {
    return (
      <StyleProvider style={getTheme(megumi)}>
        <Provider store={store}>
          <RootContainer />
        </Provider>
      </StyleProvider>
    );
  }
}
