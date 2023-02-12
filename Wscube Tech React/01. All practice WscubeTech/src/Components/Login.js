import React, { Component } from 'react'

export default class Login extends Component {
    render() {
        return (
            <div>
                <div className='border w-50 m-auto form-control mt-4 p-4'>
                    <h1 className='text-center'>User Login</h1>
                    <form action="" >

                        <div className='form-group'>
                            <label htmlFor="">Email: </label>
                            <input type="email" className='form-control m-3' name='loginEmail' required/>
                        </div>

                        <div className='form-group'>
                            <label htmlFor="">Password: </label>
                            <input type="password" className='form-control m-3' name='loginPassword' required/>
                        </div>

                        <button type='submit' className='btn btn-primary m-3' onClick={this.loginSubmit}>Login Now</button>
                    
                    </form>

                </div>
            </div>
        )
    }
    
}
