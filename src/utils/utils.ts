import {launchImageLibrary} from 'react-native-image-picker';

import {NAME_TO_SCREEN, SCREEN_TO_ICON} from '../constants/NavConstants';

export function assert(condition, message) {
  if (!condition) {
    throw new Error(message || 'Assertion failed');
  }
}

export function getIconFromTabName(tabName: string): string {
  assert(tabName in NAME_TO_SCREEN, `Unexpected tab name ${tabName}.`);
  return SCREEN_TO_ICON[NAME_TO_SCREEN[tabName]];
}

export function handleResetStack(navigation, screen): void {
  navigation.reset({
    index: 0,
    routes: [{name: screen}],
  });
}

export function selectPhotoFromLibrary(
  onSelectPhoto: (photo: any) => void,
): any {
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
      onSelectPhoto(response);
    }
  });
}
