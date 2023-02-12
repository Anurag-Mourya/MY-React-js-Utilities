
import React, { useRef } from 'react';
import App from './App'
function Login() {
  const email = useRef()
  const password = useRef()
  const getEmail = localStorage.getItem("emailData")
  const getpassword = localStorage.getItem("passwordData")

  const submitHandler = (e) => {
    if (email.current.value === "eve.holt@reqres.in" && password.current.value === "pistol") {
      localStorage.setItem("emailData", "eve.holt@reqres.in");
      localStorage.setItem("passwordData", "pistol");
    }
    // e.preventDefault();
  }
  return (
    <div>
      {
        getEmail && getpassword ? <App /> :
          <div className="row align-center m-auto container my-5 py-5">
           
            <div className="col-6 m-auto container">
            <div className="mb-5 bg-danger text-center text-dark rounded"><h1>Login And Enter</h1></div>
              <form onSubmit={submitHandler}>            
                <div className="form-outline mb-4">
                <label className="form-label" for="form2Example1">Email address: </label>
                  <input type="email" id="form2Example1" className="form-control" ref={email} placeholder='enter your email'/>       
                </div>
                <div className="form-outline mb-4">
                <label className="form-label" for="form2Example2">Password: </label>
                  <input placeholder='enter your password' type="password" id="form2Example2"  className="form-control" ref={password} />               
                </div>
                <button className="btn btn-primary btn-block mb-4">Log In</button>
              </form>
            </div>
          </div>
      }
    </div>
  )
}
export default Login