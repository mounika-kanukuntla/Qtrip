import { Component } from "react";
import { BrowserRouter ,Routes,Route } from "react-router-dom";
import Bengaluru from "./Pages/Bangalore/Bangalore";
import Goa from "./Pages/Goa/Goa"
import Niaboy from "./Pages/Bangalore/Niaboytown";
import Fort from "./Pages/Bangalore/Fort";
import Qtrip from "./Components/QtripHome"
import Error from "./Pages/Error";
import Kolkata from "./Pages/Kolkata/Kolkata";
import Singapore from "./Pages/Singapore/Singapore";
import Malaysia from "./Pages/Malaysia/Malaysia";
import Bangkok from "./Pages/Bangkok/Bangkok";
import Newyork from "./Pages/Newyork/Newyork";
import Paris from "./Pages/Paris/Paris";
import Wooddaux from "./Pages/Bangalore/Wooddoux";
import Harbour from "./Pages/Bangalore/Harbour";
import Stonelum from "./Pages/Bangalore/Stonelum";
import Anrncast from "./Pages/Bangalore/Anrncast";
import Shillbluff from "./Pages/Bangalore/Shillbluff";
import Vyfolk from "./Pages/Bangalore/Vyfolk";
import Shiwood from "./Pages/Bangalore/Shiwood";
import Login from "./Pages/Login";
import Register from "./Pages/Register";
export default class Router extends Component{
            render(){
                return( 
                   <BrowserRouter>
                   <Routes>
                    <Route path="/" element={<Qtrip/>}></Route>
                    <Route path="/bengaluru" element={<Bengaluru/>}></Route>
                    <Route path="/goa" element={<Goa/>}></Route>
                    <Route path="/kolkata" element={<Kolkata/>}/>
                    <Route path="/singapore" element={<Singapore/>}/>
                    <Route path="/malaysia" element={<Malaysia/>}/>
                    <Route path="/bangkok" element={<Bangkok/>}/>
                    <Route path="/new-york" element={<Newyork/>}/>
                    <Route path="/paris" element={<Paris/>}/>
                    <Route path="/2447910730" element={<Niaboy/>}></Route>
                    <Route path="/1773524915" element={<Fort/>}></Route>
                    <Route path="/0355034513" element={<Wooddaux/>}/>
                    <Route path="/2260150453" element={<Harbour/>}/>
                    <Route path="/1921387712" element={<Stonelum/>}/>
                    <Route path="/7938812489" element={<Anrncast/>}/>
                    <Route path="/2757195090" element={<Shillbluff/>}/>
                    <Route path="/3727396712" element={<Shiwood/>}/>
                    <Route path="/2211420097" element={<Vyfolk/>}/>
                    <Route path="/login" element={<Login/>}/>
                    <Route path="/register" element={<Register/>}/>
                    <Route path="*" element={<Error/>}/>
                   </Routes>
                   </BrowserRouter>
                )
            }
}