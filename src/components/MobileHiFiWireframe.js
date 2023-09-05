import React from 'react'
import { MobileHiFi } from '../MobileHiFi-images'
import '../MobileHiFi.css'

function MobileHiFiWireframe() {
  return (
    <div className='mobile-Hifi w-full bg-[#378897] p-10'>
      <div className='carousel-list pt-10'>
        {MobileHiFi.map((list, index) => (
          <div className="card mx-4" key={index}>
            <img src={list.img} alt="hifi-wireframe"  />
          </div>
        ))}
      </div>
    </div>
  )
}

export default MobileHiFiWireframe
