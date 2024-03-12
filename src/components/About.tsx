const About = () => {
    return (
        <div id="about" className='w-full h-screen bg-[#0a192f] text-gray-300'>
            <div className='flex flex-col justify-center items-center w-full h-full'>
                <div className='max-w-[1000px] w-full grid grid-cols-2 gap-8'>
                    <div className='sm:text-right pb-8 pl-4'>
                        <p className='text-4xl font-bold inline border-b-4 border-yellow-400'>
                            About
                        </p>
                    </div>
                    <div></div>
                </div>
                <div className='max-w-[1000px] w-full grid sm:grid-cols-2 gap-8 px-4'>
                    <div className='sm:text-right text-4xl font-bold'>
                        <p>Hi! Nice to meet you. Please take a look around.</p>
                    </div>
                    <div>
                        <p>Imagine having a software virtuoso at your beck and call, dedicated to crafting exceptional digital solutions. From individuals and small businesses to large enterprise corporations, I specialize in developing software tailored to your unique needs. Whether you're seeking a streamlined application or a robust enterprise system, I'm here to transform your vision into reality. With me by your side, excellence is not just a goal—it's the standard</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default About