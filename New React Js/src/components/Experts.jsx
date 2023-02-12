import React from 'react';
import frainds from './assets/frainds.jpeg'

const Experts = () => {
    return (
        <div className='max-w-[1240px] mx-auto h-[300px] my-10 md:grid grid-cols-3 text-center'>
            <div className="h-[300px] col-span-2 w-[100%] p-4">
                <img src={frainds} alt="" className='w-[400px] h-[300px]' />
            </div>
            <div className=" h-[300px] col-span-1 p-4">
                <h1 className="text-[green] text-2xl font-bold">Learn from Experts</h1>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias dolore nemo voluptatum tempore eveniet. Harum, architecto accusantium? Repellendus voluptate eveniet quis ut!</p>
                <button className='bg-black text-white p-3 rounded m-2'>Get Started</button>
            </div>
        </div>
    )
}

export default Experts;