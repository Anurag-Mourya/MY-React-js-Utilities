import React from 'react';
import { useState, useEffect } from 'react';

// now we are going to dispatch the action from our store to call the add function.
import { add } from '../redux/reduxSlices/cartSlice';

// this is the hook to dispatch the action.
import { useDispatch, useSelector } from 'react-redux';

import {fetchApidata} from '../redux/reduxSlices/fetchAPIproducts';
import { STATUES } from '../redux/reduxSlices/fetchAPIproducts';


const ShowCartItem = () => {
    // const [data, setData] = useState([]);

    const dispatch = useDispatch();

    const {data, status} = useSelector(state=>state.product)

    useEffect(() => {

        // const fetchData = async () => {
        //     const responce = await fetch('https://fakestoreapi.com/products');
        //     const data = await responce.json();
        //     setData(data);
        // }

        // fetchData();

        dispatch(fetchApidata());


    }, []);

    const handleAdd = (items)=>{
        // now we are store these items on redux store...

        // now we are going to dispatch the action from our store to call the add function... dispatch(action(payload))
        dispatch(add(items))

    }

    if(status === STATUES.LOADING){
        return <h1>loading....</h1>
    }

    if(status === STATUES.ERROR){
        return <h1>Something went wrong....
        </h1>
    }


    return (
        <div style={{display: 'grid', gridTemplateColumns: 'repeat(5, 1fr)', gap: '30px'}}>
            {
                data.map((item) => {
                    return (
                            <div className="card text-center" key={item.id} style={{minHeight: '350px', }} >

                                <img src={item.image} alt="" className="card-img-top" style={{maxHeight: '200px'}}/>

                                <div className="card-body">
                                    <h4>{item.title}</h4>
                                    <h5>{item.price}</h5>
                                    
                                    <button className="btn btn-primary" onClick={()=>handleAdd(item)}>Add To Cart</button>
                                </div>

                            </div>

                    )
                })
            }
        </div>
    )
}

export default ShowCartItem;