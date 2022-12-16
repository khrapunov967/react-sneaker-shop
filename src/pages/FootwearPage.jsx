import React from "react";
import { useSelector } from "react-redux";
import PinkChevron from "../assets/icons/pink-chevron.svg";
import PageLayout from "../components/styled/PageLayout";
import FlexContainer from "../components/styled/FlexContainer";
import Title from "../components/styled/Title";
import RouterLink from "../components/styled/RouterLink";
import IconContainer from "../components/styled/IconContainer";
import Text from "../components/styled/Text";
import ProductCard from "../components/ProductCard";
import CategoryCard from "../components/CategoryCard";
import Loader from "../components/Loader";

const FootwearPage = () => {

    const {products, isFetching} = useSelector(state => state.products);

    return (
        <PageLayout>
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

            <FlexContainer maxWidth={"80%"} gap={"8px"} justify="space-between" margin={"0px 0px 100px 0px"}>
                {
                    isFetching ? <Loader /> : 
                    products.map(product => <ProductCard product={product} key={product.id} />)
                }
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

            <FlexContainer maxWidth={"55%"} gap={"8px"} justify="space-between" margin={"0px 0px 100px 0px"}>
                {
                    [
                        {id: 1, title: "Football collection", productCount: 2, coverLink: "https://images.unsplash.com/photo-1610736342165-4eeb4aef66ca?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=327&q=80"},
                        {id: 2, title: "Running collection", productCount: 1, coverLink: "https://images.unsplash.com/photo-1553969546-6f7388a7e07c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=388&q=80"},
                        {id: 3, title: "Basketball collection", productCount: 1, coverLink: "https://images.unsplash.com/photo-1608245449230-4ac19066d2d0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8YmFza2V0YmFsbHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60"}

                    ].map((category) => <CategoryCard key={category.id} title={category.title} coverLink={category.coverLink} productCount={category.productCount} />)
                }
            </FlexContainer>
        </PageLayout>
    );
};

export default FootwearPage;