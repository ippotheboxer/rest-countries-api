import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import CountryFull from "../components/CountryFull";
import { getCountryByName } from "../api/countries";

function SpecificCountry() {
    const { countryName } = useParams<string>();
    const [country, setCountry] = useState([]);

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
        <div className="flex lg:justify-start justify-center items-center">
            {country.map(country => (
                <CountryFull
                img={country.flags.png}
                nativeName={Object.values(country.name.nativeName)[0].common}
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
