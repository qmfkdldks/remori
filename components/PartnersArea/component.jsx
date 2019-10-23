import React from "react";
import Slider from "react-styled-carousel";
import { Wrapper, Container, Image } from "./style";

import Rails from "./images/rails.png";
import Node from "./images/node.png";
import Slack from "./images/slack.png";
import ReactImage from "./images/react.png";
import Github from "./images/github.png";
import Aws from "./images/aws.png";
import Heroku from "./images/heroku.png";

const responsive = [
  { breakPoint: 1440, cardsToShow: 5 },
  { breakPoint: 1024, cardsToShow: 4 },
  { breakPoint: 768, cardsToShow: 3 },
  { breakPoint: 0, cardsToShow: 2 }
];

const PartnersArea = () => {
  return (
    <Wrapper>
      <Container>
        <Slider
          showArrows={false}
          showDots={false}
          infinite
          responsive={responsive}
        >
          <Image src={Rails} alt="ruby on rails" />
          <Image src={Node} alt="node" />
          <Image src={Slack} alt="slack" />
          <Image src={ReactImage} alt="react" />
          <Image src={Github} alt="github" />
          <Image src={Aws} alt="aws" />
          <Image src={Heroku} alt="heroku" />
        </Slider>
      </Container>
    </Wrapper>
  );
};

export default PartnersArea;
