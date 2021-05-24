import * as React from 'react';
import Moment from 'moment';

import {
  Image,
  Keyboard,
  ScrollView,
  StyleSheet,
  TouchableOpacity,
  View,
} from 'react-native';
import {Item, Input} from 'native-base';
import DatePicker from 'react-native-date-picker';
import Collapsible from 'react-native-collapsible';

import {NavScreen, SCREEN_TO_NAME} from '../../controller/NavConstants';
import SaveCancelHeader from '../shared/SaveCancelHeader';

function TextField({
  placeholder,
  onChangeText,
}: {
  placeholder: string;
  onChangeText: (text: string) => void;
}): JSX.Element {
  return (
    <Item>
      <Input
        placeholder={placeholder}
        onChangeText={text => onChangeText(text)}
        returnKeyType="done"
      />
    </Item>
  );
}

const handleResetStack = (navigation, screen) => {
  navigation.reset({
    index: 0,
    routes: [{name: screen}],
  });
};

export default function CreateScreen({route, navigation}): JSX.Element {
  const photo = route.params?.photo;
  const [name, setName] = React.useState('');
  const [location, setLocation] = React.useState('');
  const [isCollapsed, setIsCollapsed] = React.useState(true);
  const [date, setDate] = React.useState(new Date());

  return (
    <>
      <SaveCancelHeader
        showCancel={true}
        showSave={true}
        onSave={() =>
          handleResetStack(navigation, SCREEN_TO_NAME[NavScreen.HomeScreen])
        }
        onCancel={() =>
          handleResetStack(navigation, SCREEN_TO_NAME[NavScreen.CameraScreen])
        }
        cancelText="Discard"
      />
      <View style={styles.container}>
        <TouchableOpacity
          onPress={() =>
            handleResetStack(navigation, SCREEN_TO_NAME[NavScreen.CameraScreen])
          }>
          <Image
            style={styles.image}
            source={{
              width: 256,
              height: 256,
              uri:
                photo != null
                  ? photo.uri
                  : 'https://i.stack.imgur.com/y9DpT.jpg',
            }}
          />
        </TouchableOpacity>
        <ScrollView
          keyboardShouldPersistTaps="always"
          keyboardDismissMode="interactive">
          <TextField placeholder="Name" onChangeText={setName} />
          <TextField placeholder="Location" onChangeText={setLocation} />
          <Item
            onPress={() => {
              Keyboard.dismiss();
              setIsCollapsed(!isCollapsed);
            }}>
            <Input
              value={Moment(date).format('MMM DD, YYYY')}
              pointerEvents="none"
            />
          </Item>
          <Collapsible collapsed={isCollapsed}>
            <DatePicker date={date} onDateChange={setDate} />
          </Collapsible>
        </ScrollView>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  header: {
    marginTop: 40,
    marginRight: 10,
    alignSelf: 'flex-end',
  },
  container: {
    flex: 1,
    alignItems: 'center',
    marginTop: 80,
  },

  image: {
    borderWidth: 1,
    borderColor: 'lightgray',
    marginBottom: 40,
  },

  loginBtn: {
    width: '80%',
    borderRadius: 25,
    height: 50,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 40,
    backgroundColor: 'tomato',
  },
});
