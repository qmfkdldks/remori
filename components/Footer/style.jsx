import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import Icon from "../Icon";

export const Wrapper = styled.footer`
  padding-top: 80px;
  position: relative;
  z-index: 1;
  background-color: #f7fafd;
`;

export const Map = styled.img`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  margin: 0 auto;
  text-align: center;
  z-index: -1;
  bottom: 0;
  opacity: 0.7;
`;

export const Column = styled.div``;

export const Title = styled.h3`
  font-size: 18px;
  margin-bottom: 30px;
`;

export const Logo = styled.img`
  margin-bottom: 20px;
`;

export const ContactInfo = styled.div`
  margin-bottom: 20px;
`;

const Contact = styled.div`
  color: #6084a4;
  margin-bottom: 8px;
  padding-left: 25px;

  ${Icon} {
    position: absolute;
    left: 0;
    width: 15px;
    top: 0;
  }
`;

export const IconRow = ({ icon, text }) => {
  return (
    <Contact>
      <Icon name={icon} />
      {text}
    </Contact>
  );
};

IconRow.propTypes = {
  icon: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired
};

export const SocialLinks = styled.div`
  display: flex;
`;

export const CopyRight = styled.div`
  margin-top: 80px;
  padding-top: 25px;
  padding-bottom: 25px;
  border-top: 1px solid #d8ebfd;
  text-align: center;
`;
