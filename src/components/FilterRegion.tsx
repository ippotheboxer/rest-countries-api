import React, {useContext, useState} from 'react';
import { FilterContext } from '../context/FilterContext';
// Icons
import { RiArrowDropDownLine } from "react-icons/ri";
import { RiArrowDropRightLine } from "react-icons/ri";

const FilterRegion: React.FC = () => {
    const [open, setOpen] = useState<boolean>(false);

    const handleOpen = () => {
        setOpen(!open);
      };

    const filterContext = useContext(FilterContext);
    if (!filterContext) throw new Error("RegionFilter must be used within a FilterProvider");

    const { selectedRegion, setSelectedRegion } = filterContext;

    const handleRegionSelect = (region: string) => {
        setSelectedRegion(region); 
        setOpen(false);
      };

    return (
        <div className="flex flex-col h-fit justify-center items-start absolute top-20 lg:right-0 lg:top-0">
      {open ? (
        <>
          <button
            onClick={handleOpen}
            className="shadow rounded-sm filterWidth text-sm flex flex-row items-center justify-between bgElement py-3 px-6"
          >
            {selectedRegion || "Filter by Region"} <RiArrowDropDownLine className="ml-8 text-lg" />
          </button>
          <div className="filterWidth mt-2 bgElement py-3 px-6 z-10 shadow rounded-sm">
            <ul className="menu mt-1 flex flex-col text-sm">
              {["Africa", "Americas", "Asia", "Europe", "Oceania"].map((region) => (
                <li key={region} className="pb-1">
                  <button onClick={() => handleRegionSelect(region)}>{region}</button>
                </li>
              ))}
              <li className="pt-1">
                <button onClick={() => handleRegionSelect("")}>All Regions</button>
              </li>
            </ul>
          </div>
        </>
      ) : (
        <button
          onClick={handleOpen}
          className="shadow rounded-sm filterWidth text-sm flex flex-row items-center justify-between bgElement py-3 px-6"
        >
          {selectedRegion || "Filter by Region"} <RiArrowDropRightLine className="ml-8 text-lg" />
        </button>
      )}
    </div>
  );
};

export default FilterRegion;