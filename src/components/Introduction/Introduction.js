import React from 'react'
import { ReactComponent as SafeIcon } from '../../assets/icons/safe.svg'
import { ReactComponent as LetterIcon } from '../../assets/icons/letter.svg'
import { ReactComponent as SheildIcon } from '../../assets/icons/sheild.svg'

const Introduction = () => {
  return (
    <section id="introduction">
      <div className="container my-20 p-4">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-gray-900">
            The most trusted cryptocurrency platform
          </h1>
          <p className="my-3 text-gray-600">
            Here are a few reasons why you should choose Coinbase
          </p>
        </div>
        <div className="flex flex-col lg:flex-row items-center justify-center mt-12">
          <div className="flex flex-col items-center w-full lg:w-1/3 p-4">
            <SafeIcon />
            <h2 className="my-4 text-xl font-bold text-gray-800">
              Secure storage
            </h2>
            <p className="my-2 text-center text-gray-600">
              We store the vast majority of the digital assets in secure offline
              storage.
            </p>
            <a href="#secureStorage" className="my-4 text-center text-primary">
              Learn how Coinbase keeps your funds safe and secure
            </a>
          </div>

          <div className="flex flex-col items-center w-full lg:w-1/3 p-4 mx-4">
            <LetterIcon />
            <h2 className="my-4 text-xl font-bold text-gray-800">
              Protected by insurance
            </h2>
            <p className="my-2 text-center text-gray-600">
              Cryptocurrency stored on our servers is covered by our insurance
              policy.
            </p>
            <a
              href="#protectedByInsurance"
              className="my-4 text-center text-primary"
            >
              Learn how your crypto is covered by our insurance policy
            </a>
          </div>

          <div className="flex flex-col items-center w-full lg:w-1/3 p-4">
            <SheildIcon />
            <h2 className="my-4 text-xl font-bold text-gray-800">
              Industry best practices
            </h2>
            <p className="my-2 text-center text-gray-600">
              Coinbase supports a variety of the most popular digital
              currencies.
            </p>
            <a
              href="#industryBestPractices"
              className="my-4 text-center text-primary"
            >
              Learn how we implement industry best practices for account
              security
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Introduction
