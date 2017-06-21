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
  Spinner,
} from 'native-base';
import { getPost, clearPost } from '../actions/actions-posts';
import ItemComment from '../components/items/item-comment';
import CommentBox from '../components/comment-box';

class ContentContainer extends Component {
  static propTypes = {
    dispatch: PropTypes.func,
  };

  componentDidMount() {
    const { goBack, fetchPost } = this.props;
    const { postId } = this.props.navigation.state.params;
    fetchPost(postId);
    BackHandler.addEventListener('hardwareBackPress', () => goBack());
  }

  componentWillUnmount() {
    const { goBack, dispatch } = this.props;
    dispatch(clearPost());
    BackHandler.removeEventListener('hardwareBackPress', () => goBack());
  }

  renderListItem = item => <ItemComment {...item} />;

  renderContent = () => {
    let { content, excerpt, comments } = this.props.post;

    const itemNode = HTMLParser.parse(he.unescape(content));
    const imageLink = itemNode.querySelector('img').attributes['data-lazy-src'];

    let prefix =
      '<style>img{display: inline;height: auto;max-width: 100%;} p {font-family:"Tangerine", "Sans-serif",  "Serif" font-size: 48px} </style>';
    content = prefix.concat(content);

    return (
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

        <FlatList
          data={comments}
          keyExtractor={item => item.id}
          renderItem={({ item }) => this.renderListItem(item)}
        />

        <CommentBox />

      </Content>
    );
  };

  render() {
    const { goBack } = this.props;
    const { id } = this.props.post;

    return (
      <Container style={{ backgroundColor: '#fff' }}>
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

        {id !== null ? this.renderContent() : <Spinner color="red" />}

      </Container>
    );
  }
}

const mapStateToProps = state => {
  const { nav, post } = state;
  return {
    nav,
    post,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    goBack: () => {
      Keyboard.dismiss();
      return dispatch(NavigationActions.back());
    },
    fetchPost: postId => dispatch(getPost(postId)),
    dispatch,
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ContentContainer);
