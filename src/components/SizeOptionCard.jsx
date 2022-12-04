import React from "react";

const SizeOptionCard = ({sizeTitle, sizeValue}) => {
    return (
        <option className="py-5 px-10 border-[1px] bg-[#fff] text-[#2c2c2c] font-[500] cursor-pointer" value={sizeValue}>
            {sizeTitle}
        </option>
    );
};

export default SizeOptionCard;