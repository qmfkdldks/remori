import React from 'react'
import Link from 'next/link'

// import { Wobble,  } from 'animate-css-styled-components';
import { Fade, Bounce, Zoom, Rotate, Roll } from 'react-reveal';

import styled, { keyframes } from 'styled-components';

import {
    Row,
    Col,
    Container,
    Button
  } from '@bootstrap-styled/v4';

const MainBannerContainer = styled.div`
position: relative;
height: 910px;
z-index: 1;
background: transparent url('../../images/banner-bg1.jpg') right top no-repeat;

.d-table {
    width: 100%;
    height: 100%;
}

.d-table.cell {
    vertical-align: middle;
}

@media only screen and (max-width: 767px) {
    height: 100%;
    padding-top: 150px;
    padding-bottom: 80px;
    background-position: center;   
}

@media only screen and (min-width: 768px) and (max-width: 991px) {
    height: 100%;
    padding-top: 185px;
    padding-bottom: 165px;
}

@media only screen and (min-width: 992px) and (max-width: 1199px) {

}
`;

const HeroContent = styled.div`
h1 {
    font-size: 45px;
    font-weight: 500;
    margin-bottom: 20px;
  }

  p {
    margin-bottom: 30px;
  }

  @media only screen and (max-width: 767px) {
    margin-bottom: 45px;

    h1 {
        font-size: 25px;
        line-height: 30px;
        margin-bottom: 15px;
    }
  }

  @media only screen and (min-width: 768px) and (max-width: 991px) {

    h1 {
        font-size: 30px;
        margin-bottom: 15px;
    }
}

@media only screen and (min-width: 992px) and (max-width: 1199px) {
    h1 {
        font-size: 35px;
 }
}
`
const BannerImage = styled.div`
position: relative;

@media only screen and (max-width: 767px) {
    text-align: center;
}

@media only screen and (min-width: 768px) and (max-width: 991px) {
    text-align: center;
    margin-top: 45px;
}

@media only screen and (min-width: 992px) and (max-width: 1199px) {

}
`
const BannerInnerImage = styled.img`
position: absolute;
max-width: 100%;

&.man {
    z-index: 3;
    top: -130px;
    left: -45px;
}

&.code {
    right: 145px;
    top: -287px;
}

&.carpet {
    left: 25px;
    top: -20px;
}

&.bin {
    right: 12%;
    top: 118px;
    z-index: 1;
}

&.book {
    left: 28%;
    top: -120px;
    z-index: 2;
}

&.desktop {
    right: 35%;
  z-index: 1;
  top: -150px;
}

&.dot {
    right: 20px;
    top: -110px;
}

&.flower-top-big {
    right: 25px;
    top: -140px;
}

&.flower-top {
    right: 30%;
    z-index: 1;
    top: -35px;
}

&.keyboard {
    left: 37%;
    top: -28px;
    z-index: 1;
}

&.pen {
    left: 37%;
    top: -160px;
    z-index: 1;
}

&.table {
    left: 90px;
    top: -110px;
}

&.tea-cup {
    left: 56%;
    top: -25px;
    z-index: 2;
}

&.headphone {
    right: 105px;
    top: -28px;
}

&.main-pic {
    display: none;
}

@media only screen and (max-width: 767px) {
    display: none;
    position: relative;

    &.main-pic {
        display: block;
        left: 0;
        right: 0;
        margin: 0 auto;
    }
}

@media only screen and (min-width: 768px) and (max-width: 991px) {
    position: relative;
    display: none;
}

@media only screen and (min-width: 992px) and (max-width: 1199px) {

    &.man {
        top: -140px;
        left: -120px;
    }
    
    &.code {
        right: 160px;
        top: -286px;
    }
    
    &.carpet {
        left: -30px;
        top: -15px;
    }
    
    &.bin {
        right: 15%;
        top: 105px;
    }
    
    &.book {
        left: 15%;
        top: -120px;
    }
    
    &.desktop {
        right: 37%;
        top: -160px;
    }
    
    &.dot {
        right: 20px;
        top: -110px;
    }
    
    &.flower-top-big {
        right: 25px;
        top: -140px;
    }
    
    &.flower-top {
        right: 28%;
        top: -25px;
    }
    
    &.keyboard {
        left: 29%;
        top: -35px;
    }
    
    &.pen {
        left: 26%;
        top: -160px;
    }
    
    &.table {
        left: 15px;
        top: -110px;
    }
    
    &.tea-cup {
        left: 50%;
        top: -18px;
    }
    
    &.headphone {
        right: 98px;
        top: -20px;
    }
    
    &.main-pic {
    }
    
}
`

// Create the keyframes
const rotate3d = keyframes`
0% {
    -webkit-transform: rotateY(0deg);
    transform: rotateY(0deg);
}
100% {
    -webkit-transform: rotateY(360deg);
    transform: rotateY(360deg);
}
`;

const movebounce = keyframes`
0% {
    -webkit-transform: translateY(0px);
            transform: translateY(0px);
  }
  50% {
    -webkit-transform: translateY(20px);
            transform: translateY(20px);
  }
  100% {
    -webkit-transform: translateY(0px);
            transform: translateY(0px);
  }
`; 

const moveleftbounce = keyframes`
0% {
    -webkit-transform: translateX(0px);
            transform: translateX(0px);
  }
  50% {
    -webkit-transform: translateX(20px);
            transform: translateX(20px);
  }
  100% {
    -webkit-transform: translateX(0px);
            transform: translateX(0px);
  }
`

const rotateme = keyframes`
from {
    transform: rotate(0deg);
}
to {
    transform: rotate(360deg);
}
`

