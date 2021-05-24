import * as React from 'react';

import {StyleSheet, View} from 'react-native';
import {Button, Icon} from 'native-base';
import {RNCamera} from 'react-native-camera';
import {launchImageLibrary} from 'react-native-image-picker';

import {NavScreen, SCREEN_TO_NAME} from '../../controller/NavConstants';
import CameraPreview from './CameraPreview';

const handleSelectPhoto = (setImage, setPreview) => {
  const options = {
    storageOptions: {
      skipBackup: true,
      path: 'images',
    },
  };
  launchImageLibrary(options, response => {
    console.log('Response = ', response);

    if (response.didCancel) {
      console.log('User cancelled image picker');
    } else if (response.error) {
      console.log('ImagePicker Error: ', response.error);
    } else {
      console.log('response', JSON.stringify(response));
      setPreview(true);
      setImage(response);
    }
  });
};

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
            style={{
              flex: 0,
              flexDirection: 'row',
              justifyContent: 'center',
              backgroundColor: 'transparent',
            }}>
            <View style={{flex: 0, position: 'absolute', left: 15, top: 0}}>
              <Button
                dark
                onPress={() => {
                  handleSelectPhoto(setCapturedImage, setPreviewVisible);
                  setPreviewVisible(true);
                }}>
                <Icon
                  name="images-outline"
                  style={{fontSize: 30, height: 80}}
                />
              </Button>
            </View>
            <View style={{flexDirection: 'row', justifyContent: 'center'}}>
              <Button dark onPress={takePicture.bind(this)}>
                <Icon
                  name="radio-button-on-outline"
                  style={{fontSize: 80, height: 160}}
                />
              </Button>
            </View>
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
