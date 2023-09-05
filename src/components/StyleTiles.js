import React from 'react'
import styletiles from '../assets/styletiles.png'
import HiFiLanding from './HiFiLanding';

export default function StyleTiles() {
  return (
      <div className="w-full bg-[#005F70]">
        <div className="max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full">
        <h1 className="sm:text-center text-3xl sm:text-4xl font-medium text-[#F3F3F3] mt-12" style={{ paddingTop: "35px" }}>
            UI Style Tiles Guide
          </h1>
        <p className='sm:text-center text-[#F3F3F3] font-medium' style={{ letterSpacing: '1px', fontSize: '16px', marginTop: "6px" }}>Designed the style guide and interactive Hi-Fi prototype</p>
          <div className='text-[#F3F3F3] mt-8'>
            <h2 className="font-medium">Decisions :</h2>
          <ul className='list-disc text-1xl ' style={{ letterSpacing: '1px', fontSize:'16px' }}>
              <li>This style guide is based on the Apartment Finder's brand color.</li>
              <li>Made sure the style guide is consistent with the established brand identity.</li>
              <li>Font decisions were made in mind for desktop and mobile platform.</li>
              <li>Organizing and using the master styles on Figma to have consistency.</li>
              <li>Updated the design system to ensure color consistency throughout the desktop and mobile Hi-fi mockups within Figma.</li>
            </ul>
          </div>
          <br />
          <div className='pb-24'>
          <img src={styletiles} alt="style-tiles" width={1000}/>
          </div>
        </div>
        <HiFiLanding />
      </div>
  );
}

