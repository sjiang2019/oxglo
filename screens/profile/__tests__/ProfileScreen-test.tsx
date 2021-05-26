/**
 * @format
 */

import 'react-native';
import React from 'react';
// Note: test renderer must be required after react-native.
import TestRenderer from 'react-test-renderer';
import ProfileScreen from '../ProfileScreen';
import {sandbox} from '../../../test/TestUtils';

it('renders', () => {
  const navigationStub = sandbox.stub();
  TestRenderer.create(<ProfileScreen navigation={navigationStub} />);
});
