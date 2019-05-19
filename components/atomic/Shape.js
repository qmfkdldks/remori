import React from 'react'
import styled from 'styled-components'
import { Image } from 'rebass'
import { Rotate3d, MoveBounce, RotateMe, AnimationFramesOne } from '../animations/keyframes'

import imgShape1 from '../../images/shape1.png'
import imgShape2 from '../../images/shape2.svg'
import imgShape3 from '../../images/shape3.svg'
import imgShape4 from '../../images/shape4.svg'
import imgShape5 from '../../images/shape5.png'

const StyledDiv = styled.div`
position: absolute;
animation: ${props => props.animation} ${props => props.animationOptions};
z-index: -1;
top: ${props => props.top};
left: ${props => props.left};
bottom: ${props => props.bottom};
right: ${props => props.right};
opacity: ${props => props.opacity || 1};

@media only screen and (max-width: 767px) {
    &.shape1, &.shape2, &.shape3, &.shape4, &.shape5 {
        display: none;
    }
}

@media only screen and (min-width: 768px) and (max-width: 991px) {
    &.shape1, &.shape2, &.shape3, &.shape4, &.shape5, &.shape7 {
        display: none;
      }
}

@media only screen and (min-width: 992px) and (max-width: 1199px) {
    &.shape1 {
        display: none;
    }
}
`

const Shape = (props) => {
    return (
        <StyledDiv {...props} >
            <Image src={props.img} />
        </StyledDiv>
    )
}

export const Shape1 = (props) =>
    <Shape
        top="20%"
        left="30px"
        opacity=".4"
        img={imgShape1}
        animation={Rotate3d}
        animationOptions="4s linear infinite"
        {...props}
    />


export const Shape2 = (props) =>
    <Shape
        top="70%"
        left="15%"
        img={imgShape2}
        animation={RotateMe}
        animationOptions="5s linear infinite"
        {...props}
    />

export const Shape3 = () =>
    <Shape
        left="25%"
        bottom="15%"
        img={imgShape3}
        animation={AnimationFramesOne}
        animationOptions="15s linear infinite"
    />

export const Shape4 = (props) =>
    <Shape
        right="25%"
        bottom="15%"
        img={imgShape4}
        animation={AnimationFramesOne}
        animationOptions="20s linear infinite"
        {...props}
    />

export const Shape5 = () =>
    <Shape
        right="5%"
        top="10%"
        img={imgShape5}
        animation={MoveBounce}
        animationOptions="5s linear infinite"
    />

export const Shape6 = () =>
    <Shape
        right="10%"
        top="40%"
        opacity=".2"
        img={imgShape4}
        animation={RotateMe}
        animationOptions="10s linear infinite"
    />

export const Shape7 = () =>
    <Shape
        left="25%"
        top="15%"
        img={imgShape4}
        animation={RotateMe}
        animationOptions="10s linear infinite"
    />

export const Shape8 = () =>
    <Shape
        right="10%"
        top="15%"
        img={imgShape2}
        animation={RotateMe}
        animationOptions="10s linear infinite"
    />
