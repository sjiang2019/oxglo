import * as React from 'react';

import {handleResetStack} from '../../utils/utils';
import {NavScreen, SCREEN_TO_NAME} from '../../constants/NavConstants';
import CameraView from '../../components/CameraView';
import EditProfileView from './EditProfileView';

export default function EditProfileScreen({navigation}): JSX.Element {
  const [isEditingProfilePhoto, setIsEditingProfilePhoto] =
    React.useState(false);
  const [image, setImage] = React.useState<any>(null);
  return (
    <>
      {isEditingProfilePhoto ? (
        <CameraView
          image={image}
          setImage={setImage}
          onSave={() => {
            setIsEditingProfilePhoto(false);
          }}
        />
      ) : (
        <EditProfileView
          image={image}
          onClickImage={() => {
            setIsEditingProfilePhoto(true);
          }}
          onSave={() =>
            handleResetStack(
              navigation,
              SCREEN_TO_NAME[NavScreen.ProfileScreen],
            )
          }
          onCancel={() =>
            handleResetStack(
              navigation,
              SCREEN_TO_NAME[NavScreen.ProfileScreen],
            )
          }
        />
      )}
    </>
  );
}
