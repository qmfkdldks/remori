import React from 'react'
import styled from 'styled-components'
import { Box as OBox, Heading as OHeading, Text as OText } from 'rebass'
import OBar from '../../atomic/Bar'

export const AboutAreaWrapper = styled(OBox)`
padding-top: 80px;
padding-bottom: 80px;
`

export const SectionTitle = styled(OBox)`
text-align: left;
margin-bottom: 18px;
`

export const Text = styled(OText)`
margin: 0;
color: #586069;
line-height: 1.9;
`

export const Bar = styled(OBar)`
margin-right: 0;
margin-left: 0;
`

export const AboutInnerArea = styled(OBox)`
margin-top: 60px;
`

export const Heading = styled(OBox)`
color: #0e314c;
font-size: 18px;
margin-bottom: 15px;
`