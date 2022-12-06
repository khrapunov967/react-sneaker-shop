import React from "react";
import FlexContainer from "./styled/FlexContainer";
import ImageContainer from "./styled/ImageContainer";
import RouterLink from "./styled/RouterLink";
import Text from "./styled/Text";

const ProductCard = ({product}) => {
    return (
        <div className="cursor-pointer">
            <RouterLink to={`/products/${product.id}`}>
                <FlexContainer direction={"column"} gap={"15px"} items={"flex-start"} width={"fit-content"} maxWidth={"230px"}>
                    <ImageContainer 
                        src={product.cover}
                        alt={"Nike Shoes"}
                        size={"230px"}
                    />

                    <Text weight={"600"}>
                        {
                            product.longTitle
                        }
                    </Text>

                    <Text weight={"700"} size={"1.4em"}>
                        ${
                            product.price
                        }
                    </Text>
                </FlexContainer>
            </RouterLink>
        </div>
    );
};

export default ProductCard;