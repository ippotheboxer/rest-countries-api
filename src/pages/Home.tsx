import React, { useContext, useEffect, useState } from 'react';
import SearchInput from '../components/SearchInput';
import FilterRegion from '../components/FilterRegion';
import CountriesList from '../components/CountriesList';
import { FilterContext, FilterProvider } from "../context/FilterContext";
import { getCountries, getCountryByName, getCountriesByRegion, searchCountries } from '../api/countries';
import Wrapper from '../components/Wrapper';

interface Country {
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
  population: number;
  region: string;
  capital: [capital: string];
}

const HomeContent: React.FC = () => {
  const [countries, setCountries] = useState<Country[]>([]);
  const filterContext = useContext(FilterContext);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  if (!filterContext) throw new Error("HomeContent must be used within a FilterProvider");

  const { selectedRegion, searchTerm } = filterContext;

  useEffect(() => {
    const fetchCountries = async () => {
      setLoading(true);
      setError(null);

      try {
        let response;

        if (searchTerm) {
          response = await searchCountries(searchTerm.trim()).catch(() => {
            setError("No results found for that search.");
            return { data: [] };
          });
        } else if (selectedRegion) {
          response = await getCountriesByRegion(selectedRegion);
        } else {
          response = await getCountries();
        }
        setCountries(response.data);

      } catch (err) {
        setError("Failed to load countries. Please try again.");
        setCountries([]);

      } finally {
        setLoading(false);
      }
    };

    fetchCountries();
  }, [searchTerm, selectedRegion]);

  return (
      <div className='flex flex-col py-10'>
        <Wrapper>
          <div className='pb-8 flex flex-col lg:flex-row justify-between relative'>
            <SearchInput />
            <FilterRegion />
          </div>
          {loading && <p className='pt-36'>Loading...</p>}
          {error && <p className="text-red-500 pt-36">{error}</p>}
          <CountriesList countries={countries}/>
        </Wrapper>
      </div>
      )
    };

const Home: React.FC = () => (
  <FilterProvider>
    <HomeContent />
  </FilterProvider>
  );
    
  export default Home;