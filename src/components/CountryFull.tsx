import React from 'react';
import { BiArrowBack } from "react-icons/bi";
import { useNavigate } from 'react-router-dom';

const CountryFull = (props) => {
    const navigate = useNavigate();
  return (
    <div className='pt-8 lg:px-10'>
         <button onClick={() => navigate("/")} className='mb-8 text-sm flex flex-row shadow bgElement rounded-sm py-2 px-8 items-center justify-center'>
            <BiArrowBack className='mr-2'/> Back
        </button>
    <div className='flex flex-col lg:flex-row lg:justify-start justify-center lg:items-start'>
        <div className='pb-4 lg:pr-8'>
            <img src={props.img} alt={props.flagAlt} className='w-full shadow'/>
        </div>
        <div className='grid lg:grid-cols-2 grid-cols-1 gap-4'>
            <div className='pr-20'>
            <h2 className='text-lg font-bold pb-4'>{props.country}</h2>    

            <p className='text-sm font-semibold infoP'>
                Native Name: <span className='font-light'>{props.nativeName}</span>
            </p>

            <p className='text-sm font-semibold infoP'>
                Population: <span className='font-light'>{props.population}</span>
            </p>

            <p className='text-sm font-semibold infoP'>
            Region: <span className='font-light'>{props.region}</span>
            </p>

            <p className='text-sm font-semibold infoP'>
                Sub Region: <span className='font-light'>{props.subRegion}</span>
            </p>

            <p className='text-sm font-semibold infoP'>
                Capital: <span className='font-light'>{props.capital}</span>
            </p>
            </div>

            <div className='lg:pt-10'>
            <p className='text-sm font-semibold infoP'>
                Top Level Domain: <span className='font-light'>{props.tld}</span>
            </p>

            <p className='text-sm font-semibold infoP'>
                Currency: <span className='font-light'>{props.currency}</span>
            </p>

            <div className='flex flex-row'>
                <p className='text-sm font-semibold infoP pr-1'>Languages: </p> 
                <ul className='text-sm font-light flex flex-row'>
                    {props.languages.map((language: string) => <li className='pr-1'>{language}</li>)}
                </ul>
            </div>
            
            </div>
        <div className='flex flex-col items-start lg:flex-row lg:items-center lg:mt-24 lg:col-span-2'>
        <p className='text-sm font-semibold lg:mr-2'> Border Countries: </p>
        <div className='flex flex-row justify-start items-center'>
                {props.borderCountries.map((country: string) => 
                <button className='font-light text-sm bgElement shadow py-1 px-4 mr-2'>
                    {country}
                </button>)}
            </div>
            </div>
        
        
        </div>
        </div>
        </div>
  )
}

export default CountryFull;