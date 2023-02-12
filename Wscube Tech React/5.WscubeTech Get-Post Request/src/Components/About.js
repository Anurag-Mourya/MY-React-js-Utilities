// // import React from 'react';
// import React, {useState} from 'react';

// export default function About() {
//     const [name, setName] = useState('Anurag Mourya');
//   return (
//     <main className="mb-4">
//             <div className="container px-4 px-lg-5 text-center">
//                 <h1 >This is about me</h1>


//                 <button type='button' onClick={() => setName('Amit Kumar Mouray')}>        {name}</button>
//                 {/* here wher user click on btn the name state is changed only one this code.. */}


//                 <div className="row gx-4 gx-lg-5 justify-content-center">
//                     <div className="col-md-10 col-lg-8 col-xl-7">
//                         <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Saepe nostrum ullam eveniet pariatur voluptates odit, fuga atque ea nobis sit soluta odio, adipisci quas excepturi maxime quae totam ducimus consectetur?</p>
//                         <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eius praesentium recusandae illo eaque architecto error, repellendus iusto reprehenderit, doloribus, minus sunt. Numquam at quae voluptatum in officia voluptas voluptatibus, minus!</p>
//                         <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aut consequuntur magnam, excepturi aliquid ex itaque esse est vero natus quae optio aperiam soluta voluptatibus corporis atque iste neque sit tempora!</p>
//                     </div>
//                 </div>
//             </div>
//         </main>
//   )
// }


// import React from 'react';
import React, {useState} from 'react';

export default function About() {
    const [name, setName] = useState('Anurag Mourya');
    const [old, setOld] = useState(1);//here null,false and zero is represent false and it is working...
  return (
    <main className="mb-4">
            <div className="container px-4 px-lg-5 text-center">
                <h1 >This is about me</h1>


                <button type='button' onClick={() => setName('Amit Kumar Mouray')}>        {name}</button>
    <br></br>
                <span className='btn btn-primary mt-4' onClick={() =>{
                    setOld(!old);//! old means toggle old data that is false to true true to false#;
                    console.log(old);
                }}>
                     old Post
                </span>
                
                {/* here wher user click on btn the name state is changed only one this code.. */}

                {/* {old ? 'old is true' : ''} */}

                {old ?

                <div className="row gx-4 gx-lg-5 justify-content-center">
                    <div className="col-md-10 col-lg-8 col-xl-7">
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Saepe nostrum ullam eveniet pariatur voluptates odit, fuga atque ea nobis sit soluta odio, adipisci quas excepturi maxime quae totam ducimus consectetur?</p>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eius praesentium recusandae illo eaque architecto error, repellendus iusto reprehenderit, doloribus, minus sunt. Numquam at quae voluptatum in officia voluptas voluptatibus, minus!</p>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aut consequuntur magnam, excepturi aliquid ex itaque esse est vero natus quae optio aperiam soluta voluptatibus corporis atque iste neque sit tempora!</p>
                    </div>
                </div>

                 : ''}
            </div>
        </main>
  )
}
