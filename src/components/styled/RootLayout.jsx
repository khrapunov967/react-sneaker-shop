import React from "react";
import styled from "styled-components";

const StyledRootLayout = styled.section`
    width: 100%;
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    align-items: center;
    height: 100vh;
    justify-content: space-between;
`;

const RootLayout = ({children}) => {
    return (
        <StyledRootLayout>
            {children}
        </StyledRootLayout>
    );
};

export default RootLayout;