/**
 * @flow
 */

'use strict';

import React, { PureComponent } from 'react';
import { View, StatusBar } from 'react-native';
import {
  Container,
  Header,
  Left,
  Button,
  Icon,
  Body,
  Title,
  Right,
} from 'native-base';
import {
  RichTextEditor,
  RichTextToolbar,
} from 'react-native-zss-rich-text-editor';
// import RNDraftJSRender from 'react-native-draftjs-render';
// import contentState from 'DraftJs/contentState';
import GravatarAPI from '../services/api-gravatar';

export default class EditorContainer extends PureComponent {
  componentDidMount() {
    GravatarAPI.test('doraemonfanclub@gmail.com', 'phamvanquan');
  }

  render() {
    return (
      <Container style={{ backgroundColor: '#fff' }}>
        <Header iosBarStyle={'light-content'}>
          <StatusBar backgroundColor="#d32f2f" barStyle="light-content" />
          <Left>
            <Button
              title={''}
              transparent
              onPress={() => navigate('DrawerOpen')}
            >
              <Icon name="menu" />
            </Button>
          </Left>
          <Body>
            <Title>
              {''}
            </Title>
          </Body>
        </Header>
        <View style={{ flex: 1, marginTop: 24, backgroundColor: '#fff' }}>
          <RichTextEditor
            ref={r => (this.richtext = r)}
            initialTitleHTML={'Title!!'}
            initialContentHTML={
              'Hello <b>World</b> <p>this is a new paragraph</p> <p>this is another new paragraph</p>'
            }
            editorInitializedCallback={() => console.log('ed')}
          />
          <RichTextToolbar
            getEditor={() => this.richtext}
            selectedButtonStyle={{ backgroundColor: 'yellow' }}
          />
        </View>
      </Container>
    );
  }
}
