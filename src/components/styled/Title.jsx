import React from "react";
import styled from "styled-components";

const StyledTitle = styled.h2`
    font-weight: bold;
    color: ${props => props.color || "#2c2c2c"};
    font-size: ${props => props.size || "1.5em"};
    margin: ${props => props.margin || "none"};
    text-align: ${props => props.align || "left"};
`;

const Title = ({children, ...props}) => {
    return (
        <StyledTitle {...props}>
            {children}
        </StyledTitle>
    );
};

export default Title;