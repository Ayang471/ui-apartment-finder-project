import React from "react";

export default function Prototype() {
  return (
    <div>
      <div className="w-full h-screen bg-[#378897]">
        <div className="max-w-[1000px] mx-auto py-8 flex flex-col justify-center w-full h-full">
          <br />
          <div className="flex flex-col pt-8 justify-center items-center">
            <div className="text-3xl sm:text-4xl pt-8 pb-4 font-medium text-[#F3F3F3]">
              <h1>Interactive Prototypes from the Hi-Fi Mobile Wireframe</h1>
            </div>
            <div className="aspect-w-16 aspect-h-9 pt-10">
              <iframe
                title="prototype-video"
                width="700"
                height="550"
                src="https://www.figma.com/embed?embed_host=share&url=https%3A%2F%2Fwww.figma.com%2Fproto%2Fu19zymOLwxtjdQnc8nMDkU%2FMobile-App%3Fpage-id%3D151%253A1144%26type%3Ddesign%26node-id%3D125-5158%26viewport%3D-4581%252C908%252C0.43%26scaling%3Dscale-down%26starting-point-node-id%3D125%253A5158"
                allowfullscreen
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
