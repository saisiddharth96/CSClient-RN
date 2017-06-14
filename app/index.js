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
import RootContainer from './containers/index';

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

const customTheme = {
  'megumi.CustomComponent': {
    formContainer: {
      borderRadius: 10,
      borderWidth: 0,
      borderColor: '#fff',
      paddingTop: 26,
      paddingBottom: 18,
      marginHorizontal: 26,
      marginTop: 50,
      padding: 12,
      alignSelf: 'stretch',
    },
    inputWrapper: {
      alignItems: 'center',
      flexWrap: 'nowrap',
      flexDirection: 'row',
      marginBottom: 12,
      paddingHorizontal: 12,
      borderRadius: 21,
      borderWidth: 0.6,
      borderColor: 'rgba(0,0,0,0.2)',
      backgroundColor: 'rgba(0,0,0,0.3)',
    },
    inputWrapperError: {
      borderColor: '#EF5350',
    },
    input: {
      height: 42,
      flexGrow: 3,
      color: '#dbc5e0',
      fontSize: 14,
      marginLeft: 8,
      alignSelf: 'stretch',
      borderBottomWidth: 0,
      borderBottomColor: '#eee', // error: #ff4e4e
    },
    icon: {
      fontSize: 20,
      color: '#f2c9f9',
    },
    placeholderTextColor: 'rgba(255, 239, 239, 0.4)',
  },
};
