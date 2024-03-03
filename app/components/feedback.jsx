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
        setRating(null);
      })
      .catch((error) => {
        console.log(error);
      });
  };
  return (
    <div className=" bg-gray-800 text-white font-navtxt text-xl">
      <div className="text-center text-4xl">FeedBack</div>
      <form className="flex justify-center items-center flex-col">
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
        <div className="text-white">
          <Rating
            value={star}
            onChange={handleChange}
            precision={0.5}
            sx={{ color: "#a571ab", bgcolor:"white" }}
          />
        </div>
        <button type="submit" onClick={createFeed}>
          Submit
        </button>
      </form>
    </div>
  );
}

export default Feedback;
