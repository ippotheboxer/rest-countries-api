import React, {useContext, useState} from 'react';
import { FilterContext } from "../context/FilterContext";
// Icons
import { HiMagnifyingGlass } from "react-icons/hi2";

const SearchInput: React.FC = () => {
  const [input, setInput] = useState<string>("");
  const filterContext = useContext(FilterContext);

  if (!filterContext) throw new Error("Search must be used within a FilterProvider");

  const { searchTerm, setSearchTerm } = filterContext;

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (input.trim() !== searchTerm) {
      setSearchTerm(input.trim());
    }
  };

  return (
    <div className='absolute top-0 flex flex-row items-center bgElement shadow md:w-4/12 h-fit py-3 px-6 rounded-sm topMenu mb-10 w-full'>
        <HiMagnifyingGlass className='glassIcon'/>
        <form onSubmit={handleSearch}>
            <input 
            type="text" 
            placeholder='Search for a country...' 
            className='pl-2 outline-none formInput text-sm bgElement'
            onChange={(e) => setInput(e.target.value)}
            value={input}
            />
        </form>
    </div>
  )
}

export default SearchInput;