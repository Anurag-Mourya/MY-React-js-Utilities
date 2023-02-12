import React from 'react'
import Typed from 'react-typed';

const Banner = () => {
    return (
        <div>
            <div className="bg-[#2699fb] h-[400px]">
                <div className="md:text-6xl text-xl mx-auto max-w-[1240px] text-center pt-4">
                    Learn With Us
                </div>
                <div className="md:text-6xl text-xl mx-auto max-w-[1240px] d text-center font-bold mt-8 text-white">
                    Go With Us
                </div>
                <div className="md:text-6xl text-xl mx-auto max-w-[1240px] d text-center font-bold mt-8 text-white">
                Learn: &nbsp;
                    <Typed
                         strings={['Web Development', 'Android Development', 'Block Chain']}
                        typeSpeed={130}
                        loop={true}
                        backSpeed={150}/>
                    <Typed />
                </div>
            </div>
        </div>
    )
}

export default Banner;