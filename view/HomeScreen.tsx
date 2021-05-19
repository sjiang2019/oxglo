import * as React from 'react';

import {Button, Text, View} from 'react-native';
import {AuthContext} from '../App';

export default function HomeScreen(): JSX.Element {
  const {signOut} = React.useContext(AuthContext);
  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <Text> HOME </Text>
      <Button title="Sign out" onPress={signOut} />
    </View>
  );
}
