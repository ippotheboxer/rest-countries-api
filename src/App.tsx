import React from 'react';
import {BrowserRouter, Route, Routes} from "react-router"

// Components
import Header from './components/Header';
import { ThemeProvider } from './context/themeProvider';
import Home from './pages/Home';
import SpecificCountry from './pages/SpecificCountry';

function App() {
  return (
    <ThemeProvider>
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
        </ThemeProvider>
  );
}

export default App;
