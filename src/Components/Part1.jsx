import React from "react";
import { Link } from "react-router-dom";
export default class Part1 extends React.Component{
    render(){
        return(
            <>
            <nav>
                <ul>
                    <li><a href="">Qtrip</a></li>
                    <div id="ul1">
                        <ul>
                            <li><Link to="/"><button id="bb1"><a href="">Home</a></button></Link></li>
                            <li><button id="bb2"><a href="">Reservations</a></button></li>
                            <li><Link to="/login"><button id="b1" ><a id="b1" href="">Login Here</a></button></Link></li>
                            <li><Link to="/register"><button id="b2"><a id="b2" href="">Register</a></button></Link></li>
                        </ul>
                    </div>
                </ul>
            </nav>
            </>
        )
    }
}