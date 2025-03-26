import React from 'react';
import LoaderVideo from '../assets/loader.mp4';

export default function Loader() {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black z-50">
      <video
        autoPlay
        loop
        muted
        className="w-full h-full object-cover"
      >
        <source src={LoaderVideo} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    </div>
  );
}