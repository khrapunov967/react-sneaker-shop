import React from "react";
import styled from "styled-components";

const StyledText = styled.p`
    color: ${props => props.color || "#2c2c2c"};
    font-size: ${props => props.size || "1em"};
    font-weight: ${props => props.weight || "semibold"};
    text-align: ${props => props.align || "left"};
    margin: ${props => props.margin || "none"};
    display: ${props => props.display || "flex"};
`;

const Text = ({children, ...props}) => {
    return (
        <StyledText {...props}>
            {children}
        </StyledText>
    );
};

export default Text;