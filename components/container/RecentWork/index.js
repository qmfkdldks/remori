import React from 'react'
import { WorkArea, SectionTitle, Heading, Text, Bar } from './style'
// import Link from 'next/link'
import dynamic from 'next/dynamic';
// import OwlCarousel from 'react-owl-carousel3'
const OwlCarousel = dynamic(import('react-owl-carousel3'));

import ProjectCard from '../../molecular/ProjectCard'
import Project1 from '../../../images/works-image/1.jpg'
import Project2 from '../../../images/works-image/2.jpg'
import Project3 from '../../../images/works-image/3.jpg'
import Proveat from '../../../images/works-image/proveat.webp'
// import Proveat from '../../../images/works-image/proveat-demo.webp'
import ProveatMobile from '../../../images/works-image/proveat-mobile.webp'
import Solvi from '../../../images/works-image/solvi.webp'
import SueldoHoy from '../../../images/works-image/sueldohoy.webp'
import DigitalMenu from '../../../images/works-image/digital-menu.webp'

import { Shape2, Shape4, Shape8 } from '../../atomic/Shape'

const slideOptions = {
    items: 4,
    loop: true,
    nav: false,
    autoplay: true,
    dots: false,
    responsive: {
        0: {
            items: 1
        },
        786: {
            items: 2
        },
        1200: {
            items: 3
        },
        1500: {
            items: 4
        }
    }
}

class RecentWork extends React.Component {
    constructor(props) {
        super(props)
        this.state = { display: false };
    }

    componentDidMount() { this.setState({ display: true }) }

    render() {
        return (
            <WorkArea>
                <SectionTitle>
                    <Heading>Our Recent Works</Heading>
                    <Bar></Bar>
                    <Text>Before building product, It's really important to set crystal clear goal. Meet our goal and data driven projects!</Text>
                </SectionTitle>

                {/* <div className="row m-0"> */}
                {/* <div className="works-slides"> */}
                {
                    this.state.display &&
                    <OwlCarousel
                        className="owl-theme"
                        {...slideOptions}
                    >
                        <ProjectCard img={Proveat} title="Proveat" description="Restaurant data collector which helps decision making to owners." />
                        <ProjectCard img={ProveatMobile} title="Proveat Mobile" description="Mobile App to record incomes and costs of restaurant operation." />
                        <ProjectCard img={SueldoHoy} title="SueldoHoy" description="A calculator which shows how inflation (55.8%) changed Argentina market in less than 5 interactinos." />
                        <ProjectCard img={Solvi} title="Solvi" description="Calculate demanding stock in the future with collected data" />
                    </OwlCarousel>
                }

                {/* </div> */}
                {/* </div> */}

                <Shape8 top="15%" right="10%" />
                {/* <Shape2 /> */}
                <Shape4 left="25%" top="15%" />
                <Shape4 />
                {/* <div className="shape8 rotateme">
                    <img src={require("../../images/shape2.svg")} alt="shape" />
                </div>
                <div className="shape2 rotateme">
                    <img src={require("../../images/shape2.svg")} alt="shape" />
                </div>
                <div className="shape7">
                    <img src={require("../../images/shape4.svg")} alt="shape" />
                </div>
                <div className="shape4">
                    <img src={require("../../images/shape4.svg")} alt="shape" />
                </div> */}
            </WorkArea>
        )
    }
}

export default RecentWork
