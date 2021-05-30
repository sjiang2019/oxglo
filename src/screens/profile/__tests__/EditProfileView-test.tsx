/**
 * @format
 */

import 'react-native';
import React from 'react';
// Note: test renderer must be required after react-native.
import TestRenderer from 'react-test-renderer';

import EditProfileView from '../EditProfileView';
import {sandbox} from '../../../test/TestUtils';

it('renders', () => {
  const onClickImageStub = sandbox.stub();
  const onSaveStub = sandbox.stub();
  const onCancelStub = sandbox.stub();
  TestRenderer.create(
    <EditProfileView
      image={null}
      onClickImage={onClickImageStub}
      onSave={onSaveStub}
      onCancel={onCancelStub}
    />,
  );
});
