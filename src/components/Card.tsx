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
        <img src={img} alt={flagAlt} className='rounded-tr-lg rounded-tl-lg countryFlag w-100 shadow'/>
        <div className='pt-8 pb-12 px-4'>
        <h2 className='text-lg font-bold pb-4'>{country}</h2>
        <p className='text-sm font-semibold'>
            Population: <span className='font-light'>{population}</span>
            </p>
        <p className='text-sm font-semibold'>
        Region: <span className='font-light'>{region}</span>
        </p>
        <p className='text-sm font-semibold'>
            Capital: <span className='font-light'>{capital}</span>
            </p>
        </div>
      </div>
    </Link>
    );
}

export default Card;