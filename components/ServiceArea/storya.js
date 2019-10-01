import React from 'react';
import { storiesOf, addDecorator } from '@storybook/react';
// import { withKnobs, text } from '@storybook/addon-knobs';
import ServiceArea from './index';

// .addDecorator(withKnobs)
storiesOf('ServiceArea', module)
  .add('default', () => {
    return (<ServiceArea />);
  });
