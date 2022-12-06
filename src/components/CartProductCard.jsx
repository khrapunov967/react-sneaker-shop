import React, { useState } from "react";
import ProductCounter from "./ProductCounter";
import Button from "./styled/Button";
import FlexContainer from "./styled/FlexContainer";
import ImageContainer from "./styled/ImageContainer";
import Text from "./styled/Text";

const CartProductCard = ({product}) => {

    const [count, setCount] = useState(+product.count);

    return (
        <div className="w-full">
            <FlexContainer gap={"15px"} items={"flex-start"} wrap={"no-wrap"}>
                <ImageContainer 
                    src={product.cover}
                    alt={"Nike Shoes"}
                    size={"260px"}
                />

                <FlexContainer direction={"column"} gap={"30px"} justify={"space-between"} items={"flex-start"} maxWidth={"100%"}>
                    <FlexContainer justify={"space-between"} maxWidth={"100%"}>
                        <Text weight={"600"} size={"1.2em"}>
                            {
                                product.title
                            }
                        </Text>

                        <Text weight={"700"} size={"1.2em"}>
                            ${
                                product.price
                            }
                        </Text>
                    </FlexContainer>

                    <Text size={"1.1em"}>
                        Size: {
                            product.size
                        }
                    </Text>

                    <FlexContainer justify={"space-between"} maxWidth={"100%"}>
                        <ProductCounter 
                            count={count}
                            setCount={setCount}
                        />

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