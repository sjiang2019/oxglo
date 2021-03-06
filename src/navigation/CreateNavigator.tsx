import * as React from 'react';

import {createStackNavigator} from '@react-navigation/stack';

import {NavScreen, SCREEN_TO_NAME} from '../constants/NavConstants';
import CreateScreen from '../screens/create/CreateScreen';
import CameraScreen from '../screens/create/CameraScreen';

const Stack = createStackNavigator();

export default function CreateNavigator(): JSX.Element {
  return (
    <Stack.Navigator initialRouteName={SCREEN_TO_NAME[NavScreen.CameraScreen]}>
      <Stack.Screen
        name={SCREEN_TO_NAME[NavScreen.CreateScreen]}
        component={CreateScreen}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name={SCREEN_TO_NAME[NavScreen.CameraScreen]}
        component={CameraScreen}
        options={{headerShown: false}}
      />
    </Stack.Navigator>
  );
}
