'use strict';
import React from 'react';
import { Icon, Button } from 'native-base';
import { View, Text, Stylesheet, TextInput } from 'react-native';
import Styles from './_styles/styles-comment-box';

const CommentBoxAuthenticated = props => {
  return (
    <View style={[props.style, Styles.formContainer]}>
      <View style={Styles.inputWrapper}>
        <TextInput
          name={'comment'}
          multiline
          numberOfLines={3}
          placeholder={'Enter your comment'}
          placeholderTextColor={'#63585b'}
          underlineColorAndroid={'transparent'}
          style={[Styles.input, Styles.inputArea]}
        />
      </View>
      <Button
        danger
        block
        rounded
        bordered
        outline
        onPress={() => {}}
        title={''}
      >
        <Icon active name="ios-person" style={{ color: '#fff' }} />
        <Text style={{ color: '#000' }}>
          {'Post your comment'}
        </Text>
      </Button>
    </View>
  );
};

export default CommentBoxAuthenticated;
