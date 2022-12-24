import React, { useState, useMemo } from "react";
import { useSelector } from "react-redux";
import FlexContainer from "../components/styled/FlexContainer";
import PageLayout from "../components/styled/PageLayout";
import Title from "../components/styled/Title";
import SearchBar from "../components/SearchBar";
import Select from "../components/styled/Select";
import ProductCard from "../components/ProductCard";
import NotFoundMsg from "../components/NotFoundMsg";
import Header from "../components/Header";

const ProductsPage = () => {

    const [searchQuery, setSearchQuery] = useState("");
    const [selectValue, setSelectValue] = useState("");
    
    const products = useSelector(state => state.products.products);

    const filteredProducts = useMemo(() => {
        return products.filter((product) => {
            if (product.longTitle.toLowerCase().includes(searchQuery.toLowerCase().trim()) && product.category.includes(selectValue)) {
                return product;
            }
        });
    }, [searchQuery, products, selectValue]);


    return (
        <PageLayout>
            <Header />

            <FlexContainer maxWidth={"80%"} justify={"space-between"} margin={"0px 0px 60px 0px"}>
                <Title size={"1.7em"}>
                    All Sneakers
                </Title>

                <FlexContainer maxWidth={"fit-content"} gap={"5px"}>
                    <SearchBar
                        query={searchQuery}
                        setQuery={setSearchQuery}
                    />

                    <Select
                        value={"Football"}
                        setValue={setSelectValue}
                        textSize={"1.3em"}
                        padding={"1px 2px 1px 2px"}
                        options={[
                            { id: 0, value: "", name: "All" },
                            { id: 1, value: "FOOTBALL", name: "Football" },
                            { id: 2, value: "BASKETBALL", name: "Basketball" },
                            { id: 3, value: "RUNNING", name: "Running" },
                        ]}
                    />
                </FlexContainer>
            </FlexContainer>

            <FlexContainer maxWidth={"85%"} gap={"40px"} justify="center" margin={"0px 0px 100px 0px"}>
                {
                    !filteredProducts.length ? <NotFoundMsg msg={"Not Found"} /> :
                        filteredProducts.map(product => <ProductCard product={product} key={product.id} />)
                }
            </FlexContainer>
        </PageLayout>
    );
};

export default ProductsPage;