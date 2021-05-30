/**
 * @format
 */

import 'react-native';
import React from 'react';
// Note: test renderer must be required after react-native.
import TestRenderer from 'react-test-renderer';

import CameraPreview from '../CameraPreview';
import {sandbox} from '../../test/TestUtils';

it('renders', () => {
  const onRetakeStub = sandbox.stub();
  const onSaveStub = sandbox.stub();
  const photo = sandbox.stub();
  TestRenderer.create(
    <CameraPreview photo={photo} onRetake={onRetakeStub} onSave={onSaveStub} />,
  );
});
