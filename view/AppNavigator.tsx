import * as React from 'react';

import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';

import {getIconFromTabName} from '../controller/utils';
import ProfileNavigator from './ProfileNavigator';
import HomeScreen from './HomeScreen';
import {NavScreen, SCREEN_TO_NAME} from '../controller/NavConstants';
import CreateScreen from './CreateScreen';

const Tab = createBottomTabNavigator();

export default function AppNavigator(): JSX.Element {
  return (
    <Tab.Navigator
      screenOptions={({route}) => ({
        tabBarIcon: ({focused, color, size}) => {
          const tabName = route.name;
          const iconName = getIconFromTabName(tabName);
          const finalIconName = focused
            ? iconName
            : iconName.concat('-outline');
          return <Ionicons name={finalIconName} size={size} color={color} />;
        },
      })}
      tabBarOptions={{
        activeTintColor: 'tomato',
        inactiveTintColor: 'gray',
      }}>
      <Tab.Screen
        name={SCREEN_TO_NAME[NavScreen.HomeScreen]}
        component={HomeScreen}
        options={{title: ''}}
      />
      <Tab.Screen
        name={SCREEN_TO_NAME[NavScreen.CreateScreen]}
        component={CreateScreen}
        options={{title: ''}}
      />
      <Tab.Screen
        name={SCREEN_TO_NAME[NavScreen.ProfileNavigator]}
        component={ProfileNavigator}
        options={{title: ''}}
      />
    </Tab.Navigator>
  );
}
