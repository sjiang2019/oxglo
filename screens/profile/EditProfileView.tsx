import * as React from 'react';

import {Image, Text, StyleSheet, TouchableOpacity, View} from 'react-native';
import {Textarea} from 'native-base';

import SaveCancelHeader from '../../components/SaveCancelHeader';
import TextField from '../../components/TextField';

interface EditProfileViewProps {
  image: any;
  onClickImage: () => void;
  onSave: () => void;
  onCancel: () => void;
}

export default function EditProfileView(
  props: EditProfileViewProps,
): JSX.Element {
  const [name, setName] = React.useState('');
  const [handle, setHandle] = React.useState('');
  const [bio, setBio] = React.useState('');
  return (
    <>
      <SaveCancelHeader
        showCancel={true}
        showSave={true}
        onSave={props.onSave}
        onCancel={props.onCancel}
        cancelText="Discard"
      />
      <View style={styles.container}>
        <View style={styles.profileContainer}>
          <TouchableOpacity onPress={props.onClickImage}>
            <Image
              style={styles.avatar}
              source={{
                uri:
                  props.image != null
                    ? props.image.uri
                    : 'https://bootdey.com/img/Content/avatar/avatar6.png',
              }}
            />
          </TouchableOpacity>
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
