import React from "react";
import {
  Wrapper,
  SectionTitle,
  Text,
  Bar,
  AboutInnerArea,
  Heading
} from "./style";

import Service from "../../animations/Service";

class ServiceArea extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Wrapper>
        <Flex flexWrap="wrap">
          <Box width={[1, 1 / 2]} p={[1, 3]}>
            <Service />
          </Box>

          <Box width={[1, 1 / 2]} p={[1, 3]}>
            <SectionTitle>
              <h2>Design & Development</h2>
              <div className="bar" />
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </p>
            </SectionTitle>

            <div className="row" />
          </Box>
        </Flex>
      </Wrapper>
    );
  }
}

export default ServiceArea;
