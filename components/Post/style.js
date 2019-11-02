/* eslint-disable import/prefer-default-export */
import styled from "styled-components";

export const Wrapper = styled.div`
  transition: 0.5s;
  margin-bottom: 30px;
  font-family: "Rubik", sans-serif;

  &:hover {
    box-shadow: 0 2px 48px 0 rgba(0, 0, 0, 0.08);
  }
`;

export const ImageWrapper = styled.div`
  position: relative;
  a {
    display: block;
  }
`;

export const Date = styled.div`
  position: absolute;
  left: 20px;
  bottom: -20px;
  background: linear-gradient(135deg, #23bdb8 0%, #43e794 100%);
  color: #ffffff;
  padding: 8px 16px;
  font-size: 13px;
  border-radius: 50px;
`;

export const Anchor = styled.a`
  color: #0e314c;
  display: inline-block;
  transition: 0.5s;
  text-decoration: none;
  outline: 0 !important;

  &:hover,
  &:focus {
    color: #44ce6f;
    text-decoration: none;
  }
`;

export const Head = styled.h3`
  font-size: 20px;
  line-height: 30px;
  margin-bottom: 0;
`;

export const Body = styled.p``;

export const ContentWrapper = styled.div`
  padding-top: 40px;
  padding-left: 20px;
  padding-bottom: 20px;
  padding-right: 20px;
  background: #f7fafd;
  transition: 0.5s;

  &:hover {
    background: #ffffff;
  }
`;

export const ReadMoreButton = styled.a`
  color: #0e314c;

  &:hover {
    color: #44ce6f;
  }
`;
