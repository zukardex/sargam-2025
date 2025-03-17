import React from 'react'

export default function Home() {

  const buttonItems = [
    {
      name: 'Events',
      link: '/events',
      caption: 'View all the events'
    },
    {
      name: 'Points Table',
      link: '/points-table',
      caption: 'View the points table'
    },
    {
      name: 'Results',
      link: '/results',
      caption: 'View the results'
    },
    {
      name: 'Sargam Prathibha',
      link: '/sargam-prathibha',
      caption: 'View the Sargam Prathibha details'
    }
  ]

  return (
    <div className="container mx-auto py-8 mt-4">
      <div>
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-semibold text-gray-800">Welcome to the Dashboard</h1>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2 gap-6 mt-12">
        {buttonItems.map((item, index) => (
          <a 
            key={index} 
            href={item.link}
            className="block min-h-60 bg-violet-600 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300"
          >
            <div className="flex flex-col h-full justify-between">
              <div className="p-6">
                <h2 className="text-2xl md:text-3xl lg:text-4xl font-semibold text-white">{item.name}</h2>
              </div>
              <div className="bg-violet-500 text-white text-right text-base md:text-lg p-4 rounded-b-lg">
                {item.caption}
              </div>
            </div>
          </a>
        ))}
      </div>
    </div>
  )
}
