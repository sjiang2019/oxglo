import * as React from 'react';
import LottieView from 'lottie-react-native';

import {View} from 'react-native';

export default function HomeScreen(): JSX.Element {
  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <LottieView
        style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}
        source={require('../../assets/474-skeleton-frame-loading.json')}
        autoPlay
        loop
      />
    </View>
  );
}
