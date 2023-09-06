import React from "react";
import taskflow from "../assets/Task Flow.png";
import Wireframes from "./Wireframes";

export default function TaskFlow() {
  return (
    <div>
      <div className="w-full h-screen bg-[#005F70]">
        <div className="max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full">
          <h1 className="text-3xl sm:text-4xl font-medium text-[#F3F3F3]">
           Task Flow Diagram
          </h1>
          <p className="text-[#FFFAF2] py-4 max-w-700px">
            I created the core functionality of the app and determinded several routes that users 
            would be most frequently take while using the app. The user flows for reach route which 
            enabled me to map out the flow of the routes to ensure that users would be able to accomplish 
            the tasks in the easiest and simplest way.
          </p>
          <div className='text-[#FFFAF2]'>
            <strong>Route 1:</strong> 
            <p>Search by location, pricing, and number of bedrooms.</p>
            <strong>Route 2:</strong>
            <p>User simply browsing through to view featured homes and more listings.</p>
          </div>
          <img src={taskflow} alt="task-flow" />
        </div>
        <Wireframes />
      </div>
    </div>
  );
}
