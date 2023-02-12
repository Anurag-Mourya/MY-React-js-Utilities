// import React from 'react'

// export default function Register(props) {
//     return (
//         <div >
//             <div className='border w-50 m-auto form-control mt-4 p-4'>
//                 <h1 className='text-center'>User Register</h1>
//                 <form action="" onSubmit={props.submit}>
//                     <div className='form-group'> <label htmlFor="">Name: </label>
//                         <input className='form-control m-3' type="text" name='name' /></div>

//                     <div className='form-group'> <label htmlFor="">Email: </label>
//                         <input type="email" className='form-control m-3' name='email' /></div>

//                     <div className='form-group'> <label htmlFor="">Password: </label>
//                         <input type="password" className='form-control m-3' name='password' /></div>
//                     <button type='submit' className='btn btn-primary m-3'>Register Now</button>
//                 </form>

//             </div>
//         </div>
//     )
// }


import React, { Component } from 'react'

export default class Register extends Component {
    render() {
        return (
            <div >
                <div className='border w-50 m-auto form-control mt-4 p-4'>
                    <h1 className='text-center'>User Register</h1>
                    <form action="" onSubmit={this.props.regSubmit} autoComplete="off">
                        <div className='form-group'> <label htmlFor="">Name: </label>
                            <input className='form-control m-3' type="text" name='name' required value={name}/></div>
                        <div className='form-group'> <label htmlFor="">Email: </label>
                            <input type="email" className='form-control m-3' name='email' required/></div>

                        <div className='form-group'> <label htmlFor="">Password: </label>
                            <input type="password" className='form-control m-3' name='password' required/></div>
                        <button type='submit' className='btn btn-primary m-3'>Register Now</button>
                    </form>

                </div>
            </div>
        )
    }
}

