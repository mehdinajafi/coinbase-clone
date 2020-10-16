import React from 'react'
import { ReactComponent as PlusAcountIcon } from '../../assets/icons/plusAcount.svg'
import { ReactComponent as BankIcon } from '../../assets/icons/bank.svg'
import { ReactComponent as HandIcon } from '../../assets/icons/hand.svg'

const Steps = () => {
  return (
    <section id="levels">
      <div className="container my-16">
        <div className="flex flex-col text-center my-16">
          <h1 className="font-bold text-4xl text-gray-900">
            Get started in a few minutes
          </h1>
          <p className="text-gray-600">
            Coinbase supports a variety of the most popular digital currencies.
          </p>
        </div>
        <div className="flex flex-col md:flex-row items-center justify-evenly">
          <div className="flex flex-col items-center my-6 md:my-0">
            <PlusAcountIcon />
            <h2 className="text-gray-900 text-xl font-bold my-4">
              Create an account
            </h2>
          </div>

          <div className="bg-gray-600 h-px flex-1 hidden md:block"></div>

          <div className="flex flex-col items-center my-6 md:my-0">
            <BankIcon />
            <h2 className="text-gray-900 text-xl font-bold my-4">
              Link your bank account
            </h2>
          </div>

          <div className="bg-gray-600 h-px flex-1 hidden md:block"></div>

          <div className="flex flex-col items-center mt-6 md:my-0">
            <HandIcon />
            <h2 className="text-gray-900 text-xl font-bold my-4">
              Start buying & selling
            </h2>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Steps
