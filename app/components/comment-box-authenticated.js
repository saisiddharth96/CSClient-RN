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
        <Text style={{ color: '#000' }}>{'Post your comment'}</Text>
      </Button>
    </View>
  );
};

const Styles = Stylesheet.create({
  formContainer: {
    borderRadius: 10,
    borderWidth: 0.5,
    borderColor: '#EF5350',
    paddingTop: 12,
    paddingBottom: 18,
    marginHorizontal: 20,
    marginTop: 50,
    marginBottom: 12,
    padding: 12,
    alignSelf: 'stretch',
    shadowOffset: { width: 0, height: 0 },
    shadowRadius: 6,
    shadowColor: '#EF5350',
    shadowOpacity: 0.2,
  },
  inputWrapper: {
    opacity: 0.6,
    marginBottom: 12,
    borderBottomColor: '#EF5350',
    borderBottomWidth: 0.8,
    padding: 4,
  },
  inputWrapperError: {
    borderBottomColor: '#ff4e4e',
  },
  input: {
    height: 30,
    color: '#EF5350',
    alignSelf: 'stretch',
    padding: 4,
  },
  inputArea: {
    height: 100,
    fontSize: 16,
    padding: 4,
  },
});

export default CommentBoxAuthenticated;
