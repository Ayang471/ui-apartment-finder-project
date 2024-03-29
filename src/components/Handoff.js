import React from 'react'
import webhandoff from '../assets/handoffweb.png'
import mobilehandoff from '../assets/mobilehandoff.png'

function Handoff() {
  return (
    <div className="w-full bg-[#FFFAF2] pt-20">
        <div className="max-w-[1000px] mx-auto px-8 flex flex-col justify-center w-full h-full">
          <h1 className="sm:text-center text-3xl sm:text-4xl font-medium text-[#005F70] mb-8">
            Developer Handoff
          </h1>
          <p className='pb-8 text-[#005F70] font-medium '>
          In the final review before prototyping, I annotated the design details for development handoff.
          </p>
        <strong className="text-[#005F70]">1.</strong>
        <p className='text-[#005F70]'>First, I annotated the designs - this allows for a better communicate and explain to the developer what coding decisions are needed moving forward.</p>
        <strong className="text-[#005F70]">2.</strong>
        <p className='text-[#005F70]'>Then, the responsiveness on the application, making sure to account for different breakpoints. 
        I began by doing an initial review of everything that is wrong on the first draft of the website.</p>
        </div>
        <div className='container pb-10'>
        <div className="p-10">
          <img src={webhandoff} alt="web-handoff" />
        </div>
      <div className="p-14">
          <img src={mobilehandoff} alt="mobile-handoff" />
      </div>
        </div>
      </div>

  )
}

export default Handoff