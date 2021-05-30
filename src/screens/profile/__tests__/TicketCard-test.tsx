/**
 * @format
 */

import 'react-native';
import React from 'react';
// Note: test renderer must be required after react-native.
import TestRenderer from 'react-test-renderer';
import TicketCard from '../TicketCard';
import {sandbox} from '../../../test/TestUtils';
import {TICKETS} from '../../../test/testData';

it('renders', () => {
  const onClickTicketStub = sandbox.stub();
  TestRenderer.create(
    <TicketCard ticket={TICKETS[0]} onClickTicket={onClickTicketStub} />,
  );
});
