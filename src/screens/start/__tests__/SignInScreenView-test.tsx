/**
 * @format
 */

import 'react-native';
import React from 'react';
// Note: test renderer must be required after react-native.
import TestRenderer from 'react-test-renderer';

import {sandbox} from '../../../test/TestUtils';
import SignInView from '../SignInScreenView';

it('renders', () => {
  const onClickSignInStub = sandbox.stub();
  TestRenderer.create(<SignInView onClickSignIn={onClickSignInStub} />);
});
