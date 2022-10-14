import React from 'react'
import styletiles from '../assets/styletiles.png'
import HiFiLanding from './HiFiLanding';

export default function StyleTiles() {
  return (
    <div>
      <div className="w-full h-screen bg-[#0a192f]">
        <div className="max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full">
          <h1 className="text-3xl sm:text-4xl font-medium text-[#ccd6f6]">
            UI Style Tiles Guide
          </h1>
          <br />
          <img src={styletiles} alt="style-tiles" />
        </div>
        <HiFiLanding />
      </div>
    </div>
  );
}
