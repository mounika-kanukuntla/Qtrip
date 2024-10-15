import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";


export default function Part2() {
    const navigate = useNavigate();
    const [search, updatedSearch] = useState("");

    const change = (e) => {
        updatedSearch(e.target.value);
    };

    useEffect(() => {
        if (search) {
            let Search = search.toLowerCase();
            if (Search.includes("bengaluru")) {
                navigate("/bengaluru");
            } else if (Search.includes("goa")) {
                navigate("/goa");
            }
            else if (Search.includes("kolkata")) {
                navigate("/kolkata");
            }
            else if (Search.includes("singapore")) {
                navigate("/singapore");
            }
            else if (Search.includes("malaysia")) {
                navigate("/malaysia" );
            }
            else if (Search.includes("bangkok")) {
                navigate("/bangkok");
            }
            else if (Search.includes("newyork")) {
                navigate("/new-york" );
            }
            else if (Search.includes("paris")) {
                navigate("/paris" );
            }
            else if (Search.includes("niaboytown")) {
                navigate("/2447910730" );
            }
            else if (Search.includes("la anrncast")) {
                navigate("/7938812489" );
            }
            else if (Search.includes("fort sionnnn")) {
                navigate("/1773524915");
            }
            else if (Search.includes("bageorge")) {
                navigate("/2260150453");
            }
            else if (Search.includes("fort shilbluff")) {
                navigate("/2757195090");
            }
            else if (Search.includes("shiwood")) {
                navigate("/3727396712");
            }
            else if (Search.includes("stonelumhauk")) {
                navigate("/1921387712");
            }
            else if (Search.includes("east vyfolk")) {
                navigate("/2211420097");
            }
            else if (Search.includes("wooddaux")) {
                navigate("/0355034513");
            }
        
    }});

    return (
        <div id="d1">
            <h1 id="heading">Welcome to QTrip</h1>
            <p id="para">Explore the world with fantastic places to venture around</p>
            <input onChange={change} type="search" id="ip1" placeholder="Search Here..."/>
        </div>
    );
}

