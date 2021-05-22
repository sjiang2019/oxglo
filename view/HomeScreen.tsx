import * as React from 'react';
import LottieView from 'lottie-react-native';

import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {AuthContext} from '../App';

export default function HomeScreen(): JSX.Element {
  const {signOut} = React.useContext(AuthContext);
  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <LottieView
        style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}
        source={require('../assets/60820-bicycle-riding.json')}
        autoPlay
        loop
      />
      <TouchableOpacity style={styles.signoutBtn} onPress={signOut}>
        <Text style={styles.loginText}>Sign out</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  signoutBtn: {
    width: '80%',
    borderRadius: 25,
    height: 50,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 40,
    backgroundColor: 'tomato',
    position: 'absolute',
    bottom: 20,
  },
});
