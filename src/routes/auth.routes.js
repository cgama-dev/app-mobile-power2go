import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { Auth } from '../screens';

const { Navigator, Screen } = createStackNavigator();

const AuthRoutes = () => (
  <Navigator>
    <Screen name="Login" component={Auth} />
  </Navigator>
);

export default AuthRoutes;
