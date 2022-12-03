import React from "react";
import Logo from "../assets/images/logo.svg";
import PersonIcon from "../assets/icons/person-icon.svg";
import BagIcon from "../assets/icons/bag-icon.svg";
import FlexContainer from "./styled/FlexContainer";
import IconContainer from "./styled/IconContainer";
import LogoContainer from "./styled/LogoContainer";
import RouterLink from "./styled/RouterLink";

const Header = () => {
    return (
        <header className="w-full flex justify-center p-5 px-[30px] mb-[50px]">
            <FlexContainer justify={"space-between"} items={"center"} >
                <RouterLink to={"/"}>
                    <LogoContainer>
                        <img 
                            src={Logo} 
                            alt="Logo" 
                        />
                    </LogoContainer>
                </RouterLink>

                <FlexContainer width={"fit-content"} gap={"35px"}>
                    <RouterLink to={"/"}>
                        Footwear
                    </RouterLink>

                    <RouterLink to={"/about-us"}>
                        About Us
                    </RouterLink>

                    <RouterLink to={"/sale"}>
                        Sale
                    </RouterLink>
                </FlexContainer>

                <FlexContainer justify={"space-between"} width={"fit-content"} gap={"25px"}>
                    <RouterLink to={"/profile"}>
                        <IconContainer size={"23px"}>
                            <img 
                                src={PersonIcon}
                                alt="Profile"
                            />
                        </IconContainer>
                    </RouterLink>

                    <RouterLink to={"/cart"}>
                        <IconContainer size={"23px"}>
                            <img 
                                src={BagIcon}
                                alt="Cart"
                            />
                        </IconContainer>
                    </RouterLink>
                </FlexContainer>
            </FlexContainer>
        </header>
    );
};

export default Header;