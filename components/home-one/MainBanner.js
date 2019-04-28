import React from 'react'
import Link from 'next/link'

// import '../../assets/css/animate.css'
// import { Wobble,  } from 'animate-css-styled-components';
import { Fade, Bounce, Zoom, Rotate, Roll } from 'react-reveal';

import styled, { keyframes } from 'styled-components';

import BootstrapProvider from '@bootstrap-styled/provider/lib/BootstrapProvider';

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
`
const BannerImage = styled.div`
position: relative;
`
const BannerInnerImage = styled.img`
position: absolute;
z-index: ${props => props.zindex};
top: ${props => props.top};
left: ${props => props.left};
right: ${props => props.right};
display: ${props => props.display};
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

const Shape = styled.div`
position: absolute;
z-index: -1;
-webkit-animation: ${props => props.animation};
        animation: ${props => props.animation};
opacity: ${props => props.opacity || 1};
`

const MainBanner = () => {
    return (
    <BootstrapProvider>
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
                                            src={require("../../images/banner-image/table.png")} 
                                            alt="table"
                                            top="-110px"
                                            left="90px"
                                            zindex="1"
                                        />
                                    </Zoom>
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
            

			<Shape left="30px" top="20%" opacity=".4" animation="rotate3d 4s linear infinite">
				<img src={require("../../images/shape1.png")} alt="shape"/>
			</Shape>
			<div className="shape2 rotateme">
				<img src={require("../../images/shape2.svg")} alt="shape"/>
			</div>
			<div className="shape3">
				<img src={require("../../images/shape3.svg")} alt="shape"/>
			</div>
			<div className="shape4">
				<img src={require("../../images/shape4.svg")} alt="shape"/>
			</div>
			<div className="shape5">
				<img src={require("../../images/shape5.png")} alt="shape"/>
			</div>
			<div className="shape6 rotateme">
				<img src={require("../../images/shape4.svg")} alt="shape"/>
			</div>
			<div className="shape7">
				<img src={require("../../images/shape4.svg")} alt="shape"/>
			</div>
			<div className="shape8 rotateme">
				<img src={require("../../images/shape2.svg")} alt="shape"/>
			</div>
		</MainBannerContainer>
    </BootstrapProvider>
    )
}

export default MainBanner