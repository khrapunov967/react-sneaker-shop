import React, { useState } from "react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import ProductCounter from "../components/ProductCounter";
import SizeOptionCard from "../components/SizeOptionCard";
import Button from "../components/styled/Button";
import FlexContainer from "../components/styled/FlexContainer";
import ImageContainer from "../components/styled/ImageContainer";
import PageLayout from "../components/styled/PageLayout";
import Text from "../components/styled/Text";
import Title from "../components/styled/Title";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import { addItemToCart } from "../store/userSlice";
import { useMemo } from "react";
import { useScreenWidth } from "../hooks/useScreenWidth";

const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
};

const ProductDetailsPage = () => {

    const {id} = useParams();

    const product = useSelector(state => state.products.products.find(item => +item.id === +id));
    const dispatch = useDispatch();

    const [count, setCount] = useState(1);
    const [currSize, setCurrSize] = useState(product.sizes[0]);

    const screenWidth = useScreenWidth();

    const sizes = useMemo(() => {
        return product.sizes.map(size => <SizeOptionCard sizeTitle={size} sizeValue={size} currSize={currSize} key={size} onClick={() => setCurrSize(size)} />)
    }, [currSize, product.sizes]);

    return (
        <PageLayout>
            <FlexContainer padding={"0px 0px 0px 0px"} maxWidth={"80%"} justify={screenWidth < 1140 ? "center" : "space-between"} items={"flex-start"} gap={"30px"} margin={"0px 0px 30px 0px"}>
                <Slider {...settings} className={"w-full max-w-[400px] flex outline-none max-md-screen:mb-[30px]"}>
                    {
                        product.detailedImages.map(src => <img src={src} className={"w-full"} alt={"sneaker"} key={src} />)
                    }
                </Slider>
                
                <FlexContainer maxWidth={"450px"} direction={"column"} items={"flex-start"} gap={"30px"}>
                    <Title weight={"600"}>
                        {
                            product.longTitle
                        }
                    </Title>

                    <Text weight={"700"} size={"1.4em"}>
                        ${
                            product.price
                        }
                    </Text>

                    <Text size={"0.9em"} color={"#2c2c2c77"}>
                        {
                            product.description
                        }
                    </Text>

                    <FlexContainer maxWidth={"100%"} direction={"column"} items={screenWidth < 509 ? "center" : "flex-start"} justify={screenWidth < 509 ? "center" : "flex-start"}>
                        <Text weight={"600"} size={"1.1em"} margin={"0px 0px 5px 0px"} align={screenWidth < 509 ? "center" : "left"}>
                            Select size
                        </Text>

                        <FlexContainer gap={"7px"} justify={screenWidth < 509 ? "center" : "flex-start"}>
                            {
                                sizes
                            }
                        </FlexContainer>
                    </FlexContainer>

                    <FlexContainer gap={"10px"} wrap={screenWidth < 509 ? "wrap" : "no-wrap"} maxWidth={"100%"} justify={screenWidth < 509 ? "center" : "flex-start"}>
                        <ProductCounter 
                            count={count}
                            setCount={setCount}
                        />

                        <Button textColor={"#fff"} background={"#2c2c2c"} padding={"12px 9px"} width={"100%"} onClick={() => dispatch(addItemToCart({id, title: product.shortTitle, price: product.price, cover: product.cover, size: currSize, count}))}>
                            Add to cart
                        </Button>
                    </FlexContainer>
                </FlexContainer>
            </FlexContainer>
        </PageLayout>
    );
};

export default ProductDetailsPage;