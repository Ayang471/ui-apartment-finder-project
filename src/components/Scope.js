import React from 'react'

function Scope() {
  return (
<div name="scope" className="bg-[#FFFAF2] text-gray-300 pb-20">
  <div className="flex flex-col justify-center items-center">
    <div className="max-w-[1000px] w-full grid sm:grid-cols-2 gap-8 px-4">
      <div className='pb-8 pl-9'>
        <p className="sm:text-left text-3xl text-[#005F70]">Scope:</p>
        <p className="text-[#378897] mt-4 text-md leading-6 col-start-1 sm:col-span-2 lg:mt-6 lg:row-start-4 lg:col-span-1">The main scope of this app is for users to search for apartments in specific areas, the app allows the user to refine the results by a set of criteria, view the details about an apartment, and initiate contact with the owner.</p>
        <hr />
      </div>
      <div>
        <p className="text-3xl text-[#005F70]">Requirements:</p>
        <ul className="list-disc text-[#378897] mt-4 text-md col-start-1 sm:col-span-2 lg:mt-6 lg:row-start-4 lg:col-span-1">
          <li>Design a website </li>
          <li>Renter should be able to search, categorize, and filter the results by their preferences.</li>
          <li>How far is the apartment from a metro station?</li>
          <li>Are pets allowed?</li>
          <li>Do the criteria change depending on the type of neighborhood they are looking for?</li>
          <li>View details about an apartment.</li>
          <li>Initiate contact with the owner.</li>
        </ul>
        <hr />
      </div>
    </div>
  </div>
</div>


  )
}

export default Scope