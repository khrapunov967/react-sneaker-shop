import React from "react";
import FlexContainer from "./styled/FlexContainer";
import ImageContainer from "./styled/ImageContainer";
import RouterLink from "./styled/RouterLink";
import Text from "./styled/Text";

const ProductCard = () => {
    return (
        <div className="cursor-pointer">
            <RouterLink to={"/product-id"}>
                <FlexContainer direction={"column"} gap={"15px"} items={"flex-start"} width={"fit-content"} maxWidth={"230px"}>
                    <ImageContainer 
                        src={"https://images.unsplash.com/photo-1608667508764-33cf0726b13a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=580&q=80"}
                        alt={"Nike Shoes"}
                        size={"230px"}
                    />

                    <Text weight={"600"}>
                        Nike Falcon Shoes for men - 2021 edition
                    </Text>

                    <Text weight={"700"} size={"1.4em"}>
                        $120.50
                    </Text>
                </FlexContainer>
            </RouterLink>
        </div>
    );
};

export default ProductCard;