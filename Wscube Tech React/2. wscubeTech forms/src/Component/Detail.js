// import React from 'react'

// export default function Detail() {
//     return (
//         <div>
//             <div className="container w-50  ">
//                 <div className="col-mb-5 m-auto">
//                     <div className="mt-3">
//                         <div className="card text-left">
//                             <div className="card-body">

//                                 <form action="">
//                                     <div className="form-group">
//                                         <label htmlFor="">
//                                             <b>1.</b> Name
//                                         </label>

//                                         <input type="text" name='name' className='form-control' placeholder='Plese Enter Your Name' autoComplete='off' />
//                                     </div>
                                   
//                                     <div className="form-group">
//                                         <label htmlFor="">
//                                             <b>2.</b>Email
//                                         </label>

//                                         <input type="text" name='email' className='form-control' placeholder='Plese Enter Your Email' autoComplete='off' />
//                                     </div>
//                                     <button className="btn btn-primary" type='submit'>Next</button>
//                                 </form>

//                                 <center>
//                                     <span className="badge badge-pill badge-primary m-1">1</span>
//                                     <span className="badge badge-pill disabled text-dark">2</span>
//                                 </center>

//                             </div>
//                         </div>
//                     </div>
//                 </div>
//             </div>
//         </div>
//     )
// }



// 1.Handling the onSubmit event throught props on form...


import React from 'react'

export default function Detail(props) {
    return (
        <div>
            <div className="container w-50  ">
                <div className="col-mb-5 m-auto">
                    <div className="mt-3">
                        <div className="card text-left">
                            <div className="card-body">

                                <form action="" onSubmit={props.submit}>
                                    <div className="form-group">
                                        <label htmlFor="">
                                            <b>1.</b> Name
                                        </label>

                                        <input type="text" required name='name' className='form-control' placeholder='Plese Enter Your Name' autoComplete='off' />
                                    </div>
                                   
                                    <div className="form-group">
                                        <label htmlFor="">
                                            <b>2.</b>Email
                                        </label>

                                        <input type="email" required name='email' className='form-control' placeholder='Plese Enter Your Email' autoComplete='off' />
                                    </div>
                                    <button className="btn btn-primary" type='submit'>Next</button>
                                </form>

                                <center>
                                    <span className="badge badge-pill badge-primary m-1">1</span>
                                    <span className="badge badge-pill disabled text-dark">2</span>
                                </center>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}



