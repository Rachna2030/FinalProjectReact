import React from "react";
import {Link} from "react-router-dom";
import './About.css';



function About(){
    return(
        <div className="about">
            <h1><u>About us</u></h1>
            
       <p><b>our hospitals provide an excellent environment for both routine and specialized medical care. 
        They offer many facilities that cater to a wide range of healthcare needs, ensuring that patients receive the best possible treatment. 
        The doctors are highly skilled and experienced, often recognized as some of the best in their respective fields, providing top-notch medical expertise and compassionate care.
         Hospitals are well-equipped with modern medical technologies, including advanced diagnostic tools, surgical equipment, and intensive care units. 
         Additionally, they offer a variety of services such as emergency care, outpatient services,  and maternity care, all designed to meet the diverse needs of patients. 
         Hospitals are committed to delivering high-quality healthcare and ensuring patient well-being through their extensive facilities and dedicated medical professionals.
         </b> </p>
        
           <div className="next">
            <ul>
                <li><Link to ="/">our missions</Link></li>
                <li><Link to ="/">our history</Link></li>
            </ul>
           </div>
           
             
            </div>

    );
}
export default About;