/**
 * @flow
 */

'use strict';

import React, { PureComponent } from 'react';
import { View, FlatList } from 'react-native';
import { getCommentsHome } from '../actions/actions-comments';

export default class AboutScreen extends PureComponent {
  componentDidMount() {
    const { dispatch } = this.props;
    dispatch(getCommentsHome(1));
  }

  render() {
    const { comments } = this.props;

    return (
      <View style={{ flex: 1 }}>
        <FlatList data={comments.list} renderItem={({ item }) => <View />} />
      </View>
    );
  }
}
