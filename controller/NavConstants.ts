import _ from 'lodash';

export enum NavScreen {
  CameraScreen,
  CreateNavigator,
  CreateScreen,
  EditProfileScreen,
  HomeScreen,
  ProfileNavigator,
  ProfileScreen,
  TicketDetails,
}

export const SCREEN_TO_NAME: {[key in NavScreen]: string} = {
  [NavScreen.CameraScreen]: 'CAMERA_SCREEN',
  [NavScreen.CreateNavigator]: 'CREATE_NAVIGATOR',
  [NavScreen.CreateScreen]: 'CREATE_SCREEN',
  [NavScreen.EditProfileScreen]: 'EDIT_PROFILE',
  [NavScreen.HomeScreen]: 'HOME_SCREEN',
  [NavScreen.ProfileNavigator]: 'PROFILE_NAVIGATOR',
  [NavScreen.ProfileScreen]: 'PROFILE_SCREEN',
  [NavScreen.TicketDetails]: 'TICKET_DETAILS',
};

export const NAME_TO_SCREEN: {[key: string]: NavScreen} =
  _.invert(SCREEN_TO_NAME);

export const SCREEN_TO_ICON: {[key: string]: string} = {
  [NavScreen.CreateNavigator]: 'add-circle',
  [NavScreen.HomeScreen]: 'ios-home',
  [NavScreen.ProfileNavigator]: 'ios-person',
};
