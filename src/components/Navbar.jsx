// import logo from "../assets/kevinRushLogo.png"
import { FaGithub, FaInstagram, FaLinkedin } from "react-icons/fa";
import { SiLeetcode } from "react-icons/si";
const Navbar = () => {
  return (
    <nav className=" mb-20 flex items-center justify-between py-6">
      <div className="flex flex-shrink-0 items-center">
        {/* <img className="mx-2 w-10" src={logo} alt="logo" />*/}
         <h5 className="mx-2 w-10  font-bold">RR</h5>
      </div>
        <div className="m-8 flex items-center justify-center gap-4 text-2xl">
          <a href="https://www.linkedin.com/in/hariharasudhanng" target="_blank" rel="noopener noreferrer"><FaLinkedin /></a>
          <a href="https://github.com/Hhs7304" target="_blank" rel="noopener noreferrer"><FaGithub /></a>
          <a href="https://leetcode.com/u/Hariharasudhann_A/" target="_blank" rel="noopener noreferrer"><SiLeetcode /></a>
         <a href="https://www.instagram.com/hhs_7304?igsh=MWJkbmI5Zm1vN2ppZg==" target="_blank" rel="noopener noreferrer"><FaInstagram /> </a>
        </div> 

    </nav>
  )
}

export default Navbar

