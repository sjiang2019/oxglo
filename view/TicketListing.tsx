import * as React from 'react';

import {FlatList, View, Text, Image} from 'react-native';

import { Ticket } from '../model/constants';

interface TicketCardProps {
    ticket: Ticket
}

const TicketCard = (props: TicketCardProps): JSX.Element => {
    const image = {
        uri: props.ticket.imageUrl,
        width: 128,
        height: 128,
      };
    return (
        <View>
            <Text> {props.ticket.id} </Text>
            <Text> {props.ticket.eventName} </Text>
            <Text> {props.ticket.description} </Text>
            <Image source={image} />
        </View>
    )
}

interface TicketListingProps {
    tickets: Array<Ticket>,
}

const renderTicket = ({item}: {item: Ticket}) => {
    return (
        <TicketCard ticket={item} />
    )
}

export default function TicketListing(props: TicketListingProps): JSX.Element {
  return (
    <FlatList 
        data={props.tickets}
        renderItem={renderTicket}
    />
  );
}
