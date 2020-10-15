import React from 'react'
import Header from './components/Header/Header'
import Earning from './components/Earning/Earning'
import Prices from './components/Prices/Prices'
import Navbar from './components/Navbar/Navabr'

function App() {
  return (
    <React.Fragment>
      <Navbar />
      <Header />
      <Prices />
      <Earning />
    </React.Fragment>
  )
}

export default App
