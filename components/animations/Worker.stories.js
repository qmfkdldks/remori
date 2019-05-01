import React from 'react';
import { storiesOf } from '@storybook/react';

import Worker from './Worker'

import {
  Row,
  Col,
  Container
} from '@bootstrap-styled/v4';

storiesOf('Animations', module)
  .add('Worker', () => (
    <Container>
      <Row>
        <Col>
        </Col>
        <Col>
          <Worker />
        </Col>
      </Row>
    </Container>)
  )
