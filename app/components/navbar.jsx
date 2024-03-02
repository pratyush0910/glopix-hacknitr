import React from "react";
import FileUploadIcon from "@mui/icons-material/FileUpload";
import Image from "next/image";
import logo from "/public/logo.png";

function Navbar() {
  return (
    <>
      <nav className="flex items-center justify-between bg-gray-800 text-white font-navtxt text-xl">
        <a
          href="/"
          className="cursor-pointer flex items-center p-2 flex-[40%] font-navtxt"
        >
          <Image src={logo} alt="logo" height={50} width={50} />
          GloPIX.AI
        </a>
        <ul className="flex flex-[50%] justify-around">
          <li className="p-4 cursor-pointer hover:underline">HOME</li>
          <li className="p-4 cursor-pointer hover:underline">ABOUT</li>
          <li className="p-2 m-3 cursor-pointer motion-safe:animate-bounce border-2 border-solid bg-indigo-700 rounded-lg font-bold flex justify-center items-center">
            UPLOAD
            <FileUploadIcon />
          </li>
          <li className="p-2 m-3 cursor-pointer border-2 border-solid bg-red-700 rounded-lg font-bold">
            LOGIN
          </li>
        </ul>
      </nav>
    </>
  );
}

export default Navbar;
