import React from 'react'
import { HERO_CON } from '../constants/cons'
import profilePic from '../assets/p.png'
import { delay, motion } from "framer-motion"

const container = (delay)=>({
  hidden: {x:-100 , opacity:0},
  visible:{
    x:0,
    opacity:1,
    transition :{duration : 0.5 , delay:delay}
  }
})

const Hero = () => {
  return (
    <div className='pb-4 lg:mb-35'>
      <div className='flex flex-wrap'>

        {/* Left side  = content */}
        <div className='w-full lg:w-1/2'>
          <div className='flex flex-col items-center lg:items-start'>
            <motion.h1 
            variants={container(0)}
            initial= "hidden"
            animate = "visible"
            className='pb-5 text-6xl font-normal tracking-tight lg:mt-16 lg:text-7xl '>Yash Mali</motion.h1>
            <motion.span 
            variants={container(0.5)}
            initial= "hidden"
            animate = "visible"
            className='bg-gradient-to-r from-pink-300 via-slate-500 to-purple-500 bg-clip-text text-transparent text-4xl'>Passoinate Coder </motion.span>
            <motion.p 
            variants={container(1)}
            initial= "hidden"
            animate = "visible"
            className='my-3 max-w-xl py-6 font-light tracking-tighter lg:items-end text-justify' >
              {HERO_CON}
            </motion.p>
          </div>
        </div>

        {/* Right Section  = profile pic */}
        <div className='w-full lg:w-1/2 mb-75 lg:justify-end lg:items-start pl-10'>
          <div className='flex justify-center pb-100'>
            <motion.img 
            initial={{x:100 , opacity:0}}
            animate={{x:0 ,opacity:1}}
            transition={{ duration:1 , delay:0.7}}
            className="w-100 h-100 lg:items-start" src={profilePic} alt="profile" />
          </div>
        </div>

      </div>
    </div>

  )
}

export default Hero
