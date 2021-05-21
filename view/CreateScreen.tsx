import * as React from 'react';

import {
  Button,
  Image,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import DatePicker from 'react-native-date-picker';
import Collapsible from 'react-native-collapsible';

import {NavScreen, SCREEN_TO_NAME} from '../controller/NavConstants';

interface FormInputProps {
  label: string;
  onChangeText: (text: string) => void;
  placeholder?: string;
}

function FormInput(props: FormInputProps): JSX.Element {
  return (
    <View style={{flexDirection: 'row'}}>
      <View style={styles.label}>
        <Text>{props.label}</Text>
      </View>
      <View style={styles.inputView}>
        <TextInput
          style={styles.TextInput}
          placeholder={props.placeholder}
          onChangeText={name => props.onChangeText(name)}
        />
      </View>
    </View>
  );
}

export default function CreateScreen({route, navigation}): JSX.Element {
  const photo = route.params?.photo;
  const [name, setName] = React.useState('');
  const [location, setLocation] = React.useState('');
  const [isCollapsed, setIsCollapsed] = React.useState(true);
  const [date, setDate] = React.useState(new Date());

  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <FormInput label="Name" onChangeText={setName} placeholder="Name" />
      <FormInput
        label="Location"
        onChangeText={setLocation}
        placeholder="Location"
      />
      <TouchableOpacity onPress={() => setIsCollapsed(!isCollapsed)}>
        <Text>DATE</Text>
      </TouchableOpacity>
      <Collapsible collapsed={isCollapsed}>
        <DatePicker date={date} onDateChange={setDate} />
      </Collapsible>
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

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },

  image: {
    marginBottom: 40,
  },

  inputView: {
    flex: 3,
    borderBottomWidth: 1,
    width: '70%',
    height: 30,
  },

  label: {
    flex: 1,
    marginLeft: 10,
    justifyContent: 'center',
  },

  TextInput: {
    height: 50,
    flex: 1,
    marginLeft: 10,
  },

  forgot_button: {
    height: 30,
    marginBottom: 30,
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
