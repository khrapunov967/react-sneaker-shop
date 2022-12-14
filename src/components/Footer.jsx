import React from "react";
import { useScreenWidth } from "../hooks/useScreenWidth";
import Logo from "../assets/images/logo.svg";
import GitHubIcon from "../assets/icons/github-icon.svg";
import VkIcon from "../assets/icons/vk-icon.svg";
import FlexContainer from "./styled/FlexContainer";
import IconContainer from "./styled/IconContainer";
import LogoContainer from "./styled/LogoContainer";
import Text from "./styled/Text";

const Footer = () => {

    const screenWidth = useScreenWidth();

    return (
        <footer className="w-full p-10 flex justify-center max-w-[1440px] bg-[#2c2c2c]">
            <FlexContainer justify={"space-between"} maxWidth={"1440px"} wrap={"no-wrap"}>
                <FlexContainer maxWidth={"300px"} wrap={"no-wrap"} gap={"10px"}>
                    <LogoContainer width={"40px"} height={"39"}>
                        <img 
                            src={Logo} 
                            alt="Logo" 
                        />
                    </LogoContainer>

                    <Text size={"0.8em"} color={"#fff"} display={screenWidth < 581 ? "none" : "block"}>
                        Our shop is the best choice for buying footwear.
                    </Text>
                </FlexContainer>

                <FlexContainer maxWidth={"fit-content"} gap={"15px"}>
                    <a href="https://github.com/khrapunov967/react-sneaker-shop" target="_blank">
                        <IconContainer size={"30px"}>
                            <img 
                                src={GitHubIcon} 
                                alt="GitHub" 
                            />
                        </IconContainer>
                    </a>

                    <a href="#" target="_blank">
                        <IconContainer size={"30px"}>
                            <img 
                                src={VkIcon} 
                                alt="VK" 
                            />
                        </IconContainer>
                    </a>
                </FlexContainer>
            </FlexContainer>
        </footer>
    );
};

export default Footer;