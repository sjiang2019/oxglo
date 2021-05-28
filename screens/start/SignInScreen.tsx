import * as React from 'react';

import {AuthContext} from '../../App';
import SignInView from './SignInScreenView';

export default function SignInScreen() {
  const {signIn} = React.useContext(AuthContext);
  // USE ELSEWHERE
  const {signOut} = React.useContext(AuthContext);

  return <SignInView onClickSignIn={signIn} />;
}
