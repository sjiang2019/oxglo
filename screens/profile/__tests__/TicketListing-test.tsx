/**
 * @format
 */

import 'react-native';
import React from 'react';
// Note: test renderer must be required after react-native.
import TestRenderer from 'react-test-renderer';
import {sandbox} from '../../../test/TestUtils';
import {TICKETS} from '../../../test/testData';
import TicketListing from '../TicketListing';

it('renders', () => {
  const onClickTicketStub = sandbox.stub();
  TestRenderer.create(
    <TicketListing tickets={TICKETS} onClickTicket={onClickTicketStub} />,
  );
});
