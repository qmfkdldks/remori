import React from 'react'
import { Box as OBox, Heading as OHeading, Text as OText } from 'rebass'
import styled from 'styled-components'
import OBar from '../../atomic/Bar'

export const Bar = styled(OBar)`
`
export const Form = styled.form`
width: 100%;
max-width: 400px;
margin: auto;
`

export const ContactAreaWrapper = styled(OBox)`
padding-top: 80px;
padding-bottom: 80px;
`
export const SectionTitle = styled(OBox)`
  text-align: center;
  margin-bottom: 60px;
`

export const Heading = styled(OHeading)`
margin-bottom: 0;
font-size: 24px;
font-weight: 600;
text-transform: capitalize;
color: #0e314c;
font-weight: 500;
`

export const Text = styled(OText)`
max-width: 520px;
margin: 0 auto;
color: #6084a4;
line-height: 1.9;
`

export const FormGroup = styled(OBox)`
margin-bottom: 18px;
`
export const Label = styled.label`
color: #0e314c;
font-size: 15px;
font-weight: 500;
margin-bottom: 10px;
`

export const Input = styled.input`
box-sizing : border-box;
width: 100%;
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
`

export const TextArea = styled(Input)`
height: 200px;
`