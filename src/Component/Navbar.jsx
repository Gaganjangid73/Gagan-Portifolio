import React from "react";
import { BiHomeAlt } from "react-icons/bi";
import { FaRegFolder } from "react-icons/fa";
import { MdOutlineWorkOutline } from "react-icons/md";
import { FiTool } from "react-icons/fi";
import { FaRegNoteSticky } from "react-icons/fa6";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const navigate = useNavigate();

  return (
    <div className="mt-8">
      <h1 className="bg-[#FFFFFF20] w-[300px] rounded-2xl flex justify-evenly h-12 gap-3 items-center text-white font-semibold text-xl">
        <BiHomeAlt cursor="pointer" onClick={() => navigate("/")} />
        <FaRegFolder cursor="pointer" onClick={() => navigate("/projects")} />
        <MdOutlineWorkOutline cursor="pointer" onClick={() => navigate("/experience")} />
        <FiTool cursor="pointer" onClick={() => navigate("/skills")} />
        <FaRegNoteSticky cursor="pointer"  />
      </h1>
    </div>
  );
};

export default Navbar;
