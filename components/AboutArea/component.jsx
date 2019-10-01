import React from "react";
import PropTypes from "prop-types";
import {
  Wrapper,
  SectionTitle,
  AboutInnerArea,
  Heading,
  FirstRow,
  Image,
  Text
} from "./style";
import Bar from "../Bar";

import TeamImage from "./images/1.png";

const AboutCard = ({ head, body }) => {
  return (
    <div>
      <Heading>{head}</Heading>
      <Text>{body}</Text>
    </div>
  );
};

AboutCard.propTypes = {
  head: PropTypes.string.isRequired,
  body: PropTypes.string.isRequired
};

const AboutArea = () => {
  return (
    <Wrapper>
      <FirstRow>
        <Image src={TeamImage} alt="Remori" />

        <div>
          <SectionTitle>
            <Heading>About Us</Heading>
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
          head="Our History"
          body="After various failures and lessons, we decided to create Remori to
            help individuals and entrepreneurs who have great creativity. We
            started this platform at 2019."
        />

        <AboutCard
          head="Our Mission"
          body="We are building platform that connects individuals and
            entrepreneurs. We hope we can share experiences, knowledges,
            opportunities and data to make our community stronger."
        />

        <AboutCard
          head="Who we are"
          body="We are aiming to create transparent community. So we can share
            experience and opportunites with confidence."
        />
      </AboutInnerArea>
    </Wrapper>
  );
};

export default AboutArea;
