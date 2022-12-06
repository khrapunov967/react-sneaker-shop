import React from "react";

const SizeOptionCard = ({sizeTitle, sizeValue, currSize, ...props}) => {
    return (
        <option className={`py-5 transition-all min-w-[107.2px] flex justify-center border-[1px] font-[500] cursor-pointer ${+currSize === +sizeValue ? "border-[#2c2c2c] bg-[#2c2c2c] text-white" : "bg-[#fff] text-[#2c2c2c]"}`} value={sizeValue} {...props}>
            {
                sizeTitle
            }
        </option>
    );
};

export default SizeOptionCard;