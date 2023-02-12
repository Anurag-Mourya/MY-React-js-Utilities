// // import axios from 'axios';
// import React, {useState, useEffect} from 'react';
// import { add } from '../store/cartSlice';
// import { useDispatch } from 'react-redux';

// const Products = () => {
    
//     const dispatch = useDispatch();
//     const [products, setProducts] = useState([]);

//     useEffect(() => {
//     //     // axios.get('https://fakestoreapi.com/products')

//     //     //     .then((responce) => {
//     //     //         setProducts(responce);
//     //     //         console.log(products);
//     //     //     })

    
//             // By fetch API method....
//         const fetchProducts = async () =>{
//             const res = await fetch('https://fakestoreapi.com/products');
//             const data = await res.json();
//             setProducts(data);
//         }
//         fetchProducts();


//     }, []);

//     const handleAdd = (product) =>{

//         dispatch(add(product));

//     }
//   return (
//     <div className='productsWrapper'>
//         {
//         products.map((product)=>{

//             return(
//                 <div className='card' key={product.id}>

//                 <img src={product.image} alt="" />  
                
                
//                 <h4 className='head'>
                    
//                     {product.title.slice(0, 50)}...
                    
//                  </h4>
//                 <h5>{product.price}</h5>
//                 <button className='btn btnProducts' onClick={()=>handleAdd(product)}>Add To Cart</button>

//                  </div>
//             )

//         })

//         }
//         </div>
//   )
// }

// export default Products;



// By using API as a store....
import React, { useState, useEffect } from 'react';
import { add } from '../store/cartSlice';
import { useDispatch, useSelector} from 'react-redux';
import { fetchProducts } from '../store/productAPISlice';
import { STATUES } from '../store/productAPISlice';
const Products = () => {
 
    const {data, status} = useSelector(state=>state.product)
    // we can change the name of data as products and all the array is stored in products and map funtion is applied in this object...
      // const {data: products, status} = useSelector(state=>state.product)

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchProducts())

    }, []);

    if(status === STATUES.LOADING){

        return <h1>Loading....</h1>
    }  
    if(status === STATUES.ERROR){
        return <h1>Something went wrong.....</h1>
    }


    const handleAdd = (product) => {
        dispatch(add(product));
    }


    return (
        <div className='productsWrapper'>
            {
                data.map((product) => {

                    return (
                        <div className='card' key={product.id}>

                            <img src={product.image} alt="" />
                            <h4>{product.title}</h4>
                            <h5>{product.price}</h5>
                            <button className='btn' onClick={() => handleAdd(product)}>Add To Cart</button>

                        </div>
                    )

                })

            }
        </div>
    )
}

export default Products;