import React, { useState } from "react";
import { BiHomeAlt } from "react-icons/bi";
import { FaRegFolder } from "react-icons/fa";
import { MdOutlineWorkOutline } from "react-icons/md";
import { FiTool } from "react-icons/fi";
import { FaRegNoteSticky } from "react-icons/fa6";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const navigate = useNavigate();
  const [hoveredIcon, setHoveredIcon] = useState(null);

  const tooltips = {
    home: "Home",
    projects: "Projects",
    experience: "Experience",
    skills: "Skills",
    notes: "Your Notes",
  };

  const icons = [
    { id: "home", Icon: BiHomeAlt, action: () => navigate("/") },
    { id: "projects", Icon: FaRegFolder, action: () => navigate("/projects") },
    { id: "experience", Icon: MdOutlineWorkOutline, action: () => navigate("/experience") },
    { id: "skills", Icon: FiTool, action: () => navigate("/skills") },
    { id: "notes", Icon: FaRegNoteSticky, action: null },
  ];

  return (
    <div className="mt-8 flex justify-center">
      <div className="bg-[#FFFFFF20] w-[300px] rounded-2xl flex justify-evenly h-12 items-center text-white  text-xl">
        {icons.map(({ id, Icon, action }) => (
          <div
            key={id}
            className="relative flex flex-col items-center"
            onMouseEnter={() => setHoveredIcon(id)}
            onMouseLeave={() => setHoveredIcon(null)}
          >
            <Icon
              cursor="pointer"
              onClick={action || (() => {})}
            />
            {hoveredIcon === id && (
              <div className="absolute top-10 bg-[#FFFFFF20] text-white/50 text-xs px-2  rounded-md shadow-lg whitespace-nowrap">
                {tooltips[id]}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Navbar;
