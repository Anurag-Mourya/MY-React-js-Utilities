import React, { Component } from 'react';

export default class Props extends Component{
    constructor(props){
        super(props);
    }
   
    render(){
        const style = {
            color: 'red'
        }
        return(
            <>
                <div className='container card text-center'>
                    <h1 style={style}> Hii My name is {this.props.name} </h1> 
                    <h1 style={this.props.bgColor}> And my email is {this.props.email} </h1> 
                    
                </div>
            </>
        );
    };
}