import React from 'react'
import makerIcon from '../../assets/icons/maker.svg'
import celoIcon from '../../assets/icons/celo.svg'
import compoundIcon from '../../assets/icons/compound.png'
import eosIcon from '../../assets/icons/eos.png'

const Earning = () => {
  return (
    <section id="earning">
      <div className="container flex flex-col md:flex-row p-3 md:p-8">
        <div className="flex flex-col my-auto justify-center md:justify-start w-full md:w-1/2">
          <h1 className="font-bold text-center md:text-left text-3xl w-full md:w-2/3">
            Earn up to $171 worth of crypto
          </h1>
          <p className="text-center py-4 md:text-left w-full md:w-3/4">
            Discover how specific cryptocurrencies work — and get a bit of each
            crypto to try out for yourself.
          </p>
          <button className="mx-auto md:mx-0 w-32 p-2 rounded bg-primary text-white">
            Sart earning
          </button>
        </div>
        <div className="flex flex-col w-full md:w-1/2">
          <div className="flex justify-between items-center w-full p-2 md:p-4 my-2 border border-gray-300 md:border-0 rounded cursor-pointer transition-shadow duration-500 hover:shadow-md">
            <div className="flex items-center">
              <img src={makerIcon} alt="maker" className="h-10 w-10" />
              <span className="font-bold px-3">Maker</span>
              <span className="font-bold hidden md:inline">MKR</span>
            </div>
            <div>
              <span className="text-green-600 font-bold">Earn $6 MKR</span>
            </div>
          </div>

          <div className="flex justify-between items-center w-full p-2 md:p-4 my-2 border border-gray-300 md:border-0 rounded cursor-pointer transition-shadow duration-300 hover:shadow-md">
            <div className="flex items-center">
              <img src={celoIcon} alt="celo" className="h-10 w-10" />
              <span className="font-bold px-3">Celo</span>
              <span className="font-bold hidden md:inline">CGLD</span>
            </div>
            <div>
              <span className="text-green-600 font-bold">Earn $6 CGLD</span>
            </div>
          </div>

          <div className="flex justify-between items-center w-full p-2 md:p-4 my-2 border border-gray-300 md:border-0 rounded cursor-pointer transition-shadow duration-300 hover:shadow-md">
            <div className="flex items-center">
              <img src={compoundIcon} alt="compound" className="h-10 w-10" />
              <span className="font-bold px-3">Compound</span>
              <span className="font-bold hidden md:inline">COMP</span>
            </div>
            <div>
              <span className="text-green-600 font-bold">Earn $59 COMP</span>
            </div>
          </div>

          <div className="flex justify-between items-center w-full p-2 md:p-4 my-2 border border-gray-300 md:border-0 rounded cursor-pointer transition-shadow duration-300 hover:shadow-md">
            <div className="flex items-center">
              <img src={eosIcon} alt="eos" className="h-10 w-10" />
              <span className="font-bold px-3">EOS</span>
              <span className="font-bold hidden md:inline">EOS</span>
            </div>
            <div>
              <span className="text-green-600 font-bold">Earn $50 EOS</span>
            </div>
          </div>

          <div className="flex items-center cursor-pointer text-primary">
            <span className="ml-6 py-4">View more</span>
            <svg
              width="1em"
              height="1em"
              viewBox="0 0 16 16"
              className="bi bi-chevron-right"
              fill="currentColor"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z"
              />
            </svg>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Earning
