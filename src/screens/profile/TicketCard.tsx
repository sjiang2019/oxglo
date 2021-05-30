import * as React from 'react';

import {View, TouchableOpacity, Image} from 'react-native';
import {Ticket} from '../../constants/ModelConstants';

interface TicketCardProps {
  ticket: Ticket;
  onClickTicket: (ticket: Ticket) => void;
}

export default function TicketCard(props: TicketCardProps): JSX.Element {
  const image = {
    uri: props.ticket.imageUrl,
    width: 128,
    height: 128,
  };
  return (
    <View>
      <TouchableOpacity
        onPress={() => props.onClickTicket(props.ticket)}
        style={{borderColor: 'black', borderWidth: 0.7}}>
        <Image source={image} />
      </TouchableOpacity>
    </View>
  );
}
