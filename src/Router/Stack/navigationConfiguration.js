
import React, { PureComponent } from 'react';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

import RightToLeftTransition from './../../Asset/Libraries/RightLeftTransition';
import Login from './../../Components/Login';
import Dashboard from './../../Components/Dashboard';

const Stack = createStackNavigator({
  Login: {
    screen: Login,
    navigationOptions: ({ navigation }) => ({
      header: null,
    })
  },
  Dashboard: {
    screen: Dashboard,
    navigationOptions: ({ navigation }) => ({
      header: null,
    })
  }
},
  {
    initialRouteName: 'Login',
    transitionConfig: RightToLeftTransition,
    navigationOptions: {
      gesturesEnabled: false
    },
  }
);

const AppContainer = createAppContainer(Stack);


function getActiveRouteName(navigationState) {
  if (!navigationState) {
    return null;
  }
  const route = navigationState.routes[navigationState.index];
  // dive into nested navigators
  if (route.routes) {
    return getActiveRouteName(route);
  }
  return route.routeName;
}


export default class StackNavigation extends PureComponent {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <AppContainer
        onNavigationStateChange={(prevState, currentState, action) => {
          const currentRouteName = getActiveRouteName(currentState);
        }}
      />
    );
  }
}