import React from "react";

export default function Home() {
  const buttonItems = [
    {
      name: "Events",
      link: "/events",
      caption: "Discover the grand celebrations!",
    },
    {
      name: "Points Table",
      link: "/points-table",
      caption: "Stay updated with the competition rankings.",
    },
    {
      name: "Results",
      link: "/results",
      caption: "Check out the winners and highlights.",
    },
    {
      name: "Sargam Prathibha",
      link: "/sargam-prathibha",
      caption: "Meet the brightest talents of Sargam 2025!",
    },
  ];

  return (
    <div className="container mx-auto py-12 px-6">
      {/* Title Section */}
      <div className="text-center">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-red-700 leading-tight">
          Welcome to{" "}
          <span className="text-yellow-500 drop-shadow-lg">Sargam 2025</span>
        </h1>
        <p className="mt-4 text-lg text-gray-800 font-medium">
          A celebration of talent, culture, and unity!
        </p>
      </div>

      {/* Buttons Section */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
        {buttonItems.map((item, index) => (
          <a
            key={index}
            href={item.link}
            className="block min-h-56 bg-gradient-to-r from-red-700 to-red-600 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
          >
            <div className="flex flex-col h-full justify-between">
              {/* Card Header */}
              <div className="p-6">
                <h2 className="text-2xl md:text-3xl font-bold text-white tracking-wider">
                  {item.name}
                </h2>
              </div>

              {/* Card Footer */}
              <div className="bg-yellow-500 text-gray-900 font-semibold text-right text-base md:text-lg p-4 rounded-b-lg">
                {item.caption}
              </div>
            </div>
          </a>
        ))}
      </div>
    </div>
  );
}
