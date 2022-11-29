import React from "react";
import styled from "styled-components";

const StyledFlexContainer = styled.div`
    width: ${props => props.width || "100%"};
    display: flex;
    gap: ${props => props.gap || "1px"};
    flex-direction: ${props => props.direction || "row"};
    justify-content: ${props => props.justify || "flex-start"};
    align-items: ${props => props.items || "center"};
`;

const FlexContainer = ({children, ...props}) => {
    return (
        <StyledFlexContainer {...props}>
            {children}
        </StyledFlexContainer>
    );
};

export default FlexContainer;