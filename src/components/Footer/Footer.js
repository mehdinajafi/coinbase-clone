import React from 'react'

const Footer = () => {
  return (
    <footer>
      <div className="container flex flex-col md:flex-row justify-between my-10 md:my-32 p-8">
        <div className="flex flex-col mb-4">
          <h1 className="text-3xl font-bold text-primary">coinbase</h1>
          <select
            defaultValue="en"
            className="bg-transparent my-4 p-1 rounded border border-gray-400"
          >
            <option value="bn">বাঙালি</option>
            <option value="de">Deutsch</option>
            <option value="en">English</option>
            <option value="es">Español - España</option>
            <option value="es-LA">Español - América Latina</option>
            <option value="fr">Français - France</option>
            <option value="hi">हिन्दी</option>
            <option value="id">Bahasa Indonesia</option>
            <option value="it">Italiano</option>
            <option value="ko">한국어</option>
            <option value="nl">Nederlands</option>
            <option value="pl">Polski</option>
            <option value="pt">Português - Brasil</option>
            <option value="pt-PT">Português - Portugal</option>
            <option value="ru">Pусский</option>
            <option value="sw">Kiswahili</option>
            <option value="th">ไทย</option>
            <option value="tr">Türkçe</option>
          </select>
          <div className="text-gray-600">© 2020 Coinbase</div>
        </div>

        <div className="flex flex-col m-2">
          <h2 className="font-bold text-darkBlue-900 mb-4">Products</h2>
          <a
            title="Coinbase support and help desk"
            className="my-1 cursor-pointer text-gray-600 hover:text-blue-600 hover:underline"
          >
            Coinbase
          </a>
          <a
            title="Coinbase Commerce - Start accepting cryptocurrency payments"
            className="my-1 cursor-pointer text-gray-600 hover:text-blue-600 hover:underline"
          >
            Commerce
          </a>
          <a
            title="Coinbase Custody - Cryptocurrency custody for institutions"
            className="my-1 cursor-pointer text-gray-600 hover:text-blue-600 hover:underline"
          >
            Custody
          </a>
          <a
            title="Coinbase Earn - Earn crypto while learning about crypto"
            className="my-1 cursor-pointer text-gray-600 hover:text-blue-600 hover:underline"
          >
            Earn
          </a>
          <a
            title="Coinbase Pro - Advanced cryptocurrency trading"
            className="my-1 cursor-pointer text-gray-600 hover:text-blue-600 hover:underline"
          >
            Pro
          </a>
          <a
            title="USDC is a cryptocurrency with a stable price"
            className="my-1 cursor-pointer text-gray-600 hover:text-blue-600 hover:underline"
          >
            USD Coin
          </a>
          <a
            title="Coinbase Wallet - Store your cryptocurrency"
            className="my-1 cursor-pointer text-gray-600 hover:text-blue-600 hover:underline"
          >
            Wallet
          </a>
          <a
            title="Coinbase Ventures"
            className="my-1 cursor-pointer text-gray-600 hover:text-blue-600 hover:underline"
          >
            Ventures
          </a>
        </div>

        <div className="flex flex-col m-2">
          <h2 className="font-bold text-darkBlue-900 mb-4">Learn</h2>
          <a
            title="Browse assets"
            className="my-1 cursor-pointer text-gray-600 hover:text-blue-600 hover:underline"
          >
            Browse assets
          </a>
          <a
            title="What is Crypto?"
            className="my-1 cursor-pointer text-gray-600 hover:text-blue-600 hover:underline"
          >
            What is Crypto?
          </a>
          <a
            title="What is Bitcoin?"
            className="my-1 cursor-pointer text-gray-600 hover:text-blue-600 hover:underline"
          >
            What is Bitcoin?
          </a>
          <a
            title="What is Blockchain?"
            className="my-1 cursor-pointer text-gray-600 hover:text-blue-600 hover:underline"
          >
            What is Blockchain?
          </a>
          <a
            title="Learn how to buy Bitcoin"
            className="my-1 cursor-pointer text-gray-600 hover:text-blue-600 hover:underline"
          >
            Buy Bitcoin
          </a>
          <a
            title="Learn how to buy Bitcoin Cash"
            className="my-1 cursor-pointer text-gray-600 hover:text-blue-600 hover:underline"
          >
            Buy Bitcoin Cash
          </a>
          <a
            title="Learn how to buy Ethereum"
            className="my-1 cursor-pointer text-gray-600 hover:text-blue-600 hover:underline"
          >
            Buy Ethereum
          </a>
          <a
            title="Learn how to buy Litecoin"
            className="my-1 cursor-pointer text-gray-600 hover:text-blue-600 hover:underline"
          >
            Buy Litecoin
          </a>
          <a
            title="Learn how to buy XRP"
            className="my-1 cursor-pointer text-gray-600 hover:text-blue-600 hover:underline"
          >
            Buy XRP
          </a>
          <a
            title="Countries where Coinbase operates"
            className="my-1 cursor-pointer text-gray-600 hover:text-blue-600 hover:underline"
          >
            Supported countries
          </a>
          <a
            title="Check the operational status of Coinbase services"
            className="my-1 cursor-pointer text-gray-600 hover:text-blue-600 hover:underline"
          >
            Status
          </a>
          <a
            title="2019 Crypto Tax Guide"
            className="my-1 cursor-pointer text-gray-600 hover:text-blue-600 hover:underline"
          >
            Taxes
          </a>
        </div>

        <div className="flex flex-col m-2">
          <h2 className="font-bold text-darkBlue-900 mb-4">Company</h2>
          <a className="my-1 cursor-pointer text-gray-600 hover:text-blue-600 hover:underline">
            About
          </a>
          <a
            title="Earn money becoming an affiliate"
            className="my-1 cursor-pointer text-gray-600 hover:text-blue-600 hover:underline"
          >
            Affiliates
          </a>
          <a
            title="Work at Coinbase"
            className="my-1 cursor-pointer text-gray-600 hover:text-blue-600 hover:underline"
          >
            Careers
          </a>
          <a
            title="Become a Coinbase Partner"
            className="my-1 cursor-pointer text-gray-600 hover:text-blue-600 hover:underline"
          >
            Partners
          </a>
          <a
            title="In the news"
            className="my-1 cursor-pointer text-gray-600 hover:text-blue-600 hover:underline"
          >
            Press
          </a>
          <a
            title="Our privacy and legal policies"
            className="my-1 cursor-pointer text-gray-600 hover:text-blue-600 hover:underline"
          >
            Legal &amp; Privacy
          </a>
          <a
            title="Cookie Policy"
            className="my-1 cursor-pointer text-gray-600 hover:text-blue-600 hover:underline"
          >
            Cookie Policy
          </a>
          <a
            title="Coinbase support and help desk"
            className="my-1 cursor-pointer text-gray-600 hover:text-blue-600 hover:underline"
          >
            Support
          </a>
        </div>

        <div className="flex flex-col m-2">
          <h2 className="font-bold text-darkBlue-900 mb-4">Social</h2>
          <a
            title="The Coinbase Blog"
            className="my-1 cursor-pointer text-gray-600 hover:text-blue-600 hover:underline"
          >
            Blog
          </a>
          <a
            title="Coinbase Twitter account"
            className="my-1 cursor-pointer text-gray-600 hover:text-blue-600 hover:underline"
          >
            Twitter
          </a>
          <a
            title="Coinbase Facebook page"
            className="my-1 cursor-pointer text-gray-600 hover:text-blue-600 hover:underline"
          >
            Facebook
          </a>
        </div>
      </div>
    </footer>
  )
}

export default Footer
