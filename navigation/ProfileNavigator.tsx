import * as React from 'react';

import {createStackNavigator} from '@react-navigation/stack';

import ProfileScreen from '../screens/profile/ProfileScreen';
import SettingsScreen from '../screens/profile/SettingsScreen';
import TicketDetailsScreen from '../screens/profile/TicketDetailsScreen';
import EditProfileScreen from '../screens/profile/EditProfileScreen';
import {NavScreen, SCREEN_TO_NAME} from '../constants/NavConstants';

const Stack = createStackNavigator();

export default function ProfileNavigator(): JSX.Element {
  return (
    <Stack.Navigator initialRouteName={SCREEN_TO_NAME[NavScreen.ProfileScreen]}>
      <Stack.Screen
        name={SCREEN_TO_NAME[NavScreen.EditProfileScreen]}
        component={EditProfileScreen}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name={SCREEN_TO_NAME[NavScreen.ProfileScreen]}
        component={ProfileScreen}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name={SCREEN_TO_NAME[NavScreen.SettingsScreen]}
        component={SettingsScreen}
        options={{title: ''}}
      />
      <Stack.Screen
        name={SCREEN_TO_NAME[NavScreen.TicketDetails]}
        component={TicketDetailsScreen}
        options={{title: ''}}
      />
    </Stack.Navigator>
  );
}
