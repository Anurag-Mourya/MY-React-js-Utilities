import React, {useState} from 'react';
const App = () =>{

    const date = new Date(2022, 5, 4, 14);
    const hours = date.getHours();



    let greeting = '';
    let styleColor = {};    
        if(hours>=0 && hours<=11){
        greeting = 'Good Morning';
        styleColor.color = 'green';
    }else if(hours>=12 && hours<=17){
         greeting = 'Good After Noon';
         styleColor.color = 'orange';
    }else{
        greeting = 'Good Night';
        styleColor.color = 'black';
     }
   

    

    
  return(
    <div>
        <h1>Hello Good Morning... <span style={styleColor}> {greeting}</span></h1>
    </div>
  );


};

export default App;