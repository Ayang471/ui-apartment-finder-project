import React from 'react'

function Process() {
  return (
    <div name="Process" className="bg-[#FFFAF2]  text-gray-300 pb-20">
  <div className="flex flex-col justify-center items-center">
    <div className="max-w-[1000px] grid sm:grid-cols-4 gap-14">
      <div className='pb-8 pl-14'>
        <p className="sm:text-left text-3xl  text-[#005F70]">Process:</p>
       <ul className="list-disc  text-[#005F70] mt-4 text-md col-start-1 sm:col-span-2 lg:mt-6 lg:row-start-4 lg:col-span-1">
          <li>Define</li>
          <li>Ideate</li>
          <li>Test</li>
          <li>Design</li>
        </ul>
      </div>
       <div>
        <p className="text-3xl  text-[#005F70]">Platform:</p>
        <p className="text-[#005F70] mt-4 text-md col-start-1 sm:col-span-2 lg:mt-6 lg:row-start-4 lg:col-span-1">
         Responsive Web for desktop and mobile.
        </p>
      </div>
            <div>
        <p className="text-3xl  text-[#005F70]">Project Details:</p>
        <p className="text-[#005F70] mt-4 text-md col-start-1 sm:col-span-2 lg:mt-6 lg:row-start-4 lg:col-span-1">
        Project Duration: 4 weeks
        </p>
      </div>
            <div>
        <p className="text-3xl  text-[#005F70]">Tools:</p>
        <p className="text-[#005F70] mt-4 text-md col-start-1 sm:col-span-2 lg:mt-6 lg:row-start-4 lg:col-span-1">
        Figma
        </p>
      </div>
    </div>
  </div>
</div>
  )
}

export default Process