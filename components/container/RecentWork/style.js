import styled from 'styled-components'
import { Flex, Box, Heading as OHeading, Text as OText } from 'rebass'
import OBar from '../../atomic/Bar'

export const WorkArea = styled.section`
position: relative;
z-index: 1;
padding-top: 80px;
padding-bottom: 50px;
background-color: #f7fafd;
`

export const SectionTitle = styled.div`
text-align: center;
margin-bottom: 60px;
`

export const Heading = styled(OHeading)`
margin-bottom: 0;
font-size: 24px;
font-weight: 600;
text-transform: capitalize;
color: #0e314c;
`

export const Text = styled(OText)`
max-width: 520px;
margin: 0 auto;
line-height: 1.9;
`

export const Bar = styled(OBar)`
`