import styled from "styled-components";
import * as Formik from "formik";

export const Form = styled(Formik.Form)`
  max-width: 400px;
  margin: auto;
  display: flex;
  flex-direction: column;
`;

export const Field = styled(Formik.Field)`
  box-sizing: border-box;
  padding: 10px;
  height: 45px;
  font-size: 14px;
  color: #0e314c;
  border: 1px solid #eeeeee;
  border-radius: 0;
  background: #eeeeee;
  transition: 0.5s;
  margin-bottom: 18px;

  &:focus {
    outline: 0;
    background: #ffffff;
    box-shadow: unset;
    border-color: #44ce6f;
  }
`;

export const ErrorMessage = styled(Formik.ErrorMessage)`
  font-family: "Rubik", sans-serif;
  color: #ff869b;
`;

export const ContactAreaWrapper = styled.div`
  padding-top: 80px;
  padding-bottom: 80px;
`;

export const SectionTitle = styled.div`
  text-align: center;
  margin-bottom: 60px;
`;

export const Heading = styled.h1`
  font-family: "Rubik", sans-serif;
  font-size: 24px;
  text-transform: capitalize;
  color: #0e314c;
  font-weight: 500;
`;

export const Text = styled.p`
  font-family: "Rubik", sans-serif;
  max-width: 520px;
  margin: 0 auto;
  color: #586069;
  line-height: 1.9;
`;

export const Label = styled.label`
  font-family: "Rubik", sans-serif;
  color: #0e314c;
  font-size: 15px;
  font-weight: 500;
  margin-bottom: 10px;
`;

export const Button = styled.button`
  background: #e9c46a;
  box-shadow: 0 13px 27px 0 rgba(198, 121, 227, 0.25);
  font-weight: 600;
  font-size: 14px;
  border: none;
  padding: 15px 40px;
  border-radius: 4px;
  z-index: 1;
  text-transform: uppercase;
  transition: 0.5s;
  color: #ffffff;

  &::after,
  &::before {
    background: #e9c46a;
    box-shadow: 0 13px 27px 0 rgba(68, 206, 111, 0.25);
  }

  &:hover {
    background: #e5b232;
    transform: translateY(-5px);
    box-shadow: 0 13px 27px 0 rgba(198, 121, 227, 0.25);
  }
`;
