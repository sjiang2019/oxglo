import * as React from 'react';

import {NavigationContainer} from '@react-navigation/native';

import SignInScreen from './screens/start/SignInScreen';
import AppNavigator from './navigation/AppNavigator';
import {DEFAULT_AUTH_STATE} from './constants/AuthConstants';
import {
  fetchUserToken,
  useAuthContextMemo,
  useAuthState,
} from './utils/AuthUtils';

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
        {state.userToken == null ? <SignInScreen /> : <AppNavigator />}
      </NavigationContainer>
    </AuthContext.Provider>
  );
};

export default function App(): JSX.Element {
  return <AppStack />;
}
