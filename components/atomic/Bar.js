import styled from 'styled-components'
import { MoveBg } from '../animations/keyframes'

const Bar = styled.div`
height: 5px;
width: 90px;
background: #cdf1d8;
margin: 20px auto;
position: relative;
border-radius: 30px;

::before {
    content: '';
    position: absolute;
    left: 0;
    top: -2.7px;
    height: 10px;
    width: 10px;
    border-radius: 50%;
    background: #44ce6f;
    animation-duration: 3s;
    animation-timing-function: linear;
    animation-iteration-count: infinite;    
    animation-name: ${ MoveBg};
}
`

export default Bar