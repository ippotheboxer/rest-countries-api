import React from 'react';
import { BiArrowBack } from "react-icons/bi";

const CountryFull = (props) => {
    const backClick = () => {
        window.location="/";
    }
  return (
    <div>
        <button onClick={backClick} className='flex flex-row items-center justify-center'><BiArrowBack /> Back</button>
    <div className='grid grid-rows lg:grid-cols-2'>
        <div>
            <img src={props.img} alt={`${props.flagAlt}`} />
        </div>
        <div>
            <h2 className='text-lg font-bold pb-4'>{props.country}</h2>
        <p className='text-sm font-semibold'>
            Population: <span className='font-light'>{props.population}</span>
        </p>

        <p className='text-sm font-semibold'>
        Region: <span className='font-light'>{props.region}</span>
        </p>

        <p className='text-sm font-semibold'>
            Sub Region: <span className='font-light'>{props.subRegion}</span>
        </p>

        <p className='text-sm font-semibold'>
            Capital: <span className='font-light'>{props.capital}</span>
        </p>

        <p className='text-sm font-semibold'>
            Top Level Domain: <span className='font-light'>{props.tld}</span>
        </p>

        <p className='text-sm font-semibold'>
            Currency: <span className='font-light'>{props.currency}</span>
        </p>

        <p className='text-sm font-semibold'>
            Languages: <span className='font-light'>{props.languages}</span>
        </p>

        <p className='text-sm font-semibold'>
            Border Countries: <span className='font-light'>{props.borderCountries}</span>
        </p></div>

        </div>
    </div>
  )
}

export default CountryFull;