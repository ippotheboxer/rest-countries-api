import React, { useEffect, useState } from 'react';
import { BiArrowBack } from "react-icons/bi";
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';

type Languages = {
    [key: string]: string;
  };

interface fullCountryProps {
    flagAlt: string;
    img: string;
    country: string;
    population: string;
    region: string;
    capital: string;
    nativeName: string;
    subRegion: string;
    tld: string;
    currency: string;
    languages: Languages;
    borders: string[];
}

const CountryFull: React.FC<fullCountryProps> = ({img, flagAlt, country, nativeName, population, region, subRegion, capital, tld, currency, languages, borders, ...props}) => {
    const [borderCountries, setBorderCountries] = useState<string[]>([]);
    const navigate = useNavigate();

    const fetchCountryName = async (code: string): Promise<string> => {
        const response = await fetch(`https://restcountries.com/v3.1/alpha/${code}`);
        const data = await response.json();
        return data[0]?.name?.common || code;  // Get country name, or fallback to code if not found
      };
      
      const getBorderCountries = async () => {
        if (borders && borders.length > 0) {
          const countryNames = await Promise.all(borders.map(fetchCountryName));
          setBorderCountries(countryNames);
        } else {
          setBorderCountries([]); // No borders available, set as empty array
        }
      };

      useEffect(() => {
        getBorderCountries();
      }, [borders]);

  return (
    <div className='pt-8 lg:px-10' {...props}>
         <button onClick={() => navigate("/")} className='mb-8 text-sm flex flex-row shadow bgElement rounded-sm py-2 px-8 items-center justify-center'>
            <BiArrowBack className='mr-2'/> Back
        </button>
    <div className='flex flex-col lg:flex-row lg:justify-start justify-center lg:items-start'>
        <div className='pb-4 lg:pr-8'>
            <img src={img} alt={flagAlt} className='w-full shadow'/>
        </div>
        <div className='grid lg:grid-cols-2 grid-cols-1 gap-4'>
            <div className='pr-20'>
            <h2 className='text-xl font-bold pb-4'>{country}</h2>    

            <p className='text-sm font-semibold infoP'>
                Native Name: <span className='font-light'>{nativeName}</span>
            </p>

            <p className='text-sm font-semibold infoP'>
                Population: <span className='font-light'>{population}</span>
            </p>

            <p className='text-sm font-semibold infoP'>
            Region: <span className='font-light'>{region}</span>
            </p>

            <p className='text-sm font-semibold infoP'>
                Sub Region: <span className='font-light'>{subRegion}</span>
            </p>

            <p className='text-sm font-semibold infoP'>
                Capital: <span className='font-light'>{capital}</span>
            </p>
            </div>

            <div className='lg:pt-10'>
            <p className='text-sm font-semibold infoP'>
                Top Level Domain: <span className='font-light'>{tld}</span>
            </p>

            <p className='text-sm font-semibold infoP'>
                Currency: <span className='font-light'>{currency}</span>
            </p>

            <div className='flex flex-row'>
                <p className='text-sm font-semibold infoP pr-1'>Languages: </p> 
                <ul className='text-sm font-light flex flex-row'>
                <li className='pr-1'>{Object.values(languages).join(", ")}</li>
                </ul>
            </div>
            </div>

        {borderCountries.length > 0 &&
            <div className='flex flex-col items-start lg:flex-row lg:items-center lg:mt-24 lg:col-span-2 pb-8'>
                <p className='text-sm font-semibold lg:mr-2'> Border Countries: </p>
                <div className='flex flex-row justify-start items-center'>
                    {borderCountries.map((countryName, index) => (
                        <Link key={index} to={`/${countryName}`}>
                    <button className='font-light text-sm bgElement shadow py-1 px-4 mr-2'>
                        {countryName}
                    </button>
                    </Link>))}
                </div>
            </div>}
        </div>
        </div>
        </div>
  )
}

export default CountryFull;