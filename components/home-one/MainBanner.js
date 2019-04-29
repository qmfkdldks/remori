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
    eight: 100%;
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
`
const BannerImage = styled.div`
position: relative;

@media only screen and (max-width: 767px) {
    text-align: center;
}
`
const BannerInnerImage = styled.img`
position: absolute;
z-index: ${props => props.zindex};
top: ${props => props.top};
left: ${props => props.left};
right: ${props => props.right};
display: ${props => props.display};

@media only screen and (max-width: 767px) {
    display: none;
    position: relative;
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
    -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
  }
  to {
    -webkit-transform: rotate(360deg);
            transform: rotate(360deg);
  }
`

const animationFramesOne = keyframes`
0% {
    -webkit-transform: translate(0px, 0px) rotate(0deg);
            transform: translate(0px, 0px) rotate(0deg);
  }
  20% {
    -webkit-transform: translate(73px, -1px) rotate(36deg);
            transform: translate(73px, -1px) rotate(36deg);
  }
  40% {
    -webkit-transform: translate(141px, 72px) rotate(72deg);
            transform: translate(141px, 72px) rotate(72deg);
  }
  60% {
    -webkit-transform: translate(83px, 122px) rotate(108deg);
            transform: translate(83px, 122px) rotate(108deg);
  }
  80% {
    -webkit-transform: translate(-40px, 72px) rotate(144deg);
            transform: translate(-40px, 72px) rotate(144deg);
  }
  100% {
    -webkit-transform: translate(0px, 0px) rotate(0deg);
            transform: translate(0px, 0px) rotate(0deg);
  }
