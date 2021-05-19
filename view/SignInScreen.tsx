import * as React from 'react';
import {Button, Text, TextInput, View} from 'react-native';

import {AuthContext} from '../App';

export default function SignInScreen() {
  const [username, setUsername] = React.useState('');
  const [password, setPassword] = React.useState('');

  const {signIn} = React.useContext(AuthContext);

  return (
    <>
      <View style={{flex: 1}}></View>
      <View style={{flex: 14}}>
        <TextInput
          placeholder="Username"
          value={username}
          onChangeText={setUsername}
        />
        <TextInput
          placeholder="Password"
          value={password}
          onChangeText={setPassword}
          secureTextEntry
        />
        <Button title="Sign in" onPress={() => signIn({username, password})} />
      </View>
    </>
  );
}
