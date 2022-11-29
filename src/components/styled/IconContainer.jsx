import React from "react";
import styled from "styled-components";

const StyledIconContainer = styled.div`
    width: ${props => props.size || "20px"}; 
    cursor: pointer;
`;

const IconContainer = ({children, ...props}) => {
    return (
        <StyledIconContainer {...props}>
            {children}
        </StyledIconContainer>
    );
};

export default IconContainer;