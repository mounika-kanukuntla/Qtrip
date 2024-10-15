import { useEffect } from "react";
import { useState } from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import Part1 from "../../Components/Part1";
import Part4 from "../../Components/Part4";
import "../../Styles/Style.css"

export default function Shillbluff(){
      let [state,setState]=useState([])
      let [st,setst]=useState([])
      useEffect(()=>{
        fetch("https://content-qtripdynamic-qa-backend.azurewebsites.net//api/v1/adventures/detail?adventure=2757195090").then(x=>x.json()).then(x=>{setState(x)
            setst(x["images"])}).catch(()=>console.log("Failed to fetch"))
      },[])            
      return(
        <>
        <Part1/>
        <div className="head">
          <h1 style={{color:"black",paddingTop:"10px"}}>{state["name"]}</h1>
          <h4 style={{color:"rgba(0, 0, 0, 0.226)"}}>{state["subtitle"]}</h4>
          <div className="caro">
            <Carousel>
                {st.map((x,y)=>{
                    return(
                        <div className="img" key={y}>
                            <img src={x} alt="pic" style={{borderRadius:"0px"}}/>
                        
                        </div>
                    )
                })}
            </Carousel>

          </div>
          <hr/>
          <div className="about">
            <h5>About the Experience</h5>
            <p style={{fontSize:"15px",color:"black"}}>{state.content}</p>

          </div>
        </div>
        <Part4/>
        </>
      )
}