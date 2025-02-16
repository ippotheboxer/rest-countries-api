import React, {useState, useEffect} from 'react';
import Card from '../components/Card';
import { getCountries } from '../api/countries';

interface countryProp {
  flags: {
      png: string;
      svg: string;
      alt: string;
  }
  name: {
      common: string;
      official: string;
      nativeName: {
          languageCode: {
              official: string;
              common: string;
          }
      }
  }
  population: number;
  region: string;
  capital: [capital: string];
}

const CountriesList: React.FC = () => {
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
    <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 pt-40 lg:pt-20 gap-8 md:gap-12 lg:gap-10 2xl:gap-20 sm:px-20 md:px-0'>
            {countries.map((country: countryProp, index) => (
              <Card 
              key={index}
              flagAlt={country.flags.alt} 
              img={country.flags.png} 
              country={country.name.common} 
              region={country.region} 
              population={(country.population).toLocaleString()} 
              capital={country.capital[0]}/>
            ))}
    </div>
  )
}

export default CountriesList;