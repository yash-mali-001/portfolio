import logo from "../assets/projects/y4.png";

import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";


const Navbar = () => {
  return <nav className=" mb-20 flex items-center justify-between py-6">
    <div>
        <img className="w-15 h-20" src={logo} alt="logo" />
    </div>
  
        
    
    <div className="m-8 flex items-center space-x-6 justify-center gap-4 text-3xl">
        <a href="https://www.linkedin.com/in/yash-mali"><FaLinkedin/></a>
        <a href="https://github.com/yash-mali-001"><FaGithub/></a>
        <a href="https://www.instagram.com/yash.m.45"><FaInstagram/></a>
    </div>

  </nav>
};

export default Navbar;
