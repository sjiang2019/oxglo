import * as React from 'react';

import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';

import {getIconFromTabName} from '../controller/utils';
import ProfileScreen from './ProfileScreen';
import HomeScreen from './HomeScreen';
import {NavTab, TAB_TO_NAME} from '../controller/NavConstants';

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

          // You can return any component that you like here!
          return <Ionicons name={finalIconName} size={size} color={color} />;
        },
      })}
      tabBarOptions={{
        activeTintColor: 'tomato',
        inactiveTintColor: 'gray',
      }}>
      <Tab.Screen name={TAB_TO_NAME[NavTab.Home]} component={HomeScreen} />
      <Tab.Screen
        name={TAB_TO_NAME[NavTab.Profile]}
        component={ProfileScreen}
      />
    </Tab.Navigator>
  );
}
