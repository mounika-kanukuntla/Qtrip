
import React, { useEffect, useState } from 'react';
import Part1 from '../../Components/Part1';
import Part4 from '../../Components/Part4'
import "../../Styles/Style.css"

export default function Goa(){
    let [state,setState]=useState([])
    useEffect(()=>{
        fetch("https://content-qtripdynamic-qa-backend.azurewebsites.net//api/v1/adventures?city=goa").then(x=>x.json()).then(x=>setState(x)).catch(()=>console.log("Failed to fetch"))
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
                    <img src={x.image} alt="goa"/>
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
            {/* <div class="bdiv2">
            <div class="bdcard">
                            <img src="https://images.pexels.com/photos/258045/pexels-photo-258045.jpeg?auto=compress&cs=tinysrgb&h=650&w=940"/>
                            <div className='bdcardiv'>
                                <h5>Perthby</h5>
                                <p><i class="fa-solid fa-indian-rupee-sign"></i>4211</p>
                            </div>
                            <div className='bdcardiv'>
                                <h5>Duration</h5>
                                <p>8 Hours</p>
                            </div>
                            <div id="tdiv">Party</div>
                            

                        </div>

                        <div class="bdcard">
                            <img src="https://images.pexels.com/photos/2437297/pexels-photo-2437297.jpeg?auto=compress&cs=tinysrgb&h=650&w=940"/>
                            <div className='bdcardiv'>
                                <h5>Nesbridge</h5>
                                <p><i class="fa-solid fa-indian-rupee-sign"></i>902</p>
                            </div>
                            <div className='bdcardiv'>
                                <h5>Duration</h5>
                                <p>4 Hours</p>
                            </div>
                            <div id="tdiv">Cycling</div>
                        </div>
            </div>
             */}


        </div>
        <Part4/>
        </>
    )
}

