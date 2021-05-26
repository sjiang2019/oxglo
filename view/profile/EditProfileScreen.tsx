import * as React from 'react';

import {Image, StyleSheet, Text, View} from 'react-native';
import {Textarea} from 'native-base';

import {NavScreen, SCREEN_TO_NAME} from '../../controller/NavConstants';
import {handleResetStack} from '../../controller/utils';
import SaveCancelHeader from '../shared/SaveCancelHeader';
import TextField from '../shared/TextField';

export default function EditProfileScreen({navigation}): JSX.Element {
  const [name, setName] = React.useState('');
  const [handle, setHandle] = React.useState('');
  const [bio, setBio] = React.useState('');

  return (
    <>
      <SaveCancelHeader
        showCancel={true}
        showSave={true}
        onSave={() =>
          handleResetStack(navigation, SCREEN_TO_NAME[NavScreen.ProfileScreen])
        }
        onCancel={() =>
          handleResetStack(navigation, SCREEN_TO_NAME[NavScreen.ProfileScreen])
        }
        cancelText="Discard"
      />
      <View style={styles.container}>
        <View style={styles.profileContainer}>
          <Image
            style={styles.avatar}
            source={{uri: 'https://bootdey.com/img/Content/avatar/avatar6.png'}}
          />
          <Text>Change photo</Text>
          <TextField placeholder="Name" onChangeText={setName} />
          <TextField placeholder="Handle" onChangeText={setHandle} />
          <View style={{flex: 1, flexDirection: 'row', marginTop: 20}}>
            <Textarea
              rowSpan={5}
              bordered
              placeholder="Bio..."
              style={{width: '100%'}}
              onChangeText={setBio}
            />
          </View>
        </View>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 20,
  },
  profileContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    margin: 20,
  },
  avatar: {
    width: 100,
    height: 100,
    borderRadius: 63,
    borderColor: 'white',
    marginBottom: 10,
  },
});
