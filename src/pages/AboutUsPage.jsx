import React from "react";
import Header from "../components/Header";
import FlexContainer from "../components/styled/FlexContainer";
import Text from "../components/styled/Text";
import Title from "../components/styled/Title";
import PageLayout from "../components/styled/PageLayout";
import LogoImage from "../assets/images/logo.svg";

const AboutUsPage = () => {
    return (
        <PageLayout>
            <Header />

            <FlexContainer direction={"column"} gap={"20px"} margin={"0px 0px 50px 0px"} padding={"10px"}>
                <img
                    src={LogoImage}
                    className={"w-[80px] h-[80px]"}
                />

                <Title align={"center"}>
                    KICK - SNEAKER SHOP
                </Title>

                <Text align={"center"}>
                    Kick Shop - best sneaker shop in the world. This project was made for practice!
                </Text>
            </FlexContainer>
        </PageLayout>
    );
};

export default AboutUsPage;