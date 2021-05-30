import * as React from 'react';

import {StyleSheet, View} from 'react-native';
import {Button, Icon} from 'native-base';
import {RNCamera} from 'react-native-camera';

import CameraPreview from './CameraPreview';
import {selectPhotoFromLibrary} from '../utils/utils';

interface CameraViewProps {
  image: any;
  setImage: (image: any) => void;
  onSave: () => void;
}

export default function CameraView(props: CameraViewProps) {
  const [previewVisible, setPreviewVisible] = React.useState(false);
  const takePicture = async () => {
    if (this.camera) {
      const options = {quality: 0.5, base64: true};
      const data = await this.camera.takePictureAsync(options);
      console.log(data.uri);
      setPreviewVisible(true);
      props.setImage(data);
    }
  };
  const handleRetakePhoto = () => {
    setPreviewVisible(false);
    props.setImage(null);
  };
  const handleSelectPhoto = () => {
    selectPhotoFromLibrary((photo: any) => {
      setPreviewVisible(true);
      props.setImage(photo);
    });
  };

  return (
    <View style={styles.container}>
      {previewVisible && props.image ? (
        <CameraPreview
          photo={props.image}
          onRetake={handleRetakePhoto}
          onSave={props.onSave}
        />
      ) : (
        <>
          <RNCamera
            ref={ref => {
              this.camera = ref;
            }}
            style={styles.camera}
            type={RNCamera.Constants.Type.back}
            onGoogleVisionBarcodesDetected={({barcodes}) => {
              console.log(barcodes);
            }}
          />
          <View style={styles.buttonContainer}>
            <View style={styles.galleryButton}>
              <Button
                dark
                onPress={() => {
                  handleSelectPhoto();
                }}>
                <Icon
                  name="images-outline"
                  style={{fontSize: 30, height: 80}}
                />
              </Button>
            </View>
            <View style={styles.captureButton}>
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
  camera: {
    flex: 1,
    alignItems: 'center',
  },
  buttonContainer: {
    flex: 0,
    flexDirection: 'row',
    justifyContent: 'center',
    height: 100,
  },
  galleryButton: {
    flex: 0,
    position: 'absolute',
    left: 15,
    top: 50,
  },
  captureButton: {
    flex: 0,
    flexDirection: 'row',
    justifyContent: 'center',
    top: 60,
  },
});
