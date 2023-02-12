import React, {useState, useEffect} from 'react'
import { useSelector } from 'react-redux'
import { useDispatch } from 'react-redux';
import { remove } from '../../redux/reduxSlices/cartSlice';

const AddedCart = () => {
    const [price, setPrice] = useState(0);
    const items = useSelector((state)=> state.cart)

    const dispatch = useDispatch();

    const totalPrice = () =>{
        let price = 0;
        items.map((prices)=>{
            price = price + prices.price;
        });

        setPrice(price);
    }

   useEffect(()=>{
    totalPrice()
   }, [totalPrice]);

   const deleteHandler = (id) =>{
    dispatch(remove(id));
   }
  return (
    <div>
        {
            items.map((item)=>{
                return (
                    <div className="card text-center" key={item.id} style={{minHeight: '350px', }} >

                        <img src={item.image} alt="" className="card-img-top" style={{maxHeight: '200px'}}/>

                        <div className="card-body">
                            <h4>{item.title}</h4>
                            <h5>{item.price}</h5>
                            <button className="btn btn-primary" onClick={()=>deleteHandler(item.id)}>Delete</button>
                        </div>
                    </div>

            )
            })
        }
        <div><h4>Total price: ${price}</h4></div>
    </div>
  )
}

export default AddedCart;