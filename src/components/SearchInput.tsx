import React, { useContext } from 'react';
import { FilterContext } from "../context/FilterContext";
// Icons
import { HiMagnifyingGlass } from "react-icons/hi2";

const SearchInput: React.FC = () => {
  const filterContext = useContext(FilterContext);

  if (!filterContext) throw new Error("Search must be used within a FilterProvider");

  const { searchTerm, setSearchTerm } = filterContext;

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(e.target.value);
  };

  function handleSubmit(e: any) {
    e.preventDefault();
  }

  return (
    <div className='absolute top-0 flex flex-row items-center bgElement shadow md:w-4/12 h-fit py-3 px-6 rounded-sm topMenu mb-10 w-full'>
        <HiMagnifyingGlass className='glassIcon'/>
        <form onSubmit={handleSubmit}>
            <input 
            type="text" 
            placeholder='Search for a country...' 
            className='pl-2 outline-none formInput text-sm bgElement'
            onChange={handleInputChange}
            value={searchTerm}
            />
        </form>
    </div>
  )
}

export default SearchInput;