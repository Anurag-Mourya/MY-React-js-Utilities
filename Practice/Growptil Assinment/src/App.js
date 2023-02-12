import Navbar from "./components/Navbar";
import { BrowserRouter,Routes, Route} from "react-router-dom";
import Wallet from "./components/pages/Wallet";
import AddMoney from "./components/pages/AddMoney";
import Hambargar from "./components/pages/Hambargar";

export default function App() {
    return (
        <>
            <div>
                <BrowserRouter>
                <Navbar/>
                    <Routes>                     
                        <Route path="/" element={<Hambargar/>}/>
                        <Route path="/wallet" element={<Wallet/>}/>
                        <Route path="/addMoney" element={<AddMoney/>}/>
                    </Routes>
                </BrowserRouter>
              
            </div>

        </>
    )
}