import React from 'react'

export default  function Question (props) {
    return (
        <div>
            <div className="container w-50">
                <div className="col-mb-5 m-auto">
                    <div className="mt-3">
                        <div className="card text-left">
                            <div className="card-body">

                                <form action="" onSubmit={props.submit}>
                                    <div className="form-group">
                                        <label htmlFor="">
                                            <b>3.</b> What are you currentally doing ?
                                        </label>
                                        <br />

                                        <input type="radio" id='teacher' name='q1' autoComplete='off' value='teacher'/>
                                        <label htmlFor="teacher">Teacher</label> {'  '}

                                        <input type="radio" id='student' name='q1' autoComplete='off' value='student'/>
                                        <label htmlFor="student">Student</label>{'  '}

                                        <input type="radio" id='programmer' name='q1' autoComplete='off' value='programmer'/>
                                        <label htmlFor="programmer">Programmer</label> {'  '}

                                        <input type="radio" id='other' name='q4' autoComplete='off' value='other'/>
                                        
                                        <label htmlFor="other">Other</label>{'  '}
                                        <br />
                                        <input type="text" placeholder='Type here if not listed.' className='form-control bg-light'/>
                             
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="">
                                            <b>4.Plese rete our course.</b>
                                        </label>
                                        <br />
                                        <input type="radio" id='poor' name='q2' autoComplete='off' value='poor'/>
                                        <label htmlFor="poor">Poor</label>{'  '}

                                        <input type="radio" id='good' name='q2' autoComplete='off' value='good'/>
                                        <label htmlFor="good">Good</label>{' '}

                                        <input type="radio" id='excellent' name='q2' autoComplete='off' value='excellent'/>
                                        <label htmlFor="excellent">Excellent</label>{'  '}

                                    </div>
                                   
                                    <div className="form-group">
                                        <label htmlFor=""><b>5.</b> Write your review here</label>
                                        <textarea name="q3" id="" cols="50" rows="3" className="form-control" ></textarea>
                                    </div>
                                    <button className="btn btn-primary" type='submit'>Save</button>

                                </form>
                                <center>    
                                    <span className="badge badge-pill text-dark disabled" >1</span>
                                    <span className="badge badge-pill badge-primary ">2</span>
                                </center>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
