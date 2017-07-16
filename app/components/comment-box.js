'use strict';
import React from 'react';
import { Icon, Button } from 'native-base';
import { Field, reduxForm, SubmissionError } from 'redux-form';
import { View, Text, TextInput } from 'react-native';
import API from '../services/api';
import Styles from './_styles/styles-comment-box';

const api = API.create();

const onSubmit = (values, dispatch) => {
  const { nickname, email, comment } = values;
  console.log(values);
  // api
  return;
};

const validate = values => {
  const errors = {};
  if (!values.comment) {
    errors.username = 'Required';
  }
  return errors;
};

const commentField = ({ input, placeholder, meta, ...inputProps }) => {
  const { invalid, touched } = meta;
  return (
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
  );
};

const CommentBox = props => {
  const { handleSubmit, submitting } = props;
  return (
    <View style={[props.style, Styles.formContainer]}>
      <View style={Styles.inputWrapper}>
        <TextInput
          name={'username'}
          selectionColor={'#ffefef'}
          placeholder={'Name'}
          placeholderTextColor={'#63585b'}
          underlineColorAndroid={'transparent'}
          style={[Styles.input]}
        />
      </View>
      <View style={Styles.inputWrapper}>
        <TextInput
          name={'email'}
          placeholder={'Email'}
          placeholderTextColor={'#63585b'}
          underlineColorAndroid={'transparent'}
          style={Styles.input}
        />
      </View>
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
        onPress={handleSubmit(onSubmit)}
        disabled={submitting}
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

export default reduxForm({ form: 'comment-box', validate })(
  CommentBox,
);
