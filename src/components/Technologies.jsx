import React from 'react'
import { RiReactjsLine , RiFlutterFill , RiJavaFill} from 'react-icons/ri'
import { SiCplusplus ,SiMongodb } from "react-icons/si";
import { GrMysql } from "react-icons/gr";

const Technologies = () => {
  return <div className='border-b border-x-neutral-300 border-dashed pb-24' >
    <h1 className=' text-center text-4xl my-8'>Technologies</h1>
    <div className='flex flex-wrap items-center justify-center gap-6 my-8 pt-20'>

        <div className='rounded-2xl border-2 border-white p-2'>
            <a href="https://react.dev/"><RiReactjsLine className='text-7xl text-cyan-500'/></a>
        </div>

        <div className='rounded-2xl border-2 border-white p-2'>
            <a href="https://react.dev/"><RiJavaFill className='text-7xl text-red-500'/></a>
        </div>

        <div className='rounded-2xl border-2 border-white  p-2'>
            <a href="https://react.dev/"><RiFlutterFill className='text-7xl text-blue-400'/></a>
        </div>
        
        <div className='rounded-2xl border-2 border-white p-2'>
            <a href="https://react.dev/"><SiCplusplus className='text-7xl text-yellow-500'/></a>
        </div>

        <div className='rounded-2xl border-2 border-white p-2'>
            <a href="https://react.dev/"><SiMongodb className='text-7xl text-green-500'/></a>
        </div>
        
        <div className='rounded-2xl border-2 border-white p-2 '>
            <a href="https://react.dev/"><GrMysql className='text-7xl text-pink-500'/></a>
        </div>
        
    </div>
  </div>
  
}

export default Technologies
