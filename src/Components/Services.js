import React from "react";
import './Services.css';

function Services() {
    return (
        <div className="services">
            <h1>Our Services</h1>
            <p1>We run a general family practice, and have a clinical focus in Female and kids Wellness, 
                Digestive health, Environmental health, Skin health and Allergies.</p1>
            <br></br>
            <br></br>
            <div className="concern">
            <h3>COMMON CONCERNS</h3>
            <p2>If you're curious about how our team can assist you, here are some examples of
                 issues we've consulted on and treated in the past.</p2>
            <ol>
                <li>Gastrointestinal diseases (IBS, IBD (Colitis/Crohns), Reflux, Leaky Gut, Bloating, Constipation)</li>
                <li>Hormone imbalance</li>
                <li>Sleep issues/insomnia</li>
                <li>Female disorders</li>
                <li>Anxiety and depression</li>
                <li>Healthy weight</li>
                <li>kids health checkups</li>
                <li>full body checkup</li>   
                <li>yoga,health fitness classes</li>
            </ol>
            </div>
            <br></br>
            <br></br>
            <div className="more-services">
                <h2>Available Services</h2>
                <ul>
                    <li>General Checkup</li>
                    <li>Eye Checkup</li>
                    <li>Heart Checkup</li>
                    <li>Diabetes Checkup</li>
                   <li>Medicines</li>
                    <li>Email contact</li>
                    <li>Individualized treatment, including nutritional, lifestyle, exercise, stress management plans and support</li>
                </ul>
        </div>
        </div>
        
    );
}
export default Services;