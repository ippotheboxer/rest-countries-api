import React from 'react';
import { Link } from 'react-router';

interface cardData {
    flagAlt: string,
    img: string;
    country: string;
    population: string;
    region: string;
    capital: string;
}

const Card: React.FC<cardData> = ({country, img, flagAlt, population, region, capital, ...props}) => {
  return ( 
    <Link to={`${country}`}>
      <div {...props} className='flex flex-col bgElement rounded-lg shadow hover:scale-105 transition duration-400'>
        <img src={img} alt={flagAlt} className='rounded-tr-lg rounded-tl-lg w-full countryFlag shadow object-fit h-60 md:h-40 2xl:h-48'/>
        <div className='pt-6 pb-8 px-6'>
          <h2 className='text-lg font-bold pb-2 md:pb-4'>{country}</h2>
          <p className='text-sm font-semibold pb-1'>
            Population: <span className='font-light'>{population}</span>
          </p>
          <p className='text-sm font-semibold pb-1'>
            Region: <span className='font-light'>{region}</span>
          </p>
          <p className='text-sm font-semibold pb-1'>
            Capital: <span className='font-light'>{capital}</span>
          </p>
        </div>
      </div>
    </Link>
    );
}

export default Card;