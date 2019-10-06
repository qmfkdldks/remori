import React from "react";
import {
  Column,
  ContactInfo,
  Wrapper,
  Map,
  Logo,
  Title,
  CopyRight,
  SocialLinks,
  IconRow
} from "./style";

const Footer = () => {
  return (
    <Wrapper>
      <Column>
        <Logo src={require("./images/logo.png")} alt="logo" />
        <p>
          Quis ipsum suspendisse ultrices gravida. Risus commodo viverra
          maecenas accumsan lacus vel facilisis.
        </p>
      </Column>

      <Column className="single-footer-widget">
        <Title>Address</Title>

        <ContactInfo />
        <SocialLinks>
          <a href="https://www.linkedin.com/in/brian-kang-56ab51b1">
            {/* <Icon size={{ width: 50, height: 50 }} name="Linkedin" /> */}
          </a>
        </SocialLinks>
      </Column>

      <CopyRight>Copyright @2019 StartP. All rights reserved</CopyRight>

      <Map src={require("./images/map.png")} className="map" alt="map" />
    </Wrapper>
  );
};

export default Footer;
