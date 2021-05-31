import * as React from 'react';

import {Image, StyleSheet, Text, View} from 'react-native';
import {Button, Icon} from 'native-base';

import TicketListing from './TicketListing';
import {NavScreen, SCREEN_TO_NAME} from '../../constants/NavConstants';
import {Ticket} from '../../constants/ModelConstants';
import {TICKETS} from '../../test/testData';

interface ProfileHeaderProps {
  onClickMore: () => void;
}

function ProfileHeader(props: ProfileHeaderProps): JSX.Element {
  return (
    <View style={{flexDirection: 'row', marginTop: 40, zIndex: 2}}>
      <View style={{flex: 1, position: 'absolute', right: 30, top: 5}}>
        <Icon
          name="ellipsis-horizontal"
          style={{fontSize: 30, height: 80}}
          onPress={props.onClickMore}
        />
      </View>
    </View>
  );
}

export default function ProfileScreen({navigation}): JSX.Element {
  const handleClickTicket = (ticket: Ticket) => {
    navigation.navigate(SCREEN_TO_NAME[NavScreen.TicketDetailsScreen], {
      ticket: ticket,
    });
  };
  return (
    <>
      <ProfileHeader
        onClickMore={() => {
          navigation.navigate(SCREEN_TO_NAME[NavScreen.SettingsScreen]);
        }}
      />
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
        <TicketListing tickets={TICKETS} onClickTicket={handleClickTicket} />
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    zIndex: 1,
  },
  profileContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
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
