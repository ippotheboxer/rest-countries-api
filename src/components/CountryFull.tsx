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
        return data[0]?.name?.common || code;
      };
      
      const getBorderCountries = async () => {
        if (borders && borders.length > 0) {
          const countryNames = await Promise.all(borders.map(fetchCountryName));
          setBorderCountries(countryNames);
        } else {
          setBorderCountries([]);
        }
      };

      useEffect(() => {
        getBorderCountries();
      }, [borders]);

  return (
    <div className='mt-10 px-5 md:px-10 xl:px-20' {...props}>
         <button onClick={() => navigate("/")} className='mb-8 text-sm flex flex-row shadow bgElement rounded-md p-3 px-10 items-center justify-center'>
            <BiArrowBack className='mr-2 w-5 h-5'/> Back
        </button>
    <div className='flex flex-col lg:flex-row lg:justify-start justify-center lg:items-start pt-4 lg:pt-12'>
        <img src={img} alt={flagAlt} className='self-center lg:self-auto shadow w-[300px] h-[200px] sm:w-[400px] sm:h-[250px] md:w-[450px] md:h-[300px] lg:w-[500px] lg:h-[350px] xl:w-[560px] xl:h-[400px]'/>
        <div className='flex flex-col items-start justify-center md:pl-10'>
            <h2 className='text-xl md:text-2xl lg:text-4xl font-bold pb-6 mt-5 lg:mt-10'>{country}</h2>
            <div>
                <div className='flex flex-col lg:flex-row'> 
                <div>  
                    <p className='text-sm md:text-base font-semibold infoP'>
                        Native Name: <span className='font-light'>{nativeName}</span>
                    </p>
                    <p className='text-sm md:text-base font-semibold infoP'>
                        Population: <span className='font-light'>{population}</span>
                    </p>
                    <p className='text-sm md:text-base font-semibold infoP'>
                        Region: <span className='font-light'>{region}</span>
                    </p>
                    <p className='text-sm md:text-base font-semibold infoP'>
                         Sub Region: <span className='font-light'>{subRegion}</span>
                    </p>
                    {capital !== "N/A" && 
                    <p className='text-sm md:text-base font-semibold infoP'>
                        Capital: <span className='font-light'>{capital}</span>
                    </p>}
                </div>

                    <div className='mt-4 lg:mt-0 ml-0 lg:ml-32 xl:ml-40 2xl:ml-60'>
                        {tld !== "N/A" && 
                        <p className='text-sm md:text-base font-semibold infoP'>
                            Top Level Domain: <span className='font-light'>{tld}</span>
                        </p>}
                        <p className='text-sm md:text-base font-semibold infoP'>
                            Currency: <span className='font-light'>{currency}</span>
                        </p>
                    

                    <div className='flex flex-row'>
                        <p className='text-sm md:text-base font-semibold infoP pr-1'>Languages: </p> 
                        <ul className='text-sm md:text-base font-light flex flex-row'>
                        <li className='pr-1'>{Object.values(languages).join(", ")}</li>
                        </ul>
                    </div>
                    </div>
                    </div>  
            </div>
            

        {borderCountries.length > 0 &&
            <div className='flex flex-col items-start lg:flex-row lg:items-center lg:mt-24 pt-4'>
                <p className='text-sm md:text-base font-semibold lg:mr-2 pb-4 lg:pb-0'> Border Countries: </p>
                <div className='flex flex-row items-center w-full md:w-9/12 flex-wrap'>
                    {borderCountries.map((countryName, index) => (
                        <Link key={index} to={`/${countryName}`}>
                            <button className='font-light text-sm borderCountry py-1 px-4 mr-2'>
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