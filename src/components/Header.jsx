import React, { useState } from "react";
import { useSelector } from "react-redux";
import { useScreenWidth } from "../hooks/useScreenWidth";
import Logo from "../assets/images/logo.svg";
import MenuIcon from "../assets/icons/menu-icon.svg";
import CloseIcon from "../assets/icons/close-icon.svg";
import FlexContainer from "./styled/FlexContainer";
import IconContainer from "./styled/IconContainer";
import LogoContainer from "./styled/LogoContainer";
import RouterLink from "./styled/RouterLink";

const Header = () => {

    const count = useSelector(state => state.user.cart.length);

    const screenWidth = useScreenWidth();

    const [isMenuVisible, setIsMenuVisible] = useState(false);

    return (
        <header className="w-full flex justify-center items-center p-5 px-[30px] mb-[50px]">
            <FlexContainer justify={"space-between"} wrap={"no-wrap"} items={"center"} maxWidth={"1440px"}>
                <RouterLink to={"/"}>
                    <LogoContainer>
                        <img 
                            src={Logo} 
                            alt="Logo" 
                        />
                    </LogoContainer>
                </RouterLink>

                <nav className={`flex gap-[40px] justify-between max-sm-screen:justify-end max-sm-screen:min-h-screen max-sm-screen:z-10 max-sm-screen:p-10 max-sm-screen:fixed max-sm-screen:top-0 max-sm-screen:right-0 max-sm-screen:flex-col-reverse max-sm-screen:w-[250px] max-sm-screen:bg-[#2c2c2c] ${isMenuVisible ? "" : "max-sm-screen:hidden"}`}>
                    <FlexContainer direction={screenWidth < 581 ? "column" : "row"} width={"fit-content"} gap={"35px"}>
                        <RouterLink to={"/"} color={screenWidth < 581 ? "white" : "#2c2c2c"}>
                            Footwear
                        </RouterLink>

                        <RouterLink to={"/about-us"} color={screenWidth < 581 ? "white" : "#2c2c2c"}>
                            About Us
                        </RouterLink>

                        <RouterLink to={"/sale"} color={screenWidth < 581 ? "white" : "#2c2c2c"}>
                            Sale
                        </RouterLink>
                    </FlexContainer>

                    <FlexContainer justify={"space-between"} width={"fit-content"} gap={"25px"}>
                        <RouterLink to={"/profile"}>
                            <IconContainer size={"23px"}>
                                <svg xmlns="http://www.w3.org/2000/svg" class="ionicon" viewBox="0 0 512 512"><path d="M344 144c-3.92 52.87-44 96-88 96s-84.15-43.12-88-96c-4-55 35-96 88-96s92 42 88 96z" fill="none" stroke={screenWidth < 581 ? "#fff" : "#2c2c2c"} stroke-linecap="round" stroke-linejoin="round" stroke-width="32"/><path d="M256 304c-87 0-175.3 48-191.64 138.6C62.39 453.52 68.57 464 80 464h352c11.44 0 17.62-10.48 15.65-21.4C431.3 352 343 304 256 304z" fill="none" stroke={screenWidth < 581 ? "#fff" : "#2c2c2c"} stroke-miterlimit="10" stroke-width="32"/></svg>
                            </IconContainer>
                        </RouterLink>

                        <RouterLink to={"/cart"}>
                            <IconContainer size={"23px"}>
                                <svg xmlns="http://www.w3.org/2000/svg" class="ionicon" viewBox="0 0 512 512"><path d="M80 176a16 16 0 00-16 16v216c0 30.24 25.76 56 56 56h272c30.24 0 56-24.51 56-54.75V192a16 16 0 00-16-16zM160 176v-32a96 96 0 0196-96h0a96 96 0 0196 96v32" fill="none" stroke={screenWidth < 581 ? "#fff" : "#2c2c2c"} stroke-linecap="round" stroke-linejoin="round" stroke-width="32"/><path d="M160 224v16a96 96 0 0096 96h0a96 96 0 0096-96v-16" fill="none" stroke={screenWidth < 581 ? "#fff" : "#2c2c2c"} stroke-linecap="round" stroke-linejoin="round" stroke-width="32"/></svg>
                            </IconContainer>

                            <div className={`absolute w-5 h-5 top-3 text-xs left-2 ${count === 0 ? "hidden" : "flex"} justify-center items-center rounded-full text-white bg-red-500`}>
                                {count}
                            </div>
                        </RouterLink>
                    </FlexContainer>
                </nav>

                <div className="absolute top-3 right-3 z-20">
                    <IconContainer size={"23px"} onClick={() => setIsMenuVisible(false)}>
                        <img 
                            src={CloseIcon}
                            alt="close" 
                        />
                    </IconContainer>
                </div>
            </FlexContainer>

            <IconContainer size={"33px"} display={screenWidth < 581 ? "block" : "none"} onClick={() => setIsMenuVisible(true)}>
                <img 
                    src={MenuIcon} 
                    alt="menu" 
                />
            </IconContainer>
        </header>
    );
};

export default Header;