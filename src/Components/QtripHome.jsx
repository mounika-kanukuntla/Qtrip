import React from "react";
import Part1 from "./Part1.jsx"
import Part2 from "./Part2.jsx"
import Part3 from "./Part3.jsx";
import Part4 from "./Part4.jsx"
// import data from "./data.jsx"
import "../Styles/App.css"
export default class Qtrip extends React.Component{
     render(){
        return(
            <>
            <Part1></Part1>
            <Part2></Part2>
            {/* <div style={{display:"flex",flexWrap:"wrap",justifyContent:"space-around",marginTop:"10px"}}>
            {data.map(x=>{
                return(
                <Part3 imgSrc={x.img} altName={x.alt} head={x.head} para={x.para} path={x.path}></Part3>)
            })}
            </div> */}
            <div style={{display:"flex",flexWrap:"wrap",justifyContent:"space-around",marginTop:"10px"}}><Part3></Part3></div>
            <Part4></Part4>
            </>
        )
     }
}


