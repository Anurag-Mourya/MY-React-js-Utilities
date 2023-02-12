import React from 'react';
import { app } from './Firebase.js';
import { getDatabase, ref, set } from 'firebase/database';
const database = getDatabase(app);
function RealtimeDatabase() {
     const putData = () =>{
        set(ref(database, 'users/Anurag-Mourya'),{
            Name: 'Anurag',
            Age: 23,
            Course: 'React-JS',
        });
     }
  return (
    <div>
        <h1 className='text-center'>Real Time DataBase</h1>
        <div className="text-center">
            <button onClick={putData}>Show Data</button>
        </div>
    </div>
  )
}

export default RealtimeDatabase