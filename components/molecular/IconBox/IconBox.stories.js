import React from 'react';

import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { linkTo } from '@storybook/addon-links';

import IconBox from './index'

import {
	Row,
	Col,
	Container,
	Button
} from '@bootstrap-styled/v4';

storiesOf('IconBox', module)
	.add('Empty', () => <IconBox />)
	.add('Default', () => (
		<IconBox />
	))
	.add('Colored', () => (
		<Container>
			<Row>
				<Col>
					<IconBox className="bg-f78acb">
						<div className="icon">
							{/* <Icon.Code /> */}
						</div>
						<h3>Code Security</h3>
						<p>Lorem ipsum dolor sit amet elit, adipiscing, sed do eiusmod tempor incididunt ut labore dolore magna.</p>
					</IconBox>
				</Col>
				<Col>
					<IconBox>
						<div className="icon">
							{/* <Icon.Code /> */}
						</div>
						<h3>Code Security</h3>
						<Button>Magna</Button>
					</IconBox>
				</Col>
				<Col></Col>
				<Col></Col>
			</Row>
		</Container>
	)
	)
