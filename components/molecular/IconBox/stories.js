import React from 'react';

import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { linkTo } from '@storybook/addon-links';

import IconBox from './index'

storiesOf('IconBox', module)
	.add('Empty', () => <IconBox />)
	.add('Default', () => (
		<IconBox />
	))
	.add('Colored', () => (
		<Flex>
		</Flex>
	))
