import React from "react";
import PinkChevron from "../assets/icons/pink-chevron.svg";
import PageLayout from "../components/styled/PageLayout";
import FlexContainer from "../components/styled/FlexContainer";
import Title from "../components/styled/Title";
import RouterLink from "../components/styled/RouterLink";
import IconContainer from "../components/styled/IconContainer";
import Text from "../components/styled/Text";
import ProductCard from "../components/ProductCard";
import CategoryCard from "../components/CategoryCard";

const FootwearPage = () => {
    return (
        <PageLayout>
            <FlexContainer maxWidth={"80%"} justify={"space-between"} margin={"0px 0px 30px 0px"}>
                <Title size={"1.7em"}>
                    Featured Products
                </Title>

                <RouterLink>
                    <FlexContainer gap={"5px"} justify={"space-between"}>
                        <Text color={"#FF3C78"}>
                            View all
                        </Text>

                        <IconContainer size={"17px"}>
                            <img 
                                src={PinkChevron} 
                                alt="Chevron"
                                className="mt-[1px]" 
                            />
                        </IconContainer>
                    </FlexContainer>
                </RouterLink>
            </FlexContainer>

            <FlexContainer maxWidth={"80%"} gap={"8px"} justify="space-between" margin={"0px 0px 60px 0px"}>
                <ProductCard />
                <ProductCard />
                <ProductCard />
                <ProductCard />
            </FlexContainer>

            <FlexContainer direction={"column"} maxWidth={"50%"} margin={"0px 0px 30px 0px"}>
                <Title size={"1.7em"}>
                    Choose categories
                </Title>

                <Text align={"center"} color={"gray"}>
                    For explosive events the reduction in atmospheric pressure means
                    there is less resistance from the atmosphere.
                </Text>
            </FlexContainer>

            <FlexContainer maxWidth={"80%"} gap={"8px"} justify="space-between" margin={"0px 0px 100px 0px"}>
                <CategoryCard />
                <CategoryCard />
                <CategoryCard />
                <CategoryCard />
            </FlexContainer>
        </PageLayout>
    );
};

export default FootwearPage;