import React from "react";

const Header = ({children}) => {
    return (
        <header className="w-full p-5 border-2 px-[30px]">
            {children}
        </header>
    );
};

export default Header;