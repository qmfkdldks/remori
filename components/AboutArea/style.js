import styled from "styled-components";

export const Wrapper = styled.div`
  @import url("https://fonts.googleapis.com/css?family=Rubik&display=swap");
  font-family: "Rubik", sans-serif;

  padding-top: 80px;
  padding-bottom: 80px;
`;

export const FirstRow = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  align-items: center;

  > img,
  > div {
    width: 40%;
  }

  @media screen and (max-width: 768px) {
    > img,
    > div {
      width: 90%;
    }
  }
`;

export const Image = styled.img``;

export const SectionTitle = styled.div`
  text-align: left;
  margin-bottom: 18px;
`;

export const Text = styled.p`
  margin: 0;
  color: #586069;
  line-height: 1.9;
`;

export const AboutInnerArea = styled.div`
  margin-top: 60px;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  align-items: flex-start;

  > div {
    width: 25%;
  }

  @media screen and (max-width: 768px) {
    > div {
      margin-top: 5px;
      width: 90%;
    }
  }
`;

export const Heading = styled.div`
  font-family: "Rubik", sans-serif;
  color: #0e314c;
  font-size: 24px;
  font-weight: 500;
  margin-bottom: 15px;
`;
