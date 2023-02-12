import React, { useState } from 'react';

export const App_2 = () => {

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [address, setAddress] = useState('');
    const [allData, setAllData] = useState([]);

    const [edit, setEdit] = useState(false);

    const submitHandler = (e) => {
        e.preventDefault();

        const allObj = {
            name,
            email,
            address,
        }
        setAllData([...allData, allObj]);
    }

    const editHandler = () =>{
        setEdit(true)
    }

    const deleteHandler = (mapData) =>{

        if(window.confirm('Are You Sure to Delete')){
            setAllData( allData.filter((item)=>item !== mapData ));
        }

        console.log(mapData);//stored object...
        console.log(allData);//stored object inside the array

              // or
              
        // allData.filter((item)=>item !== mapData);
        // setAllData([...copy]);
    }
   
    return (
        <div className="container">
            <h1>This is the CURD Application</h1>
            <form action="" onSubmit={submitHandler}>
                Name:  <input type="text" onChange={(e) => setName(e.target.value)} value={name} />
                <br />Email:  <input type="email" onChange={(e) => setEmail(e.target.value)} value={email} />
                <br />Address: <input type="address" onChange={(e) => setAddress(e.target.value)} value={address} />
                <br />
                <br /><button type='submit'> {edit? 'Update': 'Add'} </button>
            </form>

            <div className="container mt-5">

                {
                    allData.map((mapData, index) => {
                        return (
                            <div className="container" key={index}>
                                <div className="row">
                                    <div className="col-4">name: {mapData.name}</div>
                                    <div className="col-4">email: {mapData.email} </div>
                                    <div className="col-4">address: {mapData.address} </div>
                                </div>

                                <div className="row">
                                    <div className="col-4"><button onClick={()=>editHandler()}>Edit</button></div>
                                    <div className="col-4"><button onClick={()=>deleteHandler(mapData)}>Delete</button></div>
                                </div>
                            </div>
                        )
                    })


                }


            </div>
        </div>
    )
}