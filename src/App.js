import React from 'react'
import Header from './components/Header/Header'
import Earning from './components/Earning/Earning'
import Prices from './components/Prices/Prices'

function App() {
  return (
    <div className="w-screen">
      <Header />
      <Prices />
      <Earning />
    </div>
  )
}

export default App
