import React, { Component } from 'react';
import axios from 'axios';

export class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      postjson: [],//can not use null...
    }
  }


  // axios library is a promise based http clint based library help of this we can hit the HTTP request of any api end point. mostally use to perform current operation
  // Why we use axios libray---1. It is by default work in json formet..(in featch api we are changed data in json forment) 2. HTTP request is by default like get and post 3. write less code (in fetch api we are using two then)
  componentDidMount() {
    axios.get('http://jsonplaceholder.typicode.com/posts')
      .then((responce) => {
        // console.log(responce.data);
        this.setState({postjson: responce.data }, () => {
        });
        console.log(this.state.postjson[1].body)//for console a speciphic line..
      })
      .catch((error) => {
        console.log(error);
      })
  }

  //inside the render method with creationg a variable. data ..
//   render() {
//     const data = this.state.postjson.map((index)=>{
//       return <p>{index.title}</p>
//     })
//     return (
//       <div>
//         <div>
//         {data}
//         </div>
//       </div>
//     )
//   }
// }

render() {
 
  return (
    <div className='container my-4'>
      <div className="row">
        <div className="col-md-6 m-auto text-center"> {this.state.postjson.map((index, userId)=>{
    return <p key={userId}><b>Id: {index.id}</b><br/> <b className='text-danger'> Title: {index.title}</b><br/> <b> Body:</b> {index.body} <br/></p> 
  })}</div>
      </div>
    </div>
  )
}
}


export default App