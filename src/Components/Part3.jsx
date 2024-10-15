import { useEffect, useState } from "react"
import {Link} from "react-router-dom"
export default function Part3(){
    let [state,setState]=useState([])
    useEffect(()=>{
        fetch("https://content-qtripdynamic-qa-backend.azurewebsites.net//api/v1/cities").then(x=>x.json()).then(x=>setState(x)).catch((er)=>console.log("Failed to fetch"))
    },[])
  return(
    state.map((x,y)=>{
        return(
            <>
            <Link to={"/"+x.id}>
            <div className="namef" key={y}>
                <img src={x.image} alt="pic"/>
                <div className="name">
                        <h3>{x.city.toUpperCase()}</h3>
                        <p>{x.description}</p>
                </div>
                </div></Link>
              </>
        )
    })
  )
}
      