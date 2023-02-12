import React, {Component} from 'react';

export default class Bind extends Component{
    constructor(){
        super();
        this.state = {

        }
    }
   
    render(){
        changeNameHnadler =()=>{
            this.setState({
                name: 'Amit Kumar'
            })
        }
        return(
            <>
               <div>{this.props.name}</div>
             
            </>
        )
    }
}