
// // Binding...

// //1.1 Bind in constructor function----When state is not given inside the event function.. we can remove the this inside the bind when this is not given inside the event function...

// import React, {Component} from 'react';
// export default class BindApp extends Component{
//     constructor(props){
//         super(props);
//     //    this.changeNameHnadler = this.changeNameHnadler.bind(this);
   

//     }

//     changeNameHnadler(){
//         console.log('Click Happen');
//     }
//     render(){
      
//         return(
//             <>
//             <button onClick={this.changeNameHnadler}>Change Name</button>
//             </>
//         )
//     }
// }



//1.2 Bind in constructor function----When state is given inside the event function.... 

// import React, {Component} from 'react';
// export default class BindApp extends Component{
//     constructor(props){
//         super(props);
//         this.state = {
//             name: 'Anurag Mourya',
//         }
//        this.changeNameHnadler = this.changeNameHnadler.bind(this);
//     }

//     changeNameHnadler(){
//       this.setState({name: 'Amit kumar'});
//       console.log(this.state);
//     }
//     render(){
      
//         return(
//             <>
//             <h1>{this.state.name}</h1>
//             <button onClick={this.changeNameHnadler}>Change Name</button>
//             </>
//         )
//     }
// }


//2 Bind with arrow function----

// import React, {Component} from 'react';
// export default class BindApp extends Component{
//     constructor(props){
//         super(props);
//         this.state = {
//             name: 'Anurag Mourya',
//         }
//     }

//     changeNameHnadler=()=>{
//       this.setState({name: 'Amit kumar'});
//       console.log(this.state);
//     }
//     render(){
      
//         return(
//             <>
//             <h1>{this.state.name}</h1>
//             <button onClick={this.changeNameHnadler}>Change Name</button>
//             </>
//         )
//     }
// }

 
// 3. Binding inside the render function or inline binding...
// import React, {Component} from 'react';
// export default class BindApp extends Component{
//     constructor(props){
//         super(props);
//         this.state = {
//             name: 'Anurag Mourya',
//         }
//     }

//     changeNameHnadler(){
//       this.setState({name: 'Amit kumar'});
//       console.log(this.state);
//     }
//     render(){
      
//         return(
//             <>
//             <h1>{this.state.name}</h1>
//             <button onClick={this.changeNameHnadler.bind(this)}>Change Name</button>
//             </>
//         )
//     }
// }




// 4.Arrow function in render or inline arrow function//
import React, {Component} from 'react';
export default class BindApp extends Component{
    constructor(props){
        super(props);
        this.state = {
            name: 'Anurag Mourya',
        }
    }

    changeNameHnadler(){
      this.setState({name: 'Amit kumar'});
      console.log(this.state);
    }
    render(){
      
        return(
            <>
            <h1>{this.state.name}</h1>
            <button onClick={()=>this.changeNameHnadler()}>Change Name</button>
            </>
        )
    }
}