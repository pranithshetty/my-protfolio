import { FaHtml5, FaCss3Alt, FaReact, FaGithub, FaAngular, FaVuejs } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io5";
import { DiNodejs } from "react-icons/di";
import { SiMongodb, SiTailwindcss, SiFirebase, SiGraphql } from "react-icons/si";
const Skills = () => {
    return (
        <div className='w-full h-screen bg-[#0a192f] text-gray-300'>
            {/* Container */}
            <div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full'>
                <div>
                    <p className='text-4xl font-bold inline border-b-4 border-yellow-400 '>Skills</p>
                    <p className='py-4'>These are the technologies I've worked with</p>
                </div>

                <div className='w-full grid grid-cols-2 sm:grid-cols-4 gap-4 text-center py-8'>
                    <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                        <FaReact size={40} className="w-20 mx-auto" />
                        <p className='my-4'>REACT</p>
                    </div>
                    <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                        <IoLogoJavascript size={40} className="w-20 mx-auto" />
                        <p className='my-4'>JAVASCRIPT</p>
                    </div>
                    <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                        <DiNodejs size={60} className="w-20 mx-auto" />
                        <p className='my-4'>NODE JS</p>
                    </div>
                    <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                        <SiMongodb size={50} className="w-20 mx-auto" />
                        <p className='my-4'>MONGO DB</p>
                    </div>
                    <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                        <FaHtml5 size={40} className="w-20 mx-auto" />
                        <p className='my-4'>HTML</p>
                    </div>
                    <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                        <FaCss3Alt size={40} className="w-20 mx-auto" />
                        <p className='my-4'>CSS</p>
                    </div>

                    <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                        <SiTailwindcss size={50} className="w-20 mx-auto" />
                        <p className='my-4'>TAILWIND</p>
                    </div>
                    <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                        <SiFirebase size={40} className="w-20 mx-auto" />
                        <p className='my-4'>FIREBASE</p>
                    </div>
                    <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                        <FaGithub size={50} className="w-20 mx-auto" />
                        <p className='my-4'>GITHUB</p>
                    </div>
                    <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                        <FaAngular size={40} className="w-20 mx-auto" />
                        <p className='my-4'>ANGULAR</p>
                    </div>
                    <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                        <FaVuejs size={40} className="w-20 mx-auto" />
                        <p className='my-4'>VUE3 JS</p>
                    </div>
                    <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                        <SiGraphql size={40} className="w-20 mx-auto" />
                        <p className='my-4'>Graph QL</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Skills;