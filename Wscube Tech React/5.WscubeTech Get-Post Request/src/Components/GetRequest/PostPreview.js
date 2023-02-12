// // 3. 

// import React from 'react'

// export default function PostPreview() {
//     return (
//         <div>
//             <div className="post-preview">
//                 <a href="post.html">
//                     <h2 className="post-title">Failure is not an option</h2>
//                     <h3 className="post-subtitle">Many say exploration is part of our destiny, but its actually our duty to future generations.</h3>
//                 </a>
//                 <p className="post-meta">
//                     Posted by
//                     <a href="#!">Start Bootstrap</a>
//                     on July 8, 2022
//                 </p>
//             </div>
//         </div>
//     )
// }



// now to generate data dynamic..


// 3. 

import React from 'react'

export default function PostPreview(props) {
    return (
        <div>
            <div className="post-preview">
                <a href="post.html">
                    <h2 className="post-title">{props.title}</h2>
                    <h3 className="post-subtitle"> {props.body} </h3>
                </a>
            </div>
        </div>
    )
}

