import React from "react";

const Loader = () => {
    return (
        <div className="w-full flex justify-center">
            <div
                className="w-[30px] h-[30px] rounded-full border-[8px] border-black border-t-stone-500 animate-spin"
            />
        </div>
    );
};

export default Loader;