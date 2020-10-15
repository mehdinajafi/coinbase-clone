import React from 'react'
import Navbar from './Navbar/Navabr'

const Header = () => {
  return (
    <header>
      <Navbar />

      <div className="w-full bg-primary">
        <div className="container text-center px-8 py-16">
          <span className="text-2xl md:text-5xl text-white font-bold">
            Buy and sell cryptocurrency
          </span>
          <h4 className="py-4 text-white">
            Coinbase is the easiest place to buy, sell, and manage your
            cryptocurrency portfolio.
          </h4>
          <form className="flex justify-center flex-col md:flex-row">
            <input
              className="my-3 md:my-0 p-4 w-full md:w-auto bg-gray-200 appearance-none border-2 border-gray-200 rounded mr-2 leading-tight focus:outline-none"
              id="inline-full-name"
              type="email"
              placeholder="Email address"
            />
            <button className="bg-green-500 hover:bg-green-600 text-white p-4 rounded">
              Get started
            </button>
          </form>
        </div>
      </div>
    </header>
  )
}

export default Header
