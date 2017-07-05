/**
 * @flow
 */

'use strict';

import React, { PureComponent, PropTypes } from 'react';
import { View } from 'react-native';
import { Spinner, List } from 'native-base';
import { getCategories } from '../actions/actions-categories';
import { CategorySearchBar } from './category-search-bar';
import { ItemCategory } from './items/item-category';

export default class CategoryList extends PureComponent {
  static propTypes = {
    loading: PropTypes.bool.isRequired,
    pagesLoaded: PropTypes.number.isRequired,
    categoryItems: PropTypes.arrayOf(PropTypes.object),
  };

  componentDidMount() {
    const { dispatch, categories } = this.props;
    const { pagesLoaded } = categories;
    dispatch(getCategories(pagesLoaded + 1));
  }

  onLoadMoreCategories = () => {
    const { dispatch, categories } = this.props;
    const { pagesLoaded, loading } = categories;
    if (!loading) {
      dispatch(getCategories(pagesLoaded + 1));
    }
  };

  renderItem = item => {
    const { dispatch } = this.props;
    return (
      <ItemCategory
        id={item.id}
        title={item.title}
        postCount={item.post_count}
        parentId={item.parent}
        dispatch={dispatch}
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
        renderHeader={() => <Spinner color="blue" />}
        renderFooter={() =>
          status === 'loaded' ? null : <Spinner color="red" />}
      />
    );
  }

  render() {
    const { categoryItems } = this.props;

    return (
      <View
        style={{
          flex: 1,
          alignSelf: 'stretch',
          alignItems: 'center',
          backgroundColor: 'red',
        }}
      >
        {this.renderCategoryList(categoryItems)}
      </View>
    );
  }
}
