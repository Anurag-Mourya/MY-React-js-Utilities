import React from 'react'

const FunLifecycle = () => {

    // This is the component Did Mount...
    // useEffect(() => {
    
    // },[]);

    //This is the component Did Update...
    // useEffect(() => {
    
    // }, [user])//when the value of user is updated the component is updated...

    useEffect(() => {
      
    
      return () => {//return statement will return compnent did unmount.
        
      }
    }, [])
    
    
  return (
    <div>FunLifecycle</div>
  )
}

export default FunLifecycle