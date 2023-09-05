import React from "react";


export default function Intro() {
  return (
    <div name="discover" className="w-full bg-[#FFFAF2] text-gray-300 pt-20 pb-16">
      <div className="flex flex-col justify-center items-center w-full h-full">
        <div className="max-w-[1000px] w-full grid grid-cols-2 gap-8">
          <div className="sm:text-right pb-8 pl-4">
            <p className="text-4xl text-[#378897] font-bold inline border-b-4 border-[#d59f26]">
              Apartment Finder
            </p>
          </div>
        </div>
        <div className="max-w-[1000px] w-full grid sm:grid-cols-2 gap-8 px-4">
          <div className="sm:text-right text-4xl font-bold">
            <p className="mt-1 text-lg font-semibold text-[#005F70]">
              Finding the perfect home to live with Discover.com
            </p>
          </div>
          <div>
            <p className="text-3xl text-[#005F70]">About Apartment Finder:</p>
            <p className="text-[#378897] mt-4 text-md leading-6 col-start-1 sm:col-span-2 lg:mt-6 lg:row-start-4 lg:col-span-1 ">
              Apartment Finder helps renters find a new apartment. An
              application that allows users to search for apartments in a
              specific area (or multiple areas), define criteria, and filter the
              results. 
            </p>
            <hr />
          </div>
        </div>
        </div>
      </div>
  );
}
