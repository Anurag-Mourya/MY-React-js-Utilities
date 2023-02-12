// import React, { useState } from 'react';

// const Crud = () => {
//     const [name, setName] = useState('');
//     const [email, setEmail] = useState('');
//     const [address, setAddress] = useState('');

//     const [user, setUser] = useState([]);

//     const [edit, setEdit] = useState(false);

//     // select the id of current user..

//     const [active, setAcitve] = useState(null);

//     const submitusers = (e) => {
//         e.preventDefault();
//         const users = {
//             name,
//             email,
//             address,
//         }
//         // setUser([...user, users]);

//         if(edit){
//             // update user...
//             let copy =  user;
//             Object.assign(copy[active], users);
//             setUser([...copy]);
//             setEdit(false); 
//             setAcitve(null);
//         }else{
//             setUser([...user, users]);
//         }

//         setName('');
//         setEmail('');
//         setAddress('');

//     }

//     const onEditClick = (index) =>{
//         const users = user[index]
//         setName(users.name);
//         setEmail(users.email);
//         setAddress(users.address);
//         setEdit(true);
//         setAcitve(index);
//     }

//     const deleteUser = (user1) =>{
//         if(window.confirm('Are You Want to Delete')){

//             let copy = user.filter((item) => item !== user1)    
//             setUser([...copy]);
//         }


//     }
//     return (
//         <div className="container ">

//             <div className="row justify-content-center">
//                 <div className="col-xs-12 col-sm-10 col-md-8 col-lg-6">
//                     <h1 className='text-center'>React CRUD Application</h1>
//                     <form onSubmit={submitusers}>
//                         <div className="form-group">
//                             <label htmlFor="">Name: </label>
//                             <input type="text" className="form-control" onChange={(e) => setName(e.target.value)} value={name} />
//                         </div>

//                         <div className="form-group">
//                             <label htmlFor="">Email: </label>
//                             <input type="email" className="form-control" onChange={(e) => setEmail(e.target.value)} value={email} />
//                         </div>

//                         <div className="form-group">
//                             <label htmlFor="">Address: </label>
//                             <input type="text" className="form-control" onChange={(e) => setAddress(e.target.value)} value={address} />
//                         </div>
//                         <button className="btn btn-primary form-control mt-3">{edit? 'Update' : 'Add'}</button>
//                     </form>
//                 </div>
//             </div>

//             <table className="table table-bordered mt-4">
//                 <thead>
//                     <tr>
//                         <th>Name</th>
//                         <th>Email</th>
//                         <th>Address</th>
//                         <th>Edit</th>
//                         <th>Delete</th>
//                     </tr>
//                 </thead>
//                 <tbody>
//                     {
//                         user.map((user1,index) => {
//                             return (
//                                 <tr key={index}>
//                                     <td>{user1.name}</td>
//                                     <td>{user1.email}</td>
//                                     <td>{user1.address}</td>
//                                     <td><button className='btn btn-primary' onClick={()=> onEditClick(index)}>Edit</button>
//                                     </td>
//                                     <td><button className='btn btn-danger' onClick={() =>deleteUser(user1)}>Delete</button>
//                                     </td>
//                                 </tr>
//                             )
//                         })
//                     }
//                 </tbody>
//             </table>
//         </div>
//     )
// }

// export default Crud;


import React, { useState } from 'react';
import CrudData from './CrudData';

const Crud = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [address, setAddress] = useState('');

    const [allDatas, setAllDatas] = useState([]);

    // console.log(allDatas);

    const submitHandler = (e) => {
        e.preventDefault();
        const allData = {
            names: name,
            emails: email,
            addresses: address,
        }

        setAllDatas([...allDatas, allData]);
        // console.log(allDatas);
    }
    return (
        <>
            <div className="max-w-[1240px]  mx-auto p-6">
                <form action="" className='text-center' onSubmit={submitHandler}>
                    <div className='p-4'>
                        <label htmlFor="">Name:</label>
                        <input type="text" placeholder='Enter Your Name' onChange={(e) => setName(e.target.value)} value={name} />
                    </div>
                    <div className='p-4'>
                        <label htmlFor="">Email:</label>
                        <input type="text" placeholder='Enter Your Email' className='' onChange={(e) => setEmail(e.target.value)} value={email} />
                    </div>
                    <div className='p-4'>
                        <label htmlFor="">Address:</label>
                        <input type="text" placeholder='Enter Your Address' onChange={(e) => setAddress(e.target.value)} value={address} />
                    </div>
                    <div>
                        <button>Submit Now</button>
                    </div>
                </form>
            </div>

            <div className="">
                <div className=""></div>
            </div>
            <CrudData allDatas={allDatas} setAllDatas={setAllDatas} />
        </>
    )
}

export default Crud;