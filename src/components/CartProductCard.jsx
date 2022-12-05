import React from "react";
import ProductCounter from "./ProductCounter";
import Button from "./styled/Button";
import FlexContainer from "./styled/FlexContainer";
import ImageContainer from "./styled/ImageContainer";
import Text from "./styled/Text";
import Title from "./styled/Title";

const CartProductCard = () => {
    return (
        <div className="w-full">
            <FlexContainer gap={"15px"} items={"flex-start"} wrap={"no-wrap"}>
                <ImageContainer 
                    src={"https://cdn.retailrocket.ru/api/1.0/partner/55379e776636b417f47acd68/item/1117554/picture/?format=png&width=250&height=250&scale=both"}
                    alt={"Nike Shoes"}
                    size={"260px"}
                />

                <FlexContainer direction={"column"} gap={"30px"} justify={"space-between"} items={"flex-start"} maxWidth={"100%"}>
                    <FlexContainer justify={"space-between"} maxWidth={"100%"}>
                        <Text weight={"600"} size={"1.2em"}>
                            Nike Falcon Shoes
                        </Text>

                        <Text weight={"700"} size={"1.2em"}>
                            $120.50
                        </Text>
                    </FlexContainer>

                    <Text size={"1.1em"}>
                        Size: 3.5
                    </Text>

                    <FlexContainer justify={"space-between"} maxWidth={"100%"}>
                        <ProductCounter />

                        <Button textColor={"#FF3C78"} textSize={"1.2em"} border={"none"}>
                            Delete
                        </Button>
                    </FlexContainer>
                </FlexContainer>
            </FlexContainer>
        </div>
    );
};

export default CartProductCard;