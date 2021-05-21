import * as React from 'react';

import {
  Button,
  ImageBackground,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {RNCamera} from 'react-native-camera';
import {NavScreen, SCREEN_TO_NAME} from '../controller/NavConstants';

interface CameraPreviewProps {
  photo: any;
  onRetake: () => void;
  onSave: () => void;
}

function CameraPreview(props: CameraPreviewProps): JSX.Element {
  return (
    <View
      style={{
        backgroundColor: 'transparent',
        flex: 1,
        width: '100%',
        height: '100%',
      }}>
      <Button onPress={props.onRetake} title="Retake Photo" />
      <Button onPress={props.onSave} title="Save Photo" />
      <ImageBackground
        source={{uri: props.photo && props.photo.uri}}
        style={{
          flex: 1,
        }}
      />
    </View>
  );
}

export default function CameraScreen({navigation}) {
  const [previewVisible, setPreviewVisible] = React.useState(false);
  const [capturedImage, setCapturedImage] = React.useState<any>(null);
  const takePicture = async () => {
    if (this.camera) {
      const options = {quality: 0.5, base64: true};
      const data = await this.camera.takePictureAsync(options);
      console.log(data.uri);
      setPreviewVisible(true);
      setCapturedImage(data);
    }
  };
  const handleRetakePhoto = () => {
    setPreviewVisible(false);
    setCapturedImage(null);
  };
  const handleSavePhoto = () => {
    navigation.navigate(SCREEN_TO_NAME[NavScreen.CreateScreen], {
      photo: capturedImage,
    });
  };
  return (
    <View style={styles.container}>
      {previewVisible && capturedImage ? (
        <CameraPreview
          photo={capturedImage}
          onRetake={handleRetakePhoto}
          onSave={handleSavePhoto}
        />
      ) : (
        <>
          <RNCamera
            ref={ref => {
              this.camera = ref;
            }}
            style={styles.preview}
            type={RNCamera.Constants.Type.back}
            onGoogleVisionBarcodesDetected={({barcodes}) => {
              console.log(barcodes);
            }}
          />
          <View
            style={{flex: 0, flexDirection: 'row', justifyContent: 'center'}}>
            <TouchableOpacity
              onPress={takePicture.bind(this)}
              style={styles.capture}>
              <Text style={{fontSize: 14}}> SNAP </Text>
            </TouchableOpacity>
          </View>
        </>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: 'black',
  },
  preview: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  capture: {
    flex: 0,
    backgroundColor: '#fff',
    borderRadius: 5,
    padding: 15,
    paddingHorizontal: 20,
    alignSelf: 'center',
    margin: 20,
  },
});
