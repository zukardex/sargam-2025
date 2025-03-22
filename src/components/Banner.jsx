import React from "react";
import banner_1 from "../assets/banner_1.png";

const Banner = () => {
  return (
    <div
      className="h-40 bg-violet-600 flex flex-wrap p-5 rounded-lg"
      style={{
        backgroundImage: `url(${banner_1})`,
        // backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="flex flex-col gap-3">
        <h1 className="font-bold text-white text-5xl">Sargam 2025</h1>
        <p className="text-white text-1xl">is here</p>
      </div>
    </div>
  );
};

export default Banner;
