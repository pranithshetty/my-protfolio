import { FaBars, FaTimes, FaGithub, FaLinkedin } from 'react-icons/fa'
import { useState } from 'react'
import { HiOutlineMail } from 'react-icons/hi';
import { BsFillPersonLinesFill } from 'react-icons/bs';
import Resume from '../assets/Resume.pdf'
import Logo from './Logo';

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
                <li>Home</li>
                <li>About</li>
                <li>Skills</li>
                {/* <li>Work</li> */}
            </ul>

            {/* Socials */}

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

            {showSideMenuMobile && <div className='absolute top-0 left-0 w-full h-screen  bg-slate-900 flex flex-col justify-center items-center md:hidden'>
                <ul>
                    <li className='py-6 text-4xl '>Home</li>
                    <li className='py-6 text-4xl '>About</li>
                    <li className='py-6 text-4xl '>Skills</li>
                    {/* <li className='py-6 text-4xl '>Work</li> */}
                </ul>
            </div>}
        </div>
    )
}

export default NavBar