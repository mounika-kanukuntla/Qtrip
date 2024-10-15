import { Link } from "react-router-dom"
import "../Styles/Style.css"
export default function Login(){
    return(
        <div class="body">
        <div class="header"></div>
        <div class="container">
            
        <form action="" class="form">
        <h1 class="login">Login</h1>
            <div className="contain1"><label htmlFor="">UserName</label><input type="text" required id="username"/></div>
            <div className="contain1"><label htmlFor="">Password</label><input type="password" required id="password"/></div>
            <button class="but" onClick={validate}>Login</button>
            <br/>
            <p class="link">Don't Have an account?<Link to="/register"><a href="">Register Here</a></Link></p>
        </form>
        </div>
        </div>
    )
    function validate(){
        let uname=document.getElementById("username").value
        let pass=document.getElementById("password").value
        if(uname===window.localStorage.getItem("UserName")&& pass===window.localStorage.getItem("Password")){
            window.open("/webpage")
        }
        else{
            alert("Invalid login credentials")
        }
    }
}