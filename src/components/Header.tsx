import React from "react";
import ThemeToggle from "./ThemeToggle";

export default function Header() {
    return (
        <div className="header flex items-center justify-between p-4 shadow">
            <span className="pl-6 text-xl font-bold">Where in the world?</span>
            <ThemeToggle />
        </div>
    )
}