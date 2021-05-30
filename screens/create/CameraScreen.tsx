import * as React from 'react';

import CameraView from '../../components/CameraView';
import {NavScreen, SCREEN_TO_NAME} from '../../constants/NavConstants';

export default function CameraScreen({navigation}): JSX.Element {
  const [image, setImage] = React.useState<any>(null);
  const handleSaveImage = () => {
    navigation.navigate(SCREEN_TO_NAME[NavScreen.CreateScreen], {
      photo: image,
    });
  };
  return (
    <CameraView image={image} setImage={setImage} onSave={handleSaveImage} />
  );
}
