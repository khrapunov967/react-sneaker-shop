import React from "react";
import styled from "styled-components";

const StyledIconContainer = styled.div`
    width: ${props => props.size || "20px"}; 
    cursor: pointer;
    display: ${props => props.display || "block"};
    z-index: ${props => props.z || "0"};
`;

const IconContainer = ({children, ...props}) => {
    return (
        <StyledIconContainer {...props}>
            {children}
        </StyledIconContainer>
    );
};

export default IconContainer;