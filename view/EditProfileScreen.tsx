import * as React from 'react';

import {FlatList, Image, StyleSheet, Text, View} from 'react-native';
import {Button, Icon} from 'native-base';

import {Ticket} from '../controller/ModelConstants';
import {NavScreen, SCREEN_TO_NAME} from '../controller/NavConstants';
import {TICKETS} from '../model/testData';
import TicketCard from './TicketCard';

export default function EditProfileScreen({navigation}): JSX.Element {
  return (
    <View style={styles.container}>
      <View style={styles.profileContainer}>
        <Image
          style={styles.avatar}
          source={{uri: 'https://bootdey.com/img/Content/avatar/avatar6.png'}}
        />
        <Text style={styles.userInfo}>@tdip</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  profileContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 20,
  },
  avatar: {
    width: 100,
    height: 100,
    borderRadius: 63,
    borderColor: 'white',
    marginBottom: 10,
  },
  userInfo: {
    fontSize: 16,
    color: 'black',
    fontWeight: '600',
  },
  ticketContainer: {
    flex: 2,
    alignItems: 'center',
  },
});
