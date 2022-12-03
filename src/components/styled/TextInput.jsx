import React from "react";
import styled from "styled-components";

const StyledInput = styled.input`
    font-size: ${props => props.textSize || "1em"};
    border: ${props => props.border || "none"};
    outline: ${props => props.outline || "none"};
`;

const TextInput = ({placeholder, name, value, setValue, ...props}) => {
    return (
        <StyledInput 
            {...props}
            placeholder={placeholder}
            name={name}
            value={value}
            onChange={setValue}
        />
    );
};

export default TextInput;