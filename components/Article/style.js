/* eslint-disable import/prefer-default-export */
import styled from "styled-components";

export const Wrapper = styled.div`
  position: relative;
  font-family: "Rubik", sans-serif;
  margin: auto;
  max-width: 768px;
  width: 90%;

  box-shadow: 0 5px 10px rgba(0, 9, 128, 0.035),
    0 7px 18px rgba(0, 9, 128, 0.05);
  background: #ffffff;
`;

export const Image = styled.img`
  max-width: 100%;
`;

export const Head = styled.h3`
  font-size: 18px;
`;

export const Text = styled.p`
  margin-bottom: 0;
  margin-top: 18px;
`;

export const Content = styled.div`
  padding: 30px;
`;

export const SharePost = styled.div`
  text-align: center;
  margin-top: 30px;

  ul li a {
    width: 40px;
    height: 40px;
    display: inline-block;
    line-height: 38px;
    border: 1px solid #eeeeee;
    border-radius: 50%;
    color: #0e314c;
  }

  ul li a:hover,
  ul li a:focus {
    color: #ffffff;
    border-color: #44ce6f;
    background-color: #44ce6f;
  }

  ul li a svg {
    width: 16px;
    height: 24px;
  }

  ul {
    padding: 0;
    margin: 0;
    list-style-type: none;
  }

  ul li {
    display: inline-block;
    margin-right: 5px;
  }
`;
