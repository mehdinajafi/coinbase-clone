import React from 'react'
import Header from './components/Header/Header'
import Earning from './components/Earning/Earning'
import Prices from './components/Prices/Prices'

function App() {
  return (
    <React.Fragment>
      <Header />
      <Prices />
      <Earning />
    </React.Fragment>
  )
}

export default App
