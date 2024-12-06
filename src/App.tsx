import React from 'react'

// Components
import Header from './components/Header'
import SearchInput from './components/SearchInput'

function App() {
  return (
    <main className='main justify-center lg:justify-start'>
      <Header />
        <div className='flex justify-between content py-10 px-10'>
          <SearchInput />
          </div>
      </main>
  )
}

export default App
