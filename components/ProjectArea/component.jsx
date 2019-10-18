import React from "react";
import Slider from "react-styled-carousel";
import { WorkArea, SectionTitle, Heading, Text, DotsWrapper } from "./style";
import ProjectCard from "../ProjectCard";
import Bar from "../Bar";
import { Shape4 } from "../Shape";

import Proveat from "./images/deliveries.png";
import ProveatMobile from "./images/proveat-mobile.webp";
import Solvi from "./images/solvi.webp";
import SueldoHoy from "./images/sueldohoy.webp";

const responsive = [
  { breakPoint: 1440, cardsToShow: 4 },
  { breakPoint: 1170, cardsToShow: 2 },
  { breakPoint: 0, cardsToShow: 1 }
];

const ProjectArea = () => {
  return (
    <WorkArea>
      <SectionTitle>
        <Heading>Our Recent Works</Heading>
        <Bar />
        <Text>
          Before building product, Its really important to set crystal clear
          goal. Meet our goal and data driven projects!
        </Text>
      </SectionTitle>
      <Slider
        showArrows={false}
        showDots={false}
        infinite
        responsive={responsive}
      >
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
          imgUrl={Solvi}
          title="Solvi"
          description="Calculate demanding stock in the future with collected data"
        />
      </Slider>
      <Shape4 left="25%" top="15%" />
      <Shape4 />
    </WorkArea>
  );
};

export default ProjectArea;
