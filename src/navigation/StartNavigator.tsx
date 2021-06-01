import * as React from 'react';

import {createStackNavigator} from '@react-navigation/stack';

import {NavScreen, SCREEN_TO_NAME} from '../constants/NavConstants';
import WelcomeScreen from '../screens/start/WelcomeScreen';
import SignInScreen from '../screens/start/SignInScreen';
import PermissionsScreen from '../screens/start/onboarding/PermissionsScreen';
import PhoneNumberScreen from '../screens/start/onboarding/PhoneNumberScreen';
import FirstNameScreen from '../screens/start/onboarding/FirstNameScreen';
import LastNameScreen from '../screens/start/onboarding/LastNameScreen';
import UsernameScreen from '../screens/start/onboarding/UsernameScreen';
import InvitesScreen from '../screens/start/onboarding/InvitesScreen';

const Stack = createStackNavigator();

export default function StartNavigator(): JSX.Element {
  return (
    <Stack.Navigator initialRouteName={SCREEN_TO_NAME[NavScreen.WelcomeScreen]}>
      <Stack.Screen
        name={SCREEN_TO_NAME[NavScreen.WelcomeScreen]}
        component={WelcomeScreen}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name={SCREEN_TO_NAME[NavScreen.SignInScreen]}
        component={SignInScreen}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name={SCREEN_TO_NAME[NavScreen.PermissionsScreen]}
        component={PermissionsScreen}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name={SCREEN_TO_NAME[NavScreen.PhoneNumberScreen]}
        component={PhoneNumberScreen}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name={SCREEN_TO_NAME[NavScreen.FirstNameScreen]}
        component={FirstNameScreen}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name={SCREEN_TO_NAME[NavScreen.LastNameScreen]}
        component={LastNameScreen}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name={SCREEN_TO_NAME[NavScreen.UsernameScreen]}
        component={UsernameScreen}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name={SCREEN_TO_NAME[NavScreen.InvitesScreen]}
        component={InvitesScreen}
        options={{headerShown: false}}
      />
    </Stack.Navigator>
  );
}
