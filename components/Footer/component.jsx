import React from "react";
import {
  Column,
  Container,
  ContactInfo,
  Wrapper,
  Map,
  Logo,
  Title,
  CopyRight,
  SocialLinks,
  Text
} from "./style";
import Icon from "../Icon";

const Footer = () => {
  return (
    <Wrapper>
      <Container>
        <Column>
          <Logo>Remori</Logo>
          <Text>
            Remori is an organization building data driven products and
            services. We try to find business system which can adopt to ever
            changing market.
          </Text>
        </Column>

        <Column>
          <Title>Contacts</Title>

          <ContactInfo />
          <SocialLinks>
            <a href="https://www.linkedin.com/in/brian-kang-56ab51b1">
              <Icon name="Linkedin" size={32} />
            </a>
          </SocialLinks>
        </Column>
      </Container>

      <CopyRight>Copyright @2019 Remori. All rights reserved</CopyRight>

      <Map src={require("./images/map.png")} className="map" alt="map" />
    </Wrapper>
  );
};

export default Footer;
