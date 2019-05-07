import styled from 'styled-components';
import { Box, Heading, Text } from 'rebass';

const StyledBox = styled(Box)`
border: 1px dashed #cdf1d8;
padding: 30px 20px;
position: relative;
border-radius: 5px;
background: #ffffff;
box-shadow: 0 0 10px rgba(72, 69, 224, 0.1);
transition: 0.5s;
height: 300px;

.icon {
	display: inline-block;
	text-align: center;
	width: 55px;
	height: 55px;
	line-height: 55px;
    background: ${ props => props.secondary || '#cdf1d8'};
	border-radius: 50%;
	color: ${ props => props.primary || '#44ce6f'};
    transition: 0.5s;
    
    * {
        vertical-align: middle;
    }
  }
  
  &::before {
	content: '';
	position: absolute;
	left: 0;
	top: 0;
	width: 100%;
	border-radius: 5px;
	height: 100%;
	background: linear-gradient(135deg, #23bdb8 0%, #43e794 100%);
	z-index: -1;
	opacity: 0;
	visibility: hidden;
	transition: 0.5s;
  }

  &:hover {
    transform: translateY(-9px);
	border-color: transparent;
  }
  
  &:hover::before {
	opacity: 1;
	visibility: visible;
  }
  
  &:hover .icon {
	background: #ffffff;
  }
`;

export const StyledHeading = styled(Heading)`
font-size: 18px;
margin-top: 25px;
margin-bottom: 15px;
font-weight: 500;

${StyledBox}:hover & {
	color: #ffffff;	
}
`

export const StyledText = styled(Text)`
color: #6084a4;
line-height: 1.9;

${StyledBox}:hover & {
    color: #ffffff;	
}
`

export default StyledBox;