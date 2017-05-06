/**
 * @flow
 */
'use strict';
import React, { Component, PropTypes } from 'react';
import { Keyboard } from 'react-native';
import { connect } from 'react-redux';
import { NavigationActions } from 'react-navigation';
import { Container, Content, Header } from 'native-base';

class ContentContainer extends Component {
  static propTypes = {
    dispatch: PropTypes.func,
  };

  render() {
    return (
      <Container>
        <Header />
        <Content />
      </Container>
    );
  }
}

const mapStateToProps = state => {
  // Make sure to not pass "form" prop to the component which override the original one.
  // Info: https://github.com/erikras/redux-form/issues/827
  // TL;DR: Don't pass {...state}, only use what you want
  const { nav, common } = state;
  return {
    nav,
    common,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    goBack: () => {
      Keyboard.dismiss();
      dispatch(NavigationActions.back());
    },
    dispatch,
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ContentContainer);
