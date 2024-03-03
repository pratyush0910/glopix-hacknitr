"use client";
import { Rating } from "@mui/material";
import axios from "axios";
import React, { useState } from "react";

function Feedback() {
  const [name, setName] = useState("");
  const [description, setDescription] = useState(null);
  const [star, setRating] = useState("");
  console.log({ star });
  const handleChange = (_event, newValue) => {
    setRating(newValue);
  };
  const createFeed = (e) => {
    e.preventDefault();
    axios
      .post("http://localhost:8000/", {
        name: name,
        description: description,
        star: star,
      })
      .then((res) => {
        console.log(res);
        alert("Review Submitted Succesfully")
        setRating(null);
      })
      .catch((error) => {
        console.log(error);
        alert(error)
      });
  };
  return (
    <div className=" bg-gray-800 text-white  text-xl ">
      <div className="text-center text-4xl mb-[3rem] h-2">FeedBack</div>
      <form className="flex justify-center mb-[2rem] items-center flex-col text-[#a571ab]">
        <input
          type="text"
          name="name"
          placeholder="Your Name"
          required
          className="border-solid border-2 border-black bg-slate-300 cursor-pointer px-3 py-1 rounded-2xl"
          onChange={(e) => setName(e.target.value)}
          value={name}
        />
        <input
          type="text"
          name="title"
          placeholder="Your Feedback"
          required
          className="border-solid border-2 border-black bg-slate-300 cursor-pointer px-3 py-1 rounded-2xl"
          onChange={(e) => setDescription(e.target.value)}
          value={description}
        />
         <button className="mt-[3rem]  border-2 border-[#a571ab] bg-fuchsia-700 rounded-lg" type="submit" onClick={createFeed}>
          Submit
        </button>
      </form> <div className="flex justify-center">
      <div className="text-white">
          <Rating
            value={star}
            onChange={handleChange}
            precision={0.5}
            sx={{ color: "#a571ab", bgcolor:"white" }}
          />
        </div></div>
        </div>
    
  );
}

export default Feedback;
