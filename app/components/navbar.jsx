"use client";
import React from "react";
import FileUploadIcon from "@mui/icons-material/FileUpload";
import Image from "next/image";
import { useUser } from "@auth0/nextjs-auth0/client";

function Navbar() {
  const { user, error, isLoading } = useUser();

  return (
    <>
      <nav className="flex items-center justify-between bg-gray-800 text-white text-xl">
        <a
          href="/"
          className="cursor-pointer flex items-center p-2 mt-[-1.5rem] flex-[40%] "
        >
          <Image src={"/logo-removebg-preview.png"} alt="logo" height={200} width={200} />
          
        </a>
        <ul className="flex flex-[50%] justify-around">
          <li className="p-4 cursor-pointer hover:underline">HOME</li>
          {/* <li className="p-4 cursor-pointer hover:underline">ABOUT</li> */}
          <li className="p-2 m-3 cursor-pointer border-2 border-solid bg-[#a571ab] rounded-lg font-bold flex justify-center items-center">
            UPLOAD
            <FileUploadIcon />
          </li>
          {user ? (
            <a
              href="/api/auth/logout"
              className="p-2 m-3 cursor-pointer border-2 border-solid bg-pink-500 rounded-lg font-bold"
            >
              LOGOUT
            </a>
          ) : (
            <a
              href="/api/auth/login"
              className="p-2 m-3 cursor-pointer border-2 border-solid bg-pink-400 rounded-lg font-bold"
            >
              LOGIN
            </a>
          )}
        </ul>
      </nav>
    </>
  );
}

export default Navbar;
