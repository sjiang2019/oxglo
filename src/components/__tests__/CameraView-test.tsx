/**
 * @format
 */

import 'react-native';
import React from 'react';
// Note: test renderer must be required after react-native.
import TestRenderer from 'react-test-renderer';

import CameraView from '../CameraView';

it('renders', () => {
  TestRenderer.create(
    <CameraView image={null} setImage={() => {}} onSave={() => {}} />,
  );
});
