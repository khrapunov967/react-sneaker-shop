import React, { useState, useEffect, useMemo } from "react";
import { useParams } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addItemToCart } from "../store/userSlice";
import { useScreenWidth } from "../hooks/useScreenWidth";
import { useProduct } from "../hooks/useProduct";
import ProductCounter from "../components/ProductCounter";
import SizeOptionCard from "../components/SizeOptionCard";
import Button from "../components/styled/Button";
import FlexContainer from "../components/styled/FlexContainer";
import PageLayout from "../components/styled/PageLayout";
import Text from "../components/styled/Text";
import Title from "../components/styled/Title";
import FirestoreService from "../services/FirestoreService";
import Loader from "../components/Loader";
import Header from "../components/Header";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

// const settings = {
//     dots: true,
//     infinite: true,
//     speed: 500,
//     slidesToShow: 1,
//     slidesToScroll: 1,
// };

const ProductDetailsPage = () => {

    const { id } = useParams();
    const [count, setCount] = useState(1);
    const [currSize, setCurrSize] = useState(null);

    const { inCart } = useProduct(id);
    
    const dispatch = useDispatch();
    const [product, setProduct] = useState({
        description: "", 
        longTitle: "", 
        category: "", 
        price: "", 
        sizes: [], 
        detailedImages: [], 
        id: null, 
        shortTitle: "", 
        cover: ""
    });
    const [isProductLoading, setIsProductLoading] = useState(false);

    useEffect(() => {
        console.log(inCart);
        (async () => {
            setIsProductLoading(true);
            const response = await FirestoreService.getProductById(id);
            return response;
        })().then(({description, longTitle, category, price, sizes, detailedImages, id, shortTitle, cover}) => {
            setProduct({
                ...product,
                description,
                longTitle, 
                category, 
                price, 
                sizes, 
                detailedImages, 
                id,
                shortTitle,
                cover
            });

            setIsProductLoading(false);
        });
    }, []);

    const screenWidth = useScreenWidth();

    const sizes = useMemo(() => {
        return product.sizes.map(size => <SizeOptionCard sizeTitle={size} sizeValue={size} currSize={currSize} key={size} onClick={() => setCurrSize(size)} />)
    }, [currSize, product.sizes]);

    return isProductLoading ? <div className="w-full min-h-screen flex justify-center items-center"><Loader /></div> : (
        <PageLayout>
            <Header />
            <FlexContainer padding={"0px 0px 0px 0px"} maxWidth={"80%"} justify={screenWidth < 1140 ? "center" : "space-between"} items={"flex-start"} gap={"30px"} margin={"0px 0px 30px 0px"}>
                {/* <Slider {...settings} className={"w-full max-w-[400px] min-h-[400px] flex outline-none max-md-screen:mb-[30px]"}>
                    {
                        product.detailedImages.map(src => <img src={src} className={"w-full"} alt={"sneaker"} key={src} />)
                    }
                </Slider> */}
                <img src={product.detailedImages[0]} alt="wow" className="w-full max-w-[400px] flex outline-none" />
                
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

                        <Button disabled={inCart ? true : false} textColor={"#fff"} background={inCart ? "#8fbc8f" : "#2c2c2c"} padding={"12px 9px"} width={"100%"} onClick={() => currSize !== null ? dispatch(addItemToCart({id, title: product.shortTitle, price: product.price, cover: product.cover, size: currSize, count})) : alert("invalid size")}>
                            {inCart ? "Already in cart" : "Add to cart"}
                        </Button>
                    </FlexContainer>
                </FlexContainer>
            </FlexContainer>
        </PageLayout>
    );
};

export default ProductDetailsPage;