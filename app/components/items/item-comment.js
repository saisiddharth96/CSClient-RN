'use strict';
import React from 'react';
import { Icon } from 'native-base';
import { View, Image, Text, TouchableOpacity } from 'react-native';
import HTMLView from 'react-native-htmlview';
import moment from 'moment';

const ItemComment = props => {
  return (
    <View
      style={{
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
      }}
    >
      <Image
        source={{ uri: 'https://lorempixel.com/100/100/' }}
        style={{
          width: 60,
          height: 60,
          borderRadius: 30,
          borderWidth: 0.7,
          borderColor: '#ff2a63',
          marginRight: 4,
          marginLeft: 6,
          padding: 10,
        }}
      />
      <View
        style={{
          flex: 1,
          borderRadius: 7,
          backgroundColor: '#fff',
          margin: 8,
          borderColor: '#ffd8d8',
          borderWidth: 0.2,
          shadowOffset: { width: 0, height: 0 },
          shadowRadius: 6,
          shadowColor: '#EF5350',
          shadowOpacity: 0.2,
          overflow: 'visible',
          elevation: 3,
        }}
      >
        <Text
          style={{
            backgroundColor: 'transparent',
            color: '#ff2a63',
            marginLeft: 6,
            marginTop: 4,
          }}
        >
          Comment Author
        </Text>
        <Text style={{ marginLeft: 8, fontSize: 8, color: '#a0a0a0' }}>
          Date
        </Text>
        <HTMLView
          style={{
            marginHorizontal: 6,
            marginVertical: 4,
          }}
          value={'ddddd'}
        />
        <View
          style={{
            flex: 1,
            height: 0.6,
            backgroundColor: '#ffd8d8',
            marginHorizontal: 6,
          }}
        />
        <View
          style={{
            alignItems: 'flex-end',
            backgroundColor: 'transparent',
            paddingHorizontal: 8,
            paddingVertical: 4,
            flex: 1,
          }}
        >
          <TouchableOpacity activeOpacity={0.6}>
            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
              <Icon
                style={{ color: '#ff2a63', fontSize: 22 }}
                name="ios-basketball"
              />
              <Text style={{ marginLeft: 4, fontSize: 10, color: '#ff2a63' }}>
                Reply
              </Text>
            </View>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default ItemComment;
