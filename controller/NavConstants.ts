import _ from 'lodash';

export enum NavScreen {
  CreateScreen,
  HomeScreen,
  ProfileNavigator,
  ProfileScreen,
  TicketDetails,
}

export const SCREEN_TO_NAME: {[key in NavScreen]: string} = {
  [NavScreen.CreateScreen]: 'CREATE',
  [NavScreen.HomeScreen]: 'HOME',
  [NavScreen.ProfileNavigator]: 'PROFILE_NAVIGATOR',
  [NavScreen.ProfileScreen]: 'PROFILE_SCREEN',
  [NavScreen.TicketDetails]: 'TICKET_DETAILS',
};

export const NAME_TO_SCREEN: {[key: string]: NavScreen} =
  _.invert(SCREEN_TO_NAME);

export const SCREEN_TO_ICON: {[key in NavScreen]: string | null} = {
  [NavScreen.CreateScreen]: 'add-circle',
  [NavScreen.HomeScreen]: 'ios-home',
  [NavScreen.ProfileNavigator]: 'ios-person',
  [NavScreen.ProfileScreen]: null,
  [NavScreen.TicketDetails]: null,
};
