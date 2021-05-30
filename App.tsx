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

export const AuthContext = React.createContext();

const AppStack = () => {
  const [state, dispatch] = React.useReducer(useAuthState, DEFAULT_AUTH_STATE);

  React.useEffect(() => {
    fetchUserToken(dispatch);
  }, []);

  const authContext = React.useMemo(() => useAuthContextMemo(dispatch), []);
  return (
    <AuthContext.Provider value={authContext}>
      <NavigationContainer>
        {state.userToken == null ? <StartNavigator /> : <AppNavigator />}
      </NavigationContainer>
    </AuthContext.Provider>
  );
};

export default function App(): JSX.Element {
  return <AppStack />;
}
