import React from 'react';
import { Link } from 'react-router';

interface cardData {
    id: number,
    flagAlt: string,
    img: string;
    country: string;
    population: string;
    region: string;
    capital: string;

}

const Card = (props:cardData) => {
  return ( 
    <Link to={`${props.country}`}>
  <div className='flex flex-col bgElement rounded-lg shadow hover:scale-105 transition duration-400' id={props.id}>
    <img src={props.img} alt={props.flagAlt} className='rounded-tr-lg rounded-tl-lg countryFlag w-100 shadow'/>
    <div className='pt-8 pb-12 px-4'>
    <h2 className='text-lg font-bold pb-4'>{props.country}</h2>
    <p className='text-sm font-semibold'>
        Population: <span className='font-light'>{props.population}</span>
        </p>
    <p className='text-sm font-semibold'>
    Region: <span className='font-light'>{props.region}</span>
    </p>
    <p className='text-sm font-semibold'>
        Capital: <span className='font-light'>{props.capital}</span>
        </p>
    </div>
    </div>
    </Link>
    );
}

export default Card;