const animationFramesOne = keyframes`
0% {
    transform: translate(0px, 0px) rotate(0deg);
  }
  20% {
    transform: translate(73px, -1px) rotate(36deg);
  }
  40% {
    transform: translate(141px, 72px) rotate(72deg);
  }
  60% {
    transform: translate(83px, 122px) rotate(108deg);
  }
  80% {
    transform: translate(-40px, 72px) rotate(144deg);
  }
  100% {
    transform: translate(0px, 0px) rotate(0deg);
  }
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

const MainBanner = () => {
    return (
		<MainBannerContainer>
			<div className="d-table">
				<div className="d-table-cell">
					<Container>
						<Row className="h-100 justify-content-center align-items-center">
							<Col lg="5">
								<HeroContent>
									<h1>Secure IT Solutions for a more secure environment</h1>
									<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida</p>
									
									{/* <Link href="#"> */}
                                    <StyledButton>Get Started</StyledButton>
									{/* </Link> */}
								</HeroContent>
							</Col>
							<Col lg={{ size: 6, offset: 1 }}>
								<BannerImage>
                                    <Fade left>
                                        <BannerInnerImage 
                                            src={require("../../images/banner-image/carpet.png")}                                                                                         
                                            alt="carpet"
                                            className="carpet"
                                        />
                                    </Fade>
                                    <Zoom>
                                        <BannerInnerImage 
                                            src={require("../../images/banner-image/dot.png")}
                                            alt="dot"
                                            className="dot"
                                        />
                                    </Zoom>
                                    <Fade bottom>
                                        <BannerInnerImage 
                                            src={require("../../images/banner-image/keyboard.png")} 
                                            alt="keyboard"
                                            className="keyboard"
                                        />
                                    </Fade>
                                    <Zoom>
                                        <BannerInnerImage 
                                            src={require("../../images/banner-image/table.png")} 
                                            alt="table"
                                            className="table"
                                        />
                                    </Zoom>
                                    <Zoom>
                                        <BannerInnerImage 
                                            src={require("../../images/banner-image/pen.png")} 
                                            alt="pen"
                                            className="pen"
                                        />
                                    </Zoom>
                                    <Bounce>
                                        <BannerInnerImage 
                                            src={require("../../images/banner-image/book.png")} 
                                            alt="book"
                                            className="book"
                                        />
                                    </Bounce>
                                    <Fade top>
                                        <BannerInnerImage
                                            src={require('../../images/banner-image/man.png')}  
                                            alt="man"
                                            className="man"
                                        />
                                    </Fade>
                                    <Fade bottom>
                                        <BannerInnerImage 
                                            src={require("../../images/banner-image/flower-top-big.png")} 
                                            alt="flower-top-big"
                                            className="flower-top-big"
                                        />
                                    </Fade>
                                    <Zoom>
                                        <BannerInnerImage 
                                            src={require("../../images/banner-image/bin.png")}                                                                                         
                                            alt="bin"
                                            className="bin"
                                        />
                                    </Zoom>
                                    <Fade top>
                                        <BannerInnerImage 
                                            src={require("../../images/banner-image/dekstop.png")} 
                                            alt="dekstop"
                                            className="desktop"
                                        />
                                    </Fade>
                                    <Rotate>
                                        <BannerInnerImage 
                                            src={require("../../images/banner-image/flower-top.png")} 
                                            alt="flower-top"
                                            className="flower-top"
                                        />
                                    </Rotate>
                                    <Fade right>
                                        <BannerInnerImage 
                                            src={require("../../images/banner-image/tea-cup.png")} 
                                            alt="tea-cup"
                                            className="tea-cup"
                                        />
                                    </Fade>
                                    <Roll>
                                        <BannerInnerImage 
                                            src={require("../../images/banner-image/headphone.png")} 
                                            alt="headphone"
                                            className="headphone"
                                        />
                                    </Roll>
                                    <Fade>
                                        <BannerInnerImage 
                                            src={require("../../images/banner-image/main-pic.png")} 
                                            alt="main-pic"
                                            className="main-pic"
                                            display="none"
                                        />
                                    </Fade>
                                    <Fade bottom>
                                        <BannerInnerImage 
                                            src={require("../../images/banner-image/code.png")}
                                            className="code"
                                            alt="code"
                                        />
                                    </Fade>
								</BannerImage>
							</Col>
						</Row>
					</Container>
				</div>
			</div>
            

			<Shape className="shape1" animation={rotate3d} animationOptions="4s linear infinite">
				<img src={require("../../images/shape1.png")} alt="shape"/>
			</Shape>
			<Shape className="shape2" animation={rotateme} animationOptions="5s linear infinite">
				<img src={require("../../images/shape2.svg")} alt="shape"/>
			</Shape>
			<Shape className="shape3" animation={animationFramesOne} animationOptions="15s infinite linear">
				<img src={require("../../images/shape3.svg")} alt="shape"/>
			</Shape>
			<Shape className="shape4" animation={animationFramesOne} animationOptions="20s infinite linear">
				<img src={require("../../images/shape4.svg")} alt="shape"/>
			</Shape>
			<Shape className="shape5" animation={movebounce} animationOptions="5s linear infinite">
				<img src={require("../../images/shape5.png")} alt="shape"/>
			</Shape>
			<Shape className="shape6" animation={rotateme} animationOptions="10s linear infinite">
				<img src={require("../../images/shape4.svg")} alt="shape"/>
			</Shape>
			<Shape className="shape7" animation={animationFramesOne} animationOptions="20s infinite linear">
				<img src={require("../../images/shape4.svg")} alt="shape"/>
			</Shape>
			<Shape className="shape8" animation={rotateme} animationOptions="10s linear infinite">
				<img src={require("../../images/shape2.svg")} alt="shape"/>
			</Shape>
		</MainBannerContainer>
    )
}

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

export default MainBanner