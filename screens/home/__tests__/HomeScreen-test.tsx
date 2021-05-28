/**
 * @format
 */

import 'react-native';
import React from 'react';
// Note: test renderer must be required after react-native.
import TestRenderer from 'react-test-renderer';

import HomeScreen from '../HomeScreen';

it('renders', () => {
  TestRenderer.create(<HomeScreen />);
});
