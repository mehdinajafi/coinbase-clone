import React from 'react'
import earnImg from '../../assets/images/earn.webp'

const EarningFooter = () => {
  return (
    <section id="earning-footer">
      <div className="flex w-full justify-between bg-darkBlue-900 md:bg-indigo-100">
        <div className="flex flex-col justify-center items-center p-4">
          <div className="w-1/2 text-center md:text-left text-white md:text-gray-900">
            <h1 className="font-bold md:text-left text-3xl">
              Earn up to $171 worth of crypto
            </h1>
            <p className="py-4 md:text-left">
              Discover how specific cryptocurrencies work — and get a bit of
              each crypto to try out for yourself.
            </p>
            <button className="w-32 p-2 rounded bg-primary hover:shadow-outline text-white">
              Sart earning
            </button>
          </div>
        </div>

        <div className="hidden md:block">
          <img src={earnImg} alt="earn" />
        </div>
      </div>
    </section>
  )
}

export default EarningFooter
