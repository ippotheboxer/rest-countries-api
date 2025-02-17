import React from 'react';
import Card from '../components/Card';

interface Country {
  flags: {
    png: string;
    svg: string;
    alt?: string; 
  };
  name: {
    common: string;
    official: string;
    nativeName?: {
      [languageCode: string]: {
        official: string;
        common: string;
      };
    };
  };
  population: number;
  region: string;
  capital?: string[]; 
}

interface CountriesListProps {
  countries: Country[];
}

const CountriesList: React.FC<CountriesListProps> = ({ countries }) => {
  return (
    <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 pt-40 lg:pt-20 gap-8 md:gap-12 lg:gap-10 2xl:gap-20 sm:px-20 md:px-0'>
            {countries.map((country, index) => (
              <Card 
              key={index}
              flagAlt={country.flags.alt || "Country flag"} 
              img={country.flags.png} 
              country={country.name.common} 
              region={country.region} 
              population={(country.population).toLocaleString()} 
              capital={country.capital?.[0] || "N/A"}/>
            ))}
    </div>
  )
}

export default CountriesList;