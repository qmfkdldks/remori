import React from 'react'
// import * as Icon from 'react-feather'
import styled from 'styled-components'
import IconBox from '../atomic/IconBox'

	import {
		Box,
		Card,
		Image,
		Heading,
		Text,
		Flex
	} from 'rebass'

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
				<Flex flexWrap="wrap" justifyContent="space-around">
					<Box p={3} width={[ 1, 1/2, 1/4 ]}>
						<IconBox>
							<div className="icon">
                                {/* <Icon.Code /> */}
							</div>
							<h3>Code Security</h3>
							<p>Lorem ipsum dolor sit amet elit, adipiscing, sed do eiusmod tempor incididunt ut labore dolore magna.</p>
						</IconBox>
					</Box>

					<Box p={3} width={[ 1, 1/2, 1/4 ]}>
						<IconBox className="bg-f78acb">
							<div className="icon">
                                {/* <Icon.Code /> */}
							</div>
							<h3>Code Security</h3>
							<p>Lorem ipsum dolor sit amet elit, adipiscing, sed do eiusmod tempor incididunt ut labore dolore magna.</p>
						</IconBox>
					</Box>

					<Box p={3} width={[ 1, 1/2, 1/4 ]}>
						<IconBox className="bg-c679e3">
							<div className="icon">
                                {/* <Icon.Users /> */}
							</div>
							<h3>Team Management</h3>
							<p>Lorem ipsum dolor sit amet elit, adipiscing, sed do eiusmod tempor incididunt ut labore dolore magna.</p>
						</IconBox>
					</Box>

					<Box p={3} width={[ 1, 1/2, 1/4 ]}>
						<IconBox className="bg-eb6b3d">
							<div className="icon">
                                {/* <Icon.GitBranch /> */}
							</div>
							<h3>Access Controlled</h3>
							<p>Lorem ipsum dolor sit amet elit, adipiscing, sed do eiusmod tempor incididunt ut labore dolore magna.</p>
						</IconBox>
					</Box>
				</Flex>
		
		
    )
}

export default BoxArea
