import * as React from 'react';

import {Button, ImageBackground, View} from 'react-native';
import {Icon} from 'native-base';

interface CameraPreviewProps {
  photo: any;
  onRetake: () => void;
  onSave: () => void;
}

export default function CameraPreview(props: CameraPreviewProps): JSX.Element {
  return (
    <View
      style={{
        backgroundColor: 'transparent',
        flex: 1,
        width: '100%',
        height: '100%',
      }}>
      <ImageBackground
        source={{uri: props.photo && props.photo.uri}}
        style={{
          flex: 1,
        }}>
        <View style={{flexDirection: 'row', marginTop: 40}}>
          <View style={{flex: 0, position: 'absolute', left: 30, top: 5}}>
            <Icon
              name="close-sharp"
              style={{fontSize: 30, height: 80, color: 'white'}}
              onPress={props.onRetake}
            />
            {/* <Button onPress={props.onRetake} title="Cancel" /> */}
          </View>
          <View style={{flex: 0, position: 'absolute', right: 30, top: 5}}>
            <Button onPress={props.onSave} title="Next" />
          </View>
        </View>
      </ImageBackground>
    </View>
  );
}
