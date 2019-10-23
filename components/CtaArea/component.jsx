import React from "react";
import { Fade } from "react-reveal";
import { Section, Container, Head, Body, Image } from "./style";

import CtaImage from "./images/cta-shape2.png";
import CtaShape from "./images/cta-shape.png";

const CtaArea = () => {
  return (
    <Section>
      <Container>
        <Fade left>
          <Image
            src={CtaImage}
            alt="Machine Learning"
            className="Machine Learning"
          />
        </Fade>
      </Container>
      <Container>
        <Head>Connect AI power to your business</Head>
        <Body>
          We help you to build data lake and connect all machine learning and AI
          algorithms to your business. Please contact us!
        </Body>
      </Container>
      <Image className="cta-shape" src={CtaShape} alt="image" />
    </Section>
  );
};

export default CtaArea;
