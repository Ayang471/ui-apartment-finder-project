import React from "react";
import MobileHiFiWireframe from "./MobileHiFiWireframe";
import Handoff from './Handoff'

export default function Prototype() {
  return (
    <div>
      <MobileHiFiWireframe />
      <div className="w-full bg-[#378897]">
        <div className="max-w-[1000px] mx-auto py-8 flex flex-col justify-center w-full h-full">
          <div className="flex flex-col pt-8 justify-center items-center">
            <div className="sm:text-center text-3xl sm:text-4xl pt-8 pb-4 font-small text-[#F3F3F3]">
              <p>Used Figma Prototype feature to ensure all features are functional.</p>
            </div>
            <div className="aspect-w-16 aspect-h-9 pt-5">
              <iframe
                title="prototype-video"
                width="800"
                height="600"
                src="https://www.figma.com/embed?embed_host=share&url=https%3A%2F%2Fwww.figma.com%2Fproto%2Fu19zymOLwxtjdQnc8nMDkU%2FMobile-App%3Fpage-id%3D151%253A1144%26type%3Ddesign%26node-id%3D125-5158%26viewport%3D-4581%252C908%252C0.43%26scaling%3Dscale-down%26starting-point-node-id%3D125%253A5158"
                allowfullscreen
              ></iframe>
            </div>
          </div>
        </div>
      </div>
      <Handoff />
    </div>
  );
}
