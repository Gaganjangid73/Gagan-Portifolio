import React from "react";
import { BiHomeAlt } from "react-icons/bi";
import { FaRegFolder } from "react-icons/fa";
import { MdOutlineWorkOutline } from "react-icons/md";
import { FiTool } from "react-icons/fi";
import { FaRegNoteSticky } from "react-icons/fa6";

const Navbar = () => {
  return (
    <div>
      <h1 className="bg-[#FFFFFF20] w-[300px] rounded-2xl flex justify-evenly mt-8 h-12 gap-3 items-center text-white font-semibold text-xl">
        <BiHomeAlt /> 
        <FaRegFolder /> 
        <MdOutlineWorkOutline /> 
        <FiTool /> 
        <FaRegNoteSticky />
      </h1>
    </div>
  );
};

export default Navbar;
