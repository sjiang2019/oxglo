import * as React from 'react';

import {View} from 'react-native';
import TicketListing from './TicketListing';
import {TICKETS} from '../model/testData'

export default function ProfileScreen(): JSX.Element {
  return (
    <>
        <View style={{ flex: 1 }} />
        <View style={{flex: 14, justifyContent: 'center', alignItems: 'center'}}>
            <TicketListing tickets={TICKETS} />
        </View>
    </>
  );
}
