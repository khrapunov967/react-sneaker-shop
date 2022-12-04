import React from "react";
import FlexContainer from "./styled/FlexContainer";
import ImageContainer from "./styled/ImageContainer";
import RouterLink from "./styled/RouterLink";
import Text from "./styled/Text";

const ProductCard = () => {
    return (
        <div className="cursor-pointer">
            <RouterLink to={"/products/2"}>
                <FlexContainer direction={"column"} gap={"15px"} items={"flex-start"} width={"fit-content"} maxWidth={"230px"}>
                    <ImageContainer 
                        src={"https://cdn.retailrocket.ru/api/1.0/partner/55379e776636b417f47acd68/item/1117554/picture/?format=png&width=250&height=250&scale=both"}
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