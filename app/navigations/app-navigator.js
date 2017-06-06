/**
 * @flow
 */
'use strict';
import { StackNavigator } from 'react-navigation';
import AuthScreen from '../containers/auth-container';
import PreferencesScreen from '../containers/preferences-container';
import ProfileScreen from '../containers/profile-container';
import TestScreen from '../containers/test-container';
import ContentScreen from '../containers/content-container';
import HomeDrawerNavigator from './drawer-navigator';

const routeConfig = {
  Auth: { screen: AuthScreen },
  HomeDrawer: { screen: HomeDrawerNavigator },
  Preferences: { screen: PreferencesScreen },
  Profile: { screen: ProfileScreen },
  Content: { screen: ContentScreen },
  Test: { screen: TestScreen },
};

const stackNavigatorConfig = {
  initialRouteName: 'Test',
  mode: 'card',
  headerMode: 'none',
  navigationOptions: {
    headerVisible: false,
    gesturesEnabled: false,
  },
};

const AppNavigator = StackNavigator(routeConfig, stackNavigatorConfig);

export default AppNavigator;
