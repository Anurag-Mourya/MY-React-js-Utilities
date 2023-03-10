// import React from 'react';
// import { Link } from 'react-router-dom';

// export default function Navbar() {
//   return (
//     <nav className="navbar navbar-expand-lg navbar-light bg-light">
//     <Link className="navbar-brand" to="/">Navbar</Link>
//     <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
//       <span className="navbar-toggler-icon"></span>
//     </button>
//     <div className="collapse navbar-collapse" id="navbarNavDropdown">
//       <ul className="navbar-nav">
//         <li className="nav-item active">
//           <Link className="nav-link" to="/">Home <span className="sr-only">(current)</span></Link>
//         </li>
//         <li className="nav-item">
//           <Link className="nav-link" to="about">About</Link>
//         </li>
//         <li className="nav-item">
//           <Link className="nav-link" to="contact">Contact</Link>
//         </li>

//         <li className="nav-item">
//           <Link className="nav-link" to="post">Simple Post</Link>
//         </li>
//       </ul>
//     </div>
//   </nav>
//   )
// }



// 3. How to handle conditionally react router dom.... with login btn....


import React from 'react';
import { Link } from 'react-router-dom';

export default function Navbar(props) {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
    <Link className="navbar-brand" to="/">Navbar</Link>
    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNavDropdown">
      <ul className="navbar-nav">
        <li className="nav-item active">
          <Link className="nav-link" to="/">Home <span className="sr-only">(current)</span></Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="about">About</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="contact">Contact</Link>
        </li>

        <li className="nav-item">
          <Link className="nav-link" to="post">Simple Post</Link>
        </li>

        <li className='nav-item'>
          <Link className="nav-link" to='/' onClick={ props.loginHnadler }>Login</Link>
        
        </li>
      </ul>
    </div>
  </nav>
  )
}

