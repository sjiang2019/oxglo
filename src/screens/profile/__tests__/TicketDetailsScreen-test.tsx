/**
 * @format
 */

import 'react-native';
import React from 'react';
// Note: test renderer must be required after react-native.
import TestRenderer from 'react-test-renderer';

import {sandbox} from '../../../test/TestUtils';
import TicketDetailsScreen from '../TicketDetailsScreen';
import {TICKETS} from '../../../test/testData';

it('renders', () => {
  const MOCK_ROUTE = {params: {ticket: TICKETS[0]}};
  const navigationStub = sandbox.stub();
  TestRenderer.create(
    <TicketDetailsScreen route={MOCK_ROUTE} navigation={navigationStub} />,
  );
});
