import * as React from 'react';

import {createStackNavigator} from '@react-navigation/stack';

import ProfileScreen from './ProfileScreen';
import TicketDetailsScreen from './TicketDetailsScreen';
import {NavScreen, SCREEN_TO_NAME} from '../controller/NavConstants';

const Stack = createStackNavigator();

export default function ProfileNavigator(): JSX.Element {
  return (
    <Stack.Navigator initialRouteName={SCREEN_TO_NAME[NavScreen.ProfileScreen]}>
      <Stack.Screen
        name={SCREEN_TO_NAME[NavScreen.ProfileScreen]}
        component={ProfileScreen}
        options={{title: 'Profile'}}
      />
      <Stack.Screen
        name={SCREEN_TO_NAME[NavScreen.TicketDetails]}
        component={TicketDetailsScreen}
        options={{title: 'Details'}}
      />
    </Stack.Navigator>
  );
}
