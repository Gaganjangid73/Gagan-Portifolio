import React from "react";
import Frame2 from "../assets/Frame.png";
import Devtinder from "../assets/Devtinder.png"

const Projects = () => {
  return (
    <div className="w-full px-6">
      {/* Heading */}
      <div>
        <h1 className="text-white text-[100px] font-bold leading-none m-0">
          RECENT
        </h1>
        <h1 className="font-bold text-[100px] text-[rgba(182,180,189,0.3)] leading-none m-0">
          PROJECTS
        </h1>
      </div>

      {/* PROJECTS Cards */}
      <div className="mt-10 flex flex-col gap-5 pb-10">
        <div className="flex hover:bg-gray-600 rounded-2xl w-full h-40 items-center px-10 gap-8 border-white border-[1px]">
          <div className="h-30 w-60">
            <img
              className="w-full h-full object-cover"
              src={Frame2}
              alt="Project"
            />
          </div>
          <div className="flex flex-col justify-center">
            <p className="text-white font-bold text-2xl">Ai-Mentor </p>
            <p className="text-[rgba(182,180,189,0.45)]">
              FullStack (MERN) - Projects
            </p>
          </div>
        </div>
          {/* PROJECTS Cards */}
      <div className=" flex flex-col gap-5 pb-10">
        <div className="flex hover:bg-gray-600 rounded-2xl w-full h-40 items-center px-10 gap-8 border-white border-[1px]">
          <div className="h-30 w-60">
            <img
              className="w-full h-full object-cover"
              src={Devtinder}
              alt="Project"
            />
          </div>
          <div className="flex flex-col justify-center">
            <p className="text-white font-bold text-2xl">Dev-Tinder</p>
            <p className="text-[rgba(182,180,189,0.45)]">
              FullStack (MERN) - Projects
            </p>
          </div>
        </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
