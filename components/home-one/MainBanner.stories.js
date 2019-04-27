import React from 'react';

import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { linkTo } from '@storybook/addon-links';

import MainBanner from './MainBanner'

storiesOf('Button', module)
  .add('with sdfdf text', () => <MainBanner />)
