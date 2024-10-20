import React from 'react'
import { HERO_CON } from '../constants/cons'
import profilePic from '../assets/p.png'
import { motion } from "framer-motion"

const Hero = () => {
  return (
    <div className='border-b border-x-neutral-300 border-dashed pb-4 lg:mb-35'>
      <div className='flex flex-wrap'>

        {/* Left side  = content */}
        <div className='w-full lg:w-1/2'>
          <div className='flex flex-col items-center lg:items-start'>
            <motion.h1 initial={{x:-100, opacity:0}} animate={{ x: 0, opacity:1 }} transition={{duration:0.5 }}
            className='pb-5 text-6xl font-normal tracking-tight lg:mt-16 lg:text-7xl '>Yash Mali</motion.h1>
            <span className='bg-gradient-to-r from-pink-300 via-slate-500 to-purple-500 bg-clip-text text-transparent text-4xl'>Passoinate Coder </span>
            <p className='my-3 max-w-xl py-6 font-light tracking-tighter lg:items-end text-justify' >
              {HERO_CON}
            </p>
          </div>
        </div>

        {/* Right Section  = profile pic */}
        <div className='w-full lg:w-1/2 mb-75 lg:justify-end lg:items-start pl-10'>
          <div className='flex justify-center pb-100'>
            <img className="w-100 h-100 lg:items-start" src={profilePic} alt="profile" />
          </div>
        </div>

      </div>
    </div>

  )
}

export default Hero
