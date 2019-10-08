/* eslint-disable import/prefer-default-export */
import styled from "styled-components";

export const Row = styled.div`
  margin-top: 30px;
  padding: 15px 12px;
  color: #6084a4;
  font-family: sans-serif;
  font-weight: 500;
  border-radius: 3px;
  transition: 0.5s;
  box-shadow: 0 2px 48px 0 rgba(0, 0, 0, 0.08);
  max-height: 24px;

  &::before {
    content: "";
    left: 0;
    top: 0;
    height: 100%;
    width: 100%;
    background: linear-gradient(135deg, #23bdb8 0%, #43e794 100%);
    opacity: 0;
    visibility: hidden;
    position: absolute;
    border-radius: 3px;
    z-index: -1;
    transition: 0.5s;
  }

  &:hover {
    color: #ffffff;
    transform: translateY(-10px);
  }

  &:hover::before {
    opacity: 1;
    visibility: visible;
  }

  svg {
    margin-right: 5px;
    color: #44ce6f;
    transition: 0.5s;
    width: 18px;
    height: 18px;
  }

  &:hover svg {
    color: #ffffff;
  }
`;
