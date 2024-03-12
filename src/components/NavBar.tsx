import { FaBars, FaTimes, FaGithub, FaLinkedin } from 'react-icons/fa'
import { BsFillPersonLinesFill } from 'react-icons/bs';
import { HiOutlineMail } from 'react-icons/hi';
import Logo from './Logo';
import { useState } from 'react'
import Resume from '../assets/Resume.pdf'
import { Link } from 'react-scroll';

const NavBar = () => {

    const [showSideMenuMobile, setShowSideMenuMobile] = useState(false);

    function handleShowMenuMobile() {
        setShowSideMenuMobile(!showSideMenuMobile)
    }
    return (
        <div className="fixed w-full h-[80px] flex justify-between items-center px-4  bg-slate-900 text-gray-200">

            {/* logo */}
            <Logo />
            {/* Nav sections PC */}

            <ul className='hidden md:flex'>

                <li>
                    <Link to="hero"
                        smooth={true}
                        duration={500} >
                        Home
                    </Link></li>
                <li>
                    <Link to="about"
                        smooth={true}
                        duration={500} >
                        About
                    </Link></li>
                <li>
                    <Link to="skills"
                        smooth={true}
                        duration={500} >
                        Skills
                    </Link>
                </li>
                {/* <li>Work</li> */}
                <li>
                    <Link to="contact"
                        smooth={true}
                        duration={500} >
                        Contact Me
                    </Link></li>
            </ul>

            {/* Socials pc */}

            <div className='hidden lg:flex fixed flex-col top-[35%] left-0'>
                <ul>
                    <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-blue-600
                    '>
                        <a href="https://linkedin.com/in/pranith-shetty-67b287150" target="_blank">LinkedIn</a><FaLinkedin size={25} />
                    </li>
                    <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-gray-900'>
                        <a href="https://github.com/pranithshetty" target="_blank">GitHub</a><FaGithub size={25} />
                    </li>
                    <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-red-600'>
                        <a href="https://mail.google.com/mail/?view=cm&fs=1&to=shetty.praneeth4@gmail.com" target="_blank">Email</a><HiOutlineMail size={25} />
                    </li>
                    <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-gray-400'>
                        <a href={Resume} target="_blank">Resume</a><BsFillPersonLinesFill size={25} />
                    </li>
                </ul>
            </div>


            {/* Mobile view */}
            <div onClick={handleShowMenuMobile} className='cursor-pointer md:hidden z-10'>
                {showSideMenuMobile ? <FaTimes /> : <FaBars />}
            </div>

            {
                showSideMenuMobile && <div className='absolute top-0 left-0 w-full h-screen  bg-slate-900 flex flex-col justify-center items-center md:hidden'>
                    <ul>
                        <li className='py-6 text-4xl '>
                            <Link onClick={handleShowMenuMobile} to="hero"
                                smooth={true}
                                duration={500} >
                                Home
                            </Link></li>
                        <li className='py-6 text-4xl '>
                            <Link onClick={handleShowMenuMobile} to="about"
                                smooth={true}
                                duration={500} >
                                About
                            </Link></li>
                        <li className='py-6 text-4xl '>
                            <Link onClick={handleShowMenuMobile} to="skills"
                                smooth={true}
                                duration={500} >
                                Skills
                            </Link></li>
                        {/* <li className='py-6 text-4xl '>Work</li> */}
                        <li className='py-6 text-4xl '>
                            <Link onClick={handleShowMenuMobile} to="contact"
                                smooth={true}
                                duration={500} >
                                Contact Me
                            </Link></li>
                    </ul>


                </div>
            }
        </div >
    )
}

export default NavBar