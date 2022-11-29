import React from "react";
import styled from "styled-components";

const StyledLogoContainer = styled.div`
    display: flex;
    gap: 3px;
    width: ${props => props.width || "49px"};
    height: ${props => props.height || "48px"};
`;

const LogoContainer = ({children, ...props}) => {
    return (
        <StyledLogoContainer {...props}>
            {children}
        </StyledLogoContainer>
    );
};

export default LogoContainer;