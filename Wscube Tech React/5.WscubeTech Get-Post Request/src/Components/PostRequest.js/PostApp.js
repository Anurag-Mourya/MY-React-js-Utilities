
import Navbar from './Navbar';
// import Home from './Components/Home';
import Header from './Header';
// import About from './Components/About';
import PostContact from './PostContact';
// import SimplePost from './Components/SimplePost';
import Footer from './Footer';
import React, {Component} from 'react';


import {
    BrowserRouter,
    Routes,
    Route,
    // Navigate,
} from "react-router-dom";
export default class PostApp extends Component{
    constructor(props){
        super(props);
        this.setState = {

        }
    }

    render() {
    return (
        <>
            <BrowserRouter>
                <Navbar login={this.loginHnadler}/>
                <Header title='Blog Post' />
                <Routes>
                    <Route>
                        <Route path='/contact' element={<PostContact />} />
                    </Route>
                </Routes>
                <Footer />
            </BrowserRouter>

        </>
    )
}

}


