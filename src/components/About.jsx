import React from 'react'
import profilePic from '../assets/a2.png'
import { ABOUT_TEXT } from '../constants/cons'

const About = () => {
    return <div className='border-b border-x-neutral-300 border-dashed pb-4'>
        <h1 className='my-5 text-center text-4xl py-10 '>About <span className='text-neutral-500'>Me</span>
        </h1>
        <div className='flex flex-wrap '>
            <div className='w-full lg:w-1/2 lg:p-8'>

                {/* Div for image */}
                <div className='flex items-center justify-center h-50 w-50'>
                    <img className='rounded-1xl my-2 ' src={profilePic} alt="aboutMe" />
                </div>
            </div>

            <div className='w-full lg:w-1/2'>
                <div className='flex justify-center lg:justify-start mt-50'>
                    <p className='my-30 maxw-xl py-16 text-justify'>
                        {ABOUT_TEXT}
                    </p>
                </div>

            </div>
        </div>
    </div>
}

export default About
