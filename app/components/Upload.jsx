"use client";
import React, { useState } from "react";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import Image from "next/image";
import axios from "axios";
import {saveAs} from "file-saver"

function Upload() {
  const [file, setFile] = useState();
  const [output, setOutput] = useState();
  const onSubmit = (e) => {
    e.preventDefault();
    console.log(file);
    const data = new FormData();
    data.append("file", file);
    console.log(data);
    axios
      .post("http://localhost:8000/img/", data, { responseType: "blob" })
      .then((res) => {
        console.log(res);
        const resData = res.data;
        const blob = new Blob([resData], { type: "image/jpeg" });
        const outputUrl = URL.createObjectURL(blob);
        console.log(outputUrl);
        setOutput(outputUrl);
      })
      .catch((error) => {
        console.log(error);
      });
  };
  const downloadImg = () => {
    saveAs(output,"image.png")
  }
  return (
    <div className=" bg-gray-800 text-white text-lg">
      <form onSubmit={onSubmit} className="mx-2">
        <input
          type="file"
          name="file"
          onChange={(e) => setFile(e.target.files?.[0])}
        />
        <button
          type="submit"
          className="border-2 border-solid rounded-xl p-1 bg-[#a571ab] font-bold text-xl"
        >
          Upload Image
        </button>
      </form>
      <div className="flex items-center bg-gray-800 text-white  text-xl">
        <div className="m-2 flex-[50%] flex justify-center items-center border-2 border-dotted h-96">
          {file ? (
            <Image
              src={URL.createObjectURL(file)}
              alt="outputImage"
              height={400}
              width={400}
            />
          ) : (
            <div>Your Input Image Will Be Shown</div>
          )}
        </div>
        <ArrowForwardIcon fontSize="large" />
        <div className="m-2 flex flex-[50%] justify-center items-center border-2 border-dotted h-96">
          {output ? (
            <Image src={output} alt="outputImage" height={400} width={400} />
          ) : (
            <div>Your Output Image will Be Shown Here</div>
          )}
        </div>
      </div>
      {output && <button onClick={downloadImg} className="border-2 border-solid rounded-xl p-1 bg-[#a571ab] font-bold text-3xl w-full">Download Image</button>}
      
    </div>
  );
}

export default Upload;
