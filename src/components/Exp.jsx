import React from "react"
import { EXP } from "../constants/cons";
import exp from "constants";
import {motion} from "framer-motion";

const Exp = () => {
  return <div className="pb-4">
    <motion.h1 
    whileInView={{opacity:1 ,y:0}}
    initial={{opacity:0 , y:-100}}
    transition={{duration:1}}
    className="text-center text-4xl my-15">Experience</motion.h1>

    
    <div className="p-20">
      {EXP.map((experience, index) => (
        <div key={index} className="mb-8 flex flex-wrap lg:justify-center">
          {/* year  */}
          <motion.div 
          whileInView={{opacity:1 ,x:0}}
          initial={{opacity:0 , x:-100}}
          transition={{duration:1.5}}
          className="w-full lg:w-1/4">
            <p className="mb-2 text-small text-neutral-400">{experience.year}</p>
          </motion.div>

          {/* job details */}

          <motion.div 
          whileInView={{opacity:1 ,x:0}}
          initial={{opacity:0 , x:100}}
          transition={{duration:1.5}}
          
          className="w-full max-w-xl lg:3/4 ">
            <h6 className="mb-2 font-semibold">
              {experience.role} - <span className="text-small text-purple-300">{experience.company}</span>
            </h6>
            <p className="mb-4 text-neutral-400">{experience.description}</p>
            {experience.technologies.map((tech , index) =>(
              <span key={index} className="mr-2 mt-4 rounded bg-neutral-900 px-2 py-1 text-sm text-purple-600">{tech}</span>
            ))}
          </motion.div>
        </div>
      ))}
    </div>
  </div>
}

export default Exp;
