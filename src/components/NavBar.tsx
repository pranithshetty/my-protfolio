import { FaBars, FaTimes } from 'react-icons/fa'
import { useState } from 'react'
import Logo from '../assets/react.svg'
const NavBar = () => {

    const [showSideMenuMobile, setShowSideMenuMobile] = useState(false);

    function handleShowMenuMobile() {
        setShowSideMenuMobile(!showSideMenuMobile)
    }
    return (
        <div className="fixed w-full h-[80px] flex justify-between items-center px-4  bg-slate-900 text-gray-200">

            {/* logo */}
            <div>
                <img src={Logo} alt="My-Logo" />
            </div>
            {/* Nav sections PC */}

            <ul className='hidden md:flex'>
                <li>Home</li>
                <li>About</li>
                <li>Skills</li>
                <li>Work</li>
            </ul>


            {/* Mobile view */}
            <div onClick={handleShowMenuMobile} className='cursor-pointer md:hidden z-10'>
                {showSideMenuMobile ? <FaTimes /> : <FaBars />}
            </div>

            {showSideMenuMobile && <div className='absolute top-0 left-0 w-full h-screen  bg-slate-900 flex flex-col justify-center items-center md:hidden'>
                <ul>
                    <li className='py-6 text-4xl '>Home</li>
                    <li className='py-6 text-4xl '>About</li>
                    <li className='py-6 text-4xl '>Skills</li>
                    <li className='py-6 text-4xl '>Work</li>
                </ul>
            </div>}
        </div>
    )
}

export default NavBar