import React from 'react'
import coinbaseAppImage from '../../assets/images/coinbase-app.webp'
import { ReactComponent as BarIcon } from '../../assets/icons/bar.svg'
import { ReactComponent as CalenderIcon } from '../../assets/icons/calendar.svg'
import { ReactComponent as LockIcon } from '../../assets/icons/lock.svg'
import { ReactComponent as PhoneIcon } from '../../assets/icons/phone.svg'

const Portfolio = () => {
  return (
    <section id="portfolio" className="flex flex-col">
      <div className="container flex flex-col text-center p-4">
        <h1 className="text-4xl text-gray-900">
          Create your cryptocurrency portfolio today
        </h1>
        <p className="text-gray-700">
          Coinbase has a variety of features that make it the best place to
          start trading
        </p>
      </div>

      <div className="container flex flex-col-reverse lg:flex-row p-2 lg:p-4">
        <div className="flex flex-col w-full lg:w-2/5">
          <div className="flex flex-col lg:flex-row items-center">
            <div className="p-6 shadow-lg rounded-full">
              <BarIcon />
            </div>
            <div className="p-8 text-center lg:text-left">
              <h2 className="text-xl font-bold">Manage your portfolio</h2>
              <p className="text-gray-600">
                Buy and sell popular digital currencies, keep track of them in
                the one place.
              </p>
            </div>
          </div>

          <div className="flex flex-col lg:flex-row items-center">
            <div className="p-6 shadow-lg rounded-full">
              <CalenderIcon />
            </div>
            <div className="p-8 text-center lg:text-left">
              <h2 className="text-xl font-bold">Recurring buys</h2>
              <p className="text-gray-600">
                Invest in cryptocurrency slowly over time by scheduling buys
                daily, weekly, or monthly.
              </p>
            </div>
          </div>

          <div className="flex flex-col lg:flex-row items-center">
            <div className="p-6 shadow-lg rounded-full">
              <LockIcon />
            </div>
            <div className="p-8 text-center lg:text-left">
              <h2 className="text-xl font-bold">Vault protection</h2>
              <p className="text-gray-600">
                For added security, store your funds in a vault with time
                delayed withdrawals.
              </p>
            </div>
          </div>

          <div className="flex flex-col lg:flex-row items-center">
            <div className="p-6 shadow-lg rounded-full">
              <PhoneIcon />
            </div>
            <div className="p-8 text-center lg:text-left">
              <h2 className="text-xl font-bold">Mobile apps</h2>
              <p className="text-gray-600">
                Stay on top of the markets with the Coinbase app for Android or
                iOS.
              </p>
            </div>
          </div>
        </div>

        <div className="w-full lg:w-3/5 p-10 lg:p-0 flex items-center">
          <img src={coinbaseAppImage} alt="App" />
        </div>
      </div>
    </section>
  )
}

export default Portfolio
