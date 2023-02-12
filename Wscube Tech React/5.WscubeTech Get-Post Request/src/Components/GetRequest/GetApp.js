
// import Navbar from './Components/Navbar';
// import Home from './Components/Home';
// import Header from './Components/Header';
// import About from './Components/About';
// import Contact from './Components/Contact';
// import SimplePost from './Components/SimplePost';
// import Footer from './Components/Footer';
// import React, {Component} from 'react';
// import axios from 'axios';

// import {
//     BrowserRouter,
//     Routes,
//     Route,
//     Navigate,
// } from "react-router-dom";
// export default class App extends Component{
//     constructor(props){
//         super(props);
//         this.setState = {

//         }
//     }
//     loginHnadler = (e) => {
//         e.alert();
//     }

//     componentDidMount(){
//         axios.get('http://jsonplaceholder.typicode.com/posts')//axios getting some time to taken this data and js is go with line by line. then we donot utilize the responce of this api..
//         // to handel this case axios provided a promise
//         .then((responce)=>{
//             // console.log(responce);
//             console.log(responce.data);
//         })//represent success...the given request is hit successfully..
//         //other wise go to .catch()
//         .catch((error)=>{
//             console.log(error);
//         })//represent failure
//     }
//     render() {
//     return (
//         <>
//             <BrowserRouter>
//                 <Navbar login={this.loginHnadler}/>
//                 <Header title='Blog Post' />
//                 <Routes>
//                     <Route>
//                         <Route path='/' element={<Home />} />
//                         <Route path='/about' element={<About />} />
//                         <Route path='/contact' element={<Contact />} />
//                         <Route path='/post' element={<SimplePost />} />
//                         <Route path='/*' element={<Navigate to='/' />} />
//                     </Route>
//                 </Routes>
//                 <Footer />
//             </BrowserRouter>

//         </>
//     )
// }

// }





// 2. Displaying and fetch the data form API call...

// import Navbar from './Components/Navbar';
// import Home from './Components/Home';
// import Header from './Components/Header';
// import About from './Components/About';
// import Contact from './Components/Contact';
// import SimplePost from './Components/SimplePost';
// import Footer from './Components/Footer';
// import React, { Component } from 'react';
// import axios from 'axios';

// import {
//     BrowserRouter,
//     Routes,
//     Route,
//     Navigate,
// } from "react-router-dom";
// export default class App extends Component {
//     constructor(props) {
//         super(props);
//         this.state = {
//             post: null,
//         }
//     }
//     loginHnadler = (e) => {
//         e.alert();
//     }

//     componentDidMount() {
//         axios.get('http://jsonplaceholder.typicode.com/posts')
//             .then((responce) => {               
//                 // console.log(responce.data);
//                 this.setState({post: responce.data},()=>{
//                     console.log(this.state);
//                 });
//             })
//             .catch((error) => {
//                 console.log(error);
//             })
//     }
//     render() {
//         return (
//             <>
//                 <BrowserRouter>
//                     <Navbar login={this.loginHnadler} />
//                     <Header title='Blog Post' />
//                     <Routes>
//                         <Route>
//                             <Route path='/' element={<Home />} />
//                             <Route path='/about' element={<About />} />
//                             <Route path='/contact' element={<Contact />} />
//                             <Route path='/post' element={<SimplePost />} />
//                             <Route path='/*' element={<Navigate to='/' />} />
//                         </Route>
//                     </Routes>
//                     <Footer />
//                 </BrowserRouter>

//             </>
//         )
//     }

// }


// 3. Now the data is show in Home component from PostPreview component...


import Navbar from './Navbar';
import Home from './Home';
import Header from '../Header';
import About from '../About';
import Contact from '../PostRequest.js/PostContact';
import SimplePost from '../SimplePost';
import Footer from '../Footer';
import React, { Component } from 'react';
import axios from 'axios';
import PostPreview from './PostPreview';

import {
    BrowserRouter,
    Routes,
    Route,
    Navigate,
} from "react-router-dom";

export default class GetApp extends Component {
    constructor(props) {
        super(props);
        this.state = {
            post: null,
        }
    }
    loginHnadler = (e) => {
        e.alert();
    }

    componentDidMount() {
        axios.get('http://jsonplaceholder.typicode.com/posts')
            .then((responce) => {               
                // console.log(responce.data);
                this.setState({post: responce.data},()=>{
                    console.log(this.state);
                });
            })
            .catch((error) => {
                console.log(error);
            })
    }
    render() {

        // let posts = null;//must be declare and assign outside of the if condition...
        // if(this.state.post != null){
        //     posts = this.state.post.map(post =>{
        //         return <PostPreview key={post.id} title={post.title} body={post.body}/>//these assignment is fetch
        //     }); 
        //     // in posts stored-- all the 100 times data inside the PostPreview component..because of map function...
        // }


        // we want to see limited data ....
        let posts = null;
        if(this.state.post != null){
            const tenPosts = this.state.post.splice(0, 10);
            posts = tenPosts.map(post =>{
                return <PostPreview key={post.id} title={post.title} body={post.body}/>
            }); 
        }
        return (
            <>
                <BrowserRouter>
                    <Navbar login={this.loginHnadler} />
                    <Header title='Blog Post' />
                    <Routes>
                        <Route>
                            <Route path='/' element={<Home>{posts}</Home>} />
                            {/* as a childeren props embed all the postPreview component.. */}
                            <Route path='/about' element={<About />} />
                            <Route path='/contact' element={<Contact />} />
                            <Route path='/post' element={<SimplePost />} />
                            <Route path='/*' element={<Navigate to='/' />} />
                        </Route>
                    </Routes>
                    <Footer />
                </BrowserRouter>

            </>
        )
    }

}





























