import React from 'react';
import axios from 'axios';

export default function PostContact () {
    const submitHandler = (event) => {
        event.preventDefault();
        const title = event.target.title.value;
        const body = event.target.body.value;
        const auther = event.target.auther.value;
       const data = {title,body,auther};

        axios.post('http://jsonplaceholder.typicode.com/posts',{
            // title, body, auther//type manually...
            data
        })

        .then(responce =>{
            console.log(responce);
            event.target.reset();//for submination of  form..
        })
        .catch(error =>{
            console.log(error);
        });
    }
    return (
        <main className="mb-4">
            <div className="container px-4 px-lg-5">
                <div className="row gx-4 gx-lg-5 justify-content-center">
                    <div className="col-md-10 col-lg-8 col-xl-7">
                        <p>Want to get in touch? Fill out the form below to send me a message and I will get back to you as soon as possible!</p>
                        <div className="my-5">

                            <form id="contactForm" data-sb-form-api-token="API_TOKEN" onSubmit={submitHandler}>
                                <div className="form-floating">
                                    <input className="form-control" id="title" type="text" placeholder="Enter your name..." data-sb-validations="required" name='title' />
                                    <label htmlFor="title">Name</label>
                                    <div className="invalid-feedback" data-sb-feedback="name:required">A name is required.</div>
                                </div>
                                <div className="form-floating">
                                    <input className="form-control" id="body" type="text" placeholder="Enter body..." data-sb-validations="required,email" name='body' />
                                    <label htmlFor="body">Type Body </label>

                                </div>

                                <div className="form-floating">
                                    <input className="form-control" id="auther" type="text" placeholder="Enter auther..." data-sb-validations="required,email" name='auther' />
                                    <label htmlFor="auther">Auther </label>

                                </div>
                                <br></br>
                                <div className="d-none" id="submitSuccessMessage">
                                    <div className="text-center mb-3">
                                        <div className="fw-bolder">Form submission successful!</div>
                                        To activate this form, sign up at
                                        <br />
                                        <a href="https://startbootstrap.com/solution/contact-forms">https://startbootstrap.com/solution/contact-forms</a>
                                    </div>
                                </div>
                                <div className="d-none" id="submitErrorMessage"><div className="text-center text-danger mb-3">Error sending message!</div></div>
                                <button className="btn btn-primary text-uppercase " id="submitButton" type="submit">Send</button>


                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    )
}
