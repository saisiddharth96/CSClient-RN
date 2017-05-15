/**
 * @flow
 */
import { NavigationActions } from 'react-navigation';
import Types from './types-navigation';

/**
 * args: { query: string, categoryId: number }
 */
export function switchHomeTab(tabIndex: number, args: ?Object) {
  return {
    type: Types.SWITCH_HOME_TAB,
    tabIndex,
    args,
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
