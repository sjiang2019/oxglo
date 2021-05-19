import * as React from 'react';

import {Button, Image, Text, View} from 'react-native';
import {NavScreen, SCREEN_TO_NAME} from '../controller/NavConstants';

export default function CreateScreen({route, navigation}): JSX.Element {
  // const [photo, setPhoto] = React.useState(null);

  const photo = route.params?.photo;
  console.log('photo', photo);

  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <Text> CREATE </Text>
      <Button
        onPress={() =>
          navigation.navigate(SCREEN_TO_NAME[NavScreen.CameraScreen])
        }
        title="Press"
      />
      {photo != null ? (
        <Image
          source={{
            width: 128,
            height: 128,
            uri: photo.uri,
          }}
        />
      ) : undefined}
    </View>
  );
}
