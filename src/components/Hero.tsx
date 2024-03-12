//import { HiArrowRight } from "react-icons/hi"
import { Link } from 'react-scroll';
import { FaGithub, FaLinkedin } from 'react-icons/fa'
import { BsFillPersonLinesFill } from 'react-icons/bs';
import { HiOutlineMail } from 'react-icons/hi';
import Resume from '../assets/Resume.pdf'

const Hero = () => {

    return (
        <div id="hero" className="w-full h-screen bg-[#0a192f]">

            <div className="max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full">
                <p className="text-yellow-400">Hello, there! My name is</p>
                <h1 className="text-4xl sm:text-7xl text-gray-300">Pranith Shetty</h1>
                <h2 className="text-4xl sm:text-7xl text-gray-400">I'm a Full Stack Developer!</h2>
                <p className=" text-gray-500 py-4 max-w-[600px] text-justify ">
                    I have a combined work experience of 3 years with MERN, MEVN and MEAN stacks. Crafting sleek solutions and conquering bugs, this seasoned dev ensures projects shine!

                </p>
                <div>
                    <button className="text-white group border border-white px-6 py-3 my-2 flex items-center hover:bg-yellow-400 hover:text-gray-700 hover:border-yellow-400">
                        <Link to="skills"
                            smooth={true}
                            duration={500}>
                            View Skills
                        </Link>
                        {/* <span className="group-hover:rotate-90 duration-300">
                            <HiArrowRight className="ml-4" /></span> */}
                    </button>
                </div>
                {/* Socials mobile */}
                <div className='text-white pt-2 lg:hidden'>
                    <ul className='flex flex-row justify-between'>
                        <li className='w-full h-[40px] flex justify-between items-center bg-blue-600
                    '>
                            <a href="https://linkedin.com/in/pranith-shetty-67b287150" target="_blank">LinkedIn</a><FaLinkedin size={25} />
                        </li>
                        <li className='w-full h-[40px] flex justify-between items-center bg-gray-800'>
                            <a href="https://github.com/pranithshetty" target="_blank">GitHub</a><FaGithub size={25} />
                        </li>
                        <li className='w-full h-[40px] flex justify-between items-center bg-red-600'>
                            <a href="https://mail.google.com/mail/?view=cm&fs=1&to=shetty.praneeth4@gmail.com" target="_blank">Email</a><HiOutlineMail size={25} />
                        </li>
                        <li className='w-full h-[40px] flex justify-between items-center bg-gray-400'>
                            <a href={Resume} target="_blank">Resume</a><BsFillPersonLinesFill size={25} />
                        </li>
                    </ul>
                </div>
            </div>

        </div>
    )
}

export default Hero