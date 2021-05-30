import _ from 'lodash';

export enum NavScreen {
  CameraScreen,
  CreateNavigator,
  CreateScreen,
  EditProfileScreen,
  HomeScreen,
  PermissionsScreen,
  ProfileNavigator,
  ProfileScreen,
  SettingsScreen,
  SignInScreen,
  StartNavigator,
  TicketDetails,
  WelcomeScreen,
}

export const SCREEN_TO_NAME: {[key in NavScreen]: string} = {
  [NavScreen.CameraScreen]: 'CAMERA_SCREEN',
  [NavScreen.CreateNavigator]: 'CREATE_NAVIGATOR',
  [NavScreen.CreateScreen]: 'CREATE_SCREEN',
  [NavScreen.EditProfileScreen]: 'EDIT_PROFILE',
  [NavScreen.HomeScreen]: 'HOME_SCREEN',
  [NavScreen.PermissionsScreen]: 'PERMISSIONS_SCREEN',
  [NavScreen.ProfileNavigator]: 'PROFILE_NAVIGATOR',
  [NavScreen.ProfileScreen]: 'PROFILE_SCREEN',
  [NavScreen.SettingsScreen]: 'SETTINGS_SCREEN',
  [NavScreen.SignInScreen]: 'SIGNIN_SCREEN',
  [NavScreen.StartNavigator]: 'START_NAVIGATOR',
  [NavScreen.TicketDetails]: 'TICKET_DETAILS',
  [NavScreen.WelcomeScreen]: 'WELCOME_SCREEN',
};

export const NAME_TO_SCREEN: {[key: string]: NavScreen} =
  _.invert(SCREEN_TO_NAME);

export const SCREEN_TO_ICON: {[key: string]: string} = {
  [NavScreen.CreateNavigator]: 'add-circle',
  [NavScreen.HomeScreen]: 'ios-home',
  [NavScreen.ProfileNavigator]: 'ios-person',
};
