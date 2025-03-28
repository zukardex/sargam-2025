import React from "react";
import banner_1 from "../assets/banner_1.png";

const Banner = () => {
  return (
    <div
      className="relative h-48 md:h-56 lg:h-64 flex items-center rounded-lg overflow-hidden"
      style={{
        backgroundImage: `url(${banner_1})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* Overlay for better text contrast */}
      <div className="absolute inset-0 bg-black bg-opacity-50"></div>

      <div className="relative z-10 p-6 md:p-10 text-white">
        <h1 className="text-4xl md:text-6xl font-extrabold tracking-wide">
          Sargam <span className="text-yellow-300">2025</span>
        </h1>
        <p className="text-lg md:text-xl italic opacity-90">
        Oru CET Kalolsavam
        </p>
        <p className="mt-2 text-sm md:text-base max-w-md opacity-80">
          Brace yourself for an unforgettable experience filled with music, dance, and creativity. Join us in celebrating the spirit of art and culture at Sargam 2025!
        </p>
      </div>
    </div>
  );
};

export default Banner;
