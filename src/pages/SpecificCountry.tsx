import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import CountryFull from "../components/CountryFull";
import { getCountryByName } from "../api/countries";
import Loading from "../components/Loading";

type Languages = {
    [key: string]: string;
  };

interface countryProp {
    flags: {
        png: string;
        svg: string;
        alt: string;
    }
    name: {
        common: string;
        official: string;
        nativeName: {
            languageCode: {
                official: string;
                common: string;
            }
        }
    }
    currencies: {
        currencyCode: {
            name: string;
            symbol: string;
        }
    }
    flag: string;
    population: number;
    region: string;
    subregion: string;
    capital: [capital: string];
    languages: Languages;
    tld: [code: string];
    borders: []
}

const SpecificCountry: React.FC = () => {
    const { countryName } = useParams<string>();
    const [country, setCountry] = useState([]);
    const [isLoading, setIsLoading] = useState<boolean>(true);

    const safeCountryName = countryName ?? '';

    useEffect(() => {
        try { (
            async () => {
                setIsLoading(true);
                const {data} = await getCountryByName(safeCountryName);
                setCountry(data);
                setIsLoading(false);
           })(); 
          } catch (error) {
          console.log("Error getting countries");
      }
      }, [safeCountryName]);

    return (
        <div className="flex lg:justify-start justify-center items-center">
            {isLoading && <Loading />}
            {country.map((country: countryProp, index) => (
                <CountryFull
                key={index}
                img={country.flags.svg}
                nativeName={country.name.nativeName ? Object.values(country.name.nativeName)[0]?.common: "N/A"}
                flagAlt={country.flags.alt} 
                country={country.name.common} 
                region={country.region} 
                subRegion={country.subregion}
                population={(country.population).toLocaleString()} 
                capital={country.capital?.[0] || "No capital"}
                tld={country.tld?.[0] || "None"}
                currency={country.currencies ? Object.values(country.currencies)[0]?.name : "No official currency"}
                languages={country.languages ? Object.values(country.languages).join(", ") : "No official language"}
                borders={country.borders}
                />
            ))}
        </div>
    ); 
}

export default SpecificCountry;
