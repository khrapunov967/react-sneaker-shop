import React from "react";

const Header = ({children}) => {
    return (
        <header className="w-full flex justify-center p-5 border-b-2 px-[30px]">
            {children}
        </header>
    );
};

export default Header;