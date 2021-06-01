/**
 * @format
 */

import 'react-native';
import React from 'react';
// Note: test renderer must be required after react-native.
import TestRenderer from 'react-test-renderer';

import {sandbox} from '../../../../test/TestUtils';
import PermissionsScreen from '../PermissionsScreen';

it('renders', () => {
  const navigationStub = sandbox.stub();
  TestRenderer.create(<PermissionsScreen navigation={navigationStub} />);
});
