import styled from "styled-components";

export const Wrapper = styled.div`
  @import url("https://fonts.googleapis.com/css?family=Rubik&display=swap");
  font-family: "Rubik", sans-serif;

  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  align-items: center;
  padding-top: 80px 0px;

  > div {
    width: 40%;
  }

  @media screen and (max-width: 1170px) {
    > div {
      width: 90%;
    }
  }
`;

export const Description = styled.div``;

export const IconBoxContainer = styled.div`
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;

  > div {
    width: 45%;
  }

  @media screen and (max-width: 1170px) {
    > div {
      width: 95%;
    }
  }
`;

export const SectionTitle = styled.div`
  margin-bottom: 18px;
`;

export const Text = styled.p`
  margin: 0;
  color: #586069;
  line-height: 1.9;
`;

export const Heading = styled.div`
  font-family: "Rubik", sans-serif;
  color: #0e314c;
  font-size: 24px;
  font-weight: 500;
  margin-bottom: 15px;
`;
