import React from "react";
import MobileWireframe from "../assets/mobilewireframe.png";
import LandingpageWireframe from "../assets/landingpagewireframe.png";
import StyleTiles from "./StyleTiles";

export default function Wireframes() {
  return (
    <div>
      <div className="w-full h-screen bg-[#FFFAF2]">
        <div className="max-w-[1000px] mx-auto px-8 flex flex-col justify-center w-full h-full">
          <h1 className="text-3xl sm:text-4xl font-medium text-[#005F70]">
            Wireframes
          </h1>
          <p className="text-[#378897] py-4 max-w-700px">
            The objective is to define the content, structure, and layout of all
            the core screens in the application. The screens will include a log
            in, main application view, and the interaction views needed to
            complete the full user task.
          </p>
          <div className="max-w-[1000px] w-full grid sm:grid-cols-2 gap-8 px-4">
            <div>
              <img src={MobileWireframe} alt="mobile-wireframe" />
            </div>
            <div>
              <img src={LandingpageWireframe} alt="landing-page-wireframe" />
            </div>
          </div>
        </div>
        <StyleTiles />
      </div>
    </div>
  );
}
