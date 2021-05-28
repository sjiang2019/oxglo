/**
 * @format
 */

import 'react-native';
import React from 'react';
// Note: test renderer must be required after react-native.
import TestRenderer from 'react-test-renderer';

import TextField from '../TextField';
import {sandbox} from '../../test/TestUtils';

it('renders', () => {
  const onChangeTextStub = sandbox.stub();
  TestRenderer.create(
    <TextField placeholder="test" onChangeText={onChangeTextStub} />,
  );
});
