import * as React from 'react';

import {Button, StyleSheet, Text, TouchableOpacity, View} from 'react-native';

import {NavScreen, SCREEN_TO_NAME} from '../../constants/NavConstants';

export default function WelcomeScreen({navigation}) {
  const handleClickGetStarted = () => {
    navigation.navigate(SCREEN_TO_NAME[NavScreen.PermissionsScreen]);
  };
  const handleClickSignIn = () => {
    navigation.navigate(SCREEN_TO_NAME[NavScreen.SignInScreen]);
  };
  return (
    <View style={styles.container}>
      <View
        style={{
          flex: 0,
          position: 'absolute',
          right: 30,
          top: 5,
          marginTop: 40,
          color: 'gray',
        }}>
        <Button
          color="ghostwhite"
          onPress={handleClickSignIn}
          title="Sign in"
        />
      </View>
      <TouchableOpacity
        style={styles.getStartedButton}
        onPress={handleClickGetStarted}>
        <Text>Get Started</Text>
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

  getStartedButton: {
    width: '80%',
    borderRadius: 25,
    height: 50,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 40,
    backgroundColor: 'tomato',
  },
});
