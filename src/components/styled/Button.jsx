import React from "react";
import styled from "styled-components";

const StyledButton = styled.button`
    width: ${props => props.width || "fit-content"};
    max-width: ${props => props.maxWidth || "none"};
    border: ${props => props.border || "solid 1px #2c2c2c44"};
    background: ${props => props.background || "transparent"};
    color: ${props => props.textColor || "#2c2c2c"};
    font-size: ${props => props.textSize || "1em"};
    border-radius: ${props => props.radius || "0px"};
    padding: ${props => props.padding || '2px'};
    margin: ${props => props.margin || 'none'};
`;

const Button = ({children, ...props}) => {
    return (
        <StyledButton {...props}>
            {children}
        </StyledButton>
    );
};

export default Button;