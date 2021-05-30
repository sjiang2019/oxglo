import * as React from 'react';

import {createStackNavigator} from '@react-navigation/stack';

import {NavScreen, SCREEN_TO_NAME} from '../constants/NavConstants';
import WelcomeScreen from '../screens/start/WelcomeScreen';
import SignInScreen from '../screens/start/SignInScreen';
import PermissionsScreen from '../screens/start/onboarding/PermissionsScreen';

const Stack = createStackNavigator();

export default function StartNavigator(): JSX.Element {
  return (
    <Stack.Navigator initialRouteName={SCREEN_TO_NAME[NavScreen.WelcomeScreen]}>
      <Stack.Screen
        name={SCREEN_TO_NAME[NavScreen.PermissionsScreen]}
        component={PermissionsScreen}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name={SCREEN_TO_NAME[NavScreen.SignInScreen]}
        component={SignInScreen}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name={SCREEN_TO_NAME[NavScreen.WelcomeScreen]}
        component={WelcomeScreen}
        options={{headerShown: false}}
      />
    </Stack.Navigator>
  );
}
