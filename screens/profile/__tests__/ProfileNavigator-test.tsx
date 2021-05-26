/**
 * @format
 */

import 'react-native';
import React from 'react';
// Note: test renderer must be required after react-native.
import TestRenderer from 'react-test-renderer';
import ProfileNavigator from '../../../navigation/ProfileNavigator';

it('renders', () => {
  TestRenderer.create(<ProfileNavigator />);
});
