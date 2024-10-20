import React from 'react'
import profilePic from '../assets/a2.png'
import { ABOUT_TEXT } from '../constants/cons'
import { motion } from 'framer-motion'



const About = () => {
    return <div className='pb-4'>
        <motion.h1 
         whileInView={{opacity:1 ,y:0}}
         initial={{opacity:0 , y:-100}}
         transition={{duration:1}}
        className='my-5 text-center text-4xl py-10 '>About <span className='text-neutral-500'>Me</span>
        </motion.h1>
        <div className='flex flex-wrap '>
            <motion.div 
            whileInView={{opacity:1 , x:0}}
            initial={{x:-100 ,opacity :0}}
            transition={{duration:1.5 ,delay:0.5}}
            
            className='w-full lg:w-1/2 lg:p-8'>

                {/* Div for image */}
                <div className='flex items-center justify-center h-50 w-50'>
                    <img className='rounded-1xl my-2 ' src={profilePic} alt="aboutMe" />
                </div>
            </motion.div>

            <motion.div 
            whileInView={{opacity:1 , x:0}}
            initial={{opacity:0 ,x:100}}
            transition={{duration:0.5}}
            className='w-full lg:w-1/2'>
                <div className='flex justify-center lg:justify-start mt-50'>
                    <p className='my-30 maxw-xl py-16 text-justify'>
                        {ABOUT_TEXT}
                    </p>
                </div>
            </motion.div>
        </div>
    </div>
}

export default About
