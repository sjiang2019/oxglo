import * as React from 'react';

import {FlatList, StyleSheet, View} from 'react-native';
import {Ticket} from '../../constants/ModelConstants';

import TicketCard from './TicketCard';

interface TIcketListingProps {
  tickets: Array<Ticket>;
  onClickTicket: (ticket: Ticket) => void;
}

export default function TicketListing(props: TIcketListingProps): JSX.Element {
  const renderTicket = ({item}: {item: Ticket}) => {
    return <TicketCard ticket={item} onClickTicket={props.onClickTicket} />;
  };
  return (
    <View style={styles.ticketContainer}>
      <FlatList data={props.tickets} renderItem={renderTicket} numColumns={3} />
    </View>
  );
}

const styles = StyleSheet.create({
  ticketContainer: {
    flex: 2,
    alignItems: 'center',
  },
});
