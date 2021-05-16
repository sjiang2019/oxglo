export enum NavTab {
  Home,
  Profile,
}

export const TAB_TO_NAME: {[key in NavTab]: string} = {
  [NavTab.Home]: 'Home',
  [NavTab.Profile]: 'Profile',
};

export const NAME_TO_TAB: {[key: string]: NavTab} = {
  Home: NavTab.Home,
  Profile: NavTab.Profile,
};

export const TAB_TO_ICON: {[key in NavTab]: string} = {
  [NavTab.Home]: 'ios-home',
  [NavTab.Profile]: 'ios-person',
};
