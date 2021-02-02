import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import colors from '../theme/global';
import { Profile, Dashboard } from '../screens';

const { Navigator, Screen } = createBottomTabNavigator();

const configTabBar = {
  options: {
    style: {
      height: 70,
      backgroundColor: colors.primary,
      borderTopWidth: 0,
    },
    tabStyle: {
      alignItems: 'center',
      justifyContent: 'center',
    },
    iconStyle: {
      flex: 0,
      width: 20,
      height: 20,
    },
    labelStyle: {
      fontSize: 12,
      marginTop: 5,
    },
    inactiveTintColor: colors.black,
    activeTintColor: colors.purple,
  },
  icon: {
    dashboard: {
      tabBarIcon: ({ size, focused }) => (
        <Icon
          name="monitor-dashboard"
          color={focused ? colors.purple : colors.black}
          size={size}
        />
      ),
    },
    load: {
      tabBarIcon: ({ size, focused }) => (
        <Icon
          name="package"
          color={focused ? colors.purple : colors.black}
          size={size}
        />
      ),
    },
    historic: {
      tabBarIcon: ({ size, focused }) => (
        <Icon
          name="format-list-bulleted-type"
          color={focused ? colors.purple : colors.black}
          size={size}
        />
      ),
    },
    profile: {
      tabBarIcon: ({ size, focused }) => (
        <Icon
          name="account"
          color={focused ? colors.purple : colors.black}
          size={size}
        />
      ),
    },
  },
};

const AppRoutes = () => (
  <Navigator tabBarOptions={configTabBar.options}>
    <Screen
      name="Dashboard"
      component={Dashboard}
      options={configTabBar.icon.dashboard}
    />
    <Screen
      name="Perfil"
      component={Profile}
      options={configTabBar.icon.profile}
    />
  </Navigator>
);

export default AppRoutes;
