/**
 * @format
 */

import 'react-native';
import React from 'react';
// Note: test renderer must be required after react-native.
import TestRenderer from 'react-test-renderer';

import {sandbox} from '../../../test/TestUtils';
import CreateScreen from '../CreateScreen';

it('renders', () => {
  const routeStub = sandbox.stub();
  const navigationStub = sandbox.stub();
  TestRenderer.create(
    <CreateScreen route={routeStub} navigation={navigationStub} />,
  );
});
