import React from "react";
import Button from "./styled/Button";

const ProductCounter = ({count, setCount}) => {

    return (
        <div className="flex border-[1px]">
            <Button padding={"5px 18px"} textSize={"1.6em"} background={"#2c2c2c33"} border={"none"} onClick={() => setCount(count => +count === 1 ? 1 : count - 1)}>
                -
            </Button>

            <div className="flex justify-center items-center px-[24px] text-xl w-[60px]">
                {count}
            </div>

            <Button padding={"5px 18px"} textSize={"1.6em"} background={"#2c2c2c33"} border={"none"} onClick={() => setCount(count => count + 1)}>
                +
            </Button>
        </div>
    );
};

export default ProductCounter;