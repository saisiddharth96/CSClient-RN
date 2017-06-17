/**
 * @flow
 */
'use strict';
import React, { PureComponent, PropTypes } from 'react';
import { View, FlatList } from 'react-native';
import { Spinner, List } from 'native-base';
// import { getPosts, clearPosts } from '../actions/actions-posts';
import { PostMenuBar } from './post-menu-bar';
import { ItemPostCard } from './items/item-post-card';
import { ItemPostGrid } from './items/item-post-grid';

export default class PostList extends PureComponent {
  static propTypes = {
    postItems: PropTypes.arrayOf(PropTypes.object),
    status: PropTypes.oneOf(['loading', 'error', 'loaded']),
    viewMode: PropTypes.oneOf(['list', 'grid']),
  };

  static defaultProps = {
    status: 'loading',
    viewMode: 'grid',
  };

  componentDidMount() {
    const { getPosts, posts } = this.props;
    const { page } = posts;
    getPosts(page);
  }

  componentWillUnmount() {
    const { clearPosts } = this.props;
    clearPosts();
  }

  onEndReached = () => {
    const { getPosts, args } = this.props;
    const { status, page } = this.props.posts;
    console.log(this.props.posts);
    if (status !== 'loading') {
      if (!args) return getPosts(page + 1);
    }
  };

  renderPostMenuBar = () => <PostMenuBar {...this.props} />;
  renderLoadingIndicator = () => <Spinner color="red" />;

  renderPostList(items) {
    const { navigate } = this.props;
    return (
      <List
        dataArray={items}
        renderRow={item => <ItemPostCard post={item} navigate={navigate} />}
        onEndReached={this.onEndReached}
        onEndReachedThreshold={1}
        renderFooter={this.renderLoadingIndicator}
      />
    );
  }

  renderPostGrid(posts) {
    return (
      <FlatList
        data={posts}
        keyExtractor={item => item.id}
        renderItem={({ item }) => <ItemPostGrid post={item} />}
        onEndReached={this.onEndReached}
        onEndReachedThreshold={1}
        numColumns={2}
        style={{ alignSelf: 'stretch' }}
        columnWrapperStyle={{
          marginTop: 6,
          flexWrap: 'wrap',
          justifyContent: 'space-between',
        }}
        ListFooterComponent={this.renderLoadingIndicator}
      />
    );
  }

  render() {
    const { list } = this.props.posts;
    return (
      <View style={{ flex: 1, alignItems: 'center', backgroundColor: '#fff' }}>
        {this.renderPostList(list)}
      </View>
    );
  }
}
