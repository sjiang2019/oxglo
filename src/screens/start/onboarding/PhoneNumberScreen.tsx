import * as React from 'react';

import {Button, StyleSheet, Text, TouchableOpacity, View} from 'react-native';

import {NavScreen, SCREEN_TO_NAME} from '../../../constants/NavConstants';

export default function PhoneNumberScreen({navigation}) {
  return (
    <View style={styles.container}>
      <Text> Phone Number </Text>
      <TouchableOpacity
        style={styles.nextButton}
        onPress={() => {
          navigation.navigate(SCREEN_TO_NAME[NavScreen.FirstNameScreen]);
        }}>
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
