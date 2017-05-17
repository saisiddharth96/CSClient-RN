/**
 * @flow
 */
'use strict';
import React, { Component, PropTypes } from 'react';
import { View, FlatList } from 'react-native';
import { Spinner } from 'native-base';
import { getPosts, clearPosts } from '../actions/actions-core';
import { PostMenuBar } from './post-menu-bar';
import { ItemPostCard } from './items/item-post-card';
import { ItemPostGrid } from './items/item-post-grid';

export default class PostList extends Component {
  static propTypes = {
    currentPage: PropTypes.number.isRequired,
    postItems: PropTypes.arrayOf(PropTypes.object),
    status: PropTypes.oneOf(['loading', 'error', 'loaded']),
    viewMode: PropTypes.oneOf(['list', 'grid']),
  };

  static defaultProps = {
    status: 'loading',
    viewMode: 'list',
  };

  componentDidMount() {
    const { dispatch, currentPage, args } = this.props;
    if (!args) return dispatch(getPosts(currentPage));
    if (args.cat) return dispatch(getPosts(currentPage, { cat: args.cat }));
  }

  componentWillUnmount() {
    const { dispatch } = this.props;
    dispatch(clearPosts());
  }

  onEndReached = () => {
    const { dispatch, status, currentPage, args } = this.props;
    if (status !== 'loading') {
      if (!args) return dispatch(getPosts(currentPage + 1));
      if (args.cat)
        return dispatch(getPosts(currentPage + 1, { cat: args.cat }));
    }
  };

  renderListItem = item => <ItemPostCard post={item} {...this.props} />;
  renderGridItem = item => <ItemPostGrid post={item} {...this.props} />;
  renderPostMenuBar = () => <PostMenuBar {...this.props} />;
  renderLoadingIndicator = () => <Spinner color="red" />;

  renderPostList(posts) {
    return (
      <FlatList
        data={posts}
        keyExtractor={item => item.id}
        renderItem={({ item }) => this.renderListItem(item)}
        onEndReached={this.onEndReached}
        onEndReachedThreshold={1}
        ListFooterComponent={this.renderLoadingIndicator}
      />
    );
  }

  renderPostGrid(posts) {
    return (
      <FlatList
        data={posts}
        keyExtractor={item => item.id}
        renderItem={({ item }) => this.renderGridItem(item)}
        onEndReached={this.onEndReached}
        onEndReachedThreshold={1}
        numColumns={2}
        style={{ alignSelf: 'stretch' }}
        columnWrapperStyle={{
          marginTop: 5,
          flexWrap: 'wrap',
          justifyContent: 'space-between',
        }}
        ListFooterComponent={this.renderLoadingIndicator}
      />
    );
  }

  render() {
    const { status, viewMode, postItems } = this.props;
    console.log(this.props.viewMode);
    return (
      <View style={{ flex: 1, alignItems: 'center', backgroundColor: '#fff' }}>
        {this.renderPostMenuBar()}
        {status === 'loaded' && postItems.length > 0
          ? viewMode === 'grid' ? this.renderPostGrid(postItems) : null
          : <Spinner color="red" />}
      </View>
    );
  }
}
