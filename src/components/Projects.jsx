import React from 'react'
import { PROJECTS } from '../constants/cons'


const Projects = () => {
    return <div className='border-b border-neutral-500 border-dashed pb-4'>
        <h1 className='my-10 text-center text-4xl'> Projects</h1>
        {PROJECTS.map((project, index) => (
            <div key={index} className='mb-8 flex flex-wrap lg:justify-center'>
                {/* image */}
                <div className='w-full lg:w-1/4'>
                    {/* <img src="" alt="" className='mb-6 rounded'/> */}
                </div>

                {/* project details */}
                <div className='w-full max-w-xl lg:w-3/4 '>
                    <h6 className='mb-2 font-semibold'>{project.title}</h6>
                    <p className='mb-4 text-neutral-400'>{project.description}</p>
                    {project.technologies.map((tech, index) => (
                        <span key={index} className='mr-2 rounded bg-neutral-900 px-2 py-1 text-sm font-medium text-purple-800'>{tech}</span>
                    ))}
                </div>
            </div>
        ))}
    </div>
}

export default Projects