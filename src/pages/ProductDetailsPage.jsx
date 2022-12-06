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
import { addItem } from "../store/cartSlice";

const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
};

const ProductDetailsPage = () => {

    const {id} = useParams();

    const product = useSelector(state => state.products.products.find(item => item.id == id));
    const dispatch = useDispatch();

    const [count, setCount] = useState(1);

    return (
        <PageLayout>
            <FlexContainer padding={"0px 0px 0px 60px"} maxWidth={"80%"} justify={"space-between"} items={"flex-start"} margin={"0px 0px 30px 0px"}>
                <Slider {...settings} className={"w-[400px] flex outline-none"}>
                    {
                        product.detailedImages.map(src => <ImageContainer src={src} alt={"sneaker photo"} size={"400px"} key={src} />)
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

                    <FlexContainer>
                        <Text weight={"600"} size={"1.1em"} margin={"0px 0px 5px 0px"}>
                            Select size
                        </Text>

                        <FlexContainer gap={"7px"}>
                            {
                                product.sizes.map(size => <SizeOptionCard sizeTitle={size} sizeValue={size} key={size} />)
                            }
                        </FlexContainer>
                    </FlexContainer>

                    <FlexContainer gap={"10px"} wrap={"no-wrap"} maxWidth={"100%"}>
                        <ProductCounter 
                            count={count}
                            setCount={setCount}
                        />

                        <Button textColor={"#fff"} background={"#2c2c2c"} padding={"12px 9px"} width={"100%"} onClick={() => dispatch(addItem({id, title: product.shortTitle, price: product.price, cover: product.cover, size: 4.5, count}))}>
                            Add to cart
                        </Button>
                    </FlexContainer>
                </FlexContainer>
            </FlexContainer>
        </PageLayout>
    );
};

export default ProductDetailsPage;