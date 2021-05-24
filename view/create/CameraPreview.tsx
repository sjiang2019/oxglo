import * as React from 'react';

import {ImageBackground, View} from 'react-native';
import SaveCancelHeader from '../shared/SaveCancelHeader';

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
        <SaveCancelHeader
          showCancel={true}
          showSave={true}
          saveText="Next"
          onSave={props.onSave}
          onCancel={props.onRetake}
        />
      </ImageBackground>
    </View>
  );
}
