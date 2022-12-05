import React from "react";
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

const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
};

const ProductDetailsPage = () => {
    return (
        <PageLayout>
            <FlexContainer padding={"0px 0px 0px 60px"} maxWidth={"80%"} justify={"space-between"} items={"flex-start"} margin={"0px 0px 30px 0px"}>
                <Slider {...settings} className={"w-[400px] flex outline-none"}>
                    <ImageContainer 
                        src={"https://sneakerhead.ru/upload/resize_cache/iblock/8a8/582_874_1/8a8e88778f86ddbef1c12ec2b1594772.jpg"}
                        alt={"Sneaker photo"}
                        size={"400px"}
                    />

                    <ImageContainer 
                        src={"https://sneakerhead.ru/upload/resize_cache/iblock/363/582_874_1/3634e88ed10e6ead0fb6275d5d952913.jpg"}
                        alt={"Sneaker photo"}
                        size={"400px"}
                    />

                    <ImageContainer 
                        src={"https://sneakerhead.ru/upload/resize_cache/iblock/747/582_874_1/747a78e18a29e105f91fe7980cc27dcd.jpg"}
                        alt={"Sneaker photo"}
                        size={"400px"}
                    />
                </Slider>
                
                <FlexContainer maxWidth={"450px"} direction={"column"} items={"flex-start"} gap={"30px"}>
                    <Title weight={"600"}>
                        Nike Falcon Shoes for men - 2021 edition
                    </Title>

                    <Text weight={"700"} size={"1.4em"}>
                        $120.50
                    </Text>

                    <Text size={"0.9em"} color={"#2c2c2c77"}>
                        They agree with reality to high degree of accuracy as tested
                        in experiment after experiment.
                    </Text>

                    <FlexContainer>
                        <Text weight={"600"} size={"1.1em"} margin={"0px 0px 5px 0px"}>
                            Select size
                        </Text>

                        <FlexContainer gap={"7px"}>
                            <SizeOptionCard sizeTitle={"3.5"} sizeValue={"3.5"} />
                            <SizeOptionCard sizeTitle={"3.5"} sizeValue={"3.5"} />
                            <SizeOptionCard sizeTitle={"3.5"} sizeValue={"3.5"} />
                            <SizeOptionCard sizeTitle={"3.5"} sizeValue={"3.5"} />
                        </FlexContainer>
                    </FlexContainer>

                    <FlexContainer gap={"10px"} wrap={"no-wrap"} maxWidth={"100%"}>
                        <ProductCounter />

                        <Button textColor={"#fff"} background={"#2c2c2c"} padding={"12px 9px"} width={"100%"} onClick={() => alert("Added")}>
                            Add to cart
                        </Button>
                    </FlexContainer>
                </FlexContainer>
            </FlexContainer>
        </PageLayout>
    );
};

export default ProductDetailsPage;