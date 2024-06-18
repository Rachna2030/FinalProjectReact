import React from "react";
import './Navbar.css';
import LOGO from './LOGO.png';
import {Link} from "react-router-dom";

function Navbar(){
    
    return(
       
        <div className="navbar">
            <div className="logo">
                   <img src={LOGO} alt="Logo" className="logo" />
                   </div>
           
            <ul>
                <li><Link to ="Homepage">Home Page</Link></li>
                <li><Link to ="/About">About</Link></li>
                <li><Link to ="/Departments">Departments</Link></li>
                <li><Link to ="/Doctors">Doctors</Link></li>
                <li><Link to ="/Appointment">Appointment</Link></li>
                <li><Link to ="/">Admin</Link></li>
                <li><Link to ="/Services">Services</Link></li>
                <li><Link to ="/Activities">Activities</Link></li>
                <li><Link to ="/Payment">Payment</Link></li>
                <li><Link to ="/Feedback">Feedback</Link></li>
               

               
                
            </ul>
     
        </div>
     

        
         
       
    );

}
export default Navbar;