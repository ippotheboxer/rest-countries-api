import React from 'react';
import SearchInput from '../components/SearchInput';
import FilterRegion from '../components/FilterRegion';
import CountriesList from '../components/CountriesList';

const Home: React.FC = () => {
  return (
    <div className='flex flex-col py-12 px-16'>
      <div className='flex flex-col lg:flex-row justify-between relative'>
        <SearchInput />
        <FilterRegion />
      </div>
        <CountriesList/>
      </div>
  )
};

export default Home;