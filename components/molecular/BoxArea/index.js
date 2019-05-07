import React from 'react'
import * as Icon from 'react-feather'
import styled from 'styled-components'
import { Box,Heading,Text,Flex } from 'rebass'

import IconBox from '../IconBox'

const BoxAreaContainer = styled.section`
position: relative;
padding-bottom: 80px;
margin-top: -130px;
z-index: 1;

@media only screen and (max-width: 767px) {
	margin-top: 0;
	padding-bottom: 20px;
}

@media only screen and (min-width: 768px) and (max-width: 991px) {
	padding-bottom: 50px;
	margin-top: -65px;
}
`

const BoxArea = (props) => {
	return (
		<Flex p={[1, 3, 5]} flexWrap="wrap" justifyContent="space-around">
			<Box p={3} width={[1, 1 / 2, 1 / 4]}>
				<IconBox
				icon={<Icon.Code />}
				heading="Code"
				text="Code is the most powerful tool in the world. Consult to us to bring your idea in reality.">
				</IconBox>
			</Box>
			
			<Box p={3} width={[1, 1 / 2, 1 / 4]}>
				<IconBox 
				icon={<Icon.Layers />}
				primary="#f78acb"
				secondary="rgba(247, 138, 203, 0.3)"
				heading="Platform"
				text="We need foundation of our creativity. Be one of us to build success & failures foundation.">
				</IconBox>
			</Box>

			<Box p={3} width={[1, 1 / 2, 1 / 4]}>
				<IconBox 
				icon={<Icon.Layers />}
				primary="#c679e3"
				secondary="#edc3fc"
				heading="Connection"
				text="Connect potential startup partners through our network. Welcome everyone!">
				</IconBox>
			</Box>

			<Box p={3} width={[1, 1 / 2, 1 / 4]}>
				<IconBox 
				icon={<Icon.BarChart />}
				primary="#eb6b3d"
				secondary="rgba(235, 107, 61, 0.3)"
				heading="Immense Data"
				text="We are collecting good quantity and quality of data to not repeat failures.">
				</IconBox>
			</Box>

		</Flex>


	)
}

export default BoxArea
