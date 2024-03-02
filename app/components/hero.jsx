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
     <h1 className='ml-[16rem] mb-[2rem] mt-[-13rem] text-5xl font-bold text-[#a571ab] '>GLOPIX</h1>
        </div> </div>
    
     <div className='flex justify-evenly align-baseline text-3xl font-bold text-[#a571ab] mt-[-7rem]'>
     <div>

        
        <h1 className="ml-[-28rem] ">
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
