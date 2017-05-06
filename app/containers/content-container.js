/**
 * @flow
 */
'use strict';
import React, { Component, PropTypes } from 'react';
import { Keyboard } from 'react-native';
import { connect } from 'react-redux';
import { NavigationActions } from 'react-navigation';
import {
  Container,
  Content,
  Header,
  Left,
  Button,
  Icon,
  Text,
} from 'native-base';
import ItemComment from '../components/items/item-comment';

class ContentContainer extends Component {
  static propTypes = {
    dispatch: PropTypes.func,
  };

  render() {
    return (
      <Container>
        <Header
          iosBarStyle={'dark-content'}
          style={{
            elevation: 0,
            borderBottomWidth: 0,
            backgroundColor: '#fff',
          }}
        >
          <Left>
            <Button transparent>
              <Icon style={{ color: '#EF5350' }} name="arrow-back" />
              <Text style={{ color: '#EF5350', marginLeft: 12 }}>Back</Text>
            </Button>
          </Left>
        </Header>
        <Content style={{ backgroundColor: '#fff' }}>
          <ItemComment />
        </Content>
      </Container>
    );
  }
}

const mapStateToProps = state => {
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
