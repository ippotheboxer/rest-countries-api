import React from "react";
import ThemeToggle from "./ThemeToggle";

const Header: React.FC = () => {
    return (
        <div className="px-10 md:px-20 header flex items-center justify-between p-6 shadow">
            <span className="text-xl lg:text-2xl font-extrabold">Where in the world?</span>
            <ThemeToggle />
        </div>
    )
}

export default Header;