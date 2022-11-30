import React from "react";
import styled from "styled-components";

const StyledPageLayout = styled.section`
    width: 100%;
    max-width: ${props => props.maxWidth || "1440px"};
    display: flex;
    flex-direction: column;
    align-items: center;
`;

const PageLayout = ({children, ...props}) => {
    return (
        <StyledPageLayout {...props}>
            {children}
        </StyledPageLayout>
    );
};

export default PageLayout;