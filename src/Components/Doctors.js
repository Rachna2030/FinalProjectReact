import React from 'react';

function Doctors() {
    return (
        <div className="doctors">
            <h1>Our Doctors</h1>
            <p>Meet our team of experienced and dedicated doctors.</p>
            <ul>
                <li>Dr. John Doe - Cardiologist</li>
                <li>Dr. Jane Smith - Pediatrician</li>
                <li>Dr. Emily Johnson - Dermatologist</li>
                <li>Dr. Michael Brown - Orthopedic Surgeon</li>
                <li>Dr. Sarah Davis - General Practitioner</li>
                {/* Add more doctors as needed */}
            </ul>
        </div>
    );
}

export default Doctors;
