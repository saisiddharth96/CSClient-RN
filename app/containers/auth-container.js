import React, {Component, PropTypes} from "react";
import {View, Image} from "react-native";
import {Container, Header, Button, Left, Body, Right, Title, Icon, Content, Card, CardItem, Text} from "native-base";
import {connect} from "react-redux";
import Authentication from "../components/authentication";

export default class AuthContainer extends Component {
  static propTypes = {
    dispatch: PropTypes.func,
    fetching: PropTypes.bool,
    attemptLogin: PropTypes.func
  };

  static navigationOptions = {
    title: 'Login Screen',
    header: {
      left: <Button title={''} onPress={() => {}} transparent><Icon name='menu'/></Button>,
    }
  };

  constructor(props) {
    super(props);
    this.isAttempting = false;
  }

  render() {
    return(
      <Image style={{flex: 1}} source={{uri: 'https://cdn.awwni.me/w28n.jpg'}}>
      <Container>
        
        <Header style={{backgroundColor: 'transparent'}} iosBarStyle={'light-content'}>
          <Left>
            <Button
              title={''}
              onPress={() => console.log('Open menu')}
              transparent>
              <Icon style={{color: '#fff'}} name='menu'/>
            </Button>
          </Left>
          <Body>
            <Title style={{color: '#fff', backgroundColor: 'transparent'}}>Login</Title>
          </Body>
          <Right/>
        </Header>
        
      </Container>
      </Image>
    );
  }
}