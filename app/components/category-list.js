/**
 * @flow
 */

'use strict';

import React, { Component } from 'react';
import { View } from 'react-native';
import { Spinner, List } from 'native-base';
import { getCategories } from '../actions/actions-categories';
import { CategorySearchBar } from './category-search-bar';
import { ItemCategory } from './items/item-category';

export default class CategoryList extends Component {
  constructor(props) {
    super(props);
    console.log(props);
    this.state = {
      filteredCategories: [],
    };
  }

  componentDidMount() {
    const { getCategories } = this.props;
    getCategories();
  }

  onLoadMoreCategories = () => {
    const { dispatch, categories } = this.props;
    const { pagesLoaded, loading } = categories;
    if (!loading) {
      dispatch(getCategories(pagesLoaded + 1));
    }
  };

  renderItem = item => {
    const { clearPosts, getPosts, switchHomeTab } = this.props;

    const onItemPress = () => {
      clearPosts();
      switchHomeTab(1);
      getPosts(1);
    };
    return (
      <ItemCategory
        id={item.id}
        title={item.title}
        postCount={item.post_count}
        parentId={item.parent}
        onPress={onItemPress}
      />
    );
  };

  renderCategorySearchBar = () => <CategorySearchBar {...this.props} />;

  renderLoadingIndicator = () => <Spinner />;

  renderCategoryList(categories) {
    const { status } = this.props;

    return (
      <List
        dataArray={categories}
        keyExtractor={item => item.id}
        pageSize={20}
        renderRow={item => this.renderItem(item)}
        initialNumToRender={15}
        style={{ alignSelf: 'stretch' }}
        onEndReached={this.onLoadMoreCategories}
        onEndReachedThreshold={2}
        renderHeader={this.renderCategorySearchBar}
        renderFooter={() =>
          status === 'loaded' ? null : <Spinner color="red" />}
      />
    );
  }

  render() {
    const { categories } = this.props;
    console.log(categories);

    return (
      <View
        style={{
          flex: 1,
          alignSelf: 'stretch',
          alignItems: 'center',
        }}
      >
        {this.renderCategoryList(categories.list)}
      </View>
    );
  }
}
