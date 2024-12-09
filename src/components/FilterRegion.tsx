import React, {useState} from 'react';
import { RiArrowDropDownLine } from "react-icons/ri";
import { RiArrowDropRightLine } from "react-icons/ri";

const FilterRegion = () => {
    const [open, setOpen] = useState<boolean>(false);

    const handleOpen = () => {
        setOpen(!open);
      };

    return (
        <div className="flex flex-col h-fit justify-center items-start">
            {open ? ( <>
                <button onClick={handleOpen} 
                className='shadow rounded-sm filterWidth text-sm flex flex-row items-center justify-between bgElement py-3 px-6'>
                    Filter by Region <RiArrowDropDownLine className='ml-8 text-lg'/>
                    </button>
                <div className='filterWidth mt-2 bgElement py-3 px-6 z-10 shadow rounded-sm'>
                    <ul className="menu mt-1 flex flex-col text-sm">
                        <li className='pb-1'>
                            <button>Africa</button>
                        </li>
                        <li className='pb-1'>
                            <button>America</button>
                        </li>
                        <li className='pb-1'>
                            <button>Asia</button>
                        </li>
                        <li className='pb-1'>
                            <button>Europe</button>
                        </li>
                        <li className='pb-1'>
                            <button>Oceania</button>
                        </li>
                    </ul>
                </div>
                </>
                
            ) : <button onClick={handleOpen} 
                className='shadow rounded-sm filterWidth text-sm flex flex-row items-center justify-between bgElement py-3 px-6'>
                Filter by Region <RiArrowDropRightLine className='ml-8 text-lg'/>
                </button>}
        </div>
    );
}

export default FilterRegion;