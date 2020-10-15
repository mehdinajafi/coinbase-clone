import React, { useEffect, useState } from 'react'

const Prices = () => {
  const [coins, setCoins] = useState([])

  useEffect(() => {
    fetch(
      'https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false'
    )
      .then((res) => res.json())
      .then((data) =>
        setCoins(
          // On this section we only need the price of these coins
          data.filter(
            (coin) =>
              coin.id === 'bitcoin' ||
              coin.id === 'ethereum' ||
              coin.id === 'bitcoin-cash' ||
              coin.id === 'litecoin'
          )
        )
      )
  }, [])

  // Show price with thousands separators
  const thousands_separators = (num) => {
    var num_parts = num.toString().split('.')
    num_parts[0] = num_parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, ',')
    return num_parts.join('.')
  }

  return (
    <section className="relative">
      <div className="w-full h-40 absolute top-0 -z-1 bg-primary"></div>
      <div className="container">
        <table className="mx-auto w-full text-sm bg-gray-100 border border-gray-300">
          <thead className="hidden md:table-header-group">
            <tr className="border-b text-gray-500 border-gray-300">
              <th className="px-2 py-2 text-left">#</th>
              <th className="px-2 py-2 text-left">Name</th>
              <th className="px-2 py-2 text-left">Price</th>
              <th className="px-2 py-2 text-left">Change</th>
              <th className="px-2 py-2 text-left">Chart</th>
              <th className="px-2 py-2 text-left">Trade</th>
            </tr>
          </thead>
          <tbody>
            {/* Map coins and gives us four tr */}
            {coins.map((coin, index) => {
              return (
                <tr
                  key={coin.id}
                  className="border-b border-gray-300 text-gray-900 hover:bg-gray-200"
                >
                  <td className="px-2 py-2 hidden md:table-cell text-gray-500">
                    {index + 1}
                  </td>
                  <td className="px-2 py-2 flex items-center w-auto md:w-9/12">
                    <img
                      src={coin.image}
                      alt={coin.name}
                      className="h-10 w-10"
                    />
                    <div className="flex flex-col md:flex-row">
                      <h4 className="pl-3">{coin.name}</h4>
                      <h4 className="uppercase pl-3 text-gray-500">
                        {coin.symbol}
                      </h4>
                    </div>
                  </td>
                  <td className="px-2 py-2">
                    ${thousands_separators(coin.current_price)}
                  </td>
                  <td className="px-2 py-2">
                    <h4
                      // If the price has decreased, show it in red, otherwise show it in green
                      className={`${
                        coin.price_change_percentage_24h
                          .toString()
                          .includes('-')
                          ? 'text-red-600'
                          : 'text-green-600'
                      }`}
                    >
                      {coin.price_change_percentage_24h.toFixed(2)}%
                    </h4>
                  </td>
                  <td className="px-2 py-2 hidden md:table-cell">Chart</td>
                  <td className="px-2 py-2 hidden md:table-cell">
                    <button className="bg-green-500 hover:bg-green-600 text-white p-3 rounded">
                      Buy
                    </button>
                  </td>
                </tr>
              )
            })}
          </tbody>
        </table>
      </div>
    </section>
  )
}

export default Prices
