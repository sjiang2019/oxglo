import * as React from 'react';

import {Text, View, Image} from 'react-native';

export default function TicketDetailsScreen({route, navigation}): JSX.Element {
  const {ticket} = route.params;
  const image = {
    uri: ticket.imageUrl,
    width: 128,
    height: 128,
  };
  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <Text> {ticket.id} </Text>
      <Text> {ticket.eventName} </Text>
      <Text> {ticket.description} </Text>
      <Image source={image} />
    </View>
  );
}
