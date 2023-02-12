import React, { useState, useEffect } from "react";//because we use some task when component completely loaded and rende method is called...
import { app } from "../Firebase";
import { getAuth, onAuthStateChanged, signOut } from "firebase/auth";
import EmailAndPass from "./EmailAndPass";
const auth = getAuth(app);



function Logout() {
    const [user, setUser] = useState(null);
 
    useEffect(()=>{
      onAuthStateChanged(auth, (user)=>{
        if(user){
          console.log('hello', user);//yes you are login
          setUser(user);
        }else{
          //user is logout//
          console.log('you are logout')
          setUser(null);
        }
      })
    }, [])
  
    return (
     
   <div className="text-center">
      {
      user===null? <EmailAndPass/> : 
  
     <div>
      <h1>hello! {user.email}</h1>
      <button onClick={()=> signOut(auth)}>Log Out</button> 
  
      </div>
       }
      
   </div>
    );
}

export default Logout;
