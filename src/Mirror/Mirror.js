import React from 'react';
import './Mirror.css';

function Mirror() {
    return (
        <div className="Mirror">
            <p>The blue box should always display the exact same content as appeared in the input.</p>
            <div className="wrapper">
                <input />
                <div className="blue-box">
                    {/* The mirrored text should be displayed here */}
                </div>
            </div>
        </div>
    );
}

export default Mirror;