import { keyframes } from "styled-components";

export const Rotate3d = keyframes`
0% {
    -webkit-transform: rotateY(0deg);
    transform: rotateY(0deg);
}
100% {
    -webkit-transform: rotateY(360deg);
    transform: rotateY(360deg);
}
`;

export const MoveBounce = keyframes`
0% {
    -webkit-transform: translateY(0px);
            transform: translateY(0px);
  }
  50% {
    -webkit-transform: translateY(20px);
            transform: translateY(20px);
  }
  100% {
    -webkit-transform: translateY(0px);
            transform: translateY(0px);
  }
`;

export const MoveLeftBounce = keyframes`
0% {
    -webkit-transform: translateX(0px);
            transform: translateX(0px);
  }
  50% {
    -webkit-transform: translateX(20px);
            transform: translateX(20px);
  }
  100% {
    -webkit-transform: translateX(0px);
            transform: translateX(0px);
  }
`;

export const RotateMe = keyframes`
from {
    transform: rotate(0deg);
}
to {
    transform: rotate(360deg);
}
`;

export const AnimationFramesOne = keyframes`
0% {
    transform: translate(0px, 0px) rotate(0deg);
  }
  20% {
    transform: translate(73px, -1px) rotate(36deg);
  }
  40% {
    transform: translate(141px, 72px) rotate(72deg);
  }
  60% {
    transform: translate(83px, 122px) rotate(108deg);
  }
  80% {
    transform: translate(-40px, 72px) rotate(144deg);
  }
  100% {
    transform: translate(0px, 0px) rotate(0deg);
  }
`;

export const MoveBg = keyframes`
from {
  transform: translateX(0);
}
to {
  transform: translateX(88px);
}
`;
