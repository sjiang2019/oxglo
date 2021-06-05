import * as React from 'react';

import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';

import {AuthContext} from '../../../../App';
import {NavScreen, SCREEN_TO_NAME} from '../../../constants/NavConstants';

export default function InvitesScreen({navigation}) {
  const {signIn} = React.useContext(AuthContext);
  return (
    <View style={styles.container}>
      <Text> Invites </Text>
      <TouchableOpacity style={styles.nextButton} onPress={signIn}>
        <Text>Next</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'dodgerblue',
    alignItems: 'center',
    justifyContent: 'center',
  },

  nextButton: {
    width: '80%',
    borderRadius: 25,
    height: 50,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 40,
    backgroundColor: 'tomato',
  },
});
