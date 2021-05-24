import * as React from 'react';

import {Image, StyleSheet, Text, View} from 'react-native';

export default function SettingsScreen({navigation}): JSX.Element {
  return (
    <View style={styles.container}>
      <Text> SETTINGS </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
