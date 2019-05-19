import React from 'react'
import styled from 'styled-components';
import { Box, Heading, Text, Button, Flex } from 'rebass'

import img from '../../../images/banner-bg1.jpg';

export const MainBannerContainer = styled(Box)`
position: relative;
margin-top: 300px;
height: 510px;
z-index: 1;
background: transparent url(${img}) right top no-repeat;

@media only screen and (max-width: 767px) {
    height: 100%;
    margin-top: 50px;
    padding-bottom: 80px;
    background-position: center;   
}

@media only screen and (min-width: 768px) and (max-width: 991px) {
    height: 100%;
    margin-top: 85px;
    padding-bottom: 165px;
}
`;

export const HeroContentHeading = styled(Heading)`
font-size: 45px;
font-weight: 500;
margin-bottom: 20px;
color: #0e314c;
`
export const HeroContentText = styled(Text)`
margin-bottom: 30px;
color: #6084a4;
line-height: 1.9;
`

export const StyledButton = styled(Button)`
font-weight: 600;
font-size: 14px;
border: none;
padding: 15px 40px;
position: relative;
border-radius: 4px;
z-index: 1;
text-transform: uppercase;
-webkit-transition: 0.5s;
transition: 0.5s;
`