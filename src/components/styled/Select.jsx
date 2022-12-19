import React, { useState } from "react";
import styled from "styled-components";
import DownChevron from "../../assets/icons/down-black-chevron.svg";
import FlexContainer from "./FlexContainer";
import IconContainer from "./IconContainer";
import Option from "./Option";

const StyledSelect = styled.input`
    width: ${props => props.width || "160px"};
    max-width: ${props => props.maxWidth || "fit-content"};
    font-size: ${props => props.textSize || "1em"};
    padding: ${props => props.padding || "0px 0px 0px 0px"};
    cursor: pointer;
    outline: none;
`;

const Select = ({options, value, setValue,  ...props}) => {

    const [visible, setVisible] = useState(false);
    const [title, setTitle] = useState(options[0].name);

    return (
        <div className="" onClick={() => setVisible(state => !state)}>
            <div className="w-full max-w-[202px] border-[1px] rounded-xl py-1 px-2 relative">
                <FlexContainer maxWidth={"100%"} wrap={"no-wrap"}>
                    <StyledSelect 
                        {...props} 
                        value={title}
                        readOnly={true}
                        options={options}
                    />

                    <IconContainer size={"23px"}>
                        <img 
                            src={DownChevron} 
                            alt="chevron" 
                            className={`${visible ? "rotate-180" : ""} transition-all duration-300`}
                        />
                    </IconContainer>

                    <div className={`absolute top-12 left-0 border-[1px] w-full rounded-xl bg-[#fff] z-10 ${visible ? "" : "hidden"}`}>
                        {
                            options.map(option => <Option option={option} key={option.id} onClick={() => {
                                setValue(option.value);
                                setTitle(option.name);
                            }} />)
                        }
                    </div>
                </FlexContainer>
            </div>
        </div>
    );
};

export default Select;