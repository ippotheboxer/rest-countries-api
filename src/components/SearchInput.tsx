import React, {useState} from 'react';
import { HiMagnifyingGlass } from "react-icons/hi2";

const SearchInput = () => {
    const [countryInput, setCountryInput] = useState<string>("");
    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault(); 
        setCountryInput("");
    }
  return (
    <div className='flex flex-row items-center bgElement shadow md:w-4/12 h-fit py-3 px-6 rounded-sm topMenu mb-10 w-full'>
        <HiMagnifyingGlass className='glassIcon'/>
        <form action="submit"
        onSubmit={handleSubmit}
        >
            <input 
            type="text" 
            placeholder='Search for a country...' 
            className='pl-2 outline-none formInput text-sm bgElement'
            onChange={e => setCountryInput(e.target.value)}
            value={countryInput} 
            />
        </form>
    </div>
  )
}

export default SearchInput;