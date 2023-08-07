import React from 'react';
import './Toggle.css';

function Toggle() {
    return (
        <div className="Toggle">
            <p>Clicking on the button below should hide the blue circle. Clicking again should display it.</p>
            <div className="wrapper">
                <button>Show/Hide the circle!</button>
                <div className="blue-circle"></div>
            </div>
        </div>
    );
}

export default Toggle;