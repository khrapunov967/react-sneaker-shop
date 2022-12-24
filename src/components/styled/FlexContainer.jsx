import React from "react";
import styled from "styled-components";

const StyledFlexContainer = styled.div`
    display: flex;
    margin: ${props => props.margin || "0px 0px 0px 0px"};
    padding: ${props => props.padding || "none"};
    flex-wrap: ${props => props.wrap || "wrap"};
    width: ${props => props.width || "100%"};
    min-height: ${props => props.minHeight || "none"};
    max-width: ${props => props.maxWidth || "fit-content"};
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