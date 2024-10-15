import React, { useEffect, useState } from 'react';
import Part1 from '../../Components/Part1';
import Part4 from '../../Components/Part4'
import { Link } from 'react-router-dom';
import "../../Styles/Style.css"

export default function Bengaluru(){
    let [state,setState]=useState([])
    useEffect(()=>{
        fetch("https://content-qtripdynamic-qa-backend.azurewebsites.net//api/v1/adventures?city=bengaluru").then(x=>x.json()).then(x=>setState(x)).catch(()=>console.log("Failed to fetch"))
    },[])    
    return(
        <>
        <Part1/>
        <div className="bmain">
            <div className="bdiv1">
                <h1 style={{color:"black"}}>Explore all adventures</h1>
                <p id="head">Here's a list of places that you can explore in city</p>
                <div className="bdiv11">
                    <label htmlFor="">Filters </label>
                    <div className="bdiv111">
                        <select name=""  className='tab'>
                            <option>Filter by Duration (Hours)</option>
                        </select>
                        <div className='cleardiv'>Clear</div>
                    </div>
                    <div className="bdiv112">
                        <select name=""  className='tab'>
                            <option value="">Add Category</option>
                        </select>
                        <div className='cleardiv'>Clear</div>
                    </div>
                    <div className="bdiv113">
                        <input type="text" placeholder='Search adventures' className='tab'/>
                        <div className='cleardiv'>Clear</div>
                    </div>
                </div>
            </div>


<div class="bdiv2">
    {state.map(x=>{
        return(
            <Link to={"/"+x.id}><div class="bdcard" key={x.id}>
            <img src={x.image} alt="bangalore"/>
            <div className="bdcardiv">
                <h5 className='h51'>{x.name}</h5>
                <p className='p2'>₹{x.costPerHead}</p>
                </div>
                <div className='bdcardiv'>
                    <h5 className='h5'>Duration</h5>
                    <span className='p3'>{x.duration} Hours</span>
                </div>
                <div className="p1">{x.category}</div>
        </div></Link>
        )
    })}
</div>
             {/* <div class="bdiv2">
           <Link to="/bengaluru/party"> <div class="bdcard">
                <img src="https://images.pexels.com/photos/837745/pexels-photo-837745.jpeg?auto=compress&cs=tinysrgb&h=650&w=940"/>
                <div className='bdcardiv'>
                <h5 class="h51">Niaboy town</h5>
                <p class="p2">₹4003</p>
                </div>
                <div className='bdcardiv'>
                <h5 class="h5">Duration</h5>
                <span class="p3">6 Hours</span>
                </div>
                <div class="p1">Party</div>
                        </div></Link>

            <Link to="/bengaluru/cycling"><div class="bdcard">
                <img src="https://images.pexels.com/photos/3408744/pexels-photo-3408744.jpeg?auto=compress&cs=tinysrgb&h=650&w=940"/>
                <div className='bdcardiv'>
                <h5 class="h51">Fort Sionnnn</h5>
                <p class="p2">₹2686</p>
                </div>
                <div className='bdcardiv'>
                <h5 class="h5">Duration</h5>
                <span class="p3">9 Hours</span>
                </div>
                <div class="p1">Cycling</div>
                        </div></Link>
            </div> */}


        </div> 

        <Part4/>
        </>
    )
}

