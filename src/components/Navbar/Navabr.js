import React, { useState } from 'react'
import './Navbar.css'

const Navbar = () => {
  // This state to determine the display of the navbar on small devices
  const [navbarOpen, setNavbarOpen] = useState(false)
  return (
    <nav className="sticky top-0 z-10 flex flex-wrap items-center justify-between px-2 py-3 navbar-expand-lg bg-primary">
      <div className="container px-4 mx-auto flex flex-wrap items-center justify-between">
        <div className="w-full relative flex justify-between md:w-auto md:static md:block md:justify-start">
          <a
            className="leading-relaxed inline-block mr-4 py-2 whitespace-no-wrap text-white text-2xl font-bold"
            href="#coinbase"
          >
            coinbase
          </a>
          <button
            className="text-white cursor-pointer text-xl leading-none px-3 py-1 border border-solid border-transparent rounded bg-transparent block md:hidden outline-none focus:outline-none"
            type="button"
            onClick={() => setNavbarOpen((navbarOpen) => !navbarOpen)}
          >
            {navbarOpen ? (
              <svg
                viewBox="0 0 16 16"
                className="w-10 h-10 block"
                fill="currentColor"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z"
                />
              </svg>
            ) : (
              <svg
                viewBox="0 0 16 16"
                className="w-10 h-10 block"
                fill="currentColor"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  d="M2.5 11.5A.5.5 0 0 1 3 11h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4A.5.5 0 0 1 3 7h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4A.5.5 0 0 1 3 3h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z"
                />
              </svg>
            )}
          </button>
        </div>

        <div
          className={`relative md:flex md:flex-row flex-grow items-center ${
            navbarOpen ? 'top-0' : 'hidden'
          }`}
        >
          <ul className="flex flex-col list-none md:flex-row">
            <li>
              <a
                className="px-3 py-2 flex justify-center items-center font-bold text-white hover:opacity-75"
                href="#prices"
              >
                Prices
              </a>
            </li>
            <li>
              <a
                className="px-3 py-2 flex justify-center items-center font-bold text-white hover:opacity-75"
                href="#products"
              >
                Products
              </a>
            </li>
            <li>
              <a
                className="companyDropDownLink px-3 py-2 flex justify-center items-center text-white"
                href="#company"
              >
                <div className="flex items-center">
                  <span className="flex items-center font-bold hover:opacity-75">
                    Company
                    <svg
                      width="1em"
                      height="1em"
                      viewBox="0 0 16 16"
                      className="ml-1 hidden md:block"
                      fill="currentColor"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fillRule="evenodd"
                        d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z"
                      />
                    </svg>
                  </span>
                  {/* This is Drop down show when hover on Company this menue hide in mobile */}
                  <ul className="companyDropDownMenue list-none absolute top-hide md:top-3 w-32 rounded text-sm bg-white text-black border border-gray-200">
                    <li className="border-gray-400 border-b p-3 hover:text-primary">
                      About Us
                    </li>
                    <li className="border-gray-400 border-b p-3 hover:text-primary">
                      Blog
                    </li>
                    <li className="border-gray-400 border-b p-3 hover:text-primary">
                      Support
                    </li>
                    <li className="p-3 hover:text-primary">Careers</li>
                  </ul>
                </div>
              </a>
            </li>
            <li>
              <a
                className="px-3 py-2 flex justify-center items-center font-bold text-white hover:opacity-75"
                href="#earnCrypto"
              >
                Earn crypto
              </a>
            </li>
          </ul>
          <hr className="block my-3 md:hidden"></hr>
          <ul className="flex w-full md:w-auto flex-col md:flex-row list-none ml-auto">
            <li>
              <a
                href="#signin"
                className="px-3 py-2 flex justify-center items-center font-bold text-white hover:opacity-75"
              >
                Sign in
              </a>
            </li>
            <li>
              <a
                href="#getstarted"
                className="px-3 py-2 flex justify-center items-center font-bold text-white border rounded border-white hover:text-gray-900 hover:bg-white"
              >
                Get started
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
