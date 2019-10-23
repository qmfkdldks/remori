import styled from "styled-components";

export const Wrapper = styled.footer`
  padding-top: 80px;
  z-index: 1;
  background-color: #f7fafd;
`;

export const Container = styled.footer`
  display: flex;
  justify-content: space-evenly;
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
  max-width: 100%;
`;

export const Column = styled.div`
  max-width: 255px;
`;

export const Title = styled.h3`
  font-family: "Rubik", sans-serif;
  font-size: 18px;
  margin-bottom: 30px;
`;

export const Text = styled.p`
  font-family: "Rubik", sans-serif;
  color: #6084a4;
  line-height: 1.9;
`;

export const Logo = styled.h1`
  @import url("https://fonts.googleapis.com/css?family=Nunito&display=swap");
  font-family: "Nunito", sans-serif;
  font-size: 45px;
  color: #ffac5d;
`;

export const ContactInfo = styled.div`
  margin-bottom: 20px;
`;

export const SocialLinks = styled.div`
  display: flex;

  svg {
    color: #0077b5;
  }
`;

export const CopyRight = styled.div`
  font-family: "Rubik", sans-serif;
  margin-top: 80px;
  padding-top: 25px;
  padding-bottom: 25px;
  border-top: 1px solid #d8ebfd;
  text-align: center;
`;
