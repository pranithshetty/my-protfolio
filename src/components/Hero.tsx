import { HiArrowRight } from "react-icons/hi"

const Hero = () => {

    return (
        <div className="w-full h-screen bg-gray-800">

            <div className="max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full">
                <p className="text-yellow-400">Hello, there! My name is</p>
                <h1 className="text-4xl sm:text-7xl text-gray-300">Pranith Shetty</h1>
                <h2 className="text-4xl sm:text-7xl text-gray-500">I'm a Full Stack Developer!</h2>
                <p className=" text-gray-500 py-4 max-w-[600px] text-justify">
                    I have a combined work experience of 3 years with MERN, MEVN and MEAN stacks. Crafting sleek solutions and conquering bugs, this seasoned dev ensures projects shine!

                </p>
                <div>
                    <button className="text-white group border border-white px-6 py-3 my-2 flex items-center hover:bg-yellow-400 hover:text-gray-700 hover:border-yellow-400">View Skills <span className="group-hover:rotate-90 duration-300">
                        <HiArrowRight className="ml-4" /></span> </button>
                </div>
            </div>

        </div>
    )
}

export default Hero