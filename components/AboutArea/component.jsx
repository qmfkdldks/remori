import React from "react";
import PropTypes from "prop-types";
import {
  Wrapper,
  SectionTitle,
  AboutInnerArea,
  Heading,
  FirstRow,
  Image,
  Text,
  AboutCard
} from "./style";
import Bar from "../Bar";

import TeamImage from "./images/1.png";

const AboutArea = () => {
  return (
    <Wrapper>
      <FirstRow>
        <Image src={TeamImage} alt="Remori" />

        <div>
          <SectionTitle>
            <Heading>Process</Heading>
            <Bar />
            We need a system that helps us to be tolerant to failures.
          </SectionTitle>
          <Text>
            # 3 goals of our platform Failures are the lessons that we should
            get through, but it shouldn't drown us. Our goal is to build secure
            foundation which allows us to commit failures fast and get key
            lessons quickly with out big damages. Mesurement are the most
            important tool to clirify aspects of business. Our goal is to make
            sure to collect all data needed to use it in every decisions.
            Sharing ideas, experiences, data, opportunites among us will help
            everyone in this community. Our goal is to create open records which
            help us grow with healthy community.
          </Text>
        </div>
      </FirstRow>

      <AboutInnerArea>
        <AboutCard
          head="1. Define Objective"
          body="Before designing product, it's crucial to set clear and descriptive objectives.
          You should define simplest MVP to see the reaction of the market as soon as possible.
          ex) A fintech mobile app which 5% of users invest $100 on a monthly basis."
        />

        <AboutCard
          head="2. Design Digital Ecosystem"
          body="From the beginning we need to design the lifecycle of the project and software architecture because it dictates the sustainability and flexibility of the product. In this phase we define how to deploy product, what data we collect and how to modularize processes."
        />

        <AboutCard
          head="3. Build Product"
          body="On top of the objectives, plan and digital ecosytem, we start building prodcut with iterative development process. We develop product as right as possible within the timeframe. We record and get feedbacks from mistakes and errors and we solve them one by one."
        />
      </AboutInnerArea>
    </Wrapper>
  );
};

export default AboutArea;
