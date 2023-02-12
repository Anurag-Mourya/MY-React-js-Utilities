import React, {Component} from 'react';
import Register from './Register';
import Login from './Login';


export default class Container extends Component{
    constructor(props){
        super(props);
        this.state = {
            name: null,
            email: null,
            password: null,
        }
    }

    submitHnadler = (e) =>{
        const name = e.target.name;
        const email = e.target.email;
        const password = e.target.password;
        this.setState({name,email,password});
        e.preventDefault();
    }

    render(){
        return(
            <div>
                {this.state.name === null && this.state.email === null && this.state.password === null ? <Register regSubmit={this.submitHnadler}/> : <Login/>}
            </div>
        );
    }
}