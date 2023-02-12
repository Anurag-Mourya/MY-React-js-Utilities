// This is the Sign up or creation of user in firebase using email and password......


import React, { useState } from 'react';
import {app} from '../Firebase';
import { getAuth, createUserWithEmailAndPassword  } from 'firebase/auth';
const auth = getAuth(app);

function EmailAndPass() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const submit = () =>{
        createUserWithEmailAndPassword(auth, email, password).then((responce)=>{
            alert('Success');
            console.log(responce);
        }).catch((error)=>{
            alert('error');
            console.log(error);
        })
    }
  return (
    <div className='text-center'>
        <h1>Sign Up or Register User With Email And Password</h1>

            <div className='my-5'>
                Email: <input onChange={(event)=>setEmail(event.target.value)} value={email} type="email" required placeholder='your email here'/>
            </div>

            <div className='my-5'>
                Password: <input onChange={(event)=>setPassword(event.target.value)} value={password} type="password" required placeholder='your password here'/>
            </div>
            <div className="my-5">
                <button onClick={submit}>Submit Now</button>
            </div>
    </div>
  )
}

export default EmailAndPass;



// This is the Sign In user whith register email and password...


// import React, { useState } from "react";
// import { app } from "../Firebase";
// import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
// const auth = getAuth(app);

// function EmailAndPass() {
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");

//   const submit = () => {
//     if (email === "") {
//       alert("enter your email");
//     }
//     if (password === "") {
//       alert("Enter Your Password");
//     } else {
//         signInWithEmailAndPassword(auth, email, password)
//         .then((responce) => {
//           alert("Success");
//           console.log(responce);
//         })
//         .catch((error) => {
//           alert("error");
//           console.log(error);
//         });
//     }
//   };
//   return (
//     <div className="text-center">
//       <h1>Sign In or Login User With Email And Password </h1>

//       <div className="my-5">
//         Email:{" "}
//         <input
//           onChange={(event) => setEmail(event.target.value)}
//           value={email}
//           type="email"
//           required
//           placeholder="your email here"
//         />
//       </div>

//       <div className="my-5">
//         Password:{" "}
//         <input
//           onChange={(event) => setPassword(event.target.value)}
//           value={password}
//           type="password"
//           required
//           placeholder="your password here"
//         />
//       </div>
//       <div className="my-5">
//         <button onClick={submit}>Submit Now</button>
//       </div>
//     </div>
//   );
// }

// export default EmailAndPass;
