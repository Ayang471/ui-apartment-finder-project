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
            <div className="aspect-w-16 aspect-h-9">
              <iframe
                title="prototype-video"
                width="500"
                height="500"
                src="https://www.figma.com/proto/u19zymOLwxtjdQnc8nMDkU/Mobile-App?page-id=151%3A1144&type=design&node-id=125-5158&viewport=-4581%2C908%2C0.43&scaling=scale-down&starting-point-node-id=125%3A5158"
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
