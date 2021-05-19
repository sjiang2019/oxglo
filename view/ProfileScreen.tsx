import * as React from 'react';

import {FlatList, Image, StyleSheet, Text, View} from 'react-native';

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
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <Image
        style={styles.avatar}
        source={{uri: 'https://bootdey.com/img/Content/avatar/avatar6.png'}}
      />
      <Text style={styles.name}>John Doe </Text>
      <Text style={styles.userInfo}>jhonnydoe@mail.com </Text>
      <Text style={styles.userInfo}>Florida </Text>
      <FlatList data={TICKETS} renderItem={renderTicket} numColumns={3} />
    </View>
  );
}

const styles = StyleSheet.create({
  avatar: {
    width: 130,
    height: 130,
    borderRadius: 63,
    borderWidth: 4,
    borderColor: 'white',
    marginBottom: 10,
  },
  name: {
    fontSize: 22,
    color: '#000000',
    fontWeight: '600',
  },
  userInfo: {
    fontSize: 16,
    color: '#778899',
    fontWeight: '600',
  },
});