`

const Shape = styled.div`
position: absolute;
z-index: ${props => props.zindex};
animation: ${props => props.animation} ${props => props.animationOptions};
opacity: ${props => props.opacity};
top: ${props => props.top};
right: ${props => props.right};
left: ${props => props.left};
bottom: ${props => props.bottom};
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
									
									<Link href="#">
										<Button>Get Started</Button>
									</Link>
								</HeroContent>
							</Col>
							<Col lg={{ size: 6, offset: 1 }}>
								<BannerImage>
                                    <Fade left delay={5000}>
                                        <BannerInnerImage 
                                            src={require("../../images/banner-image/carpet.png")}                                                                                         
                                            alt="carpet"
                                            top="-20px"
                                            left="25px"
                                        />
                                    </Fade>
                                    <Zoom delay={5000}>
                                        <BannerInnerImage 
                                            src={require("../../images/banner-image/dot.png")}
                                            alt="dot"
                                            right="20px"
                                            top="-110px"
                                        />
                                    </Zoom>
                                    <Fade bottom delay={5000}>
                                        <BannerInnerImage 
                                            src={require("../../images/banner-image/keyboard.png")} 
                                            alt="keyboard"
                                            top="-28px"
                                            left="37%"
                                            zindex="1"
                                        />
                                    </Fade>
                                    <Zoom delay={5000}>
                                        <BannerInnerImage 
                                            src={require("../../images/banner-image/table.png")} 
                                            alt="table"
                                            top="-110px"
                                            left="90px"
                                            zindex="1"
                                        />
                                    </Zoom>
                                    <Fade bottom delay={5000}>
                                        <BannerInnerImage 
                                            src={require("../../images/banner-image/flower-top-big.png")} 
                                            alt="flower-top-big"
                                            right="25px"
                                            top="-140px"
                                        />
                                    </Fade>
                                    <Zoom delay={5000}>
                                        <BannerInnerImage 
                                            src={require("../../images/banner-image/bin.png")}                                                                                         
                                            alt="bin"
                                            top="118px"
                                            right="12%"
                                        />
                                    </Zoom>
                                    <Zoom delay={5000}>
                                        <BannerInnerImage 
                                            src={require("../../images/banner-image/pen.png")} 
                                            alt="pen"
                                            top="-160px"
                                            left="37%"
                                        />
                                    </Zoom>
                                    <Bounce delay={5000}>
                                        <BannerInnerImage 
                                            src={require("../../images/banner-image/book.png")} 
                                            alt="book"
                                            top="-120px"
                                            left="28%"
                                            zindex="2"
                                        />
                                    </Bounce>
                                    <Fade top delay={5000}>
                                        <BannerInnerImage 
                                            src={require("../../images/banner-image/dekstop.png")} 
                                            alt="dekstop"
                                            top="-150px"
                                            right="35%"
                                            zindex="1"
                                        />
                                    </Fade>
                                    <Rotate delay={5000}>
                                        <BannerInnerImage 
                                            src={require("../../images/banner-image/flower-top.png")} 
                                            alt="flower-top"
                                            top="-35px"
                                            right="30%"
                                            zindex="1"
                                        />
                                    </Rotate>
                                    <Fade right delay={5000}>
                                        <BannerInnerImage 
                                            src={require("../../images/banner-image/tea-cup.png")} 
                                            alt="tea-cup"
                                            top="-25px"
                                            left="56%"
                                        />
                                    </Fade>
                                    <Roll delay={5000}>
                                        <BannerInnerImage 
                                            src={require("../../images/banner-image/headphone.png")} 
                                            alt="headphone"
                                            top="-28px"
                                            right="105px"
                                        />
                                    </Roll>
                                    <Fade delay={5000}>
                                        <BannerInnerImage 
                                            src={require("../../images/banner-image/main-pic.png")} 
                                            alt="main-pic"
                                            className="main-pic"
                                            top="-28px"
                                            right="105px"
                                            display="none"
                                        />
                                    </Fade>
                                    <Fade top delay={5000}>
                                        <BannerInnerImage
                                            src={require('../../images/banner-image/man.png')}  
                                            alt="man"
                                            top="-130px"
                                            left="-45px"
                                            zindex="3"
                                        />
                                    </Fade>
                                    <Fade bottom delay={5000}>
                                        <BannerInnerImage 
                                            src={require("../../images/banner-image/code.png")} 
                                            right="145px"
                                            top="-287px"
                                        />
                                    </Fade>
								</BannerImage>
							</Col>
						</Row>
					</Container>
				</div>
			</div>
            

			<Shape left="30px" top="20%" opacity=".4" animation={rotate3d} animationOptions="4s linear infinite">
				<img src={require("../../images/shape1.png")} alt="shape"/>
			</Shape>
			<Shape left="15%" top="60%" zindex="-1" animation={rotateme} animationOptions="20s linear infinite">
				<img src={require("../../images/shape2.svg")} alt="shape"/>
			</Shape>
			<Shape left="25%" bottom="15%" animation={animationFramesOne} animationOptions="15s linear infinite">
				<img src={require("../../images/shape3.svg")} alt="shape"/>
			</Shape>
			<Shape right="25%" bottom="15%" zindex="-1" animation={animationFramesOne} animationOptions="20s linear infinite">
				<img src={require("../../images/shape4.svg")} alt="shape"/>
			</Shape>
			<Shape right="5%" top="10%" zindex="-1" opacity=".2" animation={movebounce} animationOptions="5s linear infinite">
				<img src={require("../../images/shape5.png")} alt="shape"/>
			</Shape>
			<Shape top="40%" right="10%" zindex="-1" animation={rotateme} animationOptions="20s linear infinite">
				<img src={require("../../images/shape4.svg")} alt="shape"/>
			</Shape>
			<Shape top="15%" left="25%" zindex="-1" animation={animationFramesOne} animatinoOptions="20s linear infinte">
				<img src={require("../../images/shape4.svg")} alt="shape"/>
			</Shape>
			<Shape top="15%" right="10%" zindex="-1" animation={rotateme} animatinoOptions="20s linear infinite">
				<img src={require("../../images/shape2.svg")} alt="shape"/>
			</Shape>
		</MainBannerContainer>
    )
}

export default MainBanner