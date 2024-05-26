import React from 'react';
import styled from 'styled-components';

const RoundDiv = styled.div`
    border-radius: ${props => props.borderradius ? `${props.borderradius}px` : '12px'};
    position: ${props => props.position || 'static'};
    bottom: ${props => props.bottom ? `${props.bottom}px` : 'none'};
    right: ${props => props.right ? `${props.right}px` : 'none'};
    border-color: ${props => props.bordercolor || 'none'};
    border-width: ${props => props.borderwidth ? `${props.borderwidth}px` : '0px'};
    color: ${props => props.color || 'white'};
    background-color: ${props => props.backgroundcolor || "#f02b70"};
    height: ${props => props.height ? `${props.height}px` : '20px'};
    width: ${props => props.width ? `${props.width}px` : '20px'};
    margin: ${props => props.margin || '0px'};
    box-shadow: ${props => props.boxshadow || 'none'};
    background-image: ${props => props.backgroundimage ? `url(${props.backgroundimage})`: null};
    background-position: center;
    background-size: cover;
    border-style: solid;
    box-sizing: border-box;
    font-weight: bold;
    text-align:center;
    flex-shrink: 0;
    line-height: ${props => props.height ? `${props.height}px` : '20px'};
`;

const CustomRoundDiv = ({
    bordercolor, 
    backgroundcolor, 
    color, 
    height, 
    width, 
    backgroundimage,
    borderradius,
    borderwidth, 
    boxshadow,
    margin,
    position,
    bottom,
    right,
    onClick, 
    children}) => {
    return (
        <RoundDiv 
            bordercolor={bordercolor}
            borderwidth={borderwidth}
            borderradius={borderradius}
            backgroundcolor={backgroundcolor}
            color={color}
            height={height}
            width={width}
            margin={margin}
            boxshadow={boxshadow}
            backgroundimage={backgroundimage}
            position={position}
            bottom={bottom}
            right={right}
            onClick={onClick}>
            {children}
        </RoundDiv>
    );
};

export default CustomRoundDiv;