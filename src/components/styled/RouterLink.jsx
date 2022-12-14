import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const StyledRouterLink = styled(Link)`
    position: ${props => props.position || "relative"};
    color: ${props => props.color || "#2c2c2c"};
    font-size: 1em;
    font-weight: 600;
    transition: all 0.2s linear;
    &:hover {
        ${`
            color: #FF3C78;
        `}
    }
`;

const RouterLink = ({children, to, ...props}) => {
    return (
        <StyledRouterLink {...props}>
            <Link to={to}>
                {children}
            </Link>
        </StyledRouterLink>
    );
};

export default RouterLink;