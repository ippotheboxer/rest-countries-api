import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import CountryFull from "../components/CountryFull";
import { getCountryByName } from "../api/countries";
import { BiArrowBack } from "react-icons/bi";

function SpecificCountry() {
    const { countryName } = useParams<string>();
    const [country, setCountry] = useState([]);

    const backClick = () => {
        window.location="/";
    }

    useEffect(() => {
        try {
          (async () => {
          const {data} = await getCountryByName(countryName);
          setCountry(data);
          console.log(country);
           })(); 
          } catch (error) {
          console.log("Error getting countries");
      }
      }, []);

    return (
        <div className="flex justify-center items-center">
            <button onClick={backClick} className='flex flex-row items-center justify-center'><BiArrowBack /> Back</button>
            {country.map(country => (
                <CountryFull
                img={country.flags.png}
                flagAlt={country.flags.alt} 
                country={country.name.common} 
                region={country.region} 
                subRegion={country.subregion}
                population={(country.population).toLocaleString()} 
                capital={country.capital[0]}
                tld={country.tld}
                currency={Object.values(country.currencies)[0].name}
                languages={Object.values(country.languages)}
                borderCountries={country.borders}
                />
            ))}
        </div>
    ); 
}

export default SpecificCountry;
