import React from "react";
import photo from "../assets/profile.png";
import { CiLinkedin } from "react-icons/ci";
import { FaInstagram } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";

const Slidebar = () => {
  return (
    <div className=" w-[320px] h-[600px] bg-white rounded-2xl flex flex-col ml-[110px]">
      <div className="flex mt-12 justify-center">
        <img
          className="rounded-2xl w-[250px] h-[180px] border-black border-[1px] shadow-2xl"
          src={photo}
          alt="Gagan-image"
        />
      </div>
      <h1 className=" text-center text-4xl font-semibold mt-5 font-sans">
        Gagan Jangid
      </h1>
      <h2 className="text-center mt-[30px] font-sans font-medium text-[#6A6B6C]">
        A Software Engineer who has developed countless innovative solutions.
      </h2>
      <div className=" flex items-center justify-evenly text-2xl text-amber-600 mt-10 w-[300px]">
        <CiLinkedin className="cursor-pointer" /> <FaInstagram className="cursor-pointer"/> <FaSquareXTwitter className="cursor-pointer" />
      </div>
    </div>
  );
};

export default Slidebar;
