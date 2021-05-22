import * as React from 'react';

import {createStackNavigator} from '@react-navigation/stack';

import {NavScreen, SCREEN_TO_NAME} from '../controller/NavConstants';
import CreateScreen from './CreateScreen';
import CameraScreen from './CameraScreen';

const Stack = createStackNavigator();

export default function CreateNavigator(): JSX.Element {
  return (
    <Stack.Navigator initialRouteName={SCREEN_TO_NAME[NavScreen.CreateScreen]}>
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
