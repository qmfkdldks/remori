import styled from "styled-components";

export const Wrapper = styled.div`
  text-align: center;
  margin: 40px 0px;
`;

export const List = styled.ul`
  padding: 0;
  margin: 0;
  display: flex;
  list-style: none;
  border-radius: 0.25rem;
  justify-content: center;
`;

export const Item = styled.li`
  ${({ active }) =>
    active &&
    `
    ${Link} {
      color: #ffffff;
      background-color: #44ce6f;
    }
  `}
`;

export const Link = styled.a`
  padding: 11px 20px;
  margin: 0 -1px;
  color: #6f8ba4;
  background-color: #ffffff;
  border: none;
  border-radius: 0;
  box-shadow: 0 2px 10px 0 #d8dde6;
  text-decoration: none;
  font-family: "Rubik", sans-serif;

  &:hover {
    color: #ffffff;
    background-color: #44ce6f;
    box-shadow: unset;
  }
`;
