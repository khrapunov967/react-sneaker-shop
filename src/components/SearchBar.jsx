import React from "react";
import FlexContainer from "./styled/FlexContainer";
import SearchIcon from "../assets/icons/search-icon.svg";
import IconContainer from "./styled/IconContainer";
import Input from "./styled/Input";

const SearchBar = ({query, setQuery}) => {
    return (
        <div className="border-[1px] py-1 px-2 rounded-xl">
            <FlexContainer gap={"5px"}>
                <IconContainer size={"25px"}>
                    <img 
                        src={SearchIcon} 
                        alt="Search" 
                    />
                </IconContainer>

                <Input 
                    placeholder={"Search sneaker..."}
                    textSize={"1.3em"}
                    type={"text"}
                    value={query}
                    onChange={(e) => setQuery(e.target.value)}
                />
            </FlexContainer>
        </div>
    );
};

export default SearchBar;