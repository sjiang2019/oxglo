import * as React from 'react';

import {Text, View} from 'react-native';
import {RNCamera} from 'react-native-camera';

export default function CreateScreen(): JSX.Element {
  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <RNCamera style={[{flex: 1, width: '100%', overflow: 'hidden'}]} />
    </View>
  );
}
