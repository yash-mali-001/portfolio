import React from "react"
import { EXP } from "../constants/cons";
import exp from "constants";
const Exp = () => {
  return <div className="border-b border-neutral-500 border-dashed pb-4">
    <h1 className="text-center text-4xl my-8">Experience</h1>
    <div>
      {EXP.map((experience, index) => (
        <div key={index} className="mb-8 flex flex-wrap lg:justify-center">
          {/* year  */}
          <div className="w-full lg:w-1/4">
            <p className="mb-2 text-small text-neutral-400">{experience.year}</p>
          </div>

          {/* job details */}

          <div className="w-full max-w-xl lg:3/4 ">
            <h6 className="mb-2 font-semibold">
              {experience.role} - <span className="text-small text-purple-300">{experience.company}</span>
            </h6>
            <p className="mb-4 text-neutral-400">{experience.description}</p>
            {experience.technologies.map((tech , index) =>(
              <span key={index} className="mr-2 mt-4 rounded bg-neutral-900 px-2 py-1 text-sm text-purple-600">{tech}</span>
            ))}
          </div>
        </div>
      ))}
    </div>
  </div>
}

export default Exp;
