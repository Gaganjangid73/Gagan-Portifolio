import React from "react";

const Experience = () => {
  return (
    <div className="w-full h-full px-6 overflow-y-auto">
      {/* Heading */}
      <div className="">
        <h1 className="text-white text-[100px] font-bold leading-none m-0">
          INTERNSHIP
        </h1>
        <h1 className="font-bold text-[100px] text-[rgba(182,180,189,0.3)] leading-none m-0">
          EXPERIENCE
        </h1>
      </div>

      {/* Experience Cards */}
      <div className="mt-10 flex flex-col gap-5 pb-10">
        {/* Card 1 */}
        <div className="flex flex-col hover:bg-gray-600 rounded-2xl w-full h-28 justify-center px-4">
          <h1 className="text-white text-xl font-semibold">
            Software Developer Intern
          </h1>
          <div className="flex justify-between text-sm">
            <h2 className="text-[rgba(182,180,189,0.45)]">
              Truevalue InfoSoft Pvt Ltd
            </h2>
            <h2 className="text-[rgba(182,180,189,0.45)]">Jun '25 — Sep '25</h2>
          </div>
        </div>

        {/* Card 2 */}
        <div className="flex flex-col hover:bg-gray-600 rounded-2xl w-full h-28 justify-center px-4">
          <h1 className="text-white text-xl font-semibold">
            Full Stack Web Developer Intern (MERN)
          </h1>
          <div className="flex justify-between text-sm">
            <h2 className="text-[rgba(182,180,189,0.45)]">Gitai Technologies</h2>
            <h2 className="text-[rgba(182,180,189,0.45)]">Jun '24 — Aug '24</h2>
          </div>
        </div>

        {/* Card 3 */}
        <div className="flex flex-col hover:bg-gray-600 rounded-2xl w-full h-28 justify-center px-4">
          <h1 className="text-white text-xl font-semibold">
            Data Structure Trainee
          </h1>
          <div className="flex justify-between text-sm">
            <h2 className="text-[rgba(182,180,189,0.45)]">Learn and Build</h2>
            <h2 className="text-[rgba(182,180,189,0.45)]">Jul '23 — Aug '23</h2>
          </div>
        </div>

       
      </div>
    </div>
  );
};

export default Experience;
