import * as React from 'react';

import {FlatList, Image, StyleSheet, Text, View} from 'react-native';
import {Button, Icon} from 'native-base';

import {Ticket} from '../controller/ModelConstants';
import {NavScreen, SCREEN_TO_NAME} from '../controller/NavConstants';
import {TICKETS} from '../model/testData';
import TicketCard from './TicketCard';

export default function ProfileScreen({navigation}): JSX.Element {
  const handleClickTicket = (ticket: Ticket) => {
    navigation.navigate(SCREEN_TO_NAME[NavScreen.TicketDetails], {
      ticket: ticket,
    });
  };
  const renderTicket = ({item}: {item: Ticket}) => {
    return <TicketCard ticket={item} onClickTicket={handleClickTicket} />;
  };
  return (
    <View style={styles.container}>
      <View style={styles.profileContainer}>
        <Image
          style={styles.avatar}
          source={{uri: 'https://bootdey.com/img/Content/avatar/avatar6.png'}}
        />
        <Text style={styles.userInfo}>@tdip</Text>
        <Button
          iconLeft
          light
          style={{marginTop: 10}}
          onPress={() => {
            navigation.navigate(SCREEN_TO_NAME[NavScreen.EditProfileScreen]);
          }}>
          <Icon name="pencil" style={{color: 'black', fontSize: 18}} />
          <Text style={{paddingRight: 15}}>Edit profile </Text>
        </Button>
      </View>
      <View style={styles.ticketContainer}>
        <FlatList data={TICKETS} renderItem={renderTicket} numColumns={3} />
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
