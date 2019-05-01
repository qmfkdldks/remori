import styled from 'styled-components';

const IconBox = styled.div`
border: 1px dashed #cdf1d8;
padding: 30px 20px;
position: relative;
z-index: 1;
border-radius: 5px;
background: #ffffff;
-webkit-box-shadow: 0 0 10px rgba(72, 69, 224, 0.1);
		box-shadow: 0 0 10px rgba(72, 69, 224, 0.1);
-webkit-transition: 0.5s;
transition: 0.5s;

 .icon {
	display: inline-block;
	text-align: center;
	width: 55px;
	height: 55px;
	line-height: 55px;
	background: #cdf1d8;
	border-radius: 50%;
	color: #44ce6f;
	-webkit-transition: 0.5s;
	transition: 0.5s;
  }
  
   h3 {
	font-size: 18px;
	margin-top: 25px;
	margin-bottom: 15px;
	-webkit-transition: 0.5s;
	transition: 0.5s;
  }
  
  ::before {
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
	-webkit-transition: 0.5s;
	transition: 0.5s;
  }
  
   p {
	-webkit-transition: 0.5s;
	transition: 0.5s;
  }
  
  &.bg-f78acb {
	border-color: rgba(247, 138, 203, 0.3);
  }
  
  &.bg-f78acb .icon {
	color: #f78acb;
	background: rgba(247, 138, 203, 0.3);
  }
  
  &.bg-c679e3 {
	border-color: #edc3fc;
  }
  
  &.bg-c679e3 .icon {
	color: #c679e3;
	background: #edc3fc;
  }
  
  &.bg-eb6b3d {
	border-color: rgba(235, 107, 61, 0.3);
  }
  
  &.bg-eb6b3d .icon {
	color: #eb6b3d;
	background: rgba(235, 107, 61, 0.3);
  }
  
  :hover {
	-webkit-transform: translateY(-9px);
			transform: translateY(-9px);
	border-color: transparent;
  }
  
  :hover::before {
	opacity: 1;
	visibility: visible;
  }
  
  :hover .icon {
	background: #ffffff;
	color: #44ce6f;
  }
  
  :hover h3, :hover p {
	color: #ffffff;
  }
  
  :hover.bg-f78acb .icon {
	color: #f78acb;
  }
  
  &:hover.bg-c679e3 .icon {
	color: #c679e3;
  }
  
  &:hover.bg-eb6b3d .icon {
	color: #eb6b3d;
  }
`;

export default IconBox;