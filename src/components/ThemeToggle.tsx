import { IoMoonOutline } from "react-icons/io5";
import { HiOutlineSun } from "react-icons/hi2";
import { useTheme } from "../context/themeProvider";
import React from 'react';

const ThemeToggle = () => {
  const { toggleTheme, darkMode } = useTheme();
  return (
      <button
        onClick={toggleTheme}
        className="pr-6 text-sm flex justify-center items-center cursor-pointer">
          {darkMode ? (
            <>
              <IoMoonOutline className="mr-2"/> Dark Mode
            </>
          ) : (
            <>
              <HiOutlineSun className="mr-2"/> Light Mode
            </>
          )}
        
    </button>
  )
};

export default ThemeToggle;