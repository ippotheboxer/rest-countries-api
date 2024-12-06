import React, {useState} from 'react';
import { HiMagnifyingGlass } from "react-icons/hi2";

const SearchInput = () => {
    const [countryInput, setCountryInput] = useState<string>("");
    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault(); 
        setCountryInput("");
    }
  return (
    <div className='flex flex-row items-center bg-white w-fit py-3 px-6 rounded-sm'>
        <HiMagnifyingGlass className='glassIcon'/>
        <form action="submit"
        onSubmit={handleSubmit}
        >
            <input 
            type="text" 
            placeholder='Search for a country...' 
            className='pl-4 outline-none formInput text-sm'
            onChange={e => setCountryInput(e.target.value)}
            value={countryInput} 
            />
        </form>
    </div>
  )
}

export default SearchInput;