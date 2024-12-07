import React, { useState, useEffect, useContext } from 'react';
import SearchInput from '../components/SearchInput';
import FilterRegion from '../components/FilterRegion';
import Card from '../components/Card';
import { getCountries } from '../api/countries';
import { ThemeContext } from '../context/ThemeContext';

const Home = () => {
  const { theme } = useContext(ThemeContext);
  const [countries, setCountries] = useState([]);

  useEffect(() => {
    try {
      (async () => {
      const {data} = await getCountries();
      setCountries(data);
       })(); 
      } catch (error) {
      console.log("Error getting countries");
  }
  }, []);
  return (
    <div className='flex flex-col py-10 px-10'>
            <div className='flex flex-col lg:flex-row justify-between'>
              <SearchInput />
              <FilterRegion />
            </div>
            
          <div className='grid grid-cols-1 pt-10 lg:pt-2 lg:grid-cols-4 2xl:grid-cols-6 gap-12 lg:gap-16 2xl:gap-20 px-5 lg:px-0'>
            {countries.map((country, index) => (
              <Card 
              key={index}
              id={index}
              img={country.flags.png} 
              country={country.name.common} 
              region={country.region} 
              population={country.population} 
              capital={country.capital[0]}/>
            ))}
          </div>
          </div>
  )
};

export default Home;