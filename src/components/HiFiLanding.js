import React from "react";
import Prototype from "./Prototype";

export default function HiFiLanding() {
  return (
    <div className="w-full bg-[#F3F3F3] pt-20">
      <div className="max-w-[1000px] mx-auto px-8 flex flex-col justify-center items-center h-full">
        <h1 className="sm:text-center text-3xl sm:text-4xl font-medium text-[#005F70]">
          High Fidelity App MockUps
        </h1>
        <p className="text-[#378897] py-4 max-w-700px mx-24 font-medium">
          With the style guide for Apartment Finder, I began to incorporate the colors and as well as prototyping the website and the mobile app.
        </p>
        <div className='text-[#378897] my-6'>
          <h2 className="font-medium">Decisions :</h2>
          <ul className='list-disc text-1xl font-medium' style={{ letterSpacing: '1px', fontSize: '16px' }}>
            <li>Ensure the element colors are based off the color palette.</li>
            <li>Hover color changes in order to provide user decision feedback.</li>
            <li>Font decisions were made in mind for desktop and mobile platform.</li>
          </ul>
        </div>
        <div className="aspect-w-16 aspect-h-9 pt-5 pb-10">
          <iframe
            title="prototype-video"
            width="900"
            height="550"
            src="https://www.figma.com/embed?embed_host=share&url=https%3A%2F%2Fwww.figma.com%2Fproto%2Fu19zymOLwxtjdQnc8nMDkU%2FMobile-App%3Fpage-id%3D125%253A1417%26type%3Ddesign%26node-id%3D131-5562%26viewport%3D874%252C-397%252C0.22%26t%3Dm98oP4J7IcDbAqZm-1%26scaling%3Dscale-down%26starting-point-node-id%3D131%253A5562%26mode%3Ddesign"
          ></iframe>
        </div>
      </div>
      <Prototype />
    </div>

  );
}
