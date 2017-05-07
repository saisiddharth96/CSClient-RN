/**
 * @flow
 */
import { NavigationActions } from 'react-navigation';
import Types from './types-navigation';

export function switchHomeTab(tabIndex: number) {
  return {
    type: Types.SWITCH_HOME_TAB,
    tabIndex,
  };
}

export function navigate(screenName, params) {
  return NavigationActions.navigate({
    routeName: screenName,
    params: { ...params },
  });
}

export function goBack() {
  return NavigationActions.goBack();
}
