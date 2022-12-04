import React from "react";
import styled from "styled-components";

const StyledImageContainer = styled.div`
    width: ${props => props.size || "150px"};
    margin: ${props => props.margin || "0"};
`;

const ImageContainer = ({src, alt, ...props}) => {
    return (
        <StyledImageContainer {...props}>
            <img 
                src={src} 
                alt={alt}
                className={`bg-cover object-cover rounded-2xl`} 
            />
        </StyledImageContainer>
    );
};

export default ImageContainer;