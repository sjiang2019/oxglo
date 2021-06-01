import * as React from 'react';

import {NavigationContainer} from '@react-navigation/native';

import AppNavigator from './src/navigation/AppNavigator';
import {DEFAULT_AUTH_STATE} from './src/constants/AuthConstants';
import {
  fetchUserToken,
  useAuthContextMemo,
  useAuthState,
} from './src/utils/AuthUtils';
import StartNavigator from './src/navigation/StartNavigator';
import {createStackNavigator} from '@react-navigation/stack';
import {NavScreen, SCREEN_TO_NAME} from './src/constants/NavConstants';

export const AuthContext = React.createContext();
const Stack = createStackNavigator();

const AppStack = () => {
  const [state, dispatch] = React.useReducer(useAuthState, DEFAULT_AUTH_STATE);

  React.useEffect(() => {
    fetchUserToken(dispatch);
  }, []);

  const authContext = React.useMemo(() => useAuthContextMemo(dispatch), []);
  const initialRouteName =
    state.userToken == null
      ? SCREEN_TO_NAME[NavScreen.StartNavigator]
      : SCREEN_TO_NAME[NavScreen.AppNavigator];
  return (
    <AuthContext.Provider value={authContext}>
      <NavigationContainer>
        <Stack.Navigator initialRouteName={initialRouteName}>
          <Stack.Screen
            name={SCREEN_TO_NAME[NavScreen.AppNavigator]}
            component={AppNavigator}
            options={{headerShown: false}}
          />
          <Stack.Screen
            name={SCREEN_TO_NAME[NavScreen.StartNavigator]}
            component={StartNavigator}
            options={{headerShown: false}}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </AuthContext.Provider>
  );
};

export default function App(): JSX.Element {
  return <AppStack />;
}
