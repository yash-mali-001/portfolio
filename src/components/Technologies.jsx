import React from 'react'
import { RiReactjsLine , RiFlutterFill , RiJavaFill} from 'react-icons/ri'
import { SiCplusplus ,SiMongodb } from "react-icons/si";
import { GrMysql } from "react-icons/gr";
import { animate, motion } from 'framer-motion';

const iconVariation = (duration)=>({
    initial:{ y: -10},
    animate:{
        y: [10,-10],
        transition:{
            duration:duration,
            ease: "linear",
            repeat:Infinity,
            repeatType:"reverse"
        }
    }
})


const Technologies = () => {
  return <div className='pb-24 mb-16' >
    <motion.h1 
    whileInView={{opacity:1 ,y:0}}
    initial={{opacity:0 , y:-100}}
    transition={{duration:1}}

    className=' text-center text-4xl my-8'>Technologies</motion.h1>


    <motion.div 
    whileInView={{opacity:1,x:0}}
    initial={{x:-100, opacity:0}}
    transition={{duration:2}}
    className='flex flex-wrap items-center justify-center gap-6 my-8 pt-20'>

        <motion.div 
        variants={iconVariation(2.5)}
        initial="initial"
        animate="animate"
        className='rounded-2xl border-2 border-white p-2'>
            <a href="https://react.dev/"><RiReactjsLine className='text-7xl text-cyan-500'/></a>
        </motion.div>

        <motion.div 
        variants={iconVariation(3)}
        initial="initial"
        animate="animate"
        className='rounded-2xl border-2 border-white p-2'>
            <a href="https://w3schools.com/java/"><RiJavaFill className='text-7xl text-red-500'/></a>
        </motion.div>

        <motion.div 
        variants={iconVariation(6)}
        initial="initial"
        animate="animate"
        className='rounded-2xl border-2 border-white  p-2'>
            <a href="https://flutter.dev/learn"><RiFlutterFill className='text-7xl text-blue-400'/></a>
        </motion.div>
        
        <motion.div 
        variants={iconVariation(4)}
        initial="initial"
        animate="animate"
        className='rounded-2xl border-2 border-white p-2'>
            <a href="https://www.w3schools.com/cpp/"><SiCplusplus className='text-7xl text-yellow-500'/></a>
        </motion.div>

        <motion.div 
        variants={iconVariation(2)}
        initial="initial"
        animate="animate"
        className='rounded-2xl border-2 border-white p-2'>
            <a href="https://www.w3schools.com/mongodb/"><SiMongodb className='text-7xl text-green-500'/></a>
        </motion.div>
        
        <motion.div 
        variants={iconVariation(4)}
        initial="initial"
        animate="animate"
        className='rounded-2xl border-2 border-white p-2 '>
            <a href="https://www.w3schools.com/MySQL/"><GrMysql className='text-7xl text-pink-500'/></a>
        </motion.div>
        
    </motion.div>
  </div>
  
}

export default Technologies
