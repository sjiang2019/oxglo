import _ from 'lodash';

export enum NavScreen {
  AddProfilePhotoScreen,
  AppNavigator,
  CameraScreen,
  CreateNavigator,
  CreateScreen,
  EditProfileScreen,
  FirstNameScreen,
  HomeScreen,
  InvitesScreen,
  LastNameScreen,
  PermissionsScreen,
  PhoneNumberScreen,
  ProfileNavigator,
  ProfileScreen,
  SettingsScreen,
  SignInScreen,
  StartNavigator,
  TicketDetailsScreen,
  UsernameScreen,
  WelcomeScreen,
}

export const SCREEN_TO_NAME: {[key in NavScreen]: string} = {
  [NavScreen.AddProfilePhotoScreen]: 'ADD_PROFILE_PHOTO',
  [NavScreen.AppNavigator]: 'APP_NAVIGATOR',
  [NavScreen.CameraScreen]: 'CAMERA_SCREEN',
  [NavScreen.CreateNavigator]: 'CREATE_NAVIGATOR',
  [NavScreen.CreateScreen]: 'CREATE_SCREEN',
  [NavScreen.EditProfileScreen]: 'EDIT_PROFILE',
  [NavScreen.FirstNameScreen]: 'FIRST_NAME_SCREEN',
  [NavScreen.HomeScreen]: 'HOME_SCREEN',
  [NavScreen.InvitesScreen]: 'INVITES_SCREEN',
  [NavScreen.LastNameScreen]: 'LAST_NAME_SCREEN',
  [NavScreen.PermissionsScreen]: 'PERMISSIONS_SCREEN',
  [NavScreen.PhoneNumberScreen]: 'PHONE_NUMBER_SCREEN',
  [NavScreen.ProfileNavigator]: 'PROFILE_NAVIGATOR',
  [NavScreen.ProfileScreen]: 'PROFILE_SCREEN',
  [NavScreen.SettingsScreen]: 'SETTINGS_SCREEN',
  [NavScreen.SignInScreen]: 'SIGNIN_SCREEN',
  [NavScreen.StartNavigator]: 'START_NAVIGATOR',
  [NavScreen.TicketDetailsScreen]: 'TICKET_DETAILS_SCREEN',
  [NavScreen.UsernameScreen]: 'USERNAME_SCREEN',
  [NavScreen.WelcomeScreen]: 'WELCOME_SCREEN',
};

export const NAME_TO_SCREEN: {[key: string]: NavScreen} =
  _.invert(SCREEN_TO_NAME);

export const SCREEN_TO_ICON: {[key: string]: string} = {
  [NavScreen.CreateNavigator]: 'add-circle',
  [NavScreen.HomeScreen]: 'ios-home',
  [NavScreen.ProfileNavigator]: 'ios-person',
};
