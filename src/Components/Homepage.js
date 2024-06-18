import React from "react";
import './Homepage.css';
import page from './page.png';
import { Link } from "react-router-dom";

function Homepage(){
    return(
        <div className="home">
            <h2> 
                    <h2>Welcome to our Health Hub place,<br></br> here we provide you all kind of services<br></br> which related to your health fitness</h2>
                </h2>
            <img src={page} className="page" alt="page"></img>
            <div className="sign">
            <Link to ="/Signin">Signin</Link>
            </div>
            <div className="sin">
            <Link to ="/Signup">Signup</Link>
            
            </div>
        </div>
    )
}
export default Homepage;