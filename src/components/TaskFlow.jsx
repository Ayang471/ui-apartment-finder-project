import React from "react";
import taskflow from "../assets/Task Flow.png";
import Wireframes from "./Wireframes";

export default function TaskFlow() {
  return (
    <div>
      <div className="w-full h-screen bg-[#005F70]">
        <div className="max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full">
          <h1 className="text-3xl sm:text-4xl font-medium text-[#F3F3F3]">
            User's Task Flow
          </h1>
          <p className="text-[#FFFAF2] py-4 max-w-700px">
            A user wants to search for an apartment in a specific area, refine
            the results by a set of criteria, view the details about an
            apartment, and initiate contact with the owner.
          </p>
          <img src={taskflow} alt="task-flow" />
        </div>
        <Wireframes />
      </div>
    </div>
  );
}
