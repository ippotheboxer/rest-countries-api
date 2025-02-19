import { IoMoonOutline } from "react-icons/io5";
import { HiOutlineSun } from "react-icons/hi2";
import { useTheme } from "../context/themeProvider";
import React from 'react';

const ThemeToggle: React.FC = () => {
  const { toggleTheme, darkMode } = useTheme();
  return (
      <button
        onClick={toggleTheme}
        className="text-sm lg:text-base font-semibold flex justify-center items-center cursor-pointer">
          {!darkMode ? (
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