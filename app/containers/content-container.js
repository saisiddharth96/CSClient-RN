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
  Header,
  Left,
  Button,
  Icon,
  Text,
  Spinner,
} from 'native-base';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import { getPost, clearPost } from '../actions/actions-posts';
import ItemComment from '../components/items/item-comment';
import CommentBox from '../components/comment-box';
import CommentBoxAuthenticated from '../components/comment-box-authenticated';

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

  renderCommentItem = item => <ItemComment comment={item} />;

  renderContent = () => {
    let { content, excerpt } = this.props.post;
    const { user } = this.props;
    console.log(user);
    const { replies } = this.props.post._embedded;
    const itemNode = HTMLParser.parse(he.unescape(content.rendered));
    const imageLink = itemNode.querySelector('img').attributes['src'];

    let prefix =
      '<style>img{display: inline;height: auto;max-width: 100%;} p {font-family:"Tangerine", "Sans-serif",  "Serif" font-size: 48px} </style>';
    content = prefix.concat(content.rendered);

    return (
      <KeyboardAwareScrollView
        extraHeight={100}
        style={{ backgroundColor: '#fff' }}
      >
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
          value={excerpt.rendered.trim()}
        />

        <FlatList
          data={replies && replies.length > 0 ? replies[0] : null}
          keyExtractor={item => item.id}
          renderItem={({ item }) => this.renderCommentItem(item)}
        />
        {user ? <CommentBoxAuthenticated /> : <CommentBox />}
      </KeyboardAwareScrollView>
    );
  };

  render() {
    const { goBack } = this.props;
    const { title } = this.props.post;
    console.log(this.props.post);

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

        {title !== null ? this.renderContent() : <Spinner color="red" />}

      </Container>
    );
  }
}

const mapStateToProps = state => {
  const { nav, post, user } = state;
  return {
    nav,
    post,
    user,
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
