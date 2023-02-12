import React, { useState } from 'react'

const Practice = () => {
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [address, setAddress] = useState('')
    const [phone, setPhone] = useState('')
    const [info, setInfo] = useState([])
    const [edit, setEdit] = useState(false)
    const [activeIndex, setActiveIndex] = useState(null)
  
    // let edit = false;


    const submitHandler = (e) => {
        e.preventDefault();

        if (name == '') {
            alert('please fill the Name')
        } else if (email == '') {
            alert('Plese fill the Email')
        }
        else if (address == '') {
            alert('Plese fill the Address')
        }
        else if (phone == '') {
            alert('Plese fill the Phone')
        }

        else {

            let allDatas = {
                name,
                email,
                address,
                phone,
            }

            if (edit) {
                let copy = info;
                Object.assign(copy[activeIndex], allDatas);
                setInfo([...copy]);
                setEdit(false);
                setActiveIndex(null);

                setTimeout(() => {
                    alert('Data updated Successfully')
                }, 50)


            } else {
                setInfo([...info, allDatas]);
                setTimeout(() => {
                    alert('Data Added Successfully')
                }, 50)
            }

            setAddress('')
            setName('')
            setEmail('')
            setPhone('')
        }

    }

    const editHandler = (index) => {

        let edit = info[index];
        setAddress(edit.address)
        setName(edit.name)
        setEmail(edit.email)
        setPhone(edit.phone)
        setEdit(true);
        setActiveIndex(index);

    }

    const deleteHanler = (fetchData) => {

        let del = window.confirm('Are you shoure want to delete');

        if (del) {
            let copy = info.filter((del) => del !== fetchData);
            setInfo([...copy])
        }
    }

   

    return (
        <>
           
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-lg-6">
                        <form action="" onSubmit={submitHandler}>
                            <div className="form-group">
                                <label htmlFor="">Name: </label>
                                <input type="text" className='form-control' onChange={(e) => setName(e.target.value)} value={name} />
                            </div>
                            <div className="form-group">
                                <label htmlFor="">Email: </label>
                                <input type="text" className='form-control' onChange={(e) => setEmail(e.target.value)} value={email} />
                            </div>
                            <div className="form-group">
                                <label htmlFor="">Address: </label>
                                <input type="text" className='form-control' onChange={(e) => setAddress(e.target.value)} value={address} />
                            </div>
                            <div className="form-group">
                                <label htmlFor="">Phone: </label>
                                <input type="number" className='form-control' onChange={(e) => setPhone(e.target.value)} value={phone} />
                            </div>

                            <button className="form-control btn btn-primary mt-4">{edit ? 'Update' : 'Add'}</button>
                        </form>
                    </div>
                </div>

                <div className="container mt-4">
                    <table className='table table-bordered mt-4 text-center' >
                        <thead>
                            <tr>
                                <th>Name</th>
                                <th>Email</th>
                                <th>Address</th>
                                <th>Phone</th>
                                <th>Edit</th>
                                <th>Delete</th>
                            </tr>
                        </thead>

                        {

                            info.map((fetchData, index) => {
                                return (
                                    <>
                                        <tbody key={index}>
                                            <tr>
                                                <td>{fetchData.name}</td>

                                                <td>{fetchData.email}</td>

                                                <td>{fetchData.address}</td>

                                                <td>{fetchData.phone}</td>

                                                <td><button className="btn btn-primary" onClick={() => editHandler(index)}>Edit</button></td>

                                                <td><button className="btn btn-danger" onClick={() => deleteHanler(fetchData)}>Delete</button></td>
                                            </tr>
                                        </tbody>
                                    </>
                                )
                            })

                        }


                    </table>
                </div>


            </div>
        </>
    )
}

export default Practice;