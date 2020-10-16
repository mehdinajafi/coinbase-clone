import React from 'react'

const Counter = () => {
  return (
    <section id="counter">
      <div className="flex flex-col md:flex-row justify-evenly items-center py-12 w-full bg-primary">
        <div className="flex flex-col items-center my-4 md:my-0">
          <h1 className="font-bold text-6xl text-white">$150B+</h1>
          <span className="text-gray-400">Cryptocurrency exchanged</span>
        </div>

        <div className="flex flex-col items-center my-4 md:my-0">
          <h1 className="font-bold text-6xl text-white">102</h1>
          <span className="text-gray-400">Countries supported</span>
        </div>

        <div className="flex flex-col items-center my-4 md:my-0">
          <h1 className="font-bold text-6xl text-white">30M+</h1>
          <span className="text-gray-400">Customers served</span>
        </div>
      </div>
    </section>
  )
}

export default Counter
