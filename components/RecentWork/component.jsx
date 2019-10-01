import React from "react";
import OwlCarousel from "react-owl-carousel3";
import { WorkArea, SectionTitle, Heading, Text } from "./style";

import Proveat from "./images/1.jpg";
import ProveatMobile from "./images/2.jpg";
import Solvi from "./images/3.jpg";
import SueldoHoy from "./images/4.jpg";

import ProjectCard from "../ProjectCard";
import Bar from "../Bar";
import { Shape4, Shape8 } from "../Shape";

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
};

const RecentWork = () => {
  return (
    <WorkArea>
      <SectionTitle>
        <Heading>Our Recent Works</Heading>
        <Bar />
        <Text>
          Before building product, It's really important to set crystal clear
          goal. Meet our goal and data driven projects!
        </Text>
      </SectionTitle>
      <OwlCarousel className="owl-theme" {...slideOptions}>
        <ProjectCard
          imgUrl={Proveat}
          title="Proveat"
          description="Restaurant data collector which helps decision making to owners."
        />
        <ProjectCard
          imgUrl={ProveatMobile}
          title="Proveat Mobile"
          description="Mobile App to record incomes and costs of restaurant operation."
        />
        <ProjectCard
          imgUrl={SueldoHoy}
          title="SueldoHoy"
          description="A calculator which shows how inflation (55.8%) changed Argentina market in less than 5 interactinos."
        />
        <ProjectCard
          imgUrl={Solvi}
          title="Solvi"
          description="Calculate demanding stock in the future with collected data"
        />
      </OwlCarousel>
      <Shape8 top="15%" right="10%" />
      <Shape4 left="25%" top="15%" />
      <Shape4 />
    </WorkArea>
  );
};

export default RecentWork;
