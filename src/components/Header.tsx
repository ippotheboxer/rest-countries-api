import React from "react";
import { IoMoonOutline } from "react-icons/io5";

export default function Header() {
    return (
        <div className="header flex items-center justify-between p-4">
            <span className="pl-6 text-xl font-bold">Where in the world?</span>
            <button className="pr-6 text-sm flex justify-center items-center"><IoMoonOutline className="mr-2"/> Dark Mode</button>
        </div>
    )
}