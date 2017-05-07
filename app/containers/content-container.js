/**
 * @flow
 */
'use strict';
import React, { Component, PropTypes } from 'react';
import {
  Keyboard,
  View,
  StatusBar,
  BackHandler,
  Image,
  FlatList,
} from 'react-native';
import { connect } from 'react-redux';
import { NavigationActions } from 'react-navigation';
import HTMLView from 'react-native-htmlview';
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
import CommentBox from '../components/comment-box';

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

  renderListItem = item => <ItemComment {...item} />;

  render() {
    const { goBack } = this.props;
    let { content, excerpt, comments } = this.props.navigation.state.params;

    const itemNode = HTMLParser.parse(he.unescape(content));
    const imageLink = itemNode.querySelector('img').attributes['data-lazy-src'];

    let prefix =
      '<style>img{display: inline;height: auto;max-width: 100%;} p {font-family:"Tangerine", "Sans-serif",  "Serif" font-size: 48px} </style>';
    content = prefix.concat(content);

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
          <View style={{ marginVertical: 26 }}>
            <Image
              source={{ uri: imageLink }}
              style={{
                flex: 1,
                width: undefined,
                height: 160,
                resizeMode: 'contain',
              }}
            />
          </View>
          <HTMLView
            style={{ paddingHorizontal: 12, marginBottom: 10 }}
            value={excerpt.trim()}
          />

          <CommentBox />

          <FlatList
            data={comments}
            keyExtractor={item => item.id}
            renderItem={({ item }) => this.renderListItem(item)}
          />
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
