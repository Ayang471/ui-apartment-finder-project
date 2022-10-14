import React from "react";
import HiFiLandingPage from "../assets/HiFiLanding.png";
import HiFiMobile from "../assets/HiFiMobile.png";
import Prototype from "./Prototype";

export default function HiFiLanding() {
  return (
    <div>
      <div className="w-full h-screen bg-[#0a192f]">
        <div className="max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full">
          <h1 className="text-3xl sm:text-4xl font-medium text-[#ccd6f6]">
            High Fidelity App MockUps 
          </h1>
          <p className="text-gray-300 py-4 max-w-700px">
            The main focus is to combine all the visual ingredients to create a
            coherent and attractive overall visual style. That is to aim to
            construct a clearly defined visual language that is consistent
            throughtout the application.
          </p>
          <div className="max-w-[1000px] w-full grid sm:grid-cols-2 gap-8 px-4">
            <div className="sm:text-right text-4xl font-bold">
              <img src={HiFiLandingPage} alt="mobile-wireframe" />
            </div>
            <div className="pt-8">
              <img src={HiFiMobile} alt="landing-page-wireframe" />
            </div>
          </div>
        </div>
        <Prototype />
      </div>
    </div>
  );
}
