import React from 'react'
import styled from 'styled-components'
import { Box as OBox, Image as OImage, Heading as OHeading, Text as OText } from 'rebass'

export const SigleWorkWrapper = styled(OBox)`
padding-left: 15px;
padding-right: 15px;
`

export const WorkContent = styled.div`
    position: absolute;
    bottom: -60px;
    left: 0;
    padding: 20px;
    transition: 0.5s;
    opacity: 0;
    z-index: 2;
    visibility: hidden;
`

export const SingleWork = styled.div`
position: relative;
margin-bottom: 30px;
z-index: 1;

&::before {
    content: '';
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    background: linear-gradient(135deg, #23bdb8 0%, #43e794 100%);
    transition: 0.5s;
    opacity: 0;
    visibility: hidden;
    z-index: 1;
  }

  &:hover::before {
    opacity: .8;
    visibility: visible;
  }

  &:hover ${WorkContent} {
    opacity: 1;
    visibility: visible;
    bottom: 0;
  }
`

export const Image = styled(OImage)`
max-width: 100%;
`

export const Heading = styled(OHeading)`
font-size: 18px;
margin-bottom: 15px;
color: #ffffff;
`

export const Text = styled(OText)`
color: #ffffff;
`