import {NAME_TO_TAB, TAB_TO_ICON} from './NavConstants';

export function assert(condition, message) {
  if (!condition) {
    throw new Error(message || 'Assertion failed');
  }
}

export function getIconFromTabName(tabName: string): string {
  assert(tabName in NAME_TO_TAB, `Unexpected tab name ${tabName}.`);
  return TAB_TO_ICON[NAME_TO_TAB[tabName]];
}
