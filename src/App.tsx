import React from 'react';
import {BrowserRouter, Route, Routes} from "react-router"
// Components
import Header from './components/Header';
import Home from './pages/Home';
import SpecificCountry from './pages/SpecificCountry';
// Context
import { ThemeProvider } from './context/themeProvider';

const App:React.FC = () => {
  return (
    <ThemeProvider>
          <main className='main justify-center lg:justify-start'>
            <Header />
            <BrowserRouter>
                <Routes>
                  <Route path='/rest-countries-api' element={<Home />} />
                  <Route path='/rest-countries-api/home' element={<Home /> } />
                  <Route path='/rest-countries-api/:countryName' element={<SpecificCountry />} />
                </Routes>
              </BrowserRouter>
            </main>
        </ThemeProvider>
  );
}

export default App;
