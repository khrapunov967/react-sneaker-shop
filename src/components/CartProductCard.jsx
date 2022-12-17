import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { changeItemCountInCart, removeItemFromCart } from "../store/userSlice";
import ProductCounter from "./ProductCounter";
import Button from "./styled/Button";
import FlexContainer from "./styled/FlexContainer";
import ImageContainer from "./styled/ImageContainer";
import Text from "./styled/Text";

const CartProductCard = ({product}) => {

    const [count, setCount] = useState(+product.count);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(changeItemCountInCart({id: product.id, newCount: count}));
    }, [count]);

    return (
        <div className="w-full">
            <FlexContainer gap={"15px"} items={"flex-start"} wrap={"no-wrap"}>
                <ImageContainer 
                    src={product.cover}
                    alt={"shoes photo"}
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

                        <Button textColor={"#FF3C78"} textSize={"1.2em"} border={"none"} onClick={() => dispatch(removeItemFromCart({id: product.id}))}>
                            Delete
                        </Button>
                    </FlexContainer>
                </FlexContainer>
            </FlexContainer>
        </div>
    );
};

export default CartProductCard;