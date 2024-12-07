import React from 'react';

interface cardData {
    id: number,
    img: string;
    country: string;
    population: string;
    region: string;
    capital: string;

}

const Card = (props:cardData) => {
  return ( <div className='flex flex-col bg-white rounded-lg lightShadow' id={props.id}>
    <img src={props.img} alt={`${props.country} flag`} className='rounded-tr-lg rounded-tl-lg countryFlag w-100 lightShadow'/>
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
    );
}

export default Card;