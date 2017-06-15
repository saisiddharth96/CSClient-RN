/**
 * @flow
 */

'use strict';

import React from 'react';
import { View, StatusBar } from 'react-native';
import {
  Body,
  Button,
  Container,
  Footer,
  FooterTab,
  Header,
  Icon,
  Left,
  Right,
  Title,
} from 'native-base';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import OneSignal from 'react-native-onesignal';
import PostList from '../components/post-list';
import CategoryList from '../components/category-list';
import * as navigationActions from '../actions/actions-navigation';

const HomeContainer = props => {
  const { navigate, home, dispatch } = props;

  const renderHomeContent = () => {
    switch (home.activeTabIndex) {
      case 1:
        return <PostList {...props.posts} dispatch={props.dispatch} />;
      case 2:
        return <CategoryList {...props.categories} dispatch={props.dispatch} />;
      case 3:
        return <View />;
      case 4:
        return <View />;
    }
  };

  return (
    <Container>
      <Header iosBarStyle={'light-content'}>
        <StatusBar backgroundColor="#d32f2f" barStyle="light-content" />
        <Left>
          <Button title={''} transparent onPress={() => navigate('drawerOpen')}>
            <Icon name="menu" />
          </Button>
        </Left>
        <Body>
          <Title>
            Clip-sub
          </Title>
        </Body>
        <Right>
          <Button transparent onPress={() => OneSignal.setSubscription(true)}>
            <Icon name="notifications" />
          </Button>
        </Right>
      </Header>
      {renderHomeContent()}
      <Footer>
        <FooterTab>
          <Button
            active={home.activeTabIndex === 1}
            onPress={() => dispatch(switchHomeTab(1))}
          >
            <Icon name="home" />
          </Button>
          <Button
            active={home.activeTabIndex === 2}
            onPress={() => dispatch(switchHomeTab(2))}
          >
            <Icon name="list" />
          </Button>
          <Button
            active={home.activeTabIndex === 3}
            onPress={() => dispatch(switchHomeTab(3))}
          >
            <Icon active name="navigate" />
          </Button>
          <Button
            active={home.activeTabIndex === 4}
            onPress={() => dispatch(switchHomeTab(4))}
          >
            <Icon name="person" />
          </Button>
        </FooterTab>
      </Footer>
    </Container>
  );
};

/**
 * If ownProps is specified as a second argument, its value will be the props passed to your component,
 * and mapStateToProps will be additionally re-invoked whenever the component receives new props.
 *
 * The result of mapStateToProps must be a plain object, which will be merged into component's props.
 */
const mapStateToProps = state => {
  const { posts, categories, home } = state;
  return {
    home,
    posts,
    categories,
  };
};

const mapDispatchToProps = dispatch =>
  bindActionCreators(navigationActions, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(HomeContainer);
