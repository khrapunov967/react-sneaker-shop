import React from "react";
import FlexContainer from "./styled/FlexContainer";
import RouterLink from "./styled/RouterLink";
import Title from "./styled/Title";
import Text from "./styled/Text";

const CategoryCard = ({title, productCount, coverLink}) => {
    return (
        <RouterLink to={"/products/:category"}>
            <div className="cursor-pointer relative">
                <div className="absolute top-0 left-0 w-full h-full bg-[#2c2c2c] bg-opacity-75 rounded-2xl" />
                <FlexContainer direction={"column"} maxWidth={"220px"}>
                    <img 
                        src={coverLink} 
                        width={"220px"} 
                        alt="category" 
                        className="rounded-2xl h-[360px]" 
                    />
                    
                    <div className="absolute top-[15%]">
                        <FlexContainer direction={"column"} >
                            <Title size={"1.2em"} color={"white"}>
                                {
                                    title
                                }
                            </Title>

                            <Text color={"white"} weight={"normal"} size={"0.9em"}>
                                {productCount} products
                            </Text>
                        </FlexContainer>
                    </div>
                </FlexContainer>
            </div>
        </RouterLink>
    );
};

export default CategoryCard;