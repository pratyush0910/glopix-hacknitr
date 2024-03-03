"use client"
import React, { useState } from "react";

const items = [
  <div key="1" className="slide w-[100vw] flex justify-between ml-[13rem]">
    <div className="flex-row justify-between text-white p-[5rem]">
      <div className="flex-col w-[10rem] justify-between">
        <div className="rounded-[10rem] h-[10rem] w-auto border-[2px] border-[#a571ab]">
          <img
            className="contain rounded-[100rem] h-[10rem]"
            src="https://source.unsplash.com/a-man-wearing-glasses-and-a-black-shirt-iEEBWgY_6lA"
            alt=""
          />
        </div>
        <h1 className="font-semibold mt-2 text-center">JHON DOE</h1>
        <div className="flex items-center space-x-1 mt-2 justify-between">
          <span className="text-2xl text-[#a571ab]">&#9733;</span>
          <span className="text-2xl text-[#a571ab]">&#9733;</span>
          <span className="text-2xl text-[#a571ab]">&#9733;</span>
          <span className="text-2xl text-[#a571ab]">&#9733;</span>
          <span className="text-2xl ">&#9733;</span>
        </div>
        <div className="text-[12px] text-[#dbdbd9]">
          &ldquo;Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis,
          voluptatibus?&ldquo;
        </div>
      </div>
    </div>
    <div className="flex justify-bewteen text-white p-[5rem]">
      <div className="flex-col w-[10rem] ">
        <div className="rounded-[10rem] h-[10rem] w-auto border-[2px] border-[#a571ab]">
          <img
            className="contain rounded-[100rem] h-[10rem]"
            src="https://source.unsplash.com/a-man-wearing-glasses-and-a-black-shirt-iEEBWgY_6lA"
            alt=""
          />
        </div>
        <h1 className="font-semibold mt-2 text-center">JHON DOE</h1>
        <div className="flex items-center space-x-1 mt-2 justify-between">
          <span className="text-2xl text-[#a571ab]">&#9733;</span>
          <span className="text-2xl text-[#a571ab]">&#9733;</span>
          <span className="text-2xl text-[#a571ab]">&#9733;</span>
          <span className="text-2xl text-[#a571ab]">&#9733;</span>
          <span className="text-2xl ">&#9733;</span>
        </div>
        <div className="text-[12px] text-[#dbdbd9]">
          &ldquo;Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis,
          voluptatibus?&ldquo;
        </div>
      </div>
    </div>
    <div className="flex justify-between text-white p-[5rem]">
      <div className="flex-col w-[10rem] ">
        <div className="rounded-[10rem] h-[10rem] w-auto border-[2px] border-[#a571ab]">
          <img
            className="contain rounded-[100rem] h-[10rem]"
            src="https://source.unsplash.com/a-man-wearing-glasses-and-a-black-shirt-iEEBWgY_6lA"
            alt=""
          />
        </div>
        <h1 className="font-semibold mt-2 text-center">JHON DOE</h1>
        <div className="flex items-center space-x-1 mt-2 justify-bewteen">
          <span className="text-2xl text-[#a571ab]">&#9733;</span>
          <span className="text-2xl text-[#a571ab]">&#9733;</span>
          <span className="text-2xl text-[#a571ab]">&#9733;</span>
          <span className="text-2xl text-[#a571ab]">&#9733;</span>
          <span className="text-2xl ">&#9733;</span>
        </div>
        <div className="text-[12px] text-[#dbdbd9]">
          &ldquo;Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis,
          voluptatibus?&ldquo;
        </div>
      </div>
    </div>
    </div>,


    


  <div key="2" className="slide w-[100vw] flex justify-between pl-[30vw]">
    <div className="flex justify-between text-white p-[5rem]">
      <div className="flex-col w-[10rem] ">
        <div className="rounded-[10rem] h-[10rem] w-auto border-[2px] border-[#a571ab]">
          <img
            className="contain rounded-[100rem] h-[10rem]"
            src="https://source.unsplash.com/a-man-wearing-glasses-and-a-black-shirt-iEEBWgY_6lA"
            alt=""
          />
        </div>
        <h1 className="font-semibold mt-2 text-center ">JHON DOE</h1>
        <div className="flex items-center space-x-1 mt-2  justify-between">
          <span className="text-2xl text-[#a571ab]">&#9733;</span>
          <span className="text-2xl text-[#a571ab]">&#9733;</span>
          <span className="text-2xl text-[#a571ab]">&#9733;</span>
          <span className="text-2xl text-[#a571ab]">&#9733;</span>
          <span className="text-2xl ">&#9733;</span>
        </div>
        <div className="text-[12px] text-[#dbdbd9]">
          &ldquo;Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis,
          voluptatibus?&ldquo;
        </div>
      </div>
    </div>{" "}
    <div className="flex justify-between text-white p-[5rem]">
      <div className="flex-col w-[10rem] ">
        <div className="rounded-[10rem] h-[10rem] w-auto border-[2px] border-[#a571ab]">
          <img
            className="contain rounded-[100rem] h-[10rem]"
            src="https://source.unsplash.com/a-man-wearing-glasses-and-a-black-shirt-iEEBWgY_6lA"
            alt=""
          />
        </div>
        <h1 className="font-semibold mt-2 text-center">JHON DOE</h1>
        <div className="flex items-center space-x-1 mt-2 justify-between">
          <span className="text-2xl text-[#a571ab]">&#9733;</span>
          <span className="text-2xl text-[#a571ab]">&#9733;</span>
          <span className="text-2xl text-[#a571ab]">&#9733;</span>
          <span className="text-2xl text-[#a571ab]">&#9733;</span>
          <span className="text-2xl ">&#9733;</span>
        </div>
        <div className="text-[12px] text-[#dbdbd9]">
          &ldquo;Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis,
          voluptatibus?&ldquo;
        </div>
      </div>
    </div>
    <div className="flex justify-between text-white p-[5rem]">
      <div className="flex-col w-[10rem] ">
        <div className="rounded-[10rem] h-[10rem] w-auto border-[2px] border-[#a571ab]">
          <img
            className="contain rounded-[100rem] h-[10rem]"
            src="https://source.unsplash.com/a-man-wearing-glasses-and-a-black-shirt-iEEBWgY_6lA"
            alt=""
          />
        </div>
        <h1 className="font-semibold mt-2 text-center">JHON DOE</h1>
        <div className="flex items-center space-x-1 mt-2 justify-between">
          <span className="text-2xl text-[#a571ab]">&#9733;</span>
          <span className="text-2xl text-[#a571ab]">&#9733;</span>
          <span className="text-2xl text-[#a571ab]">&#9733;</span>
          <span className="text-2xl text-[#a571ab]">&#9733;</span>
          <span className="text-2xl ">&#9733;</span>
        </div>
        <div className="text-[12px] text-[#dbdbd9]">
        &ldquo;Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis,
          voluptatibus?&ldquo;
        </div>
      </div>
    </div>
  </div>,

  
];

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % items.length);
  };

  const prevSlide = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + items.length) % items.length
    );
  };

  return (
    <div className="bg-gray-800 p-5 ">
      <h1 className=" font-bold mb-4 text-white text-6xl text-center mt-5">
        WHAT
      </h1>
      <h1 className="text-[#a571ab] text-3xl mt-[-8px] tracking-[3.5px] text-center">
        users think.
      </h1>
      <div className="relative overflow-hidden mt-[-10px]">
        <div
          className="flex transition-transform duration-500 ease-in-out transform -translate-x-full w-[100vw]"
          style={{ transform: `translateX(-${currentIndex * 100}%)` }}
        >
          {items}
        </div>
        <div className="mt-[-3rem] flex justify-center">
          <button
            className="arrow left text-white text-6xl p-5 px-7"
            onClick={prevSlide}
          >
            &larr;
          </button>
          <button
            className="arrow right text-white text-6xl p-5 px-7"
            onClick={nextSlide}
          >
            &rarr;
          </button>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
