import { IoMoonOutline } from "react-icons/io5";
import React from 'react';

const ThemeToggle = () => {
  return (
    <button 
    className="pr-6 text-sm flex justify-center items-center">
        <IoMoonOutline className="mr-2"/> 
        Dark Mode
    </button>
  )
};

export default ThemeToggle;