import React, { Component } from 'react';
import Props from './Components/Props';

class App extends Component{
    constructor(props){
        super(props);
        this.state = {
            mens: [
                {
                    name :'Anurag Mourya',
                    email: '6grish@gmail.com',
                    fontSize: '30px',
                },
                {
                    backgroundColor : 'black',
                    color: 'white',
                    fontSize: '50px'
                }
            ]
        }
    }
    render(){
        const mapmens = this.state.mens.map((indexOfmens, index)=>{
            return <Props name={indexOfmens.name} email={indexOfmens.email} key={index}/>

        });
        return(
            <>
            {/* <Props bgColor={this.state.mens[1]} name={this.state.mens[0].name} email={this.state.mens[0].email}/>
             */}

             {mapmens}
            </>
        )
    }
}

export default App