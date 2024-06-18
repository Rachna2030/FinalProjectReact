import React from 'react';
import receptionhall from './receptionhall.png';
import roomshs from './roomshs.png';
import yoga from './yoga.png';
import medicines from './medicines.png';
import operation from './operation.png';
import old from './old.png';
import kidd from './kidd.png';
// import './Departments.css'; 


function Departments() {
    return (
        <div className="departments">
            <h1>Welcome to Our Departments</h1>
            <p>Here you can Explore the various departments at our health hub.</p>
            
            <ul>
                <div className="yoga">
                <img src={yoga} className="yoga" alt="yoga"></img>
                <li><p><b>Yoga</b></p></li>
                </div>
                <div className="checkup">
                <img src={roomshs} className="checkup" alt="checkup"></img>
                <li><h3><b>Checkup</b></h3></li>
                </div>
                <div className="reception">
                <img src={receptionhall} className="reception" alt="reception"></img>
                <p>Reception Hall</p>
                </div>
                <img src={medicines} className="hall" alt="hall"></img>
                <li>Medicines</li>
                <img src={operation} className="hall" alt="hall"></img>
                <li>Operation  Theater</li>
                <img src={old} className="hall" alt="hall"></img>
                <li>Old Age Department</li>
                <img src={kidd} className="hall" alt="hall"></img>
                <li>kids Wellness</li>
                // Add more departments as needed
                
            </ul>
        </div>
    );
}

export default Departments; 


