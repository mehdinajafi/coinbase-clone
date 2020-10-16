import React from 'react'
import Header from './components/Header/Header'
import Earning from './components/Earning/Earning'
import Prices from './components/Prices/Prices'
import Navbar from './components/Navbar/Navabr'
import Portfolio from './components/Portfolio/Portfolio'
import Introduction from './components/Introduction/Introduction'
import Counter from './components/Counter/Counter'
import Steps from './components/Steps/Steps'
import EarningFooter from './components/Earning-Footer/EarningFooter'

function App() {
  return (
    <React.Fragment>
      <Navbar />
      <Header />
      <Prices />
      <Earning />
      <Portfolio />
      <hr></hr>
      <Introduction />
      <Counter />
      <Steps />
      <EarningFooter />
    </React.Fragment>
  )
}

export default App
