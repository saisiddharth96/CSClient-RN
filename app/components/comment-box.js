'use strict';
import React from 'react';
import { Icon, Button } from 'native-base';
import { View, Text, StyleSheet, TextInput, DrawerLayoutAndroid } from 'react-native';

const CommentBox = props => {
  return (
    <View style={[props.style, styles.formContainer]}>
      <View style={styles.inputWrapper}>
        <TextInput
          name={'username'}
          selectionColor={'#ffefef'}
          placeholder={'Name'}
          placeholderTextColor={'#63585b'}
          underlineColorAndroid={'transparent'}
          style={[styles.input]}
        />
      </View>
      <View style={styles.inputWrapper}>
        <TextInput
          name={'email'}
          placeholder={'Email'}
          placeholderTextColor={'#63585b'}
          underlineColorAndroid={'transparent'}
          style={styles.input}
        />
      </View>
      <View style={styles.inputWrapper}>
        <TextInput
          name={'comment'}
          multiline
          numberOfLines={3}
          placeholder={'Enter your comment'}
          placeholderTextColor={'#63585b'}
          underlineColorAndroid={'transparent'}
          style={[styles.input, styles.inputArea]}
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

const styles = StyleSheet.create({
  formContainer: {
    borderRadius: 10,
    borderWidth: 0.5,
    borderColor: '#EF5350',
    paddingTop: 24,
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
    height: 40,
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

export default CommentBox;
