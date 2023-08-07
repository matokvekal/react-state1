import React from 'react';
import './Record.css';

function Record() {
    return (
        <div className="Record">
            <p>Clicking on the button should display the date and time of the last click in the blue box.</p>
            <div className="wrapper">
                <button className="recorder">Click Here</button>
            </div>
            <div className="blue-box">
                {/* Date and time should be displayed here */}
            </div>
        </div>
    );
}

export default Record;