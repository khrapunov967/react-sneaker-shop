import React from "react";
import styled from "styled-components";

const StyledInput = styled.input`
    font-size: ${props => props.textSize || "1em"};
    border: ${props => props.border || "none"};
    outline: ${props => props.outline || "none"};
    padding: ${props => props.padding || "none"};
    border-radius: ${props => props.radius || "0px"};
    background: ${props => props.background || "transparent"};
`;

const Input = ({placeholder, name, value, onChange, type, ...props}) => {
    return (
        <StyledInput 
            {...props}
            placeholder={placeholder}
            name={name}
            value={value}
            onChange={onChange}
            type={type}
        />
    );
};

export default Input;