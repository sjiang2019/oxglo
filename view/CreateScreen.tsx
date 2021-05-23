import * as React from 'react';
import Moment from 'moment';

import {
  Image,
  Keyboard,
  ScrollView,
  StyleSheet,
  TouchableOpacity,
  TouchableWithoutFeedback,
  View,
} from 'react-native';
import {Button, Item, Input, Text} from 'native-base';
import DatePicker from 'react-native-date-picker';
import Collapsible from 'react-native-collapsible';

import {NavScreen, SCREEN_TO_NAME} from '../controller/NavConstants';

const DismissKeyboard = ({children}) => (
  <TouchableWithoutFeedback
    onPress={() => Keyboard.dismiss()}
    accessible={false}>
    {children}
  </TouchableWithoutFeedback>
);

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
      />
    </Item>
  );
}

export default function CreateScreen({route, navigation}): JSX.Element {
  const photo = route.params?.photo;
  const [name, setName] = React.useState('');
  const [location, setLocation] = React.useState('');
  const [isCollapsed, setIsCollapsed] = React.useState(true);
  const [date, setDate] = React.useState(new Date());

  return (
    <>
      <View style={styles.header}>
        <Button
          transparent
          onPress={() =>
            navigation.reset({
              index: 0,
              routes: [{name: SCREEN_TO_NAME[NavScreen.HomeScreen]}],
            })
          }>
          <Text>Save</Text>
        </Button>
      </View>
      <View style={styles.container}>
        <TouchableOpacity
          onPress={() =>
            navigation.reset({
              index: 0,
              routes: [{name: SCREEN_TO_NAME[NavScreen.CameraScreen]}],
            })
          }>
          <Image
            style={{borderWidth: 1, borderColor: 'lightgray', marginBottom: 40}}
            source={{
              width: 128,
              height: 128,
              uri:
                photo != null
                  ? photo.uri
                  : 'https://i.stack.imgur.com/y9DpT.jpg',
            }}
          />
        </TouchableOpacity>
        <ScrollView
          keyboardShouldPersistTaps="never"
          keyboardDismissMode="interactive">
          <TextField placeholder="Name" onChangeText={setName} />
          <TextField placeholder="Location" onChangeText={setLocation} />
          <Item onPress={() => setIsCollapsed(!isCollapsed)}>
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
