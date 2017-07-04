/**
 * @flow
 */

'use strict';

import React, { PureComponent } from 'react';
import { View } from 'react-native';
import { Container, Content } from 'native-base';
// import RNDraftJSRender from 'react-native-draftjs-render';
// import contentState from 'DraftJs/contentState';
import GravatarAPI from '../services/api-gravatar';

export default class EditorContainer extends PureComponent {
  componentDidMount() {
    GravatarAPI.test('doraemonfanclub@gmail.com', 'phamvanquan');
  }

  render() {
    return (
      <Container>
        
      </Container>
    );
  }
}
