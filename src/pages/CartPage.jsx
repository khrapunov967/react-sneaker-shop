import React from "react";
import { useSelector } from "react-redux";
import CartProductCard from "../components/CartProductCard";
import FlexContainer from "../components/styled/FlexContainer";
import PageLayout from "../components/styled/PageLayout";
import Text from "../components/styled/Text";
import Title from "../components/styled/Title";
import Button from "../components/styled/Button";

const CartPage = () => {

    const items = useSelector(state => state.cart.items);
    const SHIPMENT_PRICE = 10;
    

    return (
        <PageLayout>
            <FlexContainer maxWidth={"80%"} items={"flex-start"} justify={"space-between"} wrap={"no-wrap"}>
                <FlexContainer direction={"column"} items={"flex-start"}>
                    <Title>
                        Shopping Cart
                    </Title>

                    <Text size={"0.9em"} color={"#2c2c2c88"} margin={"0px 0px 30px 0px"}>
                        Total items: {items.length}
                    </Text>

                    <FlexContainer direction={"column"} items={"flex-start"} gap={"25px"} margin={"0px 0px 30px 0px"}>
                        {/* <CartProductCard />
                        <CartProductCard /> */}

                        {
                            items.map(item => <CartProductCard product={item} key={item.id} />)
                        }
                    </FlexContainer>
                </FlexContainer>

                <FlexContainer direction={"column"} maxWidth={"350px"}>
                    <Title margin={"0px 0px 20px 0px"}>
                        Order Summary
                    </Title>

                    <div className="border-[1px] w-full p-6">
                        <FlexContainer maxWidth={"100%"} direction={"column"} gap={"15px"}>
                            <FlexContainer justify={"space-between"} maxWidth={"100%"}>
                                <Text weight={"500"}>
                                    Total products
                                </Text>

                                <Text weight={"500"}>
                                    $180
                                </Text>
                            </FlexContainer>

                            <FlexContainer justify={"space-between"} maxWidth={"100%"}>
                                <Text weight={"500"}>
                                    Shipment
                                </Text>

                                <Text weight={"500"}>
                                    ${
                                        SHIPMENT_PRICE
                                    }
                                </Text>
                            </FlexContainer>

                            <div className="h-[0.5px] bg-[#2c2c2c33] w-full" />

                            <FlexContainer justify={"space-between"} maxWidth={"100%"}>
                                <Text weight={"500"}>
                                    Total
                                </Text>

                                <Text weight={"600"} size={"1.5em"}>
                                    ${
                                        0
                                    }
                                </Text>
                            </FlexContainer>

                            <Button textColor={"#fff"} background={"#2c2c2c"} padding={"12px 9px"} width={"100%"} radius={"10px"} onClick={() => alert("Ordered")}>
                                Order
                            </Button>
                        </FlexContainer>
                    </div>
                </FlexContainer>
            </FlexContainer>
        </PageLayout>
    );
};

export default CartPage;