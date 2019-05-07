import React from 'react'
import styled from 'styled-components';
import Worker from '../../animations/Worker'
import { Rotate3d, MoveBounce, RotateMe, AnimationFramesOne } from '../../animations/keyframes'

import {
  Box,
  Image,
  Heading,
  Text,
  Button,
  Flex
} from 'rebass'

import img from '../../../images/banner-bg1.jpg';

const MainBannerContainer = styled(Box)`
position: relative;
padding-top: 100px;
height: 510px;
z-index: 1;
background: transparent url(${img}) right top no-repeat;

@media only screen and (max-width: 767px) {
    height: 100%;
    padding-top: 50px;
    padding-bottom: 80px;
    background-position: center;   
}

@media only screen and (min-width: 768px) and (max-width: 991px) {
    height: 100%;
    padding-top: 85px;
    padding-bottom: 165px;
}
`;

const HeroContentHeading = styled(Heading)`
font-size: 45px;
font-weight: 500;
margin-bottom: 20px;
`
const HeroContentText = styled(Text)`
margin-bottom: 30px;
color: #6084a4;
line-height: 1.9;
`

const Shape = styled.div`
position: absolute;
animation: ${props => props.animation} ${props => props.animationOptions};

&.shape1 {
    top: 20%;
    z-index: -1;
    left: 30px;
    opacity: .4;
  }
  
  &.shape2 {
    z-index: -1;
    top: 60%;
    left: 15%;
  }
  
  &.shape3 {
    left: 25%;
    bottom: 15%;
    z-index: -1;
  }
  
  &.shape4 {
    right: 25%;
    bottom: 15%;
    z-index: -1;
  }
  
  &.shape5 {
    right: 5%;
    top: 10%;
    z-index: -1;
    opacity: .2;
  }
  
  &.shape6 {
    z-index: -1;
    top: 40%;
    right: 10%;
  }
  
  &.shape7 {
    left: 25%;
    top: 15%;
    z-index: -1;
  }
  
  &.shape8 {
    z-index: -1;
    top: 15%;
    right: 10%;
  }

@media only screen and (max-width: 767px) {
    &.shape1, &.shape2, &.shape3, &.shape4, &.shape5 {
        display: none;
    }
}

@media only screen and (min-width: 768px) and (max-width: 991px) {
    &.shape1, &.shape2, &.shape3, &.shape4, &.shape5, &.shape7 {
        display: none;
      }
}

@media only screen and (min-width: 992px) and (max-width: 1199px) {
    &.shape1 {
        display: none;
    }
}
`
const StyledButton = styled(Button)`
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

const MainBanner = () => {
  return (
    <MainBannerContainer>
      <Flex flexWrap="wrap" alignItems="center" justifyContent="center">
        <Box p={3} px={[3, 5]} width={[1, 1, 1 / 2]}>
          {/* <HeroContent> */}
            <HeroContentHeading>Remori IT Startup Platform Argentina</HeroContentHeading>
            <HeroContentText>
              We gather and measure all business' aspects of startups to eventually accumulate experience of success and failures. 
              Data Driven Business is the main system that we are persuing. You can join us!
            </HeroContentText>

            {/* <Link href="#"> */}
            <StyledButton>We are opened!</StyledButton>
            {/* </Link> */}
          {/* </HeroContent> */}
        </Box>
        <Box p={3} mw={3} width={[1, 1, 1 / 2]}>
          <Worker />
        </Box>
      </Flex>


      <Shape className="shape1" animation={Rotate3d} animationOptions="4s linear infinite">
        <Image src={require("../../../images/shape1.png")} alt="shape" />
      </Shape>
      <Shape className="shape2" animation={RotateMe} animationOptions="5s linear infinite">
        <Image src={require("../../../images/shape2.svg")} alt="shape" />
      </Shape>
      <Shape className="shape3" animation={AnimationFramesOne} animationOptions="15s infinite linear">
        <Image src={require("../../../images/shape3.svg")} alt="shape" />
      </Shape>
      <Shape className="shape4" animation={AnimationFramesOne} animationOptions="20s infinite linear">
        <Image src={require("../../../images/shape4.svg")} alt="shape" />
      </Shape>
      <Shape className="shape5" animation={MoveBounce} animationOptions="5s linear infinite">
        <Image src={require("../../../images/shape5.png")} alt="shape" />
      </Shape>
      <Shape className="shape6" animation={RotateMe} animationOptions="10s linear infinite">
        <Image src={require("../../../images/shape4.svg")} alt="shape" />
      </Shape>
      <Shape className="shape7" animation={AnimationFramesOne} animationOptions="20s infinite linear">
        <Image src={require("../../../images/shape4.svg")} alt="shape" />
      </Shape>
      <Shape className="shape8" animation={RotateMe} animationOptions="10s linear infinite">
        <Image src={require("../../../images/shape2.svg")} alt="shape" />
      </Shape>
    </MainBannerContainer>
  )
}

export default MainBanner