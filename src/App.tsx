import React from 'react';
import {BrowserRouter, Route, Routes} from "react-router"
// Components
import Header from './components/Header';
import Home from './pages/Home';
import SpecificCountry from './pages/SpecificCountry';
// Context
import { ThemeProvider } from './context/themeProvider';
import { FilterProvider } from './context/FilterContext';

const App:React.FC = () => {
  return (
    <ThemeProvider>
      <FilterProvider>
          <main className='main justify-center lg:justify-start'>
            <Header />
            <BrowserRouter>
                <Routes>
                  <Route path='/' element={<Home />} />
                  <Route path='/home' element={<Home /> } />
                  <Route path='/:countryName' element={<SpecificCountry />} />
                </Routes>
              </BrowserRouter>
            </main>
            </FilterProvider>
        </ThemeProvider>
  );
}

export default App;
