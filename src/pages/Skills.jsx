import React from "react";
import React2 from "../assets/frontend.png";
import Mongo2 from "../assets/mongodb.jpeg"
import express2 from "../assets/express.png"
import Node2 from "../assets/node.png"
import JS from "../assets/js.png";
import CSS from "../assets/tailwind.png"


const skills = [
  { name: "React", img: React2 },
  { name: "JavaScript", img: JS },
  { name: "Node.js", img: Node2 },
  { name: "MongoDB", img: Mongo2 },
  { name: "Tailwind CSS", img: CSS },
  { name: "Express.js", img: express2 },
];

const Skills = () => {
  return (
    <div className="w-full px-6">
      {/* Heading */}
      <div>
        <h1 className="text-white text-[100px] font-bold leading-none m-0">
          Skills
        </h1>
        <h1 className="font-bold text-[100px] text-[rgba(182,180,189,0.3)] leading-none m-0">
          I HAVE
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

export default Skills;
