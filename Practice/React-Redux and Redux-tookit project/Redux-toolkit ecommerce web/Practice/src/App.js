import Navbar from "./components/Navbar"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import AddedCart from  './components/pages/AddedCart';
import ShowCartItem from "./components/ShowCartItem";
export default function App() {
    return(
        <>
        <div>

            <BrowserRouter>
            <Navbar/>
            <Routes>
                <Route path="/" element={<ShowCartItem/>}/>
                <Route path="/addedCart" element={<AddedCart/>}/>
            </Routes>
            </BrowserRouter>   

       </div>
        </>
    )
}