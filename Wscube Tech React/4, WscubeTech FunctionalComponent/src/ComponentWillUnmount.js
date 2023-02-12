import React, {Component} from 'react';

export default class ComponetWillUnmount extends Component{
    constructor(){
        super();
        this.state = {
            isShow: false,
        }
    }

  componentWillUnmount(){
    console.log('componentWillUnmount')
  }
    render(){
        return(
            <>        
            {/* if we are written here !this.state.isShow then the componentWillUnmount is triggerd.... */}
            { this.state.isShow ? 
            <div>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis, hic ducimus, dignissimos dolor cumque eum quidem accusamus porro et voluptatem nostrum, blanditiis quae! Necessitatibus nostrum est sequi voluptas ratione quis praesentium reprehenderit!
               
            </div> : ''}
            <button className='mt-4' onClick={this.toggleHandler}>Toggle</button>
            </>
 
        )
    }
}