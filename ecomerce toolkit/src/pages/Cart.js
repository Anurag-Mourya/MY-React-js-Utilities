import React, {useState, useEffect} from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { remove } from '../store/cartSlice';

const Cart = () => {
  const items = useSelector(state=>state.cart);
  const dispatch = useDispatch()
  const removeHandler = ((removeItem)=>{
      dispatch(remove(removeItem))
  })
  return (
    <div>
      <h3>Cart</h3> 
      <div className="cartWrapper">
        
      {
        items.length == 0 ? <h1 className='text-center bg-dark text-danger fs-1 p-3 mt-5' >No Data Added</h1> : 
        items.map((product)=>{
          return(
            <div className="cartCard">
              <img src={product.image} alt="" />
              <h5 className='head'>{product.title}</h5>
              <h5>{product.price}</h5>
              <button className='btn' onClick={()=>removeHandler(product.id)}>Remove</button>
            </div>
          )
        })
      }
      </div>
    </div>
  )
}

export default Cart