/**
 * @flow
 */
'use strict';
import React, { Component, PropTypes } from 'react';
import { Keyboard, StatusBar, BackHandler, WebView } from 'react-native';
import { connect } from 'react-redux';
import { NavigationActions } from 'react-navigation';
import HTMLView from 'react-native-htmlview';
import parse5 from 'parse5';
import HTMLParser from 'fast-html-parser';
import he from 'he';
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

  componentDidMount() {
    const { goBack } = this.props;
    BackHandler.addEventListener('hardwareBackPress', () => goBack());
  }

  componentWillUnmount() {
    const { goBack } = this.props;
    BackHandler.removeEventListener('hardwareBackPress', () => goBack());
  }

  render() {
    const { goBack } = this.props;
    const params = this.props.navigation.state.params;
    const { content } = this.props.navigation.state.params;
    const node = parse5.parse(content);
    console.log('node', node);

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
            <Button transparent onPress={() => goBack()}>
              <Icon style={{ color: '#EF5350' }} name="arrow-back" />
              <Text style={{ color: '#EF5350', marginLeft: 12 }}>Back</Text>
            </Button>
          </Left>
        </Header>
        <StatusBar backgroundColor={'#fff'} />
        <Content style={{ backgroundColor: '#fff' }}>
          <WebView javaScriptEnabled={false} scalesPageToFit={false} style={{ height: 300 }} source={{ html: he.unescape(content) }} />
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
      return dispatch(NavigationActions.back());
    },
    dispatch,
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ContentContainer);
