import React from "react";
import { useSelector } from "react-redux";
import FlexContainer from "../components/styled/FlexContainer";
import PageLayout from "../components/styled/PageLayout";
import Title from "../components/styled/Title";
import SearchBar from "../components/SearchBar";
import Select from "../components/styled/Select";
import ProductCard from "../components/ProductCard";

const ProductsPage = () => {

    const products = useSelector(state => state.products.products);

    return (
        <PageLayout>
             <FlexContainer maxWidth={"80%"} justify={"space-between"} margin={"0px 0px 30px 0px"}>
                <Title size={"1.7em"}>
                    All Sneakers
                </Title>

                <FlexContainer maxWidth={"fit-content"} gap={"5px"}>
                    <SearchBar />

                    <Select 
                        textSize={"1.3em"} 
                        padding={"1px 2px 1px 2px"} 
                        options={[
                            {id: 1, value: "FIRST", name: "First"},
                            {id: 2, value: "SECOND", name: "Second"},
                            {id: 3, value: "THIRD", name: "Third"},
                        ]}
                    />              
                </FlexContainer>
            </FlexContainer>

            <FlexContainer maxWidth={"80%"} gap={"8px"} justify="space-between" margin={"0px 0px 100px 0px"}>
                {
                    products.map(product => <ProductCard product={product} key={product.id} />)
                }
            </FlexContainer>
        </PageLayout>
    );
};

export default ProductsPage;