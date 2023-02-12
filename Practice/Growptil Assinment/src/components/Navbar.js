import React from 'react'
import './Navbar.css';
import Wallet from './pages/Wallet';



const Navbar = () => {
    return (
        <>
            <nav className='nav' role="navigation">

                <div className="nav-header">
                    <div className="nav-title">
                        Growptial
                    </div>
                </div>

                <div className="nav-links">
                    <a href="/" target="_blank"> Home</a>
                    <a href="/" target="_blank">About</a>
                    <a href="/" target="_blank">Service</a>
                    <a href="" target="_blank">Contact Us</a>
                </div>

            </nav>
        </>
    )
}

export default Navbar