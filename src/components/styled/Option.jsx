import React from "react";
import styled from "styled-components";

const StyledOption = styled.option`
    cursor: pointer;
    padding: 7px 10px;
    font-size: 1.3em;
    border-bottom: solid 1px #2c2c2c33;
    &:last-child {
        border-bottom: none;
    }
`;

const Option = ({option, ...props}) => {
    return (
        <StyledOption value={option.value} {...props}>
            {option.name}
        </StyledOption>
    );
};

export default Option;