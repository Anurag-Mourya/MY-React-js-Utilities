import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

const Navbar = () => {

    // here state is an object that we want to subscribe.here cart is a part of object state...
    // useSelector hook is subscribe the object data under the hood.. 
    const items = useSelector((state)=>state.cart);
    return (
        <>
            <div className="d-flex justify-content-between bg-warning text-dark">
                <div className="d-flex">
                    <Link className="m-4 navbar-brand" to='/'>SHOPIFREE STORE</Link>
                    <Link className="font-weight-bold" to='/' style={{marginTop: '29px'}}>Home</Link>
                </div>

                <div className="d-flex">
                    <Link className="m-4" to='/addedCart'>SHOW ADDED CART</Link>
                    <Link className="m-4 font-weight-bold" to='/'>CART ITEM: {items.length}</Link>
               
                </div>
            </div>
        </>
    )
}

export default Navbar