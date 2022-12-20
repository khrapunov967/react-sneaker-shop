import React from "react";
import { useSelector } from "react-redux";
import { useScreenWidth } from "../hooks/useScreenWidth";
import PinkChevron from "../assets/icons/pink-chevron.svg";
import PageLayout from "../components/styled/PageLayout";
import FlexContainer from "../components/styled/FlexContainer";
import Title from "../components/styled/Title";
import RouterLink from "../components/styled/RouterLink";
import IconContainer from "../components/styled/IconContainer";
import Text from "../components/styled/Text";
import ProductCard from "../components/ProductCard";
import Loader from "../components/Loader";
import Header from "../components/Header";

const FootwearPage = () => {

    const {products, isFetching} = useSelector(state => state.products);
    const screenWidth = useScreenWidth();

    return (
        <PageLayout>
            <Header />
            <FlexContainer maxWidth={"80%"} justify={"space-between"} margin={"0px 0px 30px 0px"}>
                <Title size={"1.7em"}>
                    Featured Products
                </Title>

                <RouterLink>
                    <FlexContainer gap={"5px"} justify={"space-between"}>
                        <RouterLink to={"/products"}>
                            <Text color={"#FF3C78"}>
                                View all
                            </Text>
                        </RouterLink>

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

            <FlexContainer maxWidth={"80%"} gap={"8px"} justify={screenWidth < 581 ? "center" : "space-between"} margin={"0px 0px 100px 0px"}>
                {
                    isFetching ? <Loader /> : 
                    products.map(product => <ProductCard product={product} key={product.id} />)
                }
            </FlexContainer>
        </PageLayout>
    );
};

export default FootwearPage;