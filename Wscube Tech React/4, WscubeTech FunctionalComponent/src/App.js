import React from "react";
// import Navbar from "./Components/Navbar";
// import About from './Components/About';
import ComponentDidMount from "./Components/ComponentDidMount";
// import ReactLifecycleMethod from './Components/ReactLifecycleMethod';
import ComponetWillUnmount from "./ComponentWillUnmount";
export default function App(){
    return(
        <>
        {/* <Navbar/> */}
        {/* <About/> */}
        {/* <ReactLifecycleMethod/> */}
        {/* <ComponentDidMount/> */}
        <ComponetWillUnmount/>
        </>
    )
}//

// conclusion the ComponentDidMount function call when all the dom is ready and displed on the screen...ex-- call apis