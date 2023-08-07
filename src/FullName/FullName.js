import React from 'react';
import './FullName.css';

function FullName() {
    return (
        <div className="FullName">
            <p>
                Set the background of the input to <span className="valid">green</span> or <span className="invalid">red</span> to
                indicate whether the input contains a valid full name or not.<br />
                A valid full name must contain two words.
            </p>
            <div className="wrapper">
                <input />
            </div>
        </div>
    );
}

export default FullName;