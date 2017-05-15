/**
 * @flow
 */
'use strict';
import React from 'react';
import { TouchableHighlight, View, Text } from 'react-native';
import { switchHomeTab } from '../../actions/actions-navigation';

/**
  "id": 574,
  "slug": "manga-accel-world",
  "title": "[Manga] Accel World (Ongoing)",
  "description": "",
  "parent": 358,
  "post_count": 2
 */
const ItemCategory = props => {
  const { id, title, slug, parent, postCount, dispatch } = props;

  return (
    <TouchableHighlight
      activeOpacity={0.3}
      underlayColor={'#f4f8ff'}
      style={styles.itemContainer}
      onPress={() => dispatch(switchHomeTab(1, { categoryId: id }))}
    >
      <View elevation={3} style={styles.item}>
        <Text style={styles.text}>{title}</Text>
      </View>
    </TouchableHighlight>
  );
};

export { ItemCategory };

const styles = {
  itemContainer: {
    padding: 10,
    borderBottomWidth: 0.6,
    borderColor: '#c9c9c9',
  },
  item: {
    paddingHorizontal: 7,
    paddingVertical: 5,
    flexDirection: 'row',
    justifyContent: 'space-between',
    shadowOffset: { width: 20, height: 20 },
    shadowRadius: 5,
  },
  text: {
    color: '#676767',
  },
};
