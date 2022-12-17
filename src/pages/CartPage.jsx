import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useAuth } from "../hooks/useAuth";
import { useNavigate } from "react-router-dom";
import CartProductCard from "../components/CartProductCard";
import FlexContainer from "../components/styled/FlexContainer";
import PageLayout from "../components/styled/PageLayout";
import Text from "../components/styled/Text";
import Title from "../components/styled/Title";
import Button from "../components/styled/Button";
import { clearCart } from "../store/userSlice";
import { useEffect } from "react";
import FirestoreService from "../services/FirestoreService";

const CartPage = () => {

    const cart = useSelector(state => state.user.cart);
    const SHIPMENT_PRICE = 10;
    let itemsPrice = cart.reduce((sum, curr) => +sum + (+curr.price * +curr.count), 0);
    let totalPrice = SHIPMENT_PRICE + itemsPrice;

    const { isAuth, userId } = useAuth();
    const navigate = useNavigate();
    const dispatch = useDispatch();

    // useEffect(() => {
    //     FirestoreService.setCart(userId, items);
    // }, [items, userId])

    const order = () => {
        if (isAuth) {
            if (cart.length) {
                dispatch(clearCart());
                alert("Ordered");
            }

        } else {
            navigate("/sign-up");
        }
        
    }

    return (
        <PageLayout>
            <FlexContainer maxWidth={"80%"} items={"flex-start"} justify={"space-between"} wrap={"no-wrap"}>
                <FlexContainer direction={"column"} items={"flex-start"}>
                    <Title>
                        Shopping Cart
                    </Title>

                    <Text size={"0.9em"} color={"#2c2c2c88"} margin={"0px 0px 30px 0px"}>
                        Total items: {cart.length}
                    </Text>

                    <FlexContainer direction={"column"} items={"flex-start"} gap={"25px"} margin={"0px 0px 30px 0px"}>
                        {
                            cart.map(item => <CartProductCard product={item} key={item.id} />)
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
                                    ${
                                        itemsPrice
                                    }
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

                            <div className="h-[1px] bg-[#2c2c2c33] w-full" />

                            <FlexContainer justify={"space-between"} maxWidth={"100%"}>
                                <Text weight={"500"}>
                                    Total
                                </Text>

                                <Text weight={"600"} size={"1.5em"}>
                                    ${
                                        totalPrice
                                    }
                                </Text>
                            </FlexContainer>

                            <Button textColor={"#fff"} background={"#2c2c2c"} padding={"12px 9px"} width={"100%"} radius={"10px"} onClick={order}>
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