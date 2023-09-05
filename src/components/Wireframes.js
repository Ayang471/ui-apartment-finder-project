import React from "react";
import LoFiHome from '../assets/LoFiHome.png'
import LoFiBlogs from '../assets/LoFIBlogs.png'
import LoFiContact from '../assets/LoFiContact.png'
import LoFiMore from '../assets/LoFIMore.png'
import StyleTiles from "./StyleTiles";
import { MobileLoFi } from '../MobileHiFi-images'

export default function Wireframes() {
  return (
    <div className="w-full bg-[#FFFAF2] pt-20">
      <div className="max-w-[1000px] mx-auto px-8 flex flex-col justify-center w-full h-full">
        <h1 className="sm:text-center text-3xl sm:text-4xl font-medium text-[#005F70] mb-10">
          Low Fidelity wireframes
        </h1>
        <p className='pt-0 pb-10 text-[#005F70] font-medium '>
        I sketched out different ideas before fine tuning them and creating the final wireframes. I really wanted to focus on creating a clean and modern design.
        </p>
      </div>
      <div className='container pb-10'>
        <div className='row'>
          <div className='col'>
            <img
              src={LoFiHome}
              alt="mobile-wireframe"
       
            />
          </div>
          <div className='col'>
            <img
              src={LoFiMore}
              alt="mobile-wireframe"
              
            />
          </div>
          <div className='col'>
            <img
              src={LoFiContact}
              alt="mobile-wireframe"
             
            />
          </div>
          <div className='col'>
            <img
              src={LoFiBlogs}
              alt="mobile-wireframe"
         
            />
          </div>
        </div>
      </div>
      <div className='container py-10'>
        <div className='row'>
          {MobileLoFi.map((item, index) => (
            <div className='col' key={index}>
            <img src={item.img} alt='lo-fi' />
            </div>
          ))}
        </div>
      </div>
      <StyleTiles />
    </div>

  );
}
