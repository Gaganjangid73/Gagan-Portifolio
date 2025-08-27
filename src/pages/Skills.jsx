import React from "react";
import React2 from "../assets/react.png";

const skills = [
  { name: "React", img: React2 },
  { name: "JavaScript", img: React2 },
  { name: "Node.js", img: React2 },
  { name: "MongoDB", img: React2 },
  { name: "Tailwind CSS", img: React2 },
  { name: "Express.js", img: React2 },
];

const Projects = () => {
  return (
    <div className="w-full px-6">
      {/* Heading */}
      <div>
        <h1 className="text-white text-[100px] font-bold leading-none m-0">
          Skills
        </h1>
        <h1 className="font-bold text-[100px] text-[rgba(182,180,189,0.3)] leading-none m-0">
          I'VE
        </h1>
      </div>

      {/* Skills Grid */}
      <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 gap-2">
        {skills.map((skill, index) => (
          <div
            key={index}
            className="flex hover:bg-gray-600 rounded-2xl w-80 h-20 items-center px-10 gap-5 border border-white transition-all duration-300"
          >
            <div className="h-14 w-14">
              <img
                className="w-full h-full object-contain"
                src={skill.img}
                alt={skill.name}
              />
            </div>
            <div>
              <p className="text-white font-semibold text-2xl">{skill.name}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
