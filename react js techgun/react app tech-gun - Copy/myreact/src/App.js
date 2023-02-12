// import React from 'react'
// import Navbar from './Components/Navbar';
// import Home from './Components/Home';
// import Header from './Components/Header';
// import About from './Components/About';
// import Contact from './Components/Contact';
// import SimplePost from './Components/SimplePost';
// import Footer from './Components/Footer';

// // import Home from './Components/Home';
// import {
//     BrowserRouter,
//     Routes,
//     Route,
// } from "react-router-dom";
// export default function () {
//     return (


//         <>

//             <BrowserRouter>
//                 <Navbar />
//                 <Header title='Blog Post'/>
//                 <Routes>
//                     <Route>
//                         <Route path='/' element={<Home />} />
//                         <Route path='/about' element={<About/>} />
//                         <Route path='/contact' element={<Contact />} />
//                         <Route path='/post' element={<SimplePost />} />

//                     </Route>
//                 </Routes>
//                 <Footer/>
//             </BrowserRouter>

//         </>
//     )
// }



// 2.  if any page url is not found then given the 404 page not found...

// import React from 'react'
// import Navbar from './Components/Navbar';
// import Home from './Components/Home';
// import Header from './Components/Header';
// import About from './Components/About';
// import Contact from './Components/Contact';
// import SimplePost from './Components/SimplePost';
// import Footer from './Components/Footer';

// // import Home from './Components/Home';
// import {
//     BrowserRouter,
//     Routes,
//     Route,
// } from "react-router-dom";
// export default function () {
//     return (


//         <>

//             <BrowserRouter>
//                 <Navbar />
//                 <Header title='Blog Post'/>
//                 <Routes>
//                     <Route>
//                         <Route path='/' element={<Home />} />
//                         <Route path='/about' element={<About/>} />
//                         <Route path='/contact' element={<Contact />} />
//                         <Route path='/post' element={<SimplePost />} />
//                         {/* <Route path='/*' element={<h1 style={{textAlign: 'center'}}>404 Not Found.</h1>} /> */}
//                         <Route path='/*' element={<h1 style={{textAlign: 'center'}}>404 Not Found.</h1>} />

//                     </Route>
//                 </Routes>
//                 <Footer/>
//             </BrowserRouter>

//         </>
//     )
// }



// 3. if any page is not found then redirect to other page...


// import React from 'react'
// import Navbar from './Components/Navbar';
// import Home from './Components/Home';
// import Header from './Components/Header';
// import About from './Components/About';
// import Contact from './Components/Contact';
// import SimplePost from './Components/SimplePost';
// import Footer from './Components/Footer';

// import {
//     BrowserRouter,
//     Routes,
//     Route,
//     Navigate,
// } from "react-router-dom";
// export default function () {
//     return (


//         <>

//             <BrowserRouter>
//                 <Navbar />
//                 <Header title='Blog Post'/>
//                 <Routes>
//                     <Route>
//                         <Route path='/' element={<Home />} />
//                         <Route path='/about' element={<About/>} />
//                         <Route path='/contact' element={<Contact />} />
//                         <Route path='/post' element={<SimplePost />} />

//                         {/* if any page is not found then redirect to home page.... */}
//                         <Route path='/*' element={ <Navigate to='/' />} />


//                     </Route>
//                 </Routes>
//                 <Footer/>
//             </BrowserRouter>

//         </>
//     )
// }



// 4. if any page is not found then redirect to other page.....


import Navbar from './Components/Navbar';
import Home from './Components/Home';
import Header from './Components/Header';
import About from './Components/About';
import Contact from './Components/Contact';
import SimplePost from './Components/SimplePost';
import Footer from './Components/Footer';
import React, {Component} from 'react';

import {
    BrowserRouter,
    Routes,
    Route,
    Navigate,
} from "react-router-dom";
export default class App extends Component{
    constructor(props){
        super(props);
        this.setState = {

        }
    }
    loginHnadler = (e) => {
        e.alert();
    }
    render() {
    return (
        <>
            <BrowserRouter>
                <Navbar login={this.loginHnadler}/>
                <Header title='Blog Post' />
                <Routes>
                    <Route>
                        <Route path='/' element={<Home />} />
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












