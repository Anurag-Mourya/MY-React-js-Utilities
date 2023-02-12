import React from 'react'
import '../Navbar.css';
import { useNavigate,  } from "react-router-dom";

function Hambargar() {

    let navigate = useNavigate();

    const walletHandler = () =>{
        return navigate('/wallet');
    }
    return (
        <div>
            <div id="menuToggle" style={{ zIndex: '200px' }}>
                <input type="checkbox" />
                <span></span>
                <span></span>
                <span></span>
                <ul id="menu">
                    <a href="#"><li>Menu</li></a>
                    <a href="#"><li> <iconify-icon icon="clarity:home-line" width="30" height="27"></iconify-icon>  Home</li></a>
                    <a href="#"><li><iconify-icon icon="bytesize:portfolio" width="30" height="27"></iconify-icon>  Portfolio</li></a>
                    <a href="#"><li><iconify-icon icon="arcticons:invest" width="30" height="27"></iconify-icon>  Invest</li></a>
                    <a href="#" onClick={walletHandler}><li><iconify-icon icon="carbon:wallet" width="30" height="27"></iconify-icon>  Wallet</li></a>
                    <a href="#"><li><iconify-icon icon="bx:support" width="30" height="27"></iconify-icon>  Support</li></a>
                   
                </ul>
            </div></div>
    )
}

export default Hambargar