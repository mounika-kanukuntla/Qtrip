
import React, { useEffect, useState } from 'react';
import Part1 from '../../Components/Part1';
import Part4 from '../../Components/Part4'
import "../../Styles/Style.css"

export default function Newyork(){
    let [state,setState]=useState([])
    useEffect(()=>{
        fetch("https://content-qtripdynamic-qa-backend.azurewebsites.net//api/v1/adventures?city=new-york").then(x=>x.json()).then(x=>setState(x)).catch(()=>console.log("Failed to fetch"))
    })    
    return(
        <>
        <Part1/>
        <div class="bmain">
            <div class="bdiv1">
                <h1>Explore all adventures</h1>
                <p>Here's a list of places that you can explore in city</p>
                <div class="bdiv11">
                    <label htmlFor="">Filters </label>
                    <div class="bdiv111">
                        <select name=""  className='tab'>
                            <option>Filter by Duration (Hours)</option>
                        </select>
                        <div className='cleardiv'>Clear</div>
                    </div>
                    <div class="bdiv112">
                        <select name=""  className='tab'>
                            <option value="">Add Category</option>
                        </select>
                        <div className='cleardiv'>Clear</div>
                    </div>
                    <div class="bdiv113">
                        <input type="text" placeholder='Search adventures' className='tab'/>
                        <div className='cleardiv'>Clear</div>
                    </div>
                </div>
            </div>


            <div class="bdiv2">
    {state.map(x=>{
        return(
            <div class="bdcard">
                    <img src={x.image} alt="newyork"/>
                    <div className="bdcardiv">
                        <h5 className='h51'>{x.name}</h5>
                        <p className='p2'>₹{x.costPerHead}</p>
                        </div>
                        <div className='bdcardiv'>
                            <h5 className='h5'>Duration</h5>
                            <span className='p3'>{x.duration} Hours</span>
                        </div>
                        <div className="p1">{x.category}</div>
                </div>
        )
    })}
</div>
        </div>
        <Part4/>
        </>
    )
}

