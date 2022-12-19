import React from "react";
import FlexContainer from "./styled/FlexContainer";
import SearchIcon from "../assets/icons/search-icon.svg";
import IconContainer from "./styled/IconContainer";
import Input from "./styled/Input";
import { useScreenWidth } from "../hooks/useScreenWidth";

const SearchBar = ({query, setQuery}) => {

    const screenWidth = useScreenWidth();

    return (
        <div className="w-full max-w-[320px] border-[1px] py-1 px-2 rounded-xl">
            <FlexContainer gap={"5px"} wrap={"no-wrap"} maxWidth={"100%"}>
                <IconContainer size={"25px"} display={screenWidth < 400 ? "none" : "block"}>
                    <img 
                        src={SearchIcon} 
                        alt="Search" 
                        className="w-[25px] h-[25px]"
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