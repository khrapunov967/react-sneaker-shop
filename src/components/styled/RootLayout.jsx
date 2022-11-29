import React from "react";
import styled from "styled-components";

const StyledRootLayout = styled.section`
    width: 100%;
    max-width: 1440px;
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    align-items: center;
`;

const RootLayout = ({children}) => {
    return (
        <StyledRootLayout>
            {children}
        </StyledRootLayout>
    );
};

export default RootLayout;