// import React, {Component} from 'react';

// export default class ComponentDidMount extends Component{
//     constructor(){
//         super();
//         console.log('constructor');
//     }

//     componentDidMount(){
//         console.log('Component did Mount');
//     }
//     render(){
//         console.log('render');
//         return(
//             <div>

//             </div>
//         )
//     }
// }




//when the Component is updating the componentDidMount is not run run only render method. because componentDidMount method is  run when the component is Mount(create..)...ex--
import React, {Component} from 'react';

export default class ComponentDidMount extends Component{
    constructor(){
        super();
        console.log('constructor');
        this.state = {
            name: 'Anurag Mourya',
        }
    }

    componentDidMount(){
        console.log('Component did Mount');
    }
    render(){
        console.log('render');
        return(
            <div>
                {this.state.name}
                {/* form update the name */}

            <button onClick={()=>this.setState({name: 'Amit Kurmar',})}>Update Name</button>
            </div>
        )
    }
}