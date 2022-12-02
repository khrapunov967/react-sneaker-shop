import React from "react";
import FlexContainer from "./styled/FlexContainer";
import ImageContainer from "./styled/ImageContainer";
import RouterLink from "./styled/RouterLink";
import Title from "./styled/Title";
import Text from "./styled/Text";

const CategoryCard = () => {
    return (
        <RouterLink to={"/products/:category"}>
            <div className="cursor-pointer relative">
                <div className="absolute top-0 left-0 w-full h-full bg-[#2c2c2c] bg-opacity-75 rounded-2xl" />
                <FlexContainer direction={"column"} maxWidth={"220px"}>
                    <ImageContainer 
                        src={"https://images.unsplash.com/photo-1579952363873-27f3bade9f55?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=435&q=80"}
                        size={"100%"}
                    />
                    
                    <div className="absolute top-[15%]">
                        <FlexContainer direction={"column"} >
                            <Title size={"1.2em"} color={"white"}>
                                Football collection
                            </Title>

                            <Text color={"white"} weight={"normal"} size={"0.9em"}>
                                120 products
                            </Text>
                        </FlexContainer>
                    </div>
                </FlexContainer>
            </div>
        </RouterLink>
    );
};

export default CategoryCard;