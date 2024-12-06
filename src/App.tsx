import React from 'react'

// Components
import Header from './components/Header'
import SearchInput from './components/SearchInput'
import FilterRegion from './components/FilterRegion'

function App() {
  return (
    <main className='main justify-center lg:justify-start'>
      <Header />
        <div className='flex flex-col lg:flex-row lg:justify-between content py-10 px-10'>
          <SearchInput />
          <FilterRegion />
          </div>
      </main>
  )
}

export default App
