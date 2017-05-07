'use strict';
import React, { Component } from 'react';
import { StatusBar, View, BackHandler } from 'react-native';
import {
  Button,
  Card,
  CardItem,
  Col,
  Container,
  Content,
  Grid,
  Header,
  Icon,
  Left,
  Right,
  Text,
  Thumbnail,
} from 'native-base';
import { connect } from 'react-redux';
import { NavigationActions } from 'react-navigation';

class ProfileContainer extends Component {

  componentDidMount() {
    const { goBack } = this.props;
    BackHandler.addEventListener('hardwareBackPress', () => goBack());
  }

  componentWillUnmount() {
    const { goBack } = this.props;
    BackHandler.removeEventListener('hardwareBackPress', () => goBack());
  }

  render() {
    const { goBack } = this.props;
    return (
      <Container style={{ backgroundColor: '#fff' }}>
        <View style={styles.profileHeaderContainer}>
          <Header
            noShadow
            iosBarStyle={'light-content'}
            backgroundColor={'#fff'}
            style={{ backgroundColor: 'transparent', borderBottomWidth: 0 }}
          >
            <StatusBar
              hidden
              backgroundColor="transparent"
              barStyle="light-content"
              showHideTransition={'fade'}
              animated
            />
            <Left>
              <Button title={'Back'} transparent onPress={() => goBack()}>
                <Icon style={{ color: '#fff' }} name="arrow-back" />
              </Button>
            </Left>
          </Header>
          <View
            style={{
              alignItems: 'center',
              justifyContent: 'center',
            }}
          >
            <Thumbnail large source={{ uri: 'https://cdn.awwni.me/w28n.jpg' }} />
            <Text
              style={{
                color: '#78909C',
                marginTop: 16,
                backgroundColor: 'transparent',
              }}
            >
              Sophia Emilion
            </Text>
            <Text style={{ fontSize: 10, color: '#78909C' }}>@(Sophia-sama)</Text>
            <Text
              style={{
                fontSize: 10,
                color: '#fff',
                marginTop: 10,
                paddingHorizontal: 40,
                textAlign: 'center',
              }}
            >
              Beyond the shadow you settled for, there's a miracle illuminated.
            </Text>
          </View>
        </View>

        <Content>
          <Card>
            <CardItem header>
              <Text>Profile</Text>
            </CardItem>

            <CardItem>
              <Icon active name="person" />
              <Text>Nickname</Text>
              <Right>
                <Text>Sophia-sama</Text>
              </Right>
            </CardItem>

            <CardItem>
              <Icon active name="calendar" />
              <Text>Registered</Text>
              <Right>
                <Text>29-10-2010</Text>
              </Right>
            </CardItem>

            <CardItem>
              <Icon active name="bulb" />
              <Text>Color Scheme</Text>
              <Right>
                <Text>Ocean</Text>
              </Right>
            </CardItem>
          </Card>

          <View
            style={{
              flex: 1,
              height: 200,
              flexDirection: 'row',
              alignItems: 'stretch',
              padding: 12,
            }}
          >

            <Grid>
              <Col>
                <Button block rounded bordered style={{ marginHorizontal: 10 }}>
                  <Text style={{ textAlign: 'center' }}>Author's posts</Text>
                </Button>
              </Col>

              <Col>
                <Button
                  block
                  rounded
                  success
                  bordered
                  style={{ marginHorizontal: 10 }}
                >
                  <Text style={{ textAlign: 'center' }}>Edit Profile</Text>
                </Button>
              </Col>
            </Grid>

          </View>
        </Content>
      </Container>
    );
  }
}

const styles = {
  profileHeaderContainer: {
    backgroundColor: '#1b1b1b',
    paddingBottom: 16,
  },
};

const mapStateToProps = state => ({
  ...state,
});

const mapDispatchToProps = dispatch => ({
  goBack: () => {
    return dispatch(NavigationActions.back());
  },
  dispatch,
});

export default connect(mapStateToProps, mapDispatchToProps)(ProfileContainer);
