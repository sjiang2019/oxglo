/**
 * @format
 */

import 'react-native';
import React from 'react';
// Note: test renderer must be required after react-native.
import TestRenderer from 'react-test-renderer';

import {sandbox} from '../../../../test/TestUtils';
import PhoneNumberScreen from '../PhoneNumberScreen';

it('renders', () => {
  const navigationStub = sandbox.stub();
  TestRenderer.create(<PhoneNumberScreen navigation={navigationStub} />);
});
