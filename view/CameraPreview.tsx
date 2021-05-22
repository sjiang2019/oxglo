import * as React from 'react';

import {Button, ImageBackground, View} from 'react-native';

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
          <Button onPress={props.onRetake} title="Cancel" />
          <Button
            onPress={props.onSave}
            title="Save"
            style={{position: 'absolute', right: 0}}
          />
        </View>
      </ImageBackground>
    </View>
  );
}
