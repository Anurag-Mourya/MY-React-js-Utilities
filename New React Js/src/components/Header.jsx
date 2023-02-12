import React, { useState } from 'react'
import { AiOutlineClose, AiOutlineMenu } from 'react-icons/ai'

function Header() {
    const [toggle, setToggle] = useState(false);

    return (
        <div className='bg-[#2699fb] p-4'>
            <div className="max-w-[1240px] mx-auto flex items-center justify-between">

                <div className="text-3xl font-bold">
                    AnuragMourya
                </div>

            {
                toggle? <AiOutlineClose onClick={() => setToggle(!toggle)} className='text-white text-2xl md:hidden block' />:<AiOutlineMenu onClick={() => setToggle(!toggle)} className='text-white text-2xl md:hidden block' />
            }
                

                <ul className='hidden md:flex gap-5 p-3 text-white'>
                    <li>Home</li>
                    <li>About</li>
                    <li>Contact</li>
                    <li>Resources</li>
                    <li>Services</li>
                </ul>
                {/* Responsive menu */}
                <ul className={`md:hidden gap-5 p-3 text-white fixed ${toggle?'left-[0%]':'left-[-100%]'} top-[83px] bg-black w-full h-screen duration-300`}>
                    <li className='p-3 border-b-2'>Home</li>
                    <li className='p-3 border-b-2'>About</li>
                    <li className='p-3 border-b-2'>Contact</li>
                    <li className='p-3 border-b-2'>Resources</li>
                    <li className='p-3 border-b-2'>Services</li>
                </ul>

            </div>
        </div>
    )
}

export default Header