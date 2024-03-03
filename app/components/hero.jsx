"use client" 
import React from 'react'
import FlipCard from './flip'
import Typewriter from 'typewriter-effect'


export default function Hero() {
  return (
    <div className='bg-gray-800 text-white h-[39.5rem]'>
  

     <div className="flex justify-end">
        <FlipCard/>
     </div>
     <div className='flex  '>
     <div>
     <h1 className='ml-[12rem] mb-[2rem] mt-[-15rem] text-4xl w-[33rem] font-bold text-[#a571ab] '><span className="text-5xl">GLOPIX :</span> <br />Revolutionizing Every <span className='text-indigo-600'>Pixel</span></h1>
        </div> </div>
    
     <div className='flex justify-evenly align-baseline text-2xl font-bold text-[#a571ab] mt-[-7rem]'>
     <div>

        
        <h1 className="ml-[-31rem] mt-[2rem]">
        <Typewriter
  options={{
    strings: [' CAPTURE | FEED | ILLUMINATE '],
    autoStart: true,
    loop: true,
  }}
/></h1></div>
 </div>

      </div>
   
  )
}
