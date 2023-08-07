import React from 'react';
import './ColorPicker.css';

function ColorPicker() {
    return (
        <div className="ColorPicker">
            <p>Clicking on one of the buttons should paint the "TEXT" in the color it represents.</p>
            <div className="buttons">
                <button>Red</button>
                <button>Green</button>
                <button>Blue</button>
            </div>
            <div className="text">
                TEXT
            </div>
        </div>
    );
}

export default ColorPicker;