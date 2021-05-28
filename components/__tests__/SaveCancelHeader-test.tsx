/**
 * @format
 */

import 'react-native';
import React from 'react';
// Note: test renderer must be required after react-native.
import TestRenderer from 'react-test-renderer';

import {sandbox} from '../../test/TestUtils';
import SaveCancelHeader from '../SaveCancelHeader';

describe('SaveCancelHeader', () => {
  beforeEach(() => {
    jest.spyOn(console, 'error').mockImplementation(() => {});
  });

  it('renders', () => {
    const onSaveStub = sandbox.stub();
    const onCancelStub = sandbox.stub();
    TestRenderer.create(
      <SaveCancelHeader
        showSave={true}
        showCancel={true}
        onSave={onSaveStub}
        onCancel={onCancelStub}
      />,
    );
  });
  it('errors when show save without save fn', () => {
    expect(() =>
      TestRenderer.create(
        <SaveCancelHeader showSave={true} showCancel={false} />,
      ),
    ).toThrowError();
  });
  it('errors when show cancel without cancel fn', () => {
    expect(() =>
      TestRenderer.create(
        <SaveCancelHeader showSave={false} showCancel={true} />,
      ),
    ).toThrowError();
  });
});